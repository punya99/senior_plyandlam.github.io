$(window).width() > 1e3 && document.addEventListener("DOMContentLoaded", function() {
    var e = ["Home", "About Us", "Innovation", "Sustainability", "Products", "Channel Partners", "Careers"];
    new Swiper(".swiper-container", {
        loop: !0,
        speed: 1800,
        grabCursor: !1,
        mousewheel: !0,
        keyboard: {
            enabled: !0
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: !0,
            renderBullet: function(t, s) {
                return '<span class="' + s + '">' + e[t] + "</span>"
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    })
}), $(this).hasClass(".abouts.slick-slide.slick-current.slick-active") ? $(this).hasClass(".abouts.slick-slide") || $(".abts").removeClass("open") : $(".abts").toggleClass("open"), $(".menurights").click(function(e) {
    e.stopPropagation(), $(".innelnks").toggleClass("showit")
}), $(".menurights").click(function(e) {
    e.stopPropagation(), $(".menurights").toggleClass("showcrs")
});
const loaderEl = document.getElementsByClassName("fullpage-loader")[0];
document.addEventListener("readystatechange", e => {
    "complete" == document.readyState && (loaderEl.classList.add("fullpage-loader--invisible"), setTimeout(() => {
        loaderEl.parentNode.removeChild(loaderEl)
    }, 3e3))
});