/*eslint-disable */
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

define([], function () {
  /**
   * Copyright © Magento, Inc. All rights reserved.
   * See COPYING.txt for license details.
   */

  /**
   * @api
   */
  var Paddings =
  /*#__PURE__*/
  function () {
    function Paddings() {}

    var _proto = Paddings.prototype;

    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    _proto.fromDom = function fromDom(value) {
      var result = {};

      if (undefined !== value.padding) {
        result.padding = {
          top: value.padding.top.replace("px", ""),
          left: value.padding.left.replace("px", ""),
          right: value.padding.right.replace("px", ""),
          bottom: value.padding.bottom.replace("px", "")
        };
      }

      return result;
    };
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */


    _proto.toDom = function toDom(name, data) {
      var result = {};
      var value = data[name];

      if (value && typeof value === "string") {
        value = JSON.parse(value);
      }

      if (value && undefined !== value.padding) {
        result.paddingLeft = value.padding.left ? value.padding.left + "px" : "";
        result.paddingTop = value.padding.top ? value.padding.top + "px" : "";
        result.paddingRight = value.padding.right ? value.padding.right + "px" : "";
        result.paddingBottom = value.padding.bottom ? value.padding.bottom + "px" : "";
      }

      return result;
    };

    return Paddings;
  }();

  return _extends(Paddings, {
    __esModule: true
  });
});
//# sourceMappingURL=paddings.js.map
