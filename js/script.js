document.addEventListener('DOMContentLoaded', function() {
    const skillsBars = document.querySelectorAll('.skill-bar .progress');

    const animateNumber = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start) + '%';
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const checkScroll = function() {
        skillsBars.forEach(skillBar => {
            const position = skillBar.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            // Revisa si la barra ya ha sido animada
            if (skillBar.classList.contains('animated')) return;

            if (position <= screenHeight) {
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = width;

                // Anima el número
                const percentageElement = skillBar.querySelector('.percentage');
                animateNumber(percentageElement, 0, parseInt(width), 2000);

                // Marca la barra como animada
                skillBar.classList.add('animated');
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
