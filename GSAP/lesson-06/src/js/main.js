(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		tl = new TimelineLite();

	// Adding Tweens To A Timeline
	tl
		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.add('rollability')
		.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'rollability+=2')
		.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 5)
		.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 3)
		.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'rollability');

})(jQuery);