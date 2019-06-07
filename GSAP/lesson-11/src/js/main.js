(function($) {

	var box = $('.box'),
		boxSVG = $('#boxSVG'),
		boxHTML = $('#boxHTML'),
		htmlDot = $('#htmlDOT'),
		htmlText = $('#htmlTEXT'),
		svgDot = $('#boxSVG .circ'),
		line = $('.line'),
		buttonOne = $('#btnNext'),
		buttonTwo = $('#btnPrev'),
		gratitudeText = $('.thanks'),
		tl = new TimelineLite({paused: true});

	// Transformation Points - SVG and HTML
	tl
		.to(boxHTML, 0.7, {x: '100%', y: '100%', ease:Power2.easeInOut})
		.to(boxSVG, 0.7, {x: '100%', y: '100%', ease:Power2.easeInOut})
		// .addPause()

		.to(boxHTML, 0.7, {left: '50%', top: '50%', ease:Power2.easeInOut})
		.to(boxSVG, 0.7, {left: '50%', top: '50%', ease:Power2.easeInOut})
		// .addPause()

		.to(boxHTML, 0.7, {left: '50%', top: '50%', x: '-50%', y: '-50%', ease:Power2.easeInOut})
		.to(htmlDOT, 0.7, {left: 0, top: 0, ease:Power2.easeInOut})
		// .addPause()

		.to(boxSVG, 0.7, {left: '50%', top: '50%', x: '-50%', y: '-50%', ease:Power2.easeInOut})
		.to(svgDot, 0.7, {attr: {cx: 0, cy: 0}, ease:Power2.easeInOut})
		// .addPause()

		.to(boxHTML, 0.7, {rotation: 90, transformOrigin: '100% 100%', ease:Power2.easeInOut})
		// .addPause()

		.to(boxSVG, 0.7, {rotation: 90, transformOrigin: '100% 100%', ease:Power2.easeInOut})
		// .addPause()

		.to(boxHTML, 0.7, {xPercent: -100, rotation: 0, ease:Power2.easeInOut})
		// .addPause()

		.to(boxSVG, 0.7, {x: '0%', rotation: 0, ease:Power2.easeInOut})
		// .addPause()

		.to(htmlDOT, 0.7, {left: '50%', top: '50%', ease:Power2.easeInOut})
		.to(svgDot, 0.7, {attr: {cx: 100, cy: 100}, ease:Power2.easeInOut}, '-=0.7')
		// .addPause()

		.to([boxSVG,boxHTML], 0.7, {rotation: 720, transformOrigin: '50% 50%', ease:Power2.easeInOut})
		// .addPause()

		.to(boxHTML, 0.7, {rotationX: -180, transformOrigin: '0% 50%', ease:Power2.easeInOut})
		.to(boxSVG, 0.7, {rotationY: -180, transformOrigin: '100% 50%', ease:Power2.easeInOut})
		// .addPause()

		.to(boxHTML, 0.7, {rotationX: -360, ease:Power2.easeInOut})
		.to(boxSVG, 0.7, {rotationY: -360, ease:Power2.easeInOut})
		.to([boxHTML, boxSVG], 0.7, {left: '50%', top: '50%', x: '-50%', y: '-50%', ease:Power2.easeInOut})
		.set([boxHTML, boxSVG], {rotation: 0})
		.to([boxHTML, boxSVG], 2, {rotation: 720, transformOrigin: '50% 50%', ease:new SlowMo(0, 0.9), yoyo: true})
		.set([boxHTML, boxSVG], {rotation: 0})
		.to([boxHTML, boxSVG], 0.7, {rotation: 1080, transformOrigin: '50% 50%',ease:Power2.easeInOut})
		.to([boxSVG, line, buttonOne, buttonTwo], 0.7, {width: 0, autoAlpha: 0, ease:Power2.easeInOut}, '-=0.7')
		.to([htmlDOT, htmlText], 0.7, {width: 0, autoAlpha: 0, ease:Power2.easeInOut}, '-=0.7')
		.to(boxHTML, 0.7, {borderRadius: '50%', autoAlpha: 1, backgroundColor: '#2b4d66', ease:Power2.easeInOut}, '-=0.7')
		.to(boxHTML, 0.001, {borderRadius: 0, ease:Power2.easeInOut})
		.to(boxHTML, 0.14, {width: '100vw', height: '100vh', ease:Power2.easeInOut})
		.to(gratitudeText, 0.7, {autoAlpha: 1, ease:Power2.easeInOut}, '-=0.14');

	$('#btnNext').on('click',function(){
		tl.play();
	});

	$('#btnPrev').on('click',function(){
		tl.reverse();
	});

})(jQuery);






