(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 238:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ CustomApp; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/app.js"
var app_js_namespaceObject = require("next/app.js");;
var app_js_default = /*#__PURE__*/__webpack_require__.n(app_js_namespaceObject);
;// CONCATENATED MODULE: ../app.js
var __jsx = (external_react_default()).createElement;


class CustomApp extends (app_js_default()) {
  render() {
    const {
      Component
    } = this.props;
    const props = this.props.pageProps;
    return __jsx(Component, props);
  }

}
;// CONCATENATED MODULE: ./pages/_app.js


/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../chunks/webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exports__ = __webpack_require__.X([], 238);
module.exports = __webpack_exports__;
})();