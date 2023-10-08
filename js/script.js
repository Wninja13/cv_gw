
document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill-bar .progress');
    
    const checkScroll = function() {
        skills.forEach(skill => {
            const position = skill.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position <= screenHeight) {
                const width = skill.getAttribute('data-width');
                skill.style.width = width;
            }
        });
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});
