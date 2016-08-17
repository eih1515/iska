/*smooth-scrolling*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



/* animated*/
$('.js-1').waypoint(function(direction) {
    $('.js-1').addClass('animated fadeInDown');
},{
    offset:'50%'
});


$('.js-2').waypoint(function(direction) {
    $('.js-2').addClass('animated fadeInRightBig');
},{
    offset:'50%'
});


$('.js-3').waypoint(function(direction) {
    $('.js-3').addClass('animated fadeInLeftBig');
},{
    offset:'50%'
});

$('.js-4').waypoint(function(direction) {
    $('.js-4').addClass('animated fadeInLeftBig');
},{
    offset:'50%'
});




/* MixitUp*/
// On document ready:

$(function(){

	// Instantiate MixItUp:

	$('#Container').mixItUp();

});



$(document).ready(

  function() { 

    $("html").niceScroll( {
        cursorcolor: '#f39c12', 
        cursorborder: '1px solid #f39c12'
        
    });

  }

);

