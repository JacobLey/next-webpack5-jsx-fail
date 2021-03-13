(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 452:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport default export from named module */ _app_cjs__WEBPACK_IMPORTED_MODULE_0__; }
/* harmony export */ });
/* harmony import */ var _app_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(522);


/***/ }),

/***/ 522:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const React = __webpack_require__(297);
const { default: App } = __webpack_require__(26);

module.exports = class CustomApp extends App {
    render() {
        const { Component } = this.props;
        const props = this.props.pageProps
        return React.createElement(Component, props);
    }
}


/***/ }),

/***/ 26:
/***/ (function(module) {

"use strict";
module.exports = require("next/app.js");;

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
var __webpack_exports__ = __webpack_require__.X([], 452);
module.exports = __webpack_exports__;
})();