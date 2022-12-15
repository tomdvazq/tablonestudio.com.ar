function fx(){
    if (window.scrollY === 0) {
        window.sr = ScrollReveal();
    
        sr.reveal('.logo, .navbar', {
            duration: 1000,
            origin: 'bottom',
            distance: '-100px'
        });
    
        sr.reveal('.tablonEditado, .portfolioGraphic', {
            duration: 1000,
            origin: 'bottom',
            distance: '-1000px'
        })
    
        sr.reveal('.contentWelcome, .servicesGraphic, .comText', {
            duration: 1000,
            origin: 'right',
            distance: '-1000px'
        })
    
        sr.reveal('.servicesText, .portfolioText', {
            duration: 2000,
        })
    
        sr.reveal('.community', {
            duration: 3000,
        })
    }
}

export{fx};