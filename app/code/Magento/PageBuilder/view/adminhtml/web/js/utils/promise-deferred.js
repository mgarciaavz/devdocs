/*eslint-disable */
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

define([], function () {
  /**
   * Copyright © Magento, Inc. All rights reserved.
   * See COPYING.txt for license details.
   */

  /**
   * Returns a deferred promise
   *
   * @returns {DeferredInterface}
   * @api
   */
  function deferred() {
    var resolve;
    var reject;
    var promise = new Promise(function (promiseResolve, promiseReject) {
      resolve = promiseResolve;
      reject = promiseReject;
    });
    return {
      resolve: resolve,
      reject: reject,
      promise: promise
    };
  }

  return _extends(deferred, {
    __esModule: true
  });
});
//# sourceMappingURL=promise-deferred.js.map
