document.addEventListener('DOMContentLoaded', function() {
    const skillsBars = document.querySelectorAll('.skill-bar .progress');
    const skills = document.querySelectorAll('.skill');

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

    skills.forEach(skill => {
        // Animación de sombra y rotación basada en la posición del cursor
        skill.addEventListener('mousemove', (e) => {
            let width = skill.offsetWidth;
            let height = skill.offsetHeight;

            // Calcula la posición del cursor respecto al centro del elemento
            let offsetX = 0.5 - (e.offsetX / width);
            let offsetY = 0.5 - (e.offsetY / height);

            // Usa esas coordenadas para aplicar una transformación y sombra
            skill.style.transform = `rotateY(${offsetX * 40}deg) rotateX(${offsetY * 40}deg)`;
            skill.style.boxShadow = `${-offsetX * 30}px ${offsetY * 30}px 15px rgba(0, 0, 0, 0.3)`;
        });

        // Cuando el cursor deja la tarjeta, restablece el estilo
        skill.addEventListener('mouseleave', (e) => {
            skill.style.transform = '';
            skill.style.boxShadow = '';
        });
    });

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});
