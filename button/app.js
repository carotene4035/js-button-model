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
     * なんでclosureを使っているんだろう。。。状態保持のため？
     */
    var _hp = 0;

    /** クラス */
    function Button(element, hp) {
      console.log('生成されたよ, hp:' + hp);
      this._element = element;
      this._hp = hp
      /** ここもかっこわるい。。 */
      $(this._element).append('<p>' + this._hp + '</p>')
    };

    /** 何度もButton.prototypeが出てくるのを防ぐ */
    _proto = Button.prototype;

    _proto.status = function() {
      console.log('私のhpは' + this._hp + 'です');
    }

    _proto.attacked = function() {
      this._hp = this._hp - 1;
      /** modelの変更をviewに伝える処理を呼び出す */
      this._updateHp();
    }

    /** private */
    _proto._updateHp = function() {
      /** ここかっこ悪い */
      $(this._element).find('p').text(this._hp);
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

        /** modelを持っていなければ初期化する */
        if (!model) {
          model = new Button(this, hp);
          $(this).data(DATA_KEY, model);
        }

        /** 初期化処理以外のときはmodelのmethodを呼び出す */
        /** 本当は初期化処理をバッサリわけたいんだよなぁ。。。 */
        if (apiType !== 'init') {
          model[apiType]();
        }
      });
    }

    /** 関数を返している。
     * newされることにより、コンストラクタとして働き、インスタンスを返す */
    return Button;
  }();


  $(document)
    /*
     * buttonの初期化定義
     */
    .ready(function(e) {
      /** buttonオブジェクトの初期化処理 */
      Button._jQueryInterface.call($(Selecter.DATA_TOGGLE), 'init');
    })
    /*
     * buttonに対するイベント定義
     */
    .on(Event.CLICK, Selecter.DATA_TOGGLE, function() {
      /** 呼ぶだけ */
      Button._jQueryInterface.call($(this), 'attacked');
      //    })
      //    .on(Event.CLICK, Selecter.DATA_TOGGLE, function() {
      //
      //
    });
})();
