$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 450){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Frontend-Developer", "Programmer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Frontend-Developer", "Programmer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $(document).ready(function () {
        var owl = $('.carousel');
        owl.owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            loop: true,
        });

        $('.prev').click(function () {
            owl.trigger('prev.owl.carousel');
        });

        $('.next').click(function () {
            owl.trigger('next.owl.carousel');
        });
    });
});
