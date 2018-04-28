(function($) {
    
	// JS code goes here
	var title = $('#header h1'),
	    intro = $('.intro'),
	 	headerImg = $('#header img'),
	 	tableHeader = $('header h2'),
	 	list1 = $('.list li:first-of-type'),
	 	list2 = $('.list li:nth-of-type(2)'),
	 	list3 = $('.list li:nth-of-type(3)'),
	 	list4 = $('.list li:nth-of-type(4)'),
	 	list5 = $('.list li:last-of-type');

	function letsFade(el, duration) {
		 return TweenLite.from(el, duration, {opacity: 0, y: 50});
	}

	letsFade(title, .5);
	letsFade(intro, 1);
	letsFade(headerImg, 1.5);
	letsFade(tableHeader, 2);
	letsFade(list1, 2.5);
	letsFade(list2, 3);
	letsFade(list3, 3.5);
	letsFade(list4, 4);
	letsFade(list5, 4.5);

})(jQuery);