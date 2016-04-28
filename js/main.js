var $body = $('body');
var $enterRight = $('.enter-right');
var $enterLeft = $('.enter-left');
var $trait = $('.trait');
var $grow = $('.grow');
var $pChart = $('.p-chart');
var $chartDiv = $('.chart-div');
var $chart = $('.chart');
var $chartHeader = $('.chart-header');
var $pChart2 = $('.p-chart2');
var $chartDiv2 = $('.chart-div2');
var $chart2 = $('.chart2');
var $chartHeader2 = $('.chart-header2');
var $vanish = $('.vanish');

$trait.on('click', function () {
  $(this).toggleClass('grow');
});

$chartDiv.hover(function () {
  $pChart.toggleClass('move-p-down');
  $chart.toggleClass('chart-grow');
  $chartHeader.toggleClass('push-chart');
});

$chartDiv2.hover(function () {
  $pChart2.toggleClass('move-p-down');
  $chart2.toggleClass('chart-grow');
  $chartHeader2.toggleClass('push-chart');
});

$vanish.waypoint(function (direction) {
  if (direction == 'down') {
    $vanish.addClass('js-vanish-animate');
  } else {
    $vanish.removeClass('js-vanish-animate');
  }
}, {offset: '90%'});
