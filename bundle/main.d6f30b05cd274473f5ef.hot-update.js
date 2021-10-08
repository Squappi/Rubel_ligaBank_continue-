"use strict";
self["webpackHotUpdatedmitry_rubel_ligabank"]("main",{

/***/ "./project/src/index.js":
/*!******************************!*\
  !*** ./project/src/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_app_App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app/App.jsx */ "./project/src/components/app/App.jsx");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var _store_root_reduser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/root-reduser.js */ "./project/src/store/root-reduser.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './store/api-actions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











if (!localStorage.getItem('history')) {
  localStorage.setItem('history', JSON.stringify([]));
}

var store = (0,redux__WEBPACK_IMPORTED_MODULE_9__.createStore)(_store_root_reduser_js__WEBPACK_IMPORTED_MODULE_6__.default, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_5__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_9__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_4__.default)));
store.dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module './store/api-actions.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.StrictMode, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: store,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_app_App_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {})
  })
}), document.getElementById('root'));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("366513d214e894cf0689")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d6f30b05cd274473f5ef.hot-update.js.map