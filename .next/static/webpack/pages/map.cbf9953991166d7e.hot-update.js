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

/***/ "./src/pages/map.js":
/*!**************************!*\
  !*** ./src/pages/map.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MyMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyMap */ \"./src/components/MyMap.jsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n// pages/map.js\n\nvar _s = $RefreshSig$();\n\n\n // Make sure these styles are set up to handle the layout\nconst MapPage = ()=>{\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\");\n    // Function to handle search input changes\n    const handleSearch = (e)=>{\n        setSearchTerm(e.target.value);\n    // Add search functionality here\n    };\n    // Function to handle filter selection changes\n    const handleFilter = (e)=>{\n        setFilter(e.target.value);\n    // Add filter functionality here\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().pageContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidebar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search...\",\n                        value: searchTerm,\n                        onChange: handleSearch,\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchInput)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mahno\\\\Documents\\\\ou-mapz\\\\src\\\\pages\\\\map.js\",\n                        lineNumber: 26,\n                        columnNumber: 1\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterSelect),\n                        value: filter,\n                        onChange: handleFilter,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"all\",\n                                children: \"All\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mahno\\\\Documents\\\\ou-mapz\\\\src\\\\pages\\\\map.js\",\n                                lineNumber: 38,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"restaurants\",\n                                children: \"Restaurants\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mahno\\\\Documents\\\\ou-mapz\\\\src\\\\pages\\\\map.js\",\n                                lineNumber: 39,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"schools\",\n                                children: \"Schools\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mahno\\\\Documents\\\\ou-mapz\\\\src\\\\pages\\\\map.js\",\n                                lineNumber: 40,\n                                columnNumber: 1\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mahno\\\\Documents\\\\ou-mapz\\\\src\\\\pages\\\\map.js\",\n                        lineNumber: 33,\n                        columnNumber: 1\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mahno\\\\Documents\\\\ou-mapz\\\\src\\\\pages\\\\map.js\",\n                lineNumber: 25,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().mapContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: \"OU Mapz\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mahno\\\\Documents\\\\ou-mapz\\\\src\\\\pages\\\\map.js\",\n                        lineNumber: 45,\n                        columnNumber: 1\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyMap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mahno\\\\Documents\\\\ou-mapz\\\\src\\\\pages\\\\map.js\",\n                        lineNumber: 46,\n                        columnNumber: 1\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mahno\\\\Documents\\\\ou-mapz\\\\src\\\\pages\\\\map.js\",\n                lineNumber: 44,\n                columnNumber: 1\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mahno\\\\Documents\\\\ou-mapz\\\\src\\\\pages\\\\map.js\",\n        lineNumber: 24,\n        columnNumber: 1\n    }, undefined);\n};\n_s(MapPage, \"JGjEKa62gMiFD8ofx3DxJYocoUc=\");\n_c = MapPage;\nvar _c;\n$RefreshReg$(_c, \"MapPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWFwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZUFBZTs7O0FBQ3lCO0FBQ0E7QUFDTyxDQUFDLHlEQUF5RDtBQUV6RyxNQUFNSSxVQUFVOztJQUNkLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFFckMsMENBQTBDO0lBQzFDLE1BQU1RLGVBQWUsQ0FBQ0M7UUFDcEJKLGNBQWNJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM1QixnQ0FBZ0M7SUFDbEM7SUFFQSw4Q0FBOEM7SUFDOUMsTUFDRkMsZUFBZSxDQUFDSDtRQUNoQkYsVUFBVUUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3hCLGdDQUFnQztJQUNoQztJQUVBLHFCQUNBLDhEQUFDRTtRQUFJQyxXQUFXWiw4RUFBb0I7OzBCQUNwQyw4REFBQ2M7Z0JBQU1GLFdBQVdaLHdFQUFjOztrQ0FDaEMsOERBQUNnQjt3QkFDTUMsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWlQsT0FBT1A7d0JBQ1BpQixVQUFVYjt3QkFDVk0sV0FBV1osNEVBQWtCOzs7Ozs7a0NBRXBDLDhEQUFDcUI7d0JBQ01ULFdBQVdaLDZFQUFtQjt3QkFDOUJTLE9BQU9MO3dCQUNQZSxVQUFVVDs7MENBRWpCLDhEQUFDYTtnQ0FBT2QsT0FBTTswQ0FBTTs7Ozs7OzBDQUNwQiw4REFBQ2M7Z0NBQU9kLE9BQU07MENBQWM7Ozs7OzswQ0FDNUIsOERBQUNjO2dDQUFPZCxPQUFNOzBDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXhCLDhEQUFDZTtnQkFBS1osV0FBV1osNkVBQW1COztrQ0FDcEMsOERBQUMwQjt3QkFBR2QsV0FBV1osc0VBQVk7a0NBQUU7Ozs7OztrQ0FDN0IsOERBQUNELHlEQUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTjtHQTVDTUU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21hcC5qcz9jMmYwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL21hcC5qc1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNeU1hcCBmcm9tICcuLi9jb21wb25lbnRzL015TWFwJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJzsgLy8gTWFrZSBzdXJlIHRoZXNlIHN0eWxlcyBhcmUgc2V0IHVwIHRvIGhhbmRsZSB0aGUgbGF5b3V0XHJcblxyXG5jb25zdCBNYXBQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJ2FsbCcpO1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgc2VhcmNoIGlucHV0IGNoYW5nZXNcclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyBBZGQgc2VhcmNoIGZ1bmN0aW9uYWxpdHkgaGVyZVxyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBmaWx0ZXIgc2VsZWN0aW9uIGNoYW5nZXNcclxuICBjb25zdFxyXG5oYW5kbGVGaWx0ZXIgPSAoZSkgPT4ge1xyXG5zZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUpO1xyXG4vLyBBZGQgZmlsdGVyIGZ1bmN0aW9uYWxpdHkgaGVyZVxyXG59O1xyXG5cclxucmV0dXJuIChcclxuPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGFpbmVyfT5cclxuPGFzaWRlIGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxyXG48aW5wdXRcclxuICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaElucHV0fVxyXG4gICAgIC8+XHJcbjxzZWxlY3RcclxuICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclNlbGVjdH1cclxuICAgICAgIHZhbHVlPXtmaWx0ZXJ9XHJcbiAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsdGVyfVxyXG4gICAgID5cclxuPG9wdGlvbiB2YWx1ZT1cImFsbFwiPkFsbDwvb3B0aW9uPlxyXG48b3B0aW9uIHZhbHVlPVwicmVzdGF1cmFudHNcIj5SZXN0YXVyYW50czwvb3B0aW9uPlxyXG48b3B0aW9uIHZhbHVlPVwic2Nob29sc1wiPlNjaG9vbHM8L29wdGlvbj5cclxuey8qIEFkZCBvdGhlciBmaWx0ZXIgb3B0aW9ucyBoZXJlICovfVxyXG48L3NlbGVjdD5cclxuPC9hc2lkZT5cclxuPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFwQ29udGFpbmVyfT5cclxuPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5PVSBNYXB6PC9oMT5cclxuPE15TWFwIC8+XHJcbjwvbWFpbj5cclxuPC9kaXY+XHJcbik7XHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNeU1hcCIsInN0eWxlcyIsIk1hcFBhZ2UiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImZpbHRlciIsInNldEZpbHRlciIsImhhbmRsZVNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUZpbHRlciIsImRpdiIsImNsYXNzTmFtZSIsInBhZ2VDb250YWluZXIiLCJhc2lkZSIsInNpZGViYXIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwic2VhcmNoSW5wdXQiLCJzZWxlY3QiLCJmaWx0ZXJTZWxlY3QiLCJvcHRpb24iLCJtYWluIiwibWFwQ29udGFpbmVyIiwiaDEiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/map.js\n"));

/***/ })

});