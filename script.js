// Ждем, когда DOM полностью загрузится
document.addEventListener('DOMContentLoaded', () => {
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