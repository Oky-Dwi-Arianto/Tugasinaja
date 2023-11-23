$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#whatsapp-button').fadeIn();
        } else {
            $('#whatsapp-button').fadeOut();
        }
    });
    $('#whatsapp-button a').click(function (e) {
        e.preventDefault();
        var targetHref = $(this).attr('href');
        window.location.href = targetHref;
    });
});