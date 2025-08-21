// Система переводов
const translations = {
    ru: {
        'page-title': 'Игровой портал: Авиамастер и Мины',
        'select-language': 'Выберите язык',
        'lang-russian': 'Русский',
        'lang-english': 'English',
        'lang-turkish': 'Türkçe',
        'best-games': 'ЛУЧШИЕ ИГРЫ',
        'promo-text': '+500% к депозиту и 70 FS по промокоду oazisww',
        'popular-games': 'ПОПУЛЯРНЫЕ ИГРЫ',
        'aviator-title': 'АВИАМАСТЕР',
        'aviator-desc': 'Взлетай и выигрывай!',
        'mines-title': 'МИНЫ',
        'mines-desc': 'Найди сокровища, избегая мин!',
        'start-playing': 'НАЧНИ ИГРАТЬ СЕЙЧАС',
        'join-players': 'Присоединяйся к тысячам игроков и выигрывай реальные призы!',
        'join-telegram': 'Присоединиться к Телеграм',
        'start-game': 'НАЧАТЬ ИГРУ',
        'instant-payouts': 'Моментальные выплаты',
        'game-security': 'Безопасность игры',
        'new-player-bonuses': 'Бонусы новым игрокам',
        'footer-text': '© 2025 Пора побеждать!'
    },
    en: {
        'page-title': 'Gaming Portal: Aviator and Mines',
        'select-language': 'Select Language',
        'lang-russian': 'Русский',
        'lang-english': 'English',
        'lang-turkish': 'Türkçe',
        'best-games': 'BEST GAMES',
        'promo-text': '+500% deposit bonus and 70 FS with promo code oazisww',
        'popular-games': 'POPULAR GAMES',
        'aviator-title': 'AVIATOR',
        'aviator-desc': 'Take off and win!',
        'mines-title': 'MINES',
        'mines-desc': 'Find treasures, avoid mines!',
        'start-playing': 'START PLAYING NOW',
        'join-players': 'Join thousands of players and win real prizes!',
        'join-telegram': 'Join Telegram',
        'start-game': 'START GAME',
        'instant-payouts': 'Instant Payouts',
        'game-security': 'Game Security',
        'new-player-bonuses': 'New Player Bonuses',
        'footer-text': '© 2025 Time to win!'
    },
    tr: {
        'page-title': 'Oyun Portalı: Aviator ve Mayınlar',
        'select-language': 'Dil Seçin',
        'lang-russian': 'Русский',
        'lang-english': 'English',
        'lang-turkish': 'Türkçe',
        'best-games': 'EN İYİ OYUNLAR',
        'promo-text': 'oazisww promosyon kodu ile %500 depozito bonusu ve 70 FS',
        'popular-games': 'POPÜLER OYUNLAR',
        'aviator-title': 'AVIATOR',
        'aviator-desc': 'Uç ve kazan!',
        'mines-title': 'MAYINLAR',
        'mines-desc': 'Hazineleri bul, mayınlardan kaçın!',
        'start-playing': 'ŞİMDİ OYNAMAYA BAŞLA',
        'join-players': 'Binlerce oyuncuya katıl ve gerçek ödüller kazan!',
        'join-telegram': 'Telegram\'a Katıl',
        'start-game': 'OYUNA BAŞLA',
        'instant-payouts': 'Anında Ödemeler',
        'game-security': 'Oyun Güvenliği',
        'new-player-bonuses': 'Yeni Oyuncu Bonusları',
        'footer-text': '© 2025 Kazanma zamanı!'
    }
};

// Функции для работы с языками
const LanguageManager = {
    currentLanguage: 'ru',
    
    init() {
        this.loadSavedLanguage();
        this.setupEventListeners();
        this.checkFirstVisit();
    },
    
    loadSavedLanguage() {
        const savedLang = localStorage.getItem('selectedLanguage');
        if (savedLang && translations[savedLang]) {
            this.currentLanguage = savedLang;
            this.applyTranslations(savedLang);
            this.updateLanguageSwitcher(savedLang);
        }
    },
    
    checkFirstVisit() {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            this.showLanguageModal();
        }
    },
    
    showLanguageModal() {
        const modal = document.getElementById('languageModal');
        if (modal) {
            modal.classList.add('show');
        }
    },
    
    hideLanguageModal() {
        const modal = document.getElementById('languageModal');
        if (modal) {
            modal.classList.remove('show');
        }
        localStorage.setItem('hasVisited', 'true');
    },
    
    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('selectedLanguage', lang);
            this.applyTranslations(lang);
            this.updateLanguageSwitcher(lang);
            this.hideLanguageModal();
        }
    },
    
    applyTranslations(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'TITLE') {
                    element.textContent = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Обновляем lang атрибут HTML
        document.documentElement.lang = lang;
    },
    
    updateLanguageSwitcher(lang) {
        const currentLangSpan = document.getElementById('currentLang');
        if (currentLangSpan) {
            const langCodes = { ru: 'RU', en: 'EN', tr: 'TR' };
            currentLangSpan.textContent = langCodes[lang] || 'RU';
        }
    },
    
    setupEventListeners() {
        // Обработчики для кнопок выбора языка в модальном окне
        const languageButtons = document.querySelectorAll('.language-btn');
        languageButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
        
        // Обработчик для кнопки переключения языка
        const languageSwitcher = document.getElementById('languageSwitcher');
        if (languageSwitcher) {
            languageSwitcher.addEventListener('click', () => {
                this.showLanguageModal();
            });
        }
        
        // Закрытие модального окна при клике вне его
        const modal = document.getElementById('languageModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideLanguageModal();
                }
            });
        }
    }
};

