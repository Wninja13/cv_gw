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
