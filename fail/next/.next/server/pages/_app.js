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
  "default": function() { return /* reexport */ app; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "next/app.js"
var app_js_namespaceObject = require("next/app.js");;
;// CONCATENATED MODULE: ../app.js
var __jsx = external_react_.createElement;


class CustomApp extends app_js_namespaceObject {
  render() {
    const {
      Component
    } = this.props;
    const props = this.props.pageProps;
    return __jsx(Component, props);
  }

}
/* harmony default export */ var app = (CustomApp);
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