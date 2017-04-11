$(document).ready(function() {
    $('#link-sera').click(function() {
        $('body').animate({scrollTop: $('#sera').offset().top-80});
        return false;
    });

    $('#link-proj').click(function() {
        $('body').animate({scrollTop: $('#projects').offset().top-80});
        return false;
    });

    $('#link-work').click(function() {
        $('body').animate({scrollTop: $('#work').offset().top-80});
        return false;
    });

    $('#link-skills').click(function() {
        $('body').animate({scrollTop: $('#skills').offset().top-80});
        return false;
    });
})
