document.querySelector('.menu-btn').addEventListener('click',() => {

document.querySelector('.nav-menu').classList.toggle('show');
});

document.querySelector('ul.nav-menu').addEventListener('dblclick',() => {

    document.querySelector('.nav-menu').classList.toggle('show');
    });
    ScrollReveal().reveal('.showcase',{delay: 500});
    ScrollReveal().reveal('.newcard',{delay: 500});
    ScrollReveal().reveal('.banner1',{delay: 500});
    ScrollReveal().reveal('.banner2',{delay: 500});