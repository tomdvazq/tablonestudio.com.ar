// Hamburguer menú

function openNav() {
    let menu = document.getElementById('labelMenu');
    let navLinks = document.getElementById('navContainer');

    menu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
};

// Window Scroll

function windowScroll() {
    if (window.scroll != 0) {
        window.addEventListener('scroll', () => {
            let header = document.getElementById('header');
            let menu = document.getElementById('labelMenu');

            header.classList.toggle('active', window.scrollY > 0);
            menu.classList.toggle('active', window.scrollY > 0);
        });
    };
};

export{openNav};
export{windowScroll};