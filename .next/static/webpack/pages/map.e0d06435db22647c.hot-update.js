"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/map",{

/***/ "./src/Components/AddMarkerStylings.js":
/*!*********************************************!*\
  !*** ./src/Components/AddMarkerStylings.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst customStyles = {\n    content: {\n        top: \"50%\",\n        left: \"50%\",\n        right: \"auto\",\n        bottom: \"auto\",\n        marginRight: \"-50%\",\n        transform: \"translate(-50%, -50%)\"\n    }\n};\n// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)\nconst AddMarkerStyling = ()=>{\n    _s();\n    let subtitle;\n    const [modalIsOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    function openModal() {\n        setIsOpen(true);\n    }\n    function afterOpenModal() {\n        // references are now sync'd and can be accessed.\n        subtitle.style.color = \"#f00\";\n    }\n    function closeModal() {\n        setIsOpen(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: openModal,\n                children: \"Open Modal\"\n            }, void 0, false, {\n                fileName: \"/Users/vishnupatel/ou-mapz-10/src/Components/AddMarkerStylings.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n                isOpen: modalIsOpen,\n                onAfterOpen: afterOpenModal,\n                onRequestClose: closeModal,\n                style: customStyles,\n                contentLabel: \"Example Modal\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Event Name:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vishnupatel/ou-mapz-10/src/Components/AddMarkerStylings.js\",\n                                lineNumber: 45,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vishnupatel/ou-mapz-10/src/Components/AddMarkerStylings.js\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        ref: (_subtitle)=>subtitle = _subtitle,\n                        children: \"Hello\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnupatel/ou-mapz-10/src/Components/AddMarkerStylings.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: closeModal,\n                        children: \"close\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnupatel/ou-mapz-10/src/Components/AddMarkerStylings.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"I am a modal\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnupatel/ou-mapz-10/src/Components/AddMarkerStylings.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {}, void 0, false, {\n                                fileName: \"/Users/vishnupatel/ou-mapz-10/src/Components/AddMarkerStylings.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"tab navigation\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vishnupatel/ou-mapz-10/src/Components/AddMarkerStylings.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"stays\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vishnupatel/ou-mapz-10/src/Components/AddMarkerStylings.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"inside\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vishnupatel/ou-mapz-10/src/Components/AddMarkerStylings.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"the modal\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vishnupatel/ou-mapz-10/src/Components/AddMarkerStylings.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vishnupatel/ou-mapz-10/src/Components/AddMarkerStylings.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vishnupatel/ou-mapz-10/src/Components/AddMarkerStylings.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vishnupatel/ou-mapz-10/src/Components/AddMarkerStylings.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddMarkerStyling, \"EOxo+0MXKxyCdUCTWpcfchJ0gFI=\");\n_c = AddMarkerStyling;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddMarkerStyling);\nvar _c;\n$RefreshReg$(_c, \"AddMarkerStyling\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9BZGRNYXJrZXJTdHlsaW5ncy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDTTtBQUVoQyxNQUFNRSxlQUFlO0lBQ25CQyxTQUFTO1FBQ1BDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsYUFBYTtRQUNiQyxXQUFXO0lBQ2I7QUFDRjtBQUVBLHFHQUFxRztBQUVyRyxNQUFNQyxtQkFBbUI7O0lBQ3ZCLElBQUlDO0lBQ0osTUFBTSxDQUFDQyxhQUFhQyxVQUFVLEdBQUdiLHFEQUFjLENBQUM7SUFFaEQsU0FBU2U7UUFDUEYsVUFBVTtJQUNaO0lBRUEsU0FBU0c7UUFDUCxpREFBaUQ7UUFDakRMLFNBQVNNLEtBQUssQ0FBQ0MsS0FBSyxHQUFHO0lBQ3pCO0lBRUEsU0FBU0M7UUFDUE4sVUFBVTtJQUNaO0lBRUEscUJBQ0UsOERBQUNPOzswQkFDQyw4REFBQ0M7Z0JBQU9DLFNBQVNQOzBCQUFXOzs7Ozs7MEJBQzVCLDhEQUFDZCxvREFBS0E7Z0JBQ0pzQixRQUFRWDtnQkFDUlksYUFBYVI7Z0JBQ2JTLGdCQUFnQk47Z0JBQ2hCRixPQUFPZjtnQkFDUHdCLGNBQWE7O2tDQUVmLDhEQUFDQzs7NEJBQU07MENBQ1AsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7a0NBRXRCLDhEQUFDQzt3QkFBR0MsS0FBSyxDQUFDQyxZQUFldEIsV0FBV3NCO2tDQUFZOzs7Ozs7a0NBQ2hELDhEQUFDWjt3QkFBT0MsU0FBU0g7a0NBQVk7Ozs7OztrQ0FDN0IsOERBQUNDO2tDQUFJOzs7Ozs7a0NBQ0wsOERBQUNjOzswQ0FDQyw4REFBQ047Ozs7OzBDQUNELDhEQUFDUDswQ0FBTzs7Ozs7OzBDQUNSLDhEQUFDQTswQ0FBTzs7Ozs7OzBDQUNSLDhEQUFDQTswQ0FBTzs7Ozs7OzBDQUNSLDhEQUFDQTswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBM0NNWDtLQUFBQTtBQTRDTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0FkZE1hcmtlclN0eWxpbmdzLmpzP2EwZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5cbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBib3R0b206ICdhdXRvJyxcbiAgICBtYXJnaW5SaWdodDogJy01MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gIH0sXG59O1xuXG4vLyBNYWtlIHN1cmUgdG8gYmluZCBtb2RhbCB0byB5b3VyIGFwcEVsZW1lbnQgKGh0dHBzOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LW1vZGFsL2FjY2Vzc2liaWxpdHkvKVxuXG5jb25zdCBBZGRNYXJrZXJTdHlsaW5nID0gKCk9PiB7XG4gIGxldCBzdWJ0aXRsZTtcbiAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRJc09wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICBzZXRJc09wZW4odHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZnRlck9wZW5Nb2RhbCgpIHtcbiAgICAvLyByZWZlcmVuY2VzIGFyZSBub3cgc3luYydkIGFuZCBjYW4gYmUgYWNjZXNzZWQuXG4gICAgc3VidGl0bGUuc3R5bGUuY29sb3IgPSAnI2YwMCc7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIHNldElzT3BlbihmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5Nb2RhbH0+T3BlbiBNb2RhbDwvYnV0dG9uPlxuICAgICAgPE1vZGFsXG4gICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XG4gICAgICAgIG9uQWZ0ZXJPcGVuPXthZnRlck9wZW5Nb2RhbH1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9XG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIkV4YW1wbGUgTW9kYWxcIlxuICAgICAgPlxuICAgICAgPGxhYmVsPkV2ZW50IE5hbWU6XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxoMiByZWY9eyhfc3VidGl0bGUpID0+IChzdWJ0aXRsZSA9IF9zdWJ0aXRsZSl9PkhlbGxvPC9oMj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZU1vZGFsfT5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8ZGl2PkkgYW0gYSBtb2RhbDwvZGl2PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8aW5wdXQgLz5cbiAgICAgICAgICA8YnV0dG9uPnRhYiBuYXZpZ2F0aW9uPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj5zdGF5czwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24+aW5zaWRlPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj50aGUgbW9kYWw8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEFkZE1hcmtlclN0eWxpbmc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsImN1c3RvbVN0eWxlcyIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJtYXJnaW5SaWdodCIsInRyYW5zZm9ybSIsIkFkZE1hcmtlclN0eWxpbmciLCJzdWJ0aXRsZSIsIm1vZGFsSXNPcGVuIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJvcGVuTW9kYWwiLCJhZnRlck9wZW5Nb2RhbCIsInN0eWxlIiwiY29sb3IiLCJjbG9zZU1vZGFsIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImlzT3BlbiIsIm9uQWZ0ZXJPcGVuIiwib25SZXF1ZXN0Q2xvc2UiLCJjb250ZW50TGFiZWwiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJoMiIsInJlZiIsIl9zdWJ0aXRsZSIsImZvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/AddMarkerStylings.js\n"));

/***/ })

});