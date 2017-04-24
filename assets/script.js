$(document).ready(function() {
    $('#alexa-nutrition-body').hide();
    $('#hangman-body').hide();
    $('#escape-body').hide();

    $('#alexa-nutrition-tools').hide();
    $('#hangman-tools').hide();
    $('#escape-tools').hide();

    $('#link-sera').click(function() {
        $('body').animate({
            scrollTop: $('#sera').offset().top - 80
        });
        return false;
    });

    $('#link-proj').click(function() {
        $('body').animate({
            scrollTop: $('#projects').offset().top - 80
        });
        return false;
    });

    $('#link-work').click(function() {
        $('body').animate({
            scrollTop: $('#work').offset().top - 80
        });
        return false;
    });

    $('#link-skills').click(function() {
        $('body').animate({
            scrollTop: $('#skills').offset().top - 80
        });
        return false;
    });

    $('#alexa-nutrition').click(function() {
        $('#alexa-nutrition-body').show();
        $('#hangman-body').hide();
        $('#escape-body').hide();
    });

    $('#hangman').click(function() {
        $('#alexa-nutrition-body').hide();
        $('#hangman-body').show();
        $('#escape-body').hide();
    });

    $('#escape').click(function() {
        $('#alexa-nutrition-body').hide();
        $('#hangman-body').hide();
        $('#escape-body').show();
    });

    $('#alexa-nutrition').hover(function() {
        $('#alexa-nutrition-tools').show();
    }, function(){
      $('#alexa-nutrition-tools').hide();
    });


    $('#hangman').hover(function() {
        $('#hangman-tools').show();
    }, function() {
        $('#hangman-tools').hide();
    });

    $('#escape').hover(function() {
        $('#escape-tools').show();
    }, function(){
      $('#escape-tools').hide();
    });

})
