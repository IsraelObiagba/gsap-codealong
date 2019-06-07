(function($) {
    
	var img = $('img'),
		header = $('h2'),
		intro = $('.intro');


	// Simple Tween

	/*
	Important methods to note:

	TweenLite.to(), TweenLite.from(), TweenLite.fromTo(), and delay
	*/

	// Sequence: this, then...
	TweenLite.from(img, 5, {x: 700});
	TweenLite.from(header, 2, {x: -700});
	TweenLite.fromTo(img, 3, {y: -500}, {y: 0});

	// ...this, after the ones atthe top are completed
	TweenLite.from(intro, 3, {autoAlpha: 0, delay: 4});

})(jQuery);