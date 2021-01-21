$(function() {
    $('#check').show();
    $('#main_page').hide();

    $('.yes').click(function() {
        $('#check').hide();
        $('#main_page').show();
    })
});

AOS.init();

var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});


$(function() {
    $('nav li a').click(function() {
        $('nav li a').removeClass();
        $(this).addClass('on');
    });
});

$(function() {
    $('.bt1').click(function() {
        $('#bpop1').bPopup({
            follow: [false, false],
            position: [360, 11380],
            modalClose: true,
            transition: 'slideDown'
        });
    });
});

$(function() {
    $('.bt2').click(function() {
        $('#bpop2').bPopup({
            follow: [false, false],
            position: [360, 12230],
            modalClose: true,
            transition: 'slideDown'
        });
    });
});

$(function() {
    $('.bt3').click(function() {
        $('#bpop3').bPopup({
            follow: [false, false],
            position: [360, 13080],
            modalClose: true,
            transition: 'slideDown'
        });
    });
});