// まずは初期化
(function() {
  /*
   * constants
   */

  /** イベントにつける名前空間の名前を定義 */
  const NAMESPACE = 'modal';

  /** buttonにmodelを紐つける時に使用するdata属性の名前 */
  const DATA_KEY = 'bs.button';

  /** このライブラリの初期化対象 */
  const Selecter = {
    DATA_TOGGLE: 'button'
  };

  const Event = {
    CLICK: 'click' + '.' + NAMESPACE
  };


  /*
   * class definition
   */
  const Button = function() {
    /*
     * これ, closureだ。関数を返す関数だから
     * なんでclosureを使っているんだろう。。。
     */

    /** クラス */
    function Button(element) {
      this._element = element;
    };

    /** 何度もButton.prototypeが出てくるのを防ぐ */
    _proto = Button.prototype;

    _proto.alert = function() {
      alert('aaaaaaaaaaaaaa');
    }

    /** static: this(jquery object)を指定して実行 */
    // button modelへの操作は、基本的にここを介して行われる
    Button._jQueryInterface = function _jQueryInterface(apiType) {
      this.each(function() {
        /** この中で、thisはelement */
        /** modelの取得 */
        let model = $(this).data(DATA_KEY);

        if (!model) {
          model = new Button(this);
          $(this).data(DATA_KEY, model);
        }
        model[apiType]();
      });
    }
    return Button;
  }();


  /** buttonに紐付けするmodelの定義 */

  /** buttonにたいしてclickイベントを実装 */
  // classはあくまでcss適用のためのものなので、
  // data属性にbuttonであることを定義
  $(document)
    .on(Event.CLICK, Selecter.DATA_TOGGLE, function() {
      /** 呼ぶだけ */
      // eventがあったjqueryオブジェクトを渡す */
      Button._jQueryInterface.call($(this), 'alert');
//    })
//    .on(Event.CLICK, Selecter.DATA_TOGGLE, function() {
//
//
    });
})();
