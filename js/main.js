var $body = $('body');
var $enterRight = $('.enter-right');
var $enterLeft = $('.enter-left');
var $trait = $('.trait');
var $grow = $('.grow');
var $pChart = $('.p-chart');
var $chartDiv = $('.chart-div');
var $chart = $('.chart');
var $chartHeader = $('.chart-header');

$enterRight.waypoint(function (direction) {
  if (direction == 'down') {
    $enterRight.addClass('translate-right-brain');
  } else {
    $enterRight.removeClass('translate-right-brain');
  }
}, {offset: '90%'});

$enterLeft.waypoint(function (direction) {
  if (direction == 'down') {
    $enterLeft.addClass('translate-left-brain');
  } else {
    $enterLeft.removeClass('translate-left-brain');
  }
}, {offset: '90%'});

$trait.on('click', function () {
  $(this).toggleClass('grow');
});

$chartDiv.hover(function () {
  $pChart.toggleClass('move-p-down');
  $chart.toggleClass('chart-grow');
  $chartHeader.toggleClass('push-chart');
});
