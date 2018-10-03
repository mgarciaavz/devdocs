/*eslint-disable */
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

define(["mage/translate", "Magento_PageBuilder/js/content-type-menu/option"], function (_translate, _option) {
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  var HideShowOption =
  /*#__PURE__*/
  function (_Option) {
    _inheritsLoose(HideShowOption, _Option);

    /**
     * @param {OptionConfigInterface} options
     */
    function HideShowOption(options) {
      var _this;

      _this = _Option.call(this, options) || this; // Modify the icon when changes are made to display in the data store

      _this.preview.parent.dataStore.subscribe(_this.onDisplayChange.bind(_assertThisInitialized(_assertThisInitialized(_this))), "display");

      return _this;
    }
    /**
     * On display change update the title and icon
     *
     * @param {DataObject} state
     */


    var _proto = HideShowOption.prototype;

    _proto.onDisplayChange = function onDisplayChange(state) {
      var display = !!state.display;

      if (display) {
        this.icon(HideShowOption.hideIcon);
        this.title(HideShowOption.hideText);
      } else {
        this.icon(HideShowOption.showIcon);
        this.title(HideShowOption.showText);
      }
    };

    return HideShowOption;
  }(_option);

  HideShowOption.showText = (0, _translate)("Show");
  HideShowOption.showIcon = "<i class='icon-pagebuilder-show'></i>";
  HideShowOption.hideText = (0, _translate)("Hide");
  HideShowOption.hideIcon = "<i class='icon-pagebuilder-hide'></i>";
  return _extends(HideShowOption, {
    __esModule: true
  });
});
//# sourceMappingURL=hide-show-option.js.map
