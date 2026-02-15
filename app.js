// ============================================
// 宇羲英文 Sight Word 字卡學習 App — Core Logic
// Dynamically supports any number of levels
// ============================================

(function () {
    'use strict';

    // ---- Level Config ----
    const LEVEL_CONFIG = {
        "Level 1": { icon: "🌟", desc: "最常見的字 (1-50)", color: "#fdcb6e" },
        "Level 2": { icon: "🎒", desc: "常見的字 (51-100)", color: "#74b9ff" },
        "Level 3": { icon: "📖", desc: "進階常見字 (101-150)", color: "#a29bfe" },
        "Level 4": { icon: "🏫", desc: "實用字 (151-200)", color: "#fd79a8" },
        "Level 5": { icon: "🚀", desc: "挑戰字 (201-250)", color: "#00b894" },
        "Level 6": { icon: "🏆", desc: "高手字 (251-300)", color: "#e17055" },
    };

    // Fallback for unknown levels
    const DEFAULT_CONFIG = { icon: "📚", desc: "", color: "#6c63ff" };

    // ---- State ----
    const state = {
        mode: 'sight', // 'sight' or 'phonics'
        currentLevel: null,
        currentWords: [],
        currentIndex: 0,
        isFlipped: false,
        knownWords: new Set(),
        retryWords: new Set(),
        streak: 0,
        progress: loadProgress(),
        muted: loadMuted(),
    };

    // ---- Data Helpers ----
    function getWordData() {
        return state.mode === 'phonics' ? PHONICS_WORDS : SIGHT_WORDS;
    }
    function getConfig() {
        return state.mode === 'phonics' ? PHONICS_CONFIG : LEVEL_CONFIG;
    }
    function getProgressKey() {
        return state.mode === 'phonics' ? 'yuxi-phonics-progress' : 'yuxi-sightwords-progress';
    }

    // ---- DOM References ----
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    const screens = {
        home: $('#screen-home'),
        study: $('#screen-study'),
        complete: $('#screen-complete'),
    };

    const els = {
        levelGrid: $('#level-grid'),
        totalLearned: $('#total-learned'),
        totalDetail: $('#total-detail'),
        btnBack: $('#btn-back'),
        studyLevelName: $('#study-level-name'),
        studyCounter: $('#study-counter'),
        studyProgressFill: $('#study-progress-fill'),
        flashcard: $('#flashcard'),
        cardContainer: $('#card-container'),
        cardWord: $('#card-word'),
        cardBackWord: $('#card-back-word'),
        cardMeaning: $('#card-meaning'),
        cardRule: $('#card-rule'),
        cardExampleEn: $('#card-example-en'),
        cardExampleZh: $('#card-example-zh'),
        btnSpeakFront: $('#btn-speak-front'),
        btnSpeakBack: $('#btn-speak-back'),
        btnRetry: $('#btn-retry'),
        btnGotIt: $('#btn-got-it'),
        completeSubtitle: $('#complete-subtitle'),
        statKnown: $('#stat-known'),
        statRetry: $('#stat-retry'),
        btnRetryWrong: $('#btn-retry-wrong'),
        btnGoHome: $('#btn-go-home'),
        streakBanner: $('#streak-banner'),
        starBurst: $('#star-burst'),
    };

    // ---- Initialization ----
    function init() {
        buildLevelCards();
        updateHomeScreen();
        bindEvents();
        bindTabEvents();
        // Sync mute button icon on load
        const muteBtn = $('#btn-mute');
        if (muteBtn) {
            muteBtn.textContent = state.muted ? '🔇' : '🔊';
            muteBtn.title = state.muted ? '開啟發音' : '關閉發音';
        }
    }

    // ---- Build Level Cards Dynamically ----
    function buildLevelCards() {
        const wordData = getWordData();
        const config = getConfig();
        const levels = Object.keys(wordData);
        els.levelGrid.innerHTML = '';

        levels.forEach((level) => {
            const cfg = config[level] || DEFAULT_CONFIG;
            const total = wordData[level].length;

            const card = document.createElement('div');
            card.className = 'level-card';
            card.setAttribute('data-level', level);
            card.style.setProperty('--level-color', cfg.color);

            card.innerHTML = `
        <div class="level-icon" style="background: linear-gradient(135deg, ${cfg.color}40, ${cfg.color})">${cfg.icon}</div>
        <div class="level-info">
          <div class="level-name">${level}</div>
          <div class="level-desc">${cfg.desc} — ${total} 個字</div>
          <div class="level-progress">
            <div class="progress-bar">
              <div class="progress-fill" data-level="${level}" style="width: 0%; background: linear-gradient(90deg, ${cfg.color}80, ${cfg.color})"></div>
            </div>
            <span class="progress-text" data-level-text="${level}">0/${total}</span>
          </div>
        </div>
      `;

            card.addEventListener('click', () => startLevel(level));
            els.levelGrid.appendChild(card);
        });

        // Update total
        const totalWords = Object.values(wordData).reduce((sum, arr) => sum + arr.length, 0);
        const label = state.mode === 'phonics' ? '個 Phonics 單字' : '個 Sight Words';
        els.totalDetail.textContent = `/ ${totalWords} ${label}`;
    }

    // ---- LocalStorage Progress ----
    function loadProgress() {
        try {
            const key = state ? getProgressKey() : 'yuxi-sightwords-progress';
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : {};
        } catch {
            return {};
        }
    }

    function saveProgress() {
        try {
            localStorage.setItem(getProgressKey(), JSON.stringify(state.progress));
        } catch (e) {
            console.warn('Failed to save progress:', e);
        }
    }

    function loadMuted() {
        try {
            return localStorage.getItem('yuxi-sightwords-muted') === 'true';
        } catch {
            return false;
        }
    }

    function saveMuted() {
        try {
            localStorage.setItem('yuxi-sightwords-muted', state.muted ? 'true' : 'false');
        } catch (e) { /* ignore */ }
    }

    function toggleMute() {
        state.muted = !state.muted;
        saveMuted();
        const btn = $('#btn-mute');
        if (btn) {
            btn.textContent = state.muted ? '🔇' : '🔊';
            btn.title = state.muted ? '開啟發音' : '關閉發音';
        }
        if (state.muted) {
            window.speechSynthesis?.cancel();
        }
    }

    function getLearnedCount(level) {
        return (state.progress[level] || []).length;
    }

    function getTotalCount(level) {
        const wordData = getWordData();
        return wordData[level]?.length || 0;
    }

    // ---- Home Screen ----
    function updateHomeScreen() {
        const wordData = getWordData();
        const levels = Object.keys(wordData);
        let totalLearned = 0;

        levels.forEach(level => {
            const learned = getLearnedCount(level);
            const total = getTotalCount(level);
            totalLearned += learned;

            const percentage = total > 0 ? (learned / total) * 100 : 0;

            const fill = document.querySelector(`.progress-fill[data-level="${level}"]`);
            const text = document.querySelector(`[data-level-text="${level}"]`);

            if (fill) fill.style.width = percentage + '%';
            if (text) text.textContent = `${learned}/${total}`;
        });

        els.totalLearned.textContent = totalLearned;
    }

    // ---- Navigation ----
    function showScreen(screenName) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[screenName].classList.add('active');

        // Scroll to top
        window.scrollTo(0, 0);
    }

    // ---- Start Level ----
    function startLevel(level) {
        state.currentLevel = level;
        state.currentIndex = 0;
        state.isFlipped = false;
        state.knownWords = new Set();
        state.retryWords = new Set();
        state.streak = 0;

        const wordData = getWordData();
        const allWords = wordData[level] || [];
        const learnedSet = new Set(state.progress[level] || []);

        // Unlearned first, then learned
        const unlearned = allWords.filter(w => !learnedSet.has(w.word));
        const learned = allWords.filter(w => learnedSet.has(w.word));

        state.currentWords = [...shuffle(unlearned), ...shuffle(learned)];

        els.studyLevelName.textContent = level;
        showScreen('study');
        showCard();
    }

    // ---- Show Card ----
    function showCard() {
        if (state.currentIndex >= state.currentWords.length) {
            showComplete();
            return;
        }

        const word = state.currentWords[state.currentIndex];

        state.isFlipped = false;
        els.flashcard.classList.remove('flipped', 'swipe-left', 'swipe-right');

        // Front: highlight pattern for phonics, plain text for sight words
        if (state.mode === 'phonics' && word.pattern) {
            els.cardWord.innerHTML = highlightPattern(word.word, word.pattern);
        } else {
            els.cardWord.textContent = word.word;
        }

        els.cardBackWord.textContent = word.word;
        els.cardMeaning.textContent = word.meaning;
        els.cardExampleEn.textContent = word.example;
        els.cardExampleZh.textContent = word.exampleMeaning;

        // Show phonics rule on back
        if (state.mode === 'phonics' && word.rule) {
            els.cardRule.textContent = word.rule;
            els.cardRule.style.display = '';
        } else {
            els.cardRule.style.display = 'none';
        }

        const total = state.currentWords.length;
        els.studyCounter.textContent = `${state.currentIndex + 1}/${total}`;

        const pct = (state.currentIndex / total) * 100;
        els.studyProgressFill.style.width = pct + '%';

        speakWord(word.word);
    }

    // ---- Highlight Phonics Pattern ----
    function highlightPattern(word, pattern) {
        if (pattern.includes('_')) {
            // Magic E split pattern: e.g., "a_e"
            const vowel = pattern.split('_')[0];
            let html = word;
            // Highlight the vowel (first occurrence)
            html = html.replace(vowel, `<span class="ph-hl">${vowel}</span>`);
            // Highlight trailing 'e'
            html = html.replace(/e$/, '<span class="ph-hl">e</span>');
            return html;
        }
        // Regular pattern: highlight the pattern in the word
        const idx = word.indexOf(pattern);
        if (idx === -1) return word;
        return word.substring(0, idx) +
            `<span class="ph-hl">${pattern}</span>` +
            word.substring(idx + pattern.length);
    }

    // ---- Flip Card ----
    function flipCard() {
        state.isFlipped = !state.isFlipped;
        els.flashcard.classList.toggle('flipped', state.isFlipped);

        if (state.isFlipped) {
            const word = state.currentWords[state.currentIndex];
            setTimeout(() => speakWord(word.example), 400);
        }
    }

    // ---- Mark: Got it ----
    function markKnown() {
        const word = state.currentWords[state.currentIndex];
        state.knownWords.add(word.word);
        state.retryWords.delete(word.word);
        state.streak++;

        if (!state.progress[state.currentLevel]) {
            state.progress[state.currentLevel] = [];
        }
        if (!state.progress[state.currentLevel].includes(word.word)) {
            state.progress[state.currentLevel].push(word.word);
            saveProgress();
        }

        showStars(els.btnGotIt);

        if (state.streak === 3) {
            showStreakBanner('🔥 連續 3 個答對！');
        } else if (state.streak === 5) {
            showStreakBanner('⭐ 太厲害了！連續 5 個！');
        } else if (state.streak === 10) {
            showStreakBanner('🏆 超級棒！連續 10 個！');
        } else if (state.streak > 0 && state.streak % 10 === 0) {
            showStreakBanner(`🎯 連續 ${state.streak} 個！不可思議！`);
        }

        animateAndNext('right');
    }

    // ---- Mark: Retry ----
    function markRetry() {
        const word = state.currentWords[state.currentIndex];
        state.retryWords.add(word.word);
        state.knownWords.delete(word.word);
        state.streak = 0;

        if (state.progress[state.currentLevel]) {
            state.progress[state.currentLevel] = state.progress[state.currentLevel].filter(w => w !== word.word);
            saveProgress();
        }

        animateAndNext('left');
    }

    // ---- Animate & Next ----
    function animateAndNext(direction) {
        els.flashcard.classList.add(direction === 'left' ? 'swipe-left' : 'swipe-right');

        setTimeout(() => {
            state.currentIndex++;
            showCard();
        }, 350);
    }

    // ---- Complete Screen ----
    function showComplete() {
        const level = state.currentLevel;
        els.completeSubtitle.textContent = `你把 ${level} 的字都練習完了`;
        els.statKnown.textContent = state.knownWords.size;
        els.statRetry.textContent = state.retryWords.size;

        els.btnRetryWrong.style.display = state.retryWords.size > 0 ? '' : 'none';

        showScreen('complete');
        updateHomeScreen();

        for (let i = 0; i < 20; i++) {
            setTimeout(() => createCelebrationStar(), i * 80);
        }
    }

    // ---- Retry Wrong Words ----
    function retryWrongWords() {
        if (state.retryWords.size === 0) return;

        const wordData = getWordData();
        const allWords = wordData[state.currentLevel] || [];
        const retryWordsList = allWords.filter(w => state.retryWords.has(w.word));

        state.currentWords = shuffle(retryWordsList);
        state.currentIndex = 0;
        state.isFlipped = false;
        state.knownWords = new Set();
        state.retryWords = new Set();
        state.streak = 0;

        els.studyLevelName.textContent = state.currentLevel + ' (複習)';
        showScreen('study');
        showCard();
    }

    // ---- Speech (Web Speech API) ----
    function speakWord(text) {
        if (state.muted) return;
        if (!('speechSynthesis' in window)) return;

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1.1;

        const voices = window.speechSynthesis.getVoices();
        const enVoice = voices.find(v => v.lang === 'en-US' && v.name.includes('Samantha'))
            || voices.find(v => v.lang === 'en-US')
            || voices.find(v => v.lang.startsWith('en'));

        if (enVoice) {
            utterance.voice = enVoice;
        }

        window.speechSynthesis.speak(utterance);
    }

    if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
        window.speechSynthesis.getVoices();
    }

    // ---- Touch / Swipe ----
    function setupTouchHandlers() {
        let touchStartX = 0;
        let touchStartY = 0;
        let touchStartTime = 0;
        let isSwiping = false;
        let touchHandled = false;

        const container = els.cardContainer;

        container.addEventListener('touchstart', (e) => {
            if (e.target.closest('.btn-speak') || e.target.closest('.btn-mute')) return;
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchStartTime = Date.now();
            isSwiping = false;
            touchHandled = false;
        }, { passive: true });

        container.addEventListener('touchmove', (e) => {
            if (e.target.closest('.btn-speak') || e.target.closest('.btn-mute')) return;

            const dx = e.touches[0].clientX - touchStartX;
            const dy = e.touches[0].clientY - touchStartY;

            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 20) {
                isSwiping = true;
                const tilt = Math.min(Math.abs(dx) / 10, 15) * (dx > 0 ? 1 : -1);
                const translateX = dx * 0.3;
                const baseTransform = state.isFlipped ? 'rotateY(180deg)' : '';
                els.flashcard.style.transition = 'none';
                els.flashcard.style.transform = `${baseTransform} translateX(${translateX}px) rotate(${tilt}deg)`;
            }
        }, { passive: true });

        container.addEventListener('touchend', (e) => {
            if (e.target.closest('.btn-speak') || e.target.closest('.btn-mute')) return;

            const dx = e.changedTouches[0].clientX - touchStartX;
            const duration = Date.now() - touchStartTime;

            els.flashcard.style.transition = '';
            els.flashcard.style.transform = '';

            touchHandled = true;

            if (isSwiping && Math.abs(dx) > 80) {
                if (dx > 0) {
                    markKnown();
                } else {
                    markRetry();
                }
            } else if (!isSwiping && duration < 300) {
                flipCard();
            }
        }, { passive: true });

        container.addEventListener('click', (e) => {
            if (e.target.closest('.btn-speak') || e.target.closest('.btn-mute')) return;
            // Skip if touch already handled (prevents double-flip on iPad)
            if (touchHandled) {
                touchHandled = false;
                return;
            }
            if (!isSwiping) {
                flipCard();
            }
        });
    }

    // ---- Visual Effects ----
    function showStars(anchor) {
        const emojis = ['⭐', '🌟', '✨', '💫', '🎉'];

        for (let i = 0; i < 6; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.textContent = emojis[Math.floor(Math.random() * emojis.length)];

            const x = window.innerWidth / 2 + (Math.random() - 0.5) * 200;
            const y = window.innerHeight / 2 + (Math.random() - 0.5) * 100;

            star.style.left = x + 'px';
            star.style.top = y + 'px';
            star.style.animationDelay = (i * 0.1) + 's';

            els.starBurst.appendChild(star);
            setTimeout(() => star.remove(), 1500);
        }
    }

    function createCelebrationStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.textContent = ['⭐', '🌟', '🎉', '🎊', '💖', '🌈'][Math.floor(Math.random() * 6)];
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = Math.random() * window.innerHeight * 0.5 + 'px';
        star.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
        star.style.animationDelay = Math.random() * 0.3 + 's';

        els.starBurst.appendChild(star);
        setTimeout(() => star.remove(), 2000);
    }

    function showStreakBanner(text) {
        els.streakBanner.textContent = text;
        els.streakBanner.classList.remove('show');
        void els.streakBanner.offsetWidth;
        els.streakBanner.classList.add('show');
        setTimeout(() => els.streakBanner.classList.remove('show'), 1200);
    }

    // ---- Utilities ----
    function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // ---- Event Bindings ----
    function bindEvents() {
        els.btnBack.addEventListener('click', () => {
            updateHomeScreen();
            showScreen('home');
        });

        els.btnSpeakFront.addEventListener('click', (e) => {
            e.stopPropagation();
            const word = state.currentWords[state.currentIndex];
            if (word) speakWord(word.word);
        });

        els.btnSpeakBack.addEventListener('click', (e) => {
            e.stopPropagation();
            const word = state.currentWords[state.currentIndex];
            if (word) speakWord(word.example);
        });

        els.btnRetry.addEventListener('click', markRetry);
        els.btnGotIt.addEventListener('click', markKnown);

        // Mute toggle
        const muteBtn = $('#btn-mute');
        if (muteBtn) {
            muteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleMute();
            });
        }

        els.btnRetryWrong.addEventListener('click', retryWrongWords);
        els.btnGoHome.addEventListener('click', () => {
            updateHomeScreen();
            showScreen('home');
        });

        setupTouchHandlers();

        document.addEventListener('keydown', (e) => {
            if (screens.study.classList.contains('active')) {
                switch (e.key) {
                    case ' ':
                    case 'Enter':
                        e.preventDefault();
                        flipCard();
                        break;
                    case 'ArrowLeft':
                        e.preventDefault();
                        markRetry();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        markKnown();
                        break;
                    case 'Escape':
                        updateHomeScreen();
                        showScreen('home');
                        break;
                }
            }
        });
    }

    // ---- Tab Switching ----
    function bindTabEvents() {
        const tabs = $$('#tab-bar .tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const newMode = tab.dataset.mode;
                if (newMode === state.mode) return;

                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Switch mode and reload
                state.mode = newMode;
                state.progress = loadProgress();
                buildLevelCards();
                updateHomeScreen();
            });
        });
    }

    // ---- Start App ----
    document.addEventListener('DOMContentLoaded', init);
    if (document.readyState !== 'loading') init();

})();
