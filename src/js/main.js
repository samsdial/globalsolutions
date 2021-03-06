/*jshint strict:true, browser:true, jquery:true */
$(function() {
    // slider slick home
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.services').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });
    // slider slick home
    $('.multi-item').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });


    /*******************
        main  navigation
    ********************/
    var contentSections = $('main section');
    //open navigation on mobile
    $('.nav_trigger').on('click', function(){
        $('header').toggleClass('nav-is-visible');
    });
});
