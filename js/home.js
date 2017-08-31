$(document).ready(function() {
    $('#background-fade').fadeOut(1000);
});

var TitleChanger = {
	titles: [
    'michael <span style="color:purple;" >fan</span>',
    '<span style="color:purple;" >student</span>',
    '<span style="color:purple;" >designer</span>',
    '(noob) <span style="color:purple;"> developer',
    'late-night <span style="color:purple;" >gamer</span>',
    '<span style="color:purple;" >master</span> home chef'
	],
  count: 1,
  changeTitle: function() {
    var title = "<p id='title-text'>" + this.titles[this.count] + "</p>";
    this.count++;
    if (this.count >= this.titles.length) {
      this.count = 0;
    }

    $('#title-text').fadeOut(300, function() {
      var t = $(title).hide();
      $(this).replaceWith(t);
      $('#title-text').fadeIn(300);
    });

  }
};

var handlers = {
	changeTitle: function() {
		TitleChanger.changeTitle();
	}
};
