document.addEventListener('DOMContentLoaded', function() {
    const skillsBars = document.querySelectorAll('.skill-bar .progress');

    const checkScroll = function() {
        skillsBars.forEach(skillBar => {
            const position = skillBar.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position <= screenHeight) {
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = width;
            }
        });
    };

    // Asígnalo al evento scroll y también llámalo inicialmente para cubrir cualquier barra que pueda estar visible al cargar la página
    window.addEventListener('scroll', checkScroll);
    checkScroll();
});

document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.classList.add('animate__animated', 'animate__rubberBand');
        
        // Asegurarse de que la animación se pueda repetir quitando las clases después de que termina.
        this.addEventListener('animationend', function() {
            this.classList.remove('animate__animated', 'animate__rubberBand');
        });
    });
});
