document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const mouseFollower = document.getElementById('mouse-follower');

    // --- Page Navigation Logic ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor link behavior
            
            const targetPageId = link.dataset.page;

            // Update active state on nav links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');

            // Show the target page and hide others
            pages.forEach(page => {
                if (page.id === targetPageId) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });
        });
    });

    // --- Dynamic Mouse Follower Effect ---
    window.addEventListener('mousemove', (e) => {
        // Using transform is more performant than updating top/left
        const { clientX, clientY } = e;
        mouseFollower.style.transform = `translate(${clientX}px, ${clientY}px)`;
    });
    
    // --- Set Current Year in Footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});