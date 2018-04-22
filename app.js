(function() {

  /*
   * constants
   */

  /** イベントにつける名前空間の名前を定義 */
  const NAMESPACE = 'modal';

  /** buttonにmodelを紐つける時に使用するdata属性の名前 */
  const DATA_KEY = 'bs.button';

  const DATA_KEY_HP = 'hp';

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
    var _hp = 0;

    /** クラス */
    function Button(element, hp) {
      this._element = element;
      this._hp = hp
    };

    /** 何度もButton.prototypeが出てくるのを防ぐ */
    _proto = Button.prototype;

    _proto.status = function() {
      console.log('私のhpは' + this._hp + 'です');
    }

    /** static: this(jquery object)を指定して実行 */
    // button modelへの操作は、基本的にここを介して行われる
    // そして、あとでこれはjqueryから参照できるようなmethodにしておく
    // そうしたら、外部スクリプトから実行できるようになる
    Button._jQueryInterface = function _jQueryInterface(apiType) {
      this.each(function() {
        /** この中で、thisはelement */
        /** modelの取得 */
        let model = $(this).data(DATA_KEY);
        let hp    = $(this).data(DATA_KEY_HP);

        /** modelがなければmodelの生成 */
        if (!model) {
          model = new Button(this, hp);
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
  // ここでobjectの初期化出来ないかな？ hpをひょうじしたりとか
  $(document)
    .ready(function(e) {
      /** 文書が読み込まれた時の初期化処理: どうしたらはしるのかな */
      console.log(e);
    })
    .on(Event.CLICK, Selecter.DATA_TOGGLE, function() {
      /** 呼ぶだけ */
      // eventがあったjqueryオブジェクトを渡す */
      /** イベントとinterfaceを紐つけている */
      Button._jQueryInterface.call($(this), 'status');
//    })
//    .on(Event.CLICK, Selecter.DATA_TOGGLE, function() {
//
//
    });
})();
