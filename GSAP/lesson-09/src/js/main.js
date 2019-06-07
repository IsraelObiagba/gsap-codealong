(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		buttons = $('button'),
		tl = new TimelineLite({paused: true}),
		dot = $('.dot'),
		loader = $('#loader'),
		// tlLoader = new TimelineMax({repeat: -1}) infinite repeat
		tlLoader = new TimelineMax({repeat: 2, onComplete: loadContent});

	// TimelineLite vs TimelineMax
	tl
		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15');

	//Loader Timelite
	tlLoader
		.staggerFromTo(dot, 0.3, 
			{y: 0, autoAlpha: 0}, 
			{y: 20, autoAlpha: 1, ease:Back.easeInOut}, 
			0.05)
		.fromTo(loader, 0.3, 
			{autoAlpha: 1, scale: 1.3}, 
			{autoAlpha: 0, scale: 1, ease:Power0.easeNone}, 
			0.9);

	function loadContent() {
		alert("I am complete!");
	}

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






