(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		tl = new TimelineLite();

	// Controlling Timeline Playback
	tl
		.from(h1, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.add('intro')
		.from(intro, 2, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(img, 1.5, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro')
		.from(h2, 2.5, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro+=3')
		.from(listItem, 1.7, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro');

	tl.pause();

	$('#btnPlay').on('click', function() {
		tl.play();
	});

	$('#btnPause').on('click', function() {
		tl.pause();
	});

	$('#btnResume').on('click', function() {
		tl.resume();
	});

	$('#btnReverse').on('click', function() {
		tl.reverse();
	});

	$('#btnSpeedUp').on('click', function() {
		tl.timeScale(3);
	});

	$('#btnSlowDown').on('click', function() {
		tl.timeScale(0.5);
	});

	$('#btnSeek').on('click', function() {
		// tl.seek('intro');
		tl.seek(1);
	});

	$('#btnProgress').on('click', function() {
		tl.progress(0.5); //gies to 50% of the animation
	});

	$('#btnRestart').on('click', function() {
		tl.restart();
	});

})(jQuery);






