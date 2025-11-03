document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('.hero, .features, .gallery, .downloads, footer');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        observer.observe(card);
    });

    // Observe gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        observer.observe(item);
    });

    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenus = document.querySelector('nav ul.nav-menus');

    if (menuToggle && navMenus) {
        menuToggle.addEventListener('click', () => {
            navMenus.classList.toggle('active');
            // Update aria-expanded attribute for accessibility
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!expanded));
        });
    }
});
