
const sectionsWithSubpoints = document.querySelectorAll('section');


sectionsWithSubpoints.forEach(section => {
    section.addEventListener('click', () => {
        
        const subpoints = section.querySelector('ul');
        if (subpoints) {
            subpoints.classList.toggle('visible');
        }
    });
});