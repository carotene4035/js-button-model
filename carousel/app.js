// 矢印に対してclickイベントを実装
var NAMESPACE = 'bs.carousel'

var Selector = {
  SLIDE: '[data-slide]'
};

var Event = {
  CLICK: 'click' + '.' + NAMESPACE
};

$(document).on(Event.CLICK, Selector.SLIDE, function() {
  console.log('スライド要素を見つけた');
});
