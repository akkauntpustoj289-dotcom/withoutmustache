document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    // Добавляем интерактивность: при клике карточка "разворачивается"
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Удаляем класс у всех, чтобы раскрыть только одну за раз
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });


    // Плавная анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Находим все элементы для анимации
    const animatedElements = document.querySelectorAll('.card, .timeline-item, .intro');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