// Ждем, когда DOM полностью загрузится
document.addEventListener('DOMContentLoaded', () => {
    // Инициализируем систему языков
    LanguageManager.init();
    // Получаем элементы страницы
    const gameCards = document.querySelectorAll('.game-card');
    const buttons = document.querySelectorAll('.btn');
    const heroContent = document.querySelector('.hero-content');
    const featuresSection = document.querySelector('.features-section');
    
    // Анимация героя при загрузке
    setTimeout(() => {
        heroContent.classList.add('animated');
    }, 300);
    
    // Функция для создания частиц (для эффекта "Авиамастер")
    const createParticles = (parentElement, count = 20) => {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Рандомные стили для частиц
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${2 + Math.random() * 4}s`;
            particle.style.animationDelay = `${Math.random() * 2}s`;
            particle.style.opacity = `${0.3 + Math.random() * 0.7}`;
            particle.style.width = particle.style.height = `${3 + Math.random() * 7}px`;
            
            parentElement.appendChild(particle);
        }
    };
    
    // Добавляем частицы к игровой карточке "Авиамастер"
    const aviatorCard = document.getElementById('aviator');
    if (aviatorCard) {
        createParticles(aviatorCard);
    }
    
    // Эффект свечения для карточек при наведении
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Создаем элемент свечения
            const glow = document.createElement('div');
            glow.className = 'card-glow';
            card.appendChild(glow);
            
            // Удаляем эффект свечения при выходе курсора
            card.addEventListener('mouseleave', () => {
                if (glow && glow.parentNode === card) {
                    card.removeChild(glow);
                }
            }, { once: true });
        });
        
        // Эффект клика для карточек
        card.addEventListener('click', () => {
            // Направляем на страницу начала игры при клике на карточку
            window.location.href = 'https://1wjpvy.life/casino/list?open=register&p=m7ub';
        });
    });
    
    // Добавление эффекта нажатия для кнопок
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'translateY(3px) scale(0.97)';
            button.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = '';
            button.style.boxShadow = '';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
            button.style.boxShadow = '';
        });
        
        // Добавление эффекта свечения при наведении
        button.addEventListener('mouseover', () => {
            button.classList.add('btn-hover');
        });
        
        button.addEventListener('mouseout', () => {
            button.classList.remove('btn-hover');
        });
    });
    
    // Эффект параллакса для героя
    const heroParallax = (e) => {
        const hero = document.querySelector('.hero');
        const x = (e.clientX - window.innerWidth / 2) / 50;
        const y = (e.clientY - window.innerHeight / 2) / 50;
        
        hero.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
    };
    
    // Эффект параллакса для карточек игр
    const cardsParallax = (e) => {
        gameCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;
            
            const moveX = (e.clientX - cardCenterX) / 20;
            const moveY = (e.clientY - cardCenterY) / 20;
            
            card.style.transform = `perspective(1000px) rotateY(${moveX * 0.5}deg) rotateX(${-moveY * 0.5}deg) translateZ(10px)`;
            
            // Создаем эффект движения для оверлея
            const overlay = card.querySelector('.game-overlay');
            if (overlay) {
                overlay.style.transform = `translateX(${moveX * 0.1}px) translateY(${moveY * 0.1}px)`;
            }
        });
    };
    
    // Добавляем эффекты параллакса только на десктопах
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', heroParallax);
        document.addEventListener('mousemove', cardsParallax);
    }
    
    // Отслеживание ориентации устройства для мобильных
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            document.removeEventListener('mousemove', heroParallax);
            document.removeEventListener('mousemove', cardsParallax);
            gameCards.forEach(card => {
                card.style.transform = '';
                const overlay = card.querySelector('.game-overlay');
                if (overlay) {
                    overlay.style.transform = '';
                }
            });
        } else {
            document.addEventListener('mousemove', heroParallax);
            document.addEventListener('mousemove', cardsParallax);
        }
    });
    
    // Анимация появления элементов при скролле
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature, .cta-section');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };
    
    // Запускаем анимацию при скролле
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Запускаем один раз при загрузке
    
    // Метрики и аналитика для кнопок
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log(`Клик по кнопке: ${btn.querySelector('.btn-text')?.textContent || btn.textContent.trim()}`);
            
            // Здесь можно добавить код для интеграции с Google Analytics или другими системами
        });
    });
});