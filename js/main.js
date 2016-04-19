var $enterRight = $('.enter-right');
var $enterLeft = $('.enter-left');

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