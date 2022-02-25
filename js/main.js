$(document).ready(function(){

    $(window).scroll(function(){
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    })

    $('.menu-btn').click(function(){
        $('.navbar .nav-menu').toggleClass("active");
        $('.menu-btn i').toggleClass('active');
    });
    
    var hovering = function(){
        $('.navbar.sticky').show("slide", {direction: "top"}, 1000);
    };
    var leaving = function(){
        $("navbar.sticky").hide("slide", { direction: "left" }, 1000);
    };
    $('.nav-section').hover(hovering, leaving);

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
})