jQuery(document).ready(function () {

jQuery('a[href^="#"').on('click', function() {

    let href = jQuery(this).attr('href');

    jQuery('html, body').animate({
        scrollTop: jQuery(href).offset().top
    },1500);
    return false;
});


jQuery(document).on("click", ".go_to_top", function(e) {
    e.preventDefault();
    jQuery('body, html').animate({scrollTop: 0}, 1500);
});
});

