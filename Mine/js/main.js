// GameHub Main JavaScript

// 多语言翻译数据
const translations = {
    en: {
        home: "Home",
        categories: "Categories",
        popular: "Popular Games",
        about: "About",
        contact: "Contact",
        welcomeTitle: "Welcome to GameHub - Play Free Online Games",
        welcomeSubtitle: "Your destination for the best free online games. Hours of fun for players of all ages.",
        browseGames: "Browse Games",
        featuredGames: "Featured Games",
        gameCategories: "Game Categories",
        whyChoose: "Why Choose GameHub",
        copyright: "© 2023 GameHub. All rights reserved.",
        // 扫雷游戏页面特有内容
        minesweeperTitle: "Mine Sweeper",
        playNow: "Play Now",
        aboutThisGame: "About This Game",
        howToPlay: "How to Play",
        gameFeatures: "Game Features",
        relatedGames: "Related Games",
        // 分类页面特有内容
        categoriesHeading: "Game Categories",
        categoriesSubtitle: "Explore our wide selection of games by category",
        exploreAction: "Explore Action Games",
        exploreAdventure: "Explore Adventure Games",
        explorePuzzle: "Explore Puzzle Games",
        exploreStrategy: "Explore Strategy Games",
        exploreSports: "Explore Sports Games",
        exploreRacing: "Explore Racing Games",
        exploreRPG: "Explore RPG Games",
        exploreSimulation: "Explore Simulation Games",
        exploreCasual: "Explore Casual Games",
        playMinesweeper: "Play Mine Sweeper",
        morePuzzles: "More Puzzles"
    },
    zh: {
        home: "首页",
        categories: "游戏分类",
        popular: "热门游戏",
        about: "关于我们",
        contact: "联系我们",
        welcomeTitle: "欢迎来到GameHub - 免费在线游戏平台",
        welcomeSubtitle: "为各年龄段玩家提供最好的免费在线游戏，带给您无尽的乐趣。",
        browseGames: "浏览游戏",
        featuredGames: "精选游戏",
        gameCategories: "游戏分类",
        whyChoose: "为什么选择GameHub",
        copyright: "© 2023 GameHub. 保留所有权利。",
        // 扫雷游戏页面特有内容
        minesweeperTitle: "扫雷",
        playNow: "立即开始",
        aboutThisGame: "关于游戏",
        howToPlay: "游戏规则",
        gameFeatures: "游戏特点",
        relatedGames: "相关游戏",
        // 分类页面特有内容
        categoriesHeading: "游戏分类",
        categoriesSubtitle: "探索我们丰富的游戏分类",
        exploreAction: "探索动作游戏",
        exploreAdventure: "探索冒险游戏",
        explorePuzzle: "探索益智游戏",
        exploreStrategy: "探索策略游戏",
        exploreSports: "探索体育游戏",
        exploreRacing: "探索赛车游戏",
        exploreRPG: "探索角色扮演游戏",
        exploreSimulation: "探索模拟游戏",
        exploreCasual: "探索休闲游戏",
        playMinesweeper: "玩扫雷",
        morePuzzles: "更多益智游戏"
    },
    ja: {
        home: "ホーム",
        categories: "カテゴリー",
        popular: "人気ゲーム",
        about: "当サイトについて",
        contact: "お問い合わせ",
        welcomeTitle: "GameHubへようこそ - 無料オンラインゲーム",
        welcomeSubtitle: "あらゆる年齢層のプレイヤーに最高の無料オンラインゲームを提供します。",
        browseGames: "ゲームを探す",
        featuredGames: "おすすめゲーム",
        gameCategories: "ゲームカテゴリー",
        whyChoose: "GameHubを選ぶ理由",
        copyright: "© 2023 GameHub. 無断転載禁止。",
        // 扫雷游戏页面特有内容
        minesweeperTitle: "マインスイーパー",
        playNow: "今すぐプレイ",
        aboutThisGame: "このゲームについて",
        howToPlay: "遊び方",
        gameFeatures: "ゲームの特徴",
        relatedGames: "関連ゲーム",
        // 分类页面特有内容
        categoriesHeading: "ゲームカテゴリー",
        categoriesSubtitle: "様々なカテゴリーから選べるゲームを探索",
        exploreAction: "アクションゲームを探す",
        exploreAdventure: "アドベンチャーゲームを探す",
        explorePuzzle: "パズルゲームを探す",
        exploreStrategy: "戦略ゲームを探す",
        exploreSports: "スポーツゲームを探す",
        exploreRacing: "レーシングゲームを探す",
        exploreRPG: "RPGゲームを探す",
        exploreSimulation: "シミュレーションゲームを探す",
        exploreCasual: "カジュアルゲームを探す",
        playMinesweeper: "マインスイーパーをプレイ",
        morePuzzles: "その他のパズル"
    }
};

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Enable dark mode toggle if present
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Check for game iframes and set up responsive handling
    const gameIframes = document.querySelectorAll('.game-frame iframe');
    gameIframes.forEach(setupGameIframe);
    
    // Initialize mobile menu if present
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }

    // Initialize language selector
    initLanguageSelector();
    
    // Apply saved language if any
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }
});

/**
 * Toggle dark mode
 */
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    
    // Save preference to localStorage
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

/**
 * Check user preference for dark mode
 */
function checkDarkModePreference() {
    if (localStorage.getItem('darkMode') === 'enabled' || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches && 
         !localStorage.getItem('darkMode'))) {
        document.documentElement.classList.add('dark');
    }
}

// Check dark mode preference when script loads
checkDarkModePreference();

/**
 * Setup game iframe
 * @param {HTMLIFrameElement} iframe - The game iframe element
 */
function setupGameIframe(iframe) {
    // Handle iframe loading
    iframe.addEventListener('load', function() {
        // Remove any loading indicators
        const loadingIndicator = iframe.parentElement.querySelector('.loading-indicator');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
    });
    
    // Handle iframe focus for keyboard controls
    iframe.addEventListener('click', function() {
        this.focus();
    });
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

/**
 * Initialize language selector functionality
 */
function initLanguageSelector() {
    const languageButton = document.getElementById('language-menu-button');
    const languageMenu = document.getElementById('language-menu');
    const languageOptions = document.querySelectorAll('#language-menu a');
    const currentLanguageElement = document.getElementById('current-language');
    
    // Skip if language selector is not present in this page
    if (!languageButton || !languageMenu) return;
    
    // Toggle language menu
    languageButton.addEventListener('click', function() {
        languageMenu.classList.toggle('hidden');
        
        // Update aria-expanded attribute
        const expanded = languageMenu.classList.contains('hidden') ? 'false' : 'true';
        languageButton.setAttribute('aria-expanded', expanded);
    });
    
    // Close the menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!languageButton.contains(event.target) && !languageMenu.contains(event.target)) {
            languageMenu.classList.add('hidden');
            languageButton.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Handle language selection
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get selected language
            const lang = this.getAttribute('data-lang');
            const langText = this.textContent;
            
            // Update displayed language
            currentLanguageElement.textContent = langText;
            
            // Store language preference
            localStorage.setItem('preferredLanguage', lang);
            
            // Apply language change
            changeLanguage(lang);
            
            // Close the menu
            languageMenu.classList.add('hidden');
            languageButton.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Load saved language preference if available
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        const matchingOption = document.querySelector(`#language-menu a[data-lang="${savedLanguage}"]`);
        if (matchingOption) {
            currentLanguageElement.textContent = matchingOption.textContent;
            changeLanguage(savedLanguage);
        }
    }
}

/**
 * Change the language of the website
 * @param {string} lang - The language code (en, zh, ja)
 */
function changeLanguage(lang) {
    // If translations for this language don't exist, default to English
    if (!translations[lang]) {
        lang = 'en';
    }
    
    // Update navigation menu items
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Home link
        if (href.endsWith('index.html') || href === './' || href === '../') {
            link.textContent = translations[lang].home;
        }
        // Categories link
        else if (href.includes('categories.html')) {
            link.textContent = translations[lang].categories;
        }
        // Popular games link
        else if (href.includes('popular.html')) {
            link.textContent = translations[lang].popular;
        }
        // About link
        else if (href.includes('about.html')) {
            link.textContent = translations[lang].about;
        }
        // Contact link
        else if (href.includes('contact.html')) {
            link.textContent = translations[lang].contact;
        }
    });
    
    // Update hero section
    const heroTitle = document.querySelector('.py-16 h1');
    if (heroTitle) {
        heroTitle.textContent = translations[lang].welcomeTitle;
    }
    
    const heroSubtitle = document.querySelector('.py-16 p.text-xl');
    if (heroSubtitle) {
        heroSubtitle.textContent = translations[lang].welcomeSubtitle;
    }
    
    const browseButton = document.querySelector('.py-16 a.bg-apple-green');
    if (browseButton) {
        browseButton.textContent = translations[lang].browseGames;
    }
    
    // Update section headings
    const featuredGamesHeading = document.querySelector('.py-12 h2.text-3xl');
    if (featuredGamesHeading) {
        featuredGamesHeading.textContent = translations[lang].featuredGames;
    }
    
    const gameCategoriesHeading = document.querySelectorAll('.py-12 h2.text-3xl');
    if (gameCategoriesHeading && gameCategoriesHeading.length > 1) {
        gameCategoriesHeading[1].textContent = translations[lang].gameCategories;
    }
    
    const whyChooseHeading = document.querySelectorAll('.py-12 h2.text-3xl');
    if (whyChooseHeading && whyChooseHeading.length > 2) {
        whyChooseHeading[2].textContent = translations[lang].whyChoose;
    }
    
    // Update footer copyright
    const copyright = document.querySelector('footer p');
    if (copyright) {
        copyright.textContent = translations[lang].copyright;
    }
    
    // 扫雷游戏页面特有翻译
    // 游戏标题
    const gameTitle = document.querySelector('.text-3xl.md\\:text-4xl.font-bold.mb-3');
    if (gameTitle && gameTitle.textContent.includes('Mine Sweeper')) {
        gameTitle.textContent = translations[lang].minesweeperTitle;
    }
    
    // Play Now按钮
    const playNowButton = document.querySelector('a.bg-apple-green.hover\\:bg-opacity-90.text-white.font-bold.py-3.px-6.rounded-lg');
    if (playNowButton) {
        playNowButton.textContent = translations[lang].playNow;
    }
    
    // 游戏详情页各个标题
    const sectionTitles = document.querySelectorAll('h2.text-xl, h2.text-2xl');
    sectionTitles.forEach(title => {
        const titleText = title.textContent.trim();
        if (titleText === 'About This Game') {
            title.textContent = translations[lang].aboutThisGame;
        } else if (titleText === 'How to Play') {
            title.textContent = translations[lang].howToPlay;
        } else if (titleText === 'Game Features') {
            title.textContent = translations[lang].gameFeatures;
        } else if (titleText === 'Related Games') {
            title.textContent = translations[lang].relatedGames;
        }
    });

    // 分类页面特有翻译
    // 分类页面标题
    const categoriesHeading = document.getElementById('categories-heading');
    if (categoriesHeading) {
        categoriesHeading.textContent = translations[lang].categoriesHeading;
    }
    
    // 分类页面副标题
    const categoriesSubtitle = document.getElementById('categories-subtitle');
    if (categoriesSubtitle) {
        categoriesSubtitle.textContent = translations[lang].categoriesSubtitle;
    }
    
    // 分类页面按钮
    const exploreBtns = document.querySelectorAll('.bg-apple-red, .bg-apple-blue, .bg-apple-green, .bg-apple-purple, .bg-apple-orange, .bg-apple-teal, .bg-apple-indigo, .bg-apple-pink, .bg-apple-yellow');
    exploreBtns.forEach(btn => {
        const btnText = btn.textContent.trim();
        if (btnText.includes('Explore Action Games')) {
            btn.textContent = translations[lang].exploreAction;
        } else if (btnText.includes('Explore Adventure Games')) {
            btn.textContent = translations[lang].exploreAdventure;
        } else if (btnText.includes('Explore Puzzle Games')) {
            btn.textContent = translations[lang].explorePuzzle;
        } else if (btnText.includes('Explore Strategy Games')) {
            btn.textContent = translations[lang].exploreStrategy;
        } else if (btnText.includes('Explore Sports Games')) {
            btn.textContent = translations[lang].exploreSports;
        } else if (btnText.includes('Explore Racing Games')) {
            btn.textContent = translations[lang].exploreRacing;
        } else if (btnText.includes('Explore RPG Games')) {
            btn.textContent = translations[lang].exploreRPG;
        } else if (btnText.includes('Explore Simulation Games')) {
            btn.textContent = translations[lang].exploreSimulation;
        } else if (btnText.includes('Explore Casual Games')) {
            btn.textContent = translations[lang].exploreCasual;
        } else if (btnText.includes('Play Mine Sweeper')) {
            btn.textContent = translations[lang].playMinesweeper;
        } else if (btnText.includes('More Puzzles')) {
            btn.textContent = translations[lang].morePuzzles;
        }
    });
} 