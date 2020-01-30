$(function() {
// --------- home --------- //
    // --------- header -------- //
    $('#header-nav').hide();
    $('.fa-times').hide();

    $('.fa-angle-down').click(function() {
        $('#header-nav').slideDown();
        $('.fa-angle-down').hide();
        $('.fa-times').show();
    });

    $('.fa-times').click(function() {
        $('#header-nav').slideUp();
        $('.fa-times').hide();
        $('.fa-angle-down').show();
    });
    // -------- top menu --------- //
    $('.menu').click(function() {
        var page = $(this).find('h2').text() + '.html';
        window.location.href = page;
    });

    // -------- works image hover --------- //
    $('.img-hover').hide();

    $('.portfolio-img').hover(
        function() {
            $(this).find('.img-hover').fadeIn(300);
        },
        function() {
            $(this).find('.img-hover').fadeOut(300);
        }
    );

    $('.work a').click(function() {
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
            'scrollTop' : position
        }, 500);
    });
});