(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 174:
/***/ ((module) => {

"use strict";
module.exports = require("next/app.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(689);
const { default: App } = __webpack_require__(174);

module.exports = class CustomApp extends App {
    render() {
        const { Component } = this.props;
        const props = this.props.pageProps
        return React.createElement(Component, props);
    }
}


/***/ }),

/***/ 551:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default export from named module */ _app_cjs__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _app_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358);



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(551));
module.exports = __webpack_exports__;

})();