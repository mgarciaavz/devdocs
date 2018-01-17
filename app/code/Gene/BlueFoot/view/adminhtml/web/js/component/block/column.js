define(["./block", "jquery", "mage/translate", "../stage/structural/options/option"], function (_block, _jquery, _translate, _option) {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var Column =
  /*#__PURE__*/
  function (_Block) {
    _inheritsLoose(Column, _Block);

    function Column() {
      var _temp, _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_temp = _this = _Block.call.apply(_Block, [this].concat(args)) || this, _this.parent = void 0, _temp) || _this;
    }

    var _proto = Column.prototype;

    /**
     * Init the resize handle for the resizing functionality
     *
     * @param handle
     */
    _proto.initResizeHandle = function initResizeHandle(handle) {
      return this.parent.registerResizeHandle(this, (0, _jquery)(handle));
    };

    _createClass(Column, [{
      key: "options",

      /**
       * Return an array of options
       *
       * @returns {Array<Option>}
       */
      get: function get() {
        var options = _Block.prototype.options,
            newOptions = options.filter(function (option) {
          return option.code !== 'move';
        });
        newOptions.unshift(new _option.Option(this, 'move', '<i></i>', (0, _translate)('Move'), false, ['move-column'], 10));
        return newOptions;
      }
    }]);

    return Column;
  }(_block);

  return Column;
});
//# sourceMappingURL=column.js.map
