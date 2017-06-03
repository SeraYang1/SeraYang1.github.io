$(document).ready(function() {
  var cw = $('#white-circle-border').width();
  $('#white-circle-border').css({'height':cw+'px'});


  var cw = $('.company-circle-border').width();
  $('.company-circle-border').css({'height':cw+'px'});


    $('#link-sera').click(function() {
        $('body').animate({
            scrollTop: $('#sera').offset().top - 30
        });
        return false;
    });

    $('#link-proj').click(function() {
        $('body').animate({
            scrollTop: $('#projects').offset().top - 30
        });
        return false;
    });

    $('#link-work').click(function() {
        $('body').animate({
            scrollTop: $('#work').offset().top - 30
        });
        return false;
    });
});
