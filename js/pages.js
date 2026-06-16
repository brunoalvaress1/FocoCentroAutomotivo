(function () {
    const header = document.querySelector('header');
    const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

    function applyHeaderState() {
        if (!header) return;
        if (isHome) {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        } else {
            header.classList.add('scrolled');
        }
    }

    applyHeaderState();
    window.addEventListener('scroll', applyHeaderState);

    const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const navLinks = document.querySelectorAll('.menu a');

    navLinks.forEach((link) => {
        const href = (link.getAttribute('href') || '').toLowerCase();
        if (href === current) {
            link.classList.add('active-link');
        }
    });
})();
