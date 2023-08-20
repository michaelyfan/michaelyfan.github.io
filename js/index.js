// Scroll animations
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 150
      }, 500, function(){

      });
    }
  });
});

// Sticky navbar
var navbar = $("#nav");
var stickyClass = "nav-sticky";

$(window).scroll(function() {
  var headerHeight = $('#header-section').height();
  if( $(this).scrollTop() > headerHeight ) {
    navbar.addClass(stickyClass);
  } else {
    navbar.removeClass(stickyClass);
  }
});