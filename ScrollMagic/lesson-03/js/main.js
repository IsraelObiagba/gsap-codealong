$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// Loopthrough each .project element
	$('.project').each(function() {

		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			// duration: '60%',
			triggerHook: 0.9
			// reverse: false
		})
		.setClassToggle(this, 'fade-in') // add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			indent: 200,
			colorStart: '#75C695',
			colorEnd: 'gold'
		}) // this requires a plugin
		.addTo(controller);
	});

});


















