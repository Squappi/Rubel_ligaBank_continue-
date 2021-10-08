"use strict";
self["webpackHotUpdatedmitry_rubel_ligabank"]("main",{

/***/ "./project/src/store/api-actions.js":
/*!******************************************!*\
  !*** ./project/src/store/api-actions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoadConvers": () => (/* binding */ getLoadConvers),
/* harmony export */   "getLoadHistory": () => (/* binding */ getLoadHistory)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var URL = "http://data.fixer.io/api/latest?access_key=38f94aef9d1808fc956cac0e051d2edf&symbols=USD,EUR,RUB,GBP,CNY";
function getLoadConvers() {
  return function (dispatch) {
    return fetch(URL).then(function (res) {
      return res.json();
    }).then(function (data) {
      return dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module './actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data));
    });
  };
}
function getLoadHistory(date) {
  return function (dispatch) {
    return fetch("http://data.fixer.io/api/".concat(date, "?access_key=38f94aef9d1808fc956cac0e051d2edf&symbols=USD,EUR,RUB,GBP,CNY")).then(function (res) {
      return res.json();
    }).then(function (data) {
      return dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module './actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data));
    });
  };
}

/***/ }),

/***/ "./project/src/store/reducer.js":
/*!**************************************!*\
  !*** ./project/src/store/reducer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "converter": () => (/* binding */ converter)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var initialState = {
  converterLoad: [],
  converterHistory: []
};
var converter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, function (builder) {
  builder.addCase(Object(function webpackMissingModule() { var e = new Error("Cannot find module './actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function (state, action) {
    state.converterLoad = action.payload;
  }).addCase(Object(function webpackMissingModule() { var e = new Error("Cannot find module './actions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function (state, action) {
    state.converterHistory = action.payload;
  });
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d6f30b05cd274473f5ef")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0fb47b6ff7c7c905b298.hot-update.js.map