$(document).ready(function(){

	// Initiate ScroolMagic
	var controller = new ScrollMagic.Controller();

	//The magic begins with a scene ;)
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#project01'
	})

	//Add a class to #project01
	.setClassToggle('#project01', 'fade-in')
	// Helps us to debug our code
	.addIndicators({
		name: 'fade scene',
		colorTrigger: 'pink',
		indent: '200',
		colorStart: 'gold'
	})
	.addTo(controller);

});


















