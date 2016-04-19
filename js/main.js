var $enterR = $('.enter-r');

var $enterL = $('.enter-l');

$enterR.waypoint(function (direction) {
	if (direction == 'down') {
		$enterR.addClass('js-enter-r-animate');
	} else {
		$enterR.removeClass('js-enter-r-animate');
	}
}, {offset: '50%' });

$enterL.waypoint(function (direction) {
	if (direction == 'down') {
		$enterL.addClass('js-enter-l-animate');
	} else {
		$enterL.removeClass('js-enter-l-animate');
	}
}, {offset: '50%' });