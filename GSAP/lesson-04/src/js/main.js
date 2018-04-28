(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		list1 = $('.list li:first-of-type'),
		i = 0,
		body = $('body');

	// Simple Callback Functions
	TweenLite.from( img, 1, {
		x: -200, 
		ease:Power1.easeInOut,
		onStart: onBegin,
		onUpdate: inProgress,
		onComplete: whenFinished
	});
	

	function onBegin() {
		console.log("I have started");
		TweenLite.from(list1, 2, {x: -400});
	}

	function inProgress() {
		console.log("I'm in progress dude!");
	}

	function whenFinished() {
		console.log("I'm done before you say Jack Robinson ;)");
		// $('body').css("background-color", "gold");
		TweenLite.to(body, 11, {backgroundColor: "pink"});
	}

})(jQuery);