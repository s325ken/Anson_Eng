// ============================================
// 自然發音 Phonics — Word Data
// 10 Units, ~200 words
// ============================================

// Config for each phonics unit
const PHONICS_CONFIG = {
    "短母音": { icon: "🔤", desc: "a e i o u 短音", color: "#fdcb6e", summary: "母音在子音中間，發短音" },
    "長母音 Magic E": { icon: "✨", desc: "魔法 e 讓母音變長音", color: "#74b9ff", summary: "字尾加 e，母音唸自己的名字" },
    "母音組合": { icon: "🎵", desc: "兩個母音在一起", color: "#a29bfe", summary: "兩個母音走在一起，第一個發長音" },
    "開頭子音混合": { icon: "🧩", desc: "兩個子音混在一起", color: "#fd79a8", summary: "開頭兩個子音快速混合在一起唸" },
    "結尾子音混合": { icon: "🔚", desc: "字尾的子音混合", color: "#00b894", summary: "結尾兩個子音快速混合在一起唸" },
    "子音組合": { icon: "🤝", desc: "兩個字母一個新音", color: "#e17055", summary: "兩個子音合在一起產生一個全新的音" },
    "R 控制母音": { icon: "🏴‍☠️", desc: "r 改變了母音的發音", color: "#6c5ce7", summary: "母音碰到 r，發音會改變" },
    "雙母音": { icon: "🎭", desc: "嘴巴會滑動的母音", color: "#0984e3", summary: "發音時嘴型會從一個位置滑到另一個" },
    "軟音 C 和 G": { icon: "🧸", desc: "c 和 g 的特殊發音", color: "#e84393", summary: "c 和 g 遇到 e/i/y 時發軟音" },
    "靜音字母": { icon: "🤫", desc: "看得到但不發音", color: "#636e72", summary: "有些字母寫出來但不發音" },
};

const PHONICS_WORDS = {

    // ============================================
    // Unit 1: 短母音 Short Vowels (25 words)
    // ============================================
    "短母音": [
        // Short a /æ/
        { word: "cat", pattern: "a", meaning: "貓", rule: "短母音 a → /æ/", example: "The cat is fat.", exampleMeaning: "那隻貓很胖。" },
        { word: "hat", pattern: "a", meaning: "帽子", rule: "短母音 a → /æ/", example: "I have a red hat.", exampleMeaning: "我有一頂紅帽子。" },
        { word: "map", pattern: "a", meaning: "地圖", rule: "短母音 a → /æ/", example: "Look at the map.", exampleMeaning: "看看地圖。" },
        { word: "fan", pattern: "a", meaning: "電扇", rule: "短母音 a → /æ/", example: "Turn on the fan.", exampleMeaning: "打開電扇。" },
        { word: "bag", pattern: "a", meaning: "袋子", rule: "短母音 a → /æ/", example: "My bag is big.", exampleMeaning: "我的袋子很大。" },
        // Short e /ɛ/
        { word: "bed", pattern: "e", meaning: "床", rule: "短母音 e → /ɛ/", example: "Go to bed now.", exampleMeaning: "現在去睡覺。" },
        { word: "red", pattern: "e", meaning: "紅色", rule: "短母音 e → /ɛ/", example: "I like red.", exampleMeaning: "我喜歡紅色。" },
        { word: "pen", pattern: "e", meaning: "筆", rule: "短母音 e → /ɛ/", example: "Give me a pen.", exampleMeaning: "給我一支筆。" },
        { word: "net", pattern: "e", meaning: "網子", rule: "短母音 e → /ɛ/", example: "Catch it with a net.", exampleMeaning: "用網子抓住它。" },
        { word: "hen", pattern: "e", meaning: "母雞", rule: "短母音 e → /ɛ/", example: "The hen has eggs.", exampleMeaning: "母雞有蛋。" },
        // Short i /ɪ/
        { word: "pig", pattern: "i", meaning: "豬", rule: "短母音 i → /ɪ/", example: "The pig is pink.", exampleMeaning: "豬是粉紅色的。" },
        { word: "sit", pattern: "i", meaning: "坐", rule: "短母音 i → /ɪ/", example: "Please sit down.", exampleMeaning: "請坐下。" },
        { word: "big", pattern: "i", meaning: "大的", rule: "短母音 i → /ɪ/", example: "It is so big!", exampleMeaning: "它好大！" },
        { word: "pin", pattern: "i", meaning: "別針", rule: "短母音 i → /ɪ/", example: "Be careful with the pin.", exampleMeaning: "小心別針。" },
        { word: "six", pattern: "i", meaning: "六", rule: "短母音 i → /ɪ/", example: "I am six years old.", exampleMeaning: "我六歲了。" },
        // Short o /ɒ/
        { word: "dog", pattern: "o", meaning: "狗", rule: "短母音 o → /ɒ/", example: "The dog can run.", exampleMeaning: "那隻狗會跑。" },
        { word: "hot", pattern: "o", meaning: "熱的", rule: "短母音 o → /ɒ/", example: "It is very hot.", exampleMeaning: "天氣很熱。" },
        { word: "fox", pattern: "o", meaning: "狐狸", rule: "短母音 o → /ɒ/", example: "The fox is fast.", exampleMeaning: "狐狸跑很快。" },
        { word: "box", pattern: "o", meaning: "盒子", rule: "短母音 o → /ɒ/", example: "Open the box.", exampleMeaning: "打開盒子。" },
        { word: "top", pattern: "o", meaning: "頂端", rule: "短母音 o → /ɒ/", example: "Go to the top.", exampleMeaning: "到最上面去。" },
        // Short u /ʌ/
        { word: "cup", pattern: "u", meaning: "杯子", rule: "短母音 u → /ʌ/", example: "I have a cup.", exampleMeaning: "我有一個杯子。" },
        { word: "bus", pattern: "u", meaning: "公車", rule: "短母音 u → /ʌ/", example: "Take the bus.", exampleMeaning: "搭公車。" },
        { word: "sun", pattern: "u", meaning: "太陽", rule: "短母音 u → /ʌ/", example: "The sun is bright.", exampleMeaning: "太陽很亮。" },
        { word: "run", pattern: "u", meaning: "跑", rule: "短母音 u → /ʌ/", example: "I can run fast.", exampleMeaning: "我跑得很快。" },
        { word: "bug", pattern: "u", meaning: "蟲子", rule: "短母音 u → /ʌ/", example: "I see a bug.", exampleMeaning: "我看到一隻蟲。" },
    ],

    // ============================================
    // Unit 2: 長母音 Magic E (20 words)
    // ============================================
    "長母音 Magic E": [
        // a_e → /eɪ/
        { word: "cake", pattern: "a_e", meaning: "蛋糕", rule: "a + e → 長母音 /eɪ/", example: "I love cake.", exampleMeaning: "我愛蛋糕。" },
        { word: "lake", pattern: "a_e", meaning: "湖", rule: "a + e → 長母音 /eɪ/", example: "The lake is blue.", exampleMeaning: "湖是藍色的。" },
        { word: "make", pattern: "a_e", meaning: "做", rule: "a + e → 長母音 /eɪ/", example: "Let's make a cake.", exampleMeaning: "我們來做蛋糕。" },
        { word: "name", pattern: "a_e", meaning: "名字", rule: "a + e → 長母音 /eɪ/", example: "What is your name?", exampleMeaning: "你叫什麼名字？" },
        { word: "game", pattern: "a_e", meaning: "遊戲", rule: "a + e → 長母音 /eɪ/", example: "Let's play a game.", exampleMeaning: "我們來玩遊戲。" },
        // i_e → /aɪ/
        { word: "bike", pattern: "i_e", meaning: "腳踏車", rule: "i + e → 長母音 /aɪ/", example: "I ride my bike.", exampleMeaning: "我騎腳踏車。" },
        { word: "like", pattern: "i_e", meaning: "喜歡", rule: "i + e → 長母音 /aɪ/", example: "I like ice cream.", exampleMeaning: "我喜歡冰淇淋。" },
        { word: "time", pattern: "i_e", meaning: "時間", rule: "i + e → 長母音 /aɪ/", example: "What time is it?", exampleMeaning: "現在幾點？" },
        { word: "fine", pattern: "i_e", meaning: "很好", rule: "i + e → 長母音 /aɪ/", example: "I am fine.", exampleMeaning: "我很好。" },
        { word: "kite", pattern: "i_e", meaning: "風箏", rule: "i + e → 長母音 /aɪ/", example: "Fly the kite high.", exampleMeaning: "把風箏放得高高的。" },
        // o_e → /oʊ/
        { word: "home", pattern: "o_e", meaning: "家", rule: "o + e → 長母音 /oʊ/", example: "I go home.", exampleMeaning: "我回家。" },
        { word: "bone", pattern: "o_e", meaning: "骨頭", rule: "o + e → 長母音 /oʊ/", example: "The dog has a bone.", exampleMeaning: "狗有一根骨頭。" },
        { word: "nose", pattern: "o_e", meaning: "鼻子", rule: "o + e → 長母音 /oʊ/", example: "Touch your nose.", exampleMeaning: "摸你的鼻子。" },
        { word: "rope", pattern: "o_e", meaning: "繩子", rule: "o + e → 長母音 /oʊ/", example: "Pull the rope.", exampleMeaning: "拉繩子。" },
        { word: "note", pattern: "o_e", meaning: "筆記", rule: "o + e → 長母音 /oʊ/", example: "Write a note.", exampleMeaning: "寫一張便條。" },
        // u_e → /juː/
        { word: "cute", pattern: "u_e", meaning: "可愛的", rule: "u + e → 長母音 /juː/", example: "The puppy is cute.", exampleMeaning: "那隻小狗好可愛。" },
        { word: "huge", pattern: "u_e", meaning: "巨大的", rule: "u + e → 長母音 /juː/", example: "That is a huge tree.", exampleMeaning: "那是一棵巨大的樹。" },
        { word: "cube", pattern: "u_e", meaning: "立方體", rule: "u + e → 長母音 /juː/", example: "A cube has six sides.", exampleMeaning: "立方體有六個面。" },
        { word: "tube", pattern: "u_e", meaning: "管子", rule: "u + e → 長母音 /juː/", example: "Water in the tube.", exampleMeaning: "水在管子裡。" },
        { word: "mule", pattern: "u_e", meaning: "騾子", rule: "u + e → 長母音 /juː/", example: "The mule is strong.", exampleMeaning: "騾子很強壯。" },
    ],

    // ============================================
    // Unit 3: 母音組合 Vowel Teams (25 words)
    // ============================================
    "母音組合": [
        // ee → /iː/
        { word: "tree", pattern: "ee", meaning: "樹", rule: "ee → 長母音 /iː/", example: "The tree is tall.", exampleMeaning: "那棵樹很高。" },
        { word: "bee", pattern: "ee", meaning: "蜜蜂", rule: "ee → 長母音 /iː/", example: "The bee makes honey.", exampleMeaning: "蜜蜂釀蜂蜜。" },
        { word: "see", pattern: "ee", meaning: "看", rule: "ee → 長母音 /iː/", example: "I can see you.", exampleMeaning: "我看得到你。" },
        { word: "feet", pattern: "ee", meaning: "腳", rule: "ee → 長母音 /iː/", example: "Wash your feet.", exampleMeaning: "洗你的腳。" },
        { word: "keep", pattern: "ee", meaning: "保持", rule: "ee → 長母音 /iː/", example: "Keep it safe.", exampleMeaning: "把它保管好。" },
        // ea → /iː/
        { word: "eat", pattern: "ea", meaning: "吃", rule: "ea → 長母音 /iː/", example: "Let's eat lunch.", exampleMeaning: "我們吃午餐吧。" },
        { word: "sea", pattern: "ea", meaning: "海", rule: "ea → 長母音 /iː/", example: "The sea is deep.", exampleMeaning: "海很深。" },
        { word: "read", pattern: "ea", meaning: "讀", rule: "ea → 長母音 /iː/", example: "I read a book.", exampleMeaning: "我讀一本書。" },
        { word: "team", pattern: "ea", meaning: "隊伍", rule: "ea → 長母音 /iː/", example: "We are a team.", exampleMeaning: "我們是一個隊伍。" },
        { word: "bean", pattern: "ea", meaning: "豆子", rule: "ea → 長母音 /iː/", example: "I like green beans.", exampleMeaning: "我喜歡四季豆。" },
        // ai → /eɪ/
        { word: "rain", pattern: "ai", meaning: "雨", rule: "ai → 長母音 /eɪ/", example: "It will rain today.", exampleMeaning: "今天會下雨。" },
        { word: "tail", pattern: "ai", meaning: "尾巴", rule: "ai → 長母音 /eɪ/", example: "The dog wags its tail.", exampleMeaning: "狗搖尾巴。" },
        { word: "mail", pattern: "ai", meaning: "郵件", rule: "ai → 長母音 /eɪ/", example: "I got a mail.", exampleMeaning: "我收到一封信。" },
        { word: "pain", pattern: "ai", meaning: "痛", rule: "ai → 長母音 /eɪ/", example: "I feel no pain.", exampleMeaning: "我不覺得痛。" },
        { word: "train", pattern: "ai", meaning: "火車", rule: "ai → 長母音 /eɪ/", example: "The train is fast.", exampleMeaning: "火車很快。" },
        // ay → /eɪ/
        { word: "day", pattern: "ay", meaning: "天", rule: "ay → 長母音 /eɪ/", example: "Have a nice day.", exampleMeaning: "祝你有美好的一天。" },
        { word: "play", pattern: "ay", meaning: "玩", rule: "ay → 長母音 /eɪ/", example: "Let's go play.", exampleMeaning: "我們去玩吧。" },
        { word: "say", pattern: "ay", meaning: "說", rule: "ay → 長母音 /eɪ/", example: "What did you say?", exampleMeaning: "你說什麼？" },
        { word: "way", pattern: "ay", meaning: "路/方法", rule: "ay → 長母音 /eɪ/", example: "This is the way.", exampleMeaning: "這是那條路。" },
        { word: "stay", pattern: "ay", meaning: "留下", rule: "ay → 長母音 /eɪ/", example: "Stay here, please.", exampleMeaning: "請留在這裡。" },
        // oa → /oʊ/
        { word: "boat", pattern: "oa", meaning: "船", rule: "oa → 長母音 /oʊ/", example: "The boat is on the sea.", exampleMeaning: "船在海上。" },
        { word: "coat", pattern: "oa", meaning: "外套", rule: "oa → 長母音 /oʊ/", example: "Put on your coat.", exampleMeaning: "穿上你的外套。" },
        { word: "road", pattern: "oa", meaning: "路", rule: "oa → 長母音 /oʊ/", example: "Cross the road.", exampleMeaning: "過馬路。" },
        { word: "goat", pattern: "oa", meaning: "山羊", rule: "oa → 長母音 /oʊ/", example: "The goat eats grass.", exampleMeaning: "山羊吃草。" },
        { word: "soap", pattern: "oa", meaning: "肥皂", rule: "oa → 長母音 /oʊ/", example: "Wash with soap.", exampleMeaning: "用肥皂洗。" },
    ],

    // ============================================
    // Unit 4: 開頭子音混合 Beginning Blends (20 words)
    // ============================================
    "開頭子音混合": [
        { word: "blue", pattern: "bl", meaning: "藍色", rule: "bl → 混合唸 /bl/", example: "The sky is blue.", exampleMeaning: "天空是藍色的。" },
        { word: "black", pattern: "bl", meaning: "黑色", rule: "bl → 混合唸 /bl/", example: "I have a black cat.", exampleMeaning: "我有一隻黑貓。" },
        { word: "brown", pattern: "br", meaning: "棕色", rule: "br → 混合唸 /br/", example: "The bear is brown.", exampleMeaning: "那隻熊是棕色的。" },
        { word: "bread", pattern: "br", meaning: "麵包", rule: "br → 混合唸 /br/", example: "I eat bread.", exampleMeaning: "我吃麵包。" },
        { word: "clock", pattern: "cl", meaning: "時鐘", rule: "cl → 混合唸 /kl/", example: "Look at the clock.", exampleMeaning: "看看時鐘。" },
        { word: "clap", pattern: "cl", meaning: "拍手", rule: "cl → 混合唸 /kl/", example: "Clap your hands.", exampleMeaning: "拍拍你的手。" },
        { word: "crab", pattern: "cr", meaning: "螃蟹", rule: "cr → 混合唸 /kr/", example: "The crab is red.", exampleMeaning: "螃蟹是紅色的。" },
        { word: "drum", pattern: "dr", meaning: "鼓", rule: "dr → 混合唸 /dr/", example: "Play the drum.", exampleMeaning: "打鼓。" },
        { word: "dress", pattern: "dr", meaning: "洋裝", rule: "dr → 混合唸 /dr/", example: "She wears a dress.", exampleMeaning: "她穿洋裝。" },
        { word: "flag", pattern: "fl", meaning: "旗子", rule: "fl → 混合唸 /fl/", example: "Wave the flag.", exampleMeaning: "揮揮旗子。" },
        { word: "frog", pattern: "fr", meaning: "青蛙", rule: "fr → 混合唸 /fr/", example: "The frog can jump.", exampleMeaning: "青蛙會跳。" },
        { word: "green", pattern: "gr", meaning: "綠色", rule: "gr → 混合唸 /gr/", example: "Grass is green.", exampleMeaning: "草是綠色的。" },
        { word: "plant", pattern: "pl", meaning: "植物", rule: "pl → 混合唸 /pl/", example: "Water the plant.", exampleMeaning: "幫植物澆水。" },
        { word: "slide", pattern: "sl", meaning: "溜滑梯", rule: "sl → 混合唸 /sl/", example: "Go down the slide.", exampleMeaning: "溜下溜滑梯。" },
        { word: "small", pattern: "sm", meaning: "小的", rule: "sm → 混合唸 /sm/", example: "The ant is small.", exampleMeaning: "螞蟻很小。" },
        { word: "snow", pattern: "sn", meaning: "雪", rule: "sn → 混合唸 /sn/", example: "It is snowing!", exampleMeaning: "下雪了！" },
        { word: "star", pattern: "st", meaning: "星星", rule: "st → 混合唸 /st/", example: "I see a star.", exampleMeaning: "我看到一顆星星。" },
        { word: "swim", pattern: "sw", meaning: "游泳", rule: "sw → 混合唸 /sw/", example: "I can swim.", exampleMeaning: "我會游泳。" },
        { word: "tree", pattern: "tr", meaning: "樹", rule: "tr → 混合唸 /tr/", example: "Climb the tree.", exampleMeaning: "爬樹。" },
        { word: "truck", pattern: "tr", meaning: "卡車", rule: "tr → 混合唸 /tr/", example: "The truck is big.", exampleMeaning: "卡車很大。" },
    ],

    // ============================================
    // Unit 5: 結尾子音混合 Ending Blends (20 words)
    // ============================================
    "結尾子音混合": [
        { word: "hand", pattern: "nd", meaning: "手", rule: "結尾 nd → /nd/", example: "Raise your hand.", exampleMeaning: "舉起你的手。" },
        { word: "sand", pattern: "nd", meaning: "沙子", rule: "結尾 nd → /nd/", example: "Play in the sand.", exampleMeaning: "在沙子裡玩。" },
        { word: "pond", pattern: "nd", meaning: "池塘", rule: "結尾 nd → /nd/", example: "Fish in the pond.", exampleMeaning: "池塘裡有魚。" },
        { word: "wind", pattern: "nd", meaning: "風", rule: "結尾 nd → /nd/", example: "The wind is strong.", exampleMeaning: "風很大。" },
        { word: "pink", pattern: "nk", meaning: "粉紅色", rule: "結尾 nk → /ŋk/", example: "I like pink.", exampleMeaning: "我喜歡粉紅色。" },
        { word: "sink", pattern: "nk", meaning: "水槽", rule: "結尾 nk → /ŋk/", example: "Wash in the sink.", exampleMeaning: "在水槽裡洗。" },
        { word: "tank", pattern: "nk", meaning: "水箱", rule: "結尾 nk → /ŋk/", example: "The fish tank is clean.", exampleMeaning: "魚缸很乾淨。" },
        { word: "bank", pattern: "nk", meaning: "銀行", rule: "結尾 nk → /ŋk/", example: "Go to the bank.", exampleMeaning: "去銀行。" },
        { word: "jump", pattern: "mp", meaning: "跳", rule: "結尾 mp → /mp/", example: "Jump up high!", exampleMeaning: "跳高高！" },
        { word: "lamp", pattern: "mp", meaning: "燈", rule: "結尾 mp → /mp/", example: "Turn on the lamp.", exampleMeaning: "打開檯燈。" },
        { word: "camp", pattern: "mp", meaning: "露營", rule: "結尾 mp → /mp/", example: "We go to camp.", exampleMeaning: "我們去露營。" },
        { word: "bump", pattern: "mp", meaning: "撞到", rule: "結尾 mp → /mp/", example: "Don't bump your head.", exampleMeaning: "不要撞到頭。" },
        { word: "ant", pattern: "nt", meaning: "螞蟻", rule: "結尾 nt → /nt/", example: "The ant is tiny.", exampleMeaning: "螞蟻很小。" },
        { word: "tent", pattern: "nt", meaning: "帳篷", rule: "結尾 nt → /nt/", example: "Sleep in a tent.", exampleMeaning: "睡在帳篷裡。" },
        { word: "went", pattern: "nt", meaning: "去了", rule: "結尾 nt → /nt/", example: "I went to school.", exampleMeaning: "我去了學校。" },
        { word: "hunt", pattern: "nt", meaning: "打獵", rule: "結尾 nt → /nt/", example: "Let's hunt for bugs.", exampleMeaning: "我們來找蟲子。" },
        { word: "best", pattern: "st", meaning: "最好的", rule: "結尾 st → /st/", example: "You are the best!", exampleMeaning: "你是最棒的！" },
        { word: "fast", pattern: "st", meaning: "快的", rule: "結尾 st → /st/", example: "Run fast!", exampleMeaning: "跑快一點！" },
        { word: "list", pattern: "st", meaning: "清單", rule: "結尾 st → /st/", example: "Make a list.", exampleMeaning: "列一張清單。" },
        { word: "dust", pattern: "st", meaning: "灰塵", rule: "結尾 st → /st/", example: "Wipe the dust.", exampleMeaning: "擦掉灰塵。" },
    ],

    // ============================================
    // Unit 6: 子音組合 Consonant Digraphs (20 words)
    // ============================================
    "子音組合": [
        // sh
        { word: "ship", pattern: "sh", meaning: "船", rule: "sh → /ʃ/ (嘘聲)", example: "The ship is big.", exampleMeaning: "那艘船很大。" },
        { word: "fish", pattern: "sh", meaning: "魚", rule: "sh → /ʃ/ (嘘聲)", example: "I like fish.", exampleMeaning: "我喜歡魚。" },
        { word: "shell", pattern: "sh", meaning: "貝殼", rule: "sh → /ʃ/ (嘘聲)", example: "I found a shell.", exampleMeaning: "我找到一個貝殼。" },
        { word: "shoe", pattern: "sh", meaning: "鞋子", rule: "sh → /ʃ/ (嘘聲)", example: "Put on your shoes.", exampleMeaning: "穿上你的鞋子。" },
        // ch
        { word: "chat", pattern: "ch", meaning: "聊天", rule: "ch → /tʃ/ (氣音)", example: "Let's chat.", exampleMeaning: "我們聊聊天。" },
        { word: "chip", pattern: "ch", meaning: "薯片", rule: "ch → /tʃ/ (氣音)", example: "I eat a chip.", exampleMeaning: "我吃薯片。" },
        { word: "lunch", pattern: "ch", meaning: "午餐", rule: "ch → /tʃ/ (氣音)", example: "Time for lunch.", exampleMeaning: "午餐時間到了。" },
        { word: "much", pattern: "ch", meaning: "很多", rule: "ch → /tʃ/ (氣音)", example: "Thank you so much.", exampleMeaning: "非常感謝你。" },
        // th
        { word: "think", pattern: "th", meaning: "想", rule: "th → /θ/ (咬舌音)", example: "I think so.", exampleMeaning: "我覺得是。" },
        { word: "this", pattern: "th", meaning: "這個", rule: "th → /ð/ (咬舌音)", example: "I like this.", exampleMeaning: "我喜歡這個。" },
        { word: "that", pattern: "th", meaning: "那個", rule: "th → /ð/ (咬舌音)", example: "What is that?", exampleMeaning: "那是什麼？" },
        { word: "math", pattern: "th", meaning: "數學", rule: "th → /θ/ (咬舌音)", example: "I like math.", exampleMeaning: "我喜歡數學。" },
        { word: "bath", pattern: "th", meaning: "洗澡", rule: "th → /θ/ (咬舌音)", example: "Time for a bath.", exampleMeaning: "洗澡時間到了。" },
        // wh
        { word: "what", pattern: "wh", meaning: "什麼", rule: "wh → /w/ (嘴唇圓)", example: "What is this?", exampleMeaning: "這是什麼？" },
        { word: "when", pattern: "wh", meaning: "什麼時候", rule: "wh → /w/ (嘴唇圓)", example: "When do we go?", exampleMeaning: "我們什麼時候走？" },
        { word: "where", pattern: "wh", meaning: "哪裡", rule: "wh → /w/ (嘴唇圓)", example: "Where are you?", exampleMeaning: "你在哪裡？" },
        { word: "white", pattern: "wh", meaning: "白色", rule: "wh → /w/ (嘴唇圓)", example: "Snow is white.", exampleMeaning: "雪是白色的。" },
        { word: "whale", pattern: "wh", meaning: "鯨魚", rule: "wh → /w/ (嘴唇圓)", example: "The whale is huge.", exampleMeaning: "鯨魚好大。" },
        // ck
        { word: "duck", pattern: "ck", meaning: "鴨子", rule: "ck → /k/", example: "The duck says quack.", exampleMeaning: "鴨子呱呱叫。" },
        { word: "rock", pattern: "ck", meaning: "石頭", rule: "ck → /k/", example: "Sit on the rock.", exampleMeaning: "坐在石頭上。" },
    ],

    // ============================================
    // Unit 7: R 控制母音 R-Controlled Vowels (20 words)
    // ============================================
    "R 控制母音": [
        // ar
        { word: "car", pattern: "ar", meaning: "車", rule: "ar → /ɑːr/", example: "Dad drives a car.", exampleMeaning: "爸爸開車。" },
        { word: "star", pattern: "ar", meaning: "星星", rule: "ar → /ɑːr/", example: "I see a star.", exampleMeaning: "我看到一顆星星。" },
        { word: "park", pattern: "ar", meaning: "公園", rule: "ar → /ɑːr/", example: "Play in the park.", exampleMeaning: "在公園玩。" },
        { word: "farm", pattern: "ar", meaning: "農場", rule: "ar → /ɑːr/", example: "The farm has cows.", exampleMeaning: "農場有牛。" },
        // er
        { word: "her", pattern: "er", meaning: "她的", rule: "er → /ɜːr/", example: "This is her book.", exampleMeaning: "這是她的書。" },
        { word: "water", pattern: "er", meaning: "水", rule: "er → /ər/", example: "Drink some water.", exampleMeaning: "喝一些水。" },
        { word: "sister", pattern: "er", meaning: "姊妹", rule: "er → /ər/", example: "My sister is kind.", exampleMeaning: "我姊姊很善良。" },
        { word: "after", pattern: "er", meaning: "之後", rule: "er → /ər/", example: "Come after lunch.", exampleMeaning: "午餐後再來。" },
        // ir
        { word: "bird", pattern: "ir", meaning: "鳥", rule: "ir → /ɜːr/", example: "The bird can fly.", exampleMeaning: "鳥會飛。" },
        { word: "girl", pattern: "ir", meaning: "女孩", rule: "ir → /ɜːr/", example: "The girl is happy.", exampleMeaning: "那個女孩很開心。" },
        { word: "first", pattern: "ir", meaning: "第一", rule: "ir → /ɜːr/", example: "I am first!", exampleMeaning: "我是第一名！" },
        { word: "shirt", pattern: "ir", meaning: "襯衫", rule: "ir → /ɜːr/", example: "I wear a shirt.", exampleMeaning: "我穿襯衫。" },
        // or
        { word: "for", pattern: "or", meaning: "為了", rule: "or → /ɔːr/", example: "This is for you.", exampleMeaning: "這是給你的。" },
        { word: "door", pattern: "or", meaning: "門", rule: "or → /ɔːr/", example: "Open the door.", exampleMeaning: "打開門。" },
        { word: "more", pattern: "or", meaning: "更多", rule: "or → /ɔːr/", example: "I want more.", exampleMeaning: "我還要。" },
        { word: "corn", pattern: "or", meaning: "玉米", rule: "or → /ɔːr/", example: "I like corn.", exampleMeaning: "我喜歡玉米。" },
        // ur
        { word: "fur", pattern: "ur", meaning: "毛皮", rule: "ur → /ɜːr/", example: "The cat has soft fur.", exampleMeaning: "那隻貓的毛很軟。" },
        { word: "turn", pattern: "ur", meaning: "轉", rule: "ur → /ɜːr/", example: "Turn left.", exampleMeaning: "左轉。" },
        { word: "hurt", pattern: "ur", meaning: "受傷", rule: "ur → /ɜːr/", example: "Did you get hurt?", exampleMeaning: "你受傷了嗎？" },
        { word: "nurse", pattern: "ur", meaning: "護士", rule: "ur → /ɜːr/", example: "The nurse is nice.", exampleMeaning: "護士很親切。" },
    ],

    // ============================================
    // Unit 8: 雙母音 Diphthongs (20 words)
    // ============================================
    "雙母音": [
        // oi
        { word: "coin", pattern: "oi", meaning: "硬幣", rule: "oi → /ɔɪ/", example: "I found a coin.", exampleMeaning: "我找到一枚硬幣。" },
        { word: "oil", pattern: "oi", meaning: "油", rule: "oi → /ɔɪ/", example: "Cook with oil.", exampleMeaning: "用油煮。" },
        { word: "boil", pattern: "oi", meaning: "煮沸", rule: "oi → /ɔɪ/", example: "Boil the water.", exampleMeaning: "把水煮開。" },
        { word: "point", pattern: "oi", meaning: "指/點", rule: "oi → /ɔɪ/", example: "Point to the dog.", exampleMeaning: "指向那隻狗。" },
        // oy
        { word: "boy", pattern: "oy", meaning: "男孩", rule: "oy → /ɔɪ/", example: "The boy is tall.", exampleMeaning: "那個男孩很高。" },
        { word: "toy", pattern: "oy", meaning: "玩具", rule: "oy → /ɔɪ/", example: "I love my toy.", exampleMeaning: "我愛我的玩具。" },
        { word: "joy", pattern: "oy", meaning: "快樂", rule: "oy → /ɔɪ/", example: "Jump for joy!", exampleMeaning: "開心地跳！" },
        { word: "enjoy", pattern: "oy", meaning: "享受", rule: "oy → /ɔɪ/", example: "Enjoy the game.", exampleMeaning: "享受遊戲吧。" },
        // ou
        { word: "out", pattern: "ou", meaning: "外面", rule: "ou → /aʊ/", example: "Let's go out.", exampleMeaning: "我們出去吧。" },
        { word: "house", pattern: "ou", meaning: "房子", rule: "ou → /aʊ/", example: "This is my house.", exampleMeaning: "這是我的房子。" },
        { word: "mouse", pattern: "ou", meaning: "老鼠", rule: "ou → /aʊ/", example: "I see a mouse.", exampleMeaning: "我看到一隻老鼠。" },
        { word: "cloud", pattern: "ou", meaning: "雲", rule: "ou → /aʊ/", example: "Look at the cloud.", exampleMeaning: "看那朵雲。" },
        { word: "loud", pattern: "ou", meaning: "大聲的", rule: "ou → /aʊ/", example: "Don't be so loud.", exampleMeaning: "不要那麼大聲。" },
        // ow
        { word: "cow", pattern: "ow", meaning: "牛", rule: "ow → /aʊ/", example: "The cow says moo.", exampleMeaning: "牛哞哞叫。" },
        { word: "how", pattern: "ow", meaning: "如何", rule: "ow → /aʊ/", example: "How are you?", exampleMeaning: "你好嗎？" },
        { word: "now", pattern: "ow", meaning: "現在", rule: "ow → /aʊ/", example: "Do it now.", exampleMeaning: "現在做。" },
        { word: "down", pattern: "ow", meaning: "下面", rule: "ow → /aʊ/", example: "Sit down please.", exampleMeaning: "請坐下。" },
        // aw
        { word: "saw", pattern: "aw", meaning: "看見了", rule: "aw → /ɔː/", example: "I saw a bird.", exampleMeaning: "我看見一隻鳥。" },
        { word: "draw", pattern: "aw", meaning: "畫", rule: "aw → /ɔː/", example: "I like to draw.", exampleMeaning: "我喜歡畫畫。" },
        { word: "paw", pattern: "aw", meaning: "爪子", rule: "aw → /ɔː/", example: "The dog's paw is soft.", exampleMeaning: "狗的爪子很軟。" },
    ],

    // ============================================
    // Unit 9: 軟音 C 和 G (15 words)
    // ============================================
    "軟音 C 和 G": [
        // Soft C → /s/
        { word: "city", pattern: "ci", meaning: "城市", rule: "c + i → 軟音 /s/", example: "The city is big.", exampleMeaning: "這城市很大。" },
        { word: "cent", pattern: "ce", meaning: "分/毛", rule: "c + e → 軟音 /s/", example: "One cent.", exampleMeaning: "一分錢。" },
        { word: "ice", pattern: "ce", meaning: "冰", rule: "c + e → 軟音 /s/", example: "I want ice cream.", exampleMeaning: "我想吃冰淇淋。" },
        { word: "nice", pattern: "ce", meaning: "好的", rule: "c + e → 軟音 /s/", example: "That is nice!", exampleMeaning: "真好！" },
        { word: "face", pattern: "ce", meaning: "臉", rule: "c + e → 軟音 /s/", example: "Wash your face.", exampleMeaning: "洗洗臉。" },
        { word: "place", pattern: "ce", meaning: "地方", rule: "c + e → 軟音 /s/", example: "This is a nice place.", exampleMeaning: "這是一個好地方。" },
        { word: "race", pattern: "ce", meaning: "比賽", rule: "c + e → 軟音 /s/", example: "Let's have a race.", exampleMeaning: "我們來比賽。" },
        { word: "dance", pattern: "ce", meaning: "跳舞", rule: "c + e → 軟音 /s/", example: "I like to dance.", exampleMeaning: "我喜歡跳舞。" },
        // Soft G → /dʒ/
        { word: "gem", pattern: "ge", meaning: "寶石", rule: "g + e → 軟音 /dʒ/", example: "The gem is shiny.", exampleMeaning: "寶石很閃亮。" },
        { word: "giant", pattern: "gi", meaning: "巨人", rule: "g + i → 軟音 /dʒ/", example: "The giant is tall.", exampleMeaning: "巨人很高。" },
        { word: "giraffe", pattern: "gi", meaning: "長頸鹿", rule: "g + i → 軟音 /dʒ/", example: "The giraffe is tall.", exampleMeaning: "長頸鹿很高。" },
        { word: "page", pattern: "ge", meaning: "頁", rule: "g + e → 軟音 /dʒ/", example: "Turn the page.", exampleMeaning: "翻頁。" },
        { word: "age", pattern: "ge", meaning: "年紀", rule: "g + e → 軟音 /dʒ/", example: "What is your age?", exampleMeaning: "你幾歲？" },
        { word: "cage", pattern: "ge", meaning: "籠子", rule: "g + e → 軟音 /dʒ/", example: "The bird is in a cage.", exampleMeaning: "鳥在籠子裡。" },
        { word: "stage", pattern: "ge", meaning: "舞台", rule: "g + e → 軟音 /dʒ/", example: "Stand on the stage.", exampleMeaning: "站在舞台上。" },
    ],

    // ============================================
    // Unit 10: 靜音字母 Silent Letters (15 words)
    // ============================================
    "靜音字母": [
        // kn (silent k)
        { word: "know", pattern: "kn", meaning: "知道", rule: "k 不發音，唸 /n/", example: "I know the answer.", exampleMeaning: "我知道答案。" },
        { word: "knee", pattern: "kn", meaning: "膝蓋", rule: "k 不發音，唸 /n/", example: "I hurt my knee.", exampleMeaning: "我的膝蓋受傷了。" },
        { word: "knife", pattern: "kn", meaning: "刀子", rule: "k 不發音，唸 /n/", example: "Use the knife carefully.", exampleMeaning: "小心使用刀子。" },
        { word: "knock", pattern: "kn", meaning: "敲", rule: "k 不發音，唸 /n/", example: "Knock on the door.", exampleMeaning: "敲敲門。" },
        { word: "knot", pattern: "kn", meaning: "結", rule: "k 不發音，唸 /n/", example: "Tie a knot.", exampleMeaning: "打一個結。" },
        // wr (silent w)
        { word: "write", pattern: "wr", meaning: "寫", rule: "w 不發音，唸 /r/", example: "Write your name.", exampleMeaning: "寫上你的名字。" },
        { word: "wrong", pattern: "wr", meaning: "錯的", rule: "w 不發音，唸 /r/", example: "That is wrong.", exampleMeaning: "那是錯的。" },
        { word: "wrap", pattern: "wr", meaning: "包", rule: "w 不發音，唸 /r/", example: "Wrap the gift.", exampleMeaning: "包禮物。" },
        // mb (silent b)
        { word: "lamb", pattern: "mb", meaning: "小羊", rule: "b 不發音，唸 /m/", example: "The lamb is soft.", exampleMeaning: "小羊很軟。" },
        { word: "climb", pattern: "mb", meaning: "爬", rule: "b 不發音，唸 /m/", example: "Climb the tree.", exampleMeaning: "爬樹。" },
        { word: "comb", pattern: "mb", meaning: "梳子", rule: "b 不發音，唸 /m/", example: "Comb your hair.", exampleMeaning: "梳你的頭髮。" },
        { word: "thumb", pattern: "mb", meaning: "拇指", rule: "b 不發音，唸 /m/", example: "Show your thumb.", exampleMeaning: "伸出你的拇指。" },
        // gh (silent gh)
        { word: "night", pattern: "igh", meaning: "晚上", rule: "gh 不發音", example: "Good night!", exampleMeaning: "晚安！" },
        { word: "light", pattern: "igh", meaning: "光/燈", rule: "gh 不發音", example: "Turn on the light.", exampleMeaning: "開燈。" },
        { word: "right", pattern: "igh", meaning: "右/對的", rule: "gh 不發音", example: "Turn right.", exampleMeaning: "右轉。" },
    ],
};
