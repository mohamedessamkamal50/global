$('.ser h2 span').click( function () {
    $(this).addClass('select').siblings().removeClass('select');

    $('.ser form').hide();

   $( '.' + $(this).data('class')).fadeIn(100);
});