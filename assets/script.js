$(document).ready(function() {
    $('#link-edu').click(function() {
        $('body').animate({scrollTop: $('#education').offset().top-120});
        return false;
    });

    $('#link-proj').click(function() {
        $('body').animate({scrollTop: $('#projects').offset().top-120});
        return false;
    });

    $('#link-work').click(function() {
        $('body').animate({scrollTop: $('#work').offset().top-120});
        return false;
    });

    $('#link-skills').click(function() {
        $('body').animate({scrollTop: $('#skills').offset().top-120});
        return false;
    });
})
