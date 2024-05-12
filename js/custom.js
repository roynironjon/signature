$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


let open = document.querySelector('.open');
let close = document.querySelector('.close-btn');
let megamenu = document.querySelector('.meaga-menu');

open.addEventListener('click', function(){
    megamenu.classList.add('show-mega-menu');
});
close.addEventListener('click', function(){
    megamenu.classList.remove('show-mega-menu');
});
