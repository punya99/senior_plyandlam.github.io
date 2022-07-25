$(document).ready(function() {
    var owl = $('.storyslidesmtn');
    owl.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        margin: 40,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: false
            },
            300: {
                items: 1,
                nav: false,
                dots: true,
                loop: false
            },

            766: {
                items: 1,
                nav: false,
                dots: true,
                loop: false
            },

            1200: {
                items: 1,
                nav: false,
                dots: true,
                loop: false
            }
        }
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [3000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })


})


$(function($) {
    let url = window.location.href;
    $('.mainsite .navbar-nav li a').each(function() {
        if (this.href === url) {
            $(this).parent('.mainsite .navbar-nav li').addClass('active');
        }
    });
});

$(".menurights").click(function(e) {
    e.stopPropagation();
    $(".innelnks").toggleClass('showit');
});

$(".menurights").click(function(e) {
    e.stopPropagation();
    $(".menurights").toggleClass('showcrs');
});



/* js for page loader */

const loaderEl = document.getElementsByClassName('fullpage-loader')[0];
document.addEventListener('readystatechange', (event) => {
    // const readyState = "interactive";
    const readyState = "complete";

    if (document.readyState == readyState) {
        // when document ready add lass to fadeout loader
        loaderEl.classList.add('fullpage-loader--invisible');

        // when loader is invisible remove it from the DOM
        setTimeout(() => {
            loaderEl.parentNode.removeChild(loaderEl);
        }, 3000)
    }
});