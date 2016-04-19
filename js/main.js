var $body = $('body');
var $enterRight = $('.enter-right');
var $enterLeft = $('.enter-left');
var $trait = $('.trait');
var $grow = $('.grow');

$enterRight.waypoint(function (direction) {
  if (direction == 'down') {
    $enterRight.addClass('translate-right-brain');
  } else {
    $enterRight.removeClass('translate-right-brain');
  }
});

$enterLeft.waypoint(function (direction) {
  if (direction == 'down') {
    $enterLeft.addClass('translate-left-brain');
  } else {
    $enterLeft.removeClass('translate-left-brain');
  }
});

$trait.on('click', function () {
  $(this).toggleClass('grow');
});