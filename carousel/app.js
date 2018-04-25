;(function() {

  // 矢印に対してclickイベントを実装
  var NAMESPACE = 'carousel';

  var Selector = {
    SLIDE: '[data-slide]'
  };

  var Event = {
    CLICK: 'click' + '.' + NAMESPACE
  };

  var DATA_KEY = 'bs.carousel';


  var Carousel = (function() {
    /** private */
    function Carousel(element) {
      this._element = element;
      /** カルーセル内の要素 */
      this._datas = [
        "aaa",
        "bbb",
        "ccc"
      ];
      this._currentIndex = 1;
    }

    Carousel.prototype.next = function() {
      console.log('next');
      this._currentIndex = (this._currentIndex + 1) % this._datas.length;
      $(this._element).text(this._datas[this._currentIndex]);
    }

    Carousel.prototype.prev = function() {
      console.log('prev');
      this._currentIndex = (this._currentIndex - 1) % this._datas.length;
      $(this._element).text(this._datas[this._currentIndex]);
    }

    /** api */


    /** コンストラクタを返す */
    return Carousel;
  })();




  /** どっちに動かしたいかを受け取る */
  $(document).on(Event.CLICK, Selector.SLIDE, function() {
    l($(this).data('slide'));

    /** どちらに動かしたいか */
    var direction = $(this).data('slide');
    var target = $(this).data('target');


    /** カルーセルオブジェクトの初期化 */
    var model = $(target).data(DATA_KEY);

    if (!model) {
      /** カルーセルオブジェクトの初期化 */
      model = new Carousel(target);
      /** binding */
      $(target).data(DATA_KEY, model);
    }

    if (direction == 'prev') {
      model.prev();
    } else if (direction == 'next') {
      model.next();
    }
  });

  var l = function(m) {
    console.log(m)
  }

})();
