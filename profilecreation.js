document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    const contentSections = document.querySelectorAll('.content-section');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            //this prevents the default event from happening. 
           event.preventDefault()

            // Add active class to the clicked link
            link.classList.add('active');
            contentSections.forEach(section => section.classList.add('active'));

            // Remove active class from all links and content sections
            links.forEach(l=> l.classList.remove ('active'));

            
            // Show the corresponding content section
            const contentId = link.getAttribute('data-content');
            document.getElementById(contentId).classList.add('active');
        });
    });
});