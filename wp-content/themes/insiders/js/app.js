document.addEventListener('DOMContentLoaded', () => {
    //empty links
    document.addEventListener('click', (event) => {
        if (event.target.matches('a[href="#"]')) {
            event.preventDefault();
        }
    }, false);

    const navigationToggle = document.querySelector('.navigation-toggle');
    const body = document.querySelector('body');

    navigationToggle.addEventListener('click', (event) => {
        event.preventDefault();
        body.classList.toggle('navigation-open');
    })

    const navigationLinks = document.querySelectorAll('.menu a');

    for (let index = 0; index < navigationLinks.length; index++) {
        const element = navigationLinks[index];
        element.addEventListener('click', () => {
            body.classList.remove('navigation-open');
        });
    }

    const header = document.querySelector('.header-site');

    function scrollState() {
        if (window.scrollY > 1) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    }

    scrollState();
    window.addEventListener('scroll', scrollState);
}); //DOMContentLoaded

