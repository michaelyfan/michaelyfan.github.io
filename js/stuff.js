$(document).ready(function() {
    $('.hidden').fadeIn(750).removeClass('hidden');
});

var displayComingSoon = function() {
  event.preventDefault();
  alert('Coming soon!');
};

var handlers = {
  displayComingSoon: function() {
    displayComingSoon();
  }
};