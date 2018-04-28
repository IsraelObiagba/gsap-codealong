(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		buttons = $('button'),
		tl = new TimelineLite();

	// Staggering Animations
	tl
		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		// .staggerFrom(buttons, 0.5, {x: 200, ease:Power1.easeIn}, 0.25)
		// .staggerTo(buttons, 0.5, {x: 200, ease:Power1.easeIn}, 0.25)
		// .staggerTo(buttons, 0.5, {x: -20, ease:Power1.easeIn}, 0.25)
		// .staggerFromTo(buttons, 0.5, 
		// 						{x: 10, autoAlpha: 0},
		// 						{x: -20, autoAlpha: 1, ease:Power1.easeIn}, 0.25)
		.staggerFrom(buttons, 2, {cycle: {
			x: [50, -50],
			scale: [75, 2.5]
		}, autoAlpha: 0, ease:Power1.easeIn}, 1);

	$('#btnPlay').on('click',function(){
		tl.play();
	});

	$('#btnPause').on('click',function(){
		tl.pause();
	});

	$('#btnResume').on('click',function(){
		tl.resume();
	});

	$('#btnReverse').on('click',function(){
		tl.reverse();
	});

	$('#btnSpeedUp').on('click',function(){
		tl.timeScale(8);
	});

	$('#btnSlowDown').on('click',function(){
		tl.timeScale(0.5);
	});

	$('#btnSeek').on('click',function(){
		tl.seek(1);
	});

	$('#btnProgress').on('click',function(){
		tl.progress(0.5);
	});

	$('#btnRestart').on('click',function(){
		tl.restart();
	});

})(jQuery);






