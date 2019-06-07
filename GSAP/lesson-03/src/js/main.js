(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		list1 = $('.list li:first-of-type');
		list2 = $('.list li:nth-of-type(2)');
		list3 = $('.list li:nth-of-type(3)');
		list4 = $('.list li:nth-of-type(4)');
		list5 = $('.list li:nth-of-type(5)');
		list6 = $('.list li:last-of-type');

	// Simple Tween
	TweenLite.from(img, 1, {x: -200, ease:Power4.easeIn}); //other options: easeNone, easeIn, easeOut
	TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1, ease:Power2.easeOut, delay: 2});

	//Ease Pack extra easing in action
	TweenLite.from(list1, 1, {x: 200, ease:Back.easeInOut, delay: 1});
	TweenLite.from(list2, 1, {x: -200, ease:Bounce.easeIn, delay: 1});
	TweenLite.from(list3, 1, {x: 200, ease:Circ.easeOut, delay: 1});
	TweenLite.from(list4, 1, {x: -200, ease:Elastic.easeIn, delay: 1});
	TweenLite.from(list5, 1, {x: 200, ease:Expo.easeInOut, delay: 1});
	TweenLite.from(list6, 1, {x: -200, ease: SlowMo.ease.config(0.1, 2, false), delay: 1}); //other: Bounce

})(jQuery);