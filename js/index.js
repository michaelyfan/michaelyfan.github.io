$(document).ready(function(){
  $('.black-overlay').fadeOut(1000);

  $("a").on('click', function(event) {
    if (this.hash !== "") {

      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // window.location.hash = hash;
      });
    }
  });
});

var yourNavigation = $(".nav");
var stickyDiv = "nav-sticky";
var yourHeader = $('#header-section').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    yourNavigation.addClass(stickyDiv);
  } else {
    yourNavigation.removeClass(stickyDiv);
  }
});

// var TitleChanger = {
// 	titles: [
//     'michael <span style="color:purple;" >fan</span>',
//     '<span style="color:purple;" >student</span>',
//     '<span style="color:purple;" >designer</span>',
//     '(noob) <span style="color:purple;"> developer',
//     'late-night <span style="color:purple;" >gamer</span>',
//     '<span style="color:purple;" >master</span> home chef'
// 	],
//   count: 1,
//   changeTitle: function() {
//     var title = "<p id='title-text'>" + this.titles[this.count] + "</p>";
//     this.count++;
//     if (this.count >= this.titles.length) {
//       this.count = 0;
//     }

//     $('#title-text').fadeOut(300, function() {
//       var t = $(title).hide();
//       $(this).replaceWith(t);
//       $('#title-text').fadeIn(300);
//     });

//   }
// };

// var handlers = {
// 	changeTitle: function() {
// 		TitleChanger.changeTitle();
// 	}
// };
