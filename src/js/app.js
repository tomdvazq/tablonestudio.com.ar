function openNav(){
    let menu = document.getElementById('labelMenu');
    let navLinks = document.getElementById('navContainer');

    menu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    })
}

openNav();