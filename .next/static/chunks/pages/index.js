/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cwinte%5CDesktop%5COU%20mapz%5Cou-mapz%5Csrc%5Cpages%5Cindex.tsx&page=%2F!":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cwinte%5CDesktop%5COU%20mapz%5Cou-mapz%5Csrc%5Cpages%5Cindex.tsx&page=%2F! ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/index.tsx */ \"./src/pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUN3aW50ZSU1Q0Rlc2t0b3AlNUNPVSUyMG1hcHolNUNvdS1tYXB6JTVDc3JjJTVDcGFnZXMlNUNpbmRleC50c3gmcGFnZT0lMkYhIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsb0RBQXVCO0FBQzlDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz9hNTdkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cwinte%5CDesktop%5COU%20mapz%5Cou-mapz%5Csrc%5Cpages%5Cindex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./src/components/MyMap.jsx":
/*!**********************************!*\
  !*** ./src/components/MyMap.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/MyMap.js\n\nvar _s = $RefreshSig$();\n\nconst MyMap = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Append the Google Maps script to the document head\n        const script = document.createElement(\"script\");\n        script.src = \"https://maps.googleapis.com/maps/api/js?key=AIzaSyDvKQYirZCBH07HDKlySghSajv4_69q9OM&callback=initMap\";\n        script.async = true;\n        document.head.appendChild(script);\n        window.initMap = ()=>{\n            const map = new google.maps.Map(document.getElementById(\"map\"), {\n                center: {\n                    lat: 35.20037131434744,\n                    lng: -97.44398323511265\n                },\n                zoom: 13,\n                mapID: \"34793541114f138\"\n            });\n            const coustIcons = [\n                {\n                    url: \"ou-marker.png\",\n                    scaledSize: new google.maps.Size(100, 100)\n                },\n                {\n                }\n            ];\n            // Array of marker data\n            const markersData = [\n                {\n                    position: {\n                        lat: 35.21204029964204,\n                        lng: -97.4445950663006\n                    },\n                    title: \"First Marker - Hideaway pizza\",\n                    iconType: 0\n                },\n                {\n                    position: {\n                        lat: 35.21152589365213,\n                        lng: -97.44452510989818\n                    },\n                    title: \"Second Marker - Pinkberry\",\n                    iconType: 0\n                },\n                {\n                    position: {\n                        lat: 35.21241589040634,\n                        lng: -97.44399512973642\n                    },\n                    title: \"Third Marker\",\n                    iconType: 0\n                }\n            ];\n            // Loop through markersData to create markers\n            markersData.forEach((markerData)=>{\n                const marker = new google.maps.Marker({\n                    position: markerData.position,\n                    map: map,\n                    title: markerData.title,\n                    icon: coustIcons[markerData.iconType]\n                });\n                // Create an info window\n                const infoWindow = new google.maps.InfoWindow({\n                    content: '<div style=\"color: black;\">'.concat(markerData.title, \"</div>\")\n                });\n                // eventListener to Open InfoWindow on mouseover\n                marker.addListener(\"mouseover\", ()=>{\n                    infoWindow.open(map, marker);\n                });\n                // Close InfoWindow on mouseout\n                marker.addListener(\"mouseout\", ()=>{\n                    infoWindow.close();\n                });\n            }); // Note the closing of the forEach loop \n        }; // This closing brace ends the window.initMap function\n    }, []); // This closes the useEffect hook\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"map\",\n        style: {\n            height: \"90vh\",\n            width: \"100%\"\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\winte\\\\Desktop\\\\OU mapz\\\\ou-mapz\\\\src\\\\components\\\\MyMap.jsx\",\n        lineNumber: 85,\n        columnNumber: 10\n    }, undefined);\n};\n_s(MyMap, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MyMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyMap);\nvar _c;\n$RefreshReg$(_c, \"MyMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NeU1hcC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzQkFBc0I7OztBQUNtQjtBQUV6QyxNQUFNRSxRQUFROztJQUNaRCxnREFBU0EsQ0FBQztRQUVSLHFEQUFxRDtRQUNyRCxNQUFNRSxTQUFTQyxTQUFTQyxhQUFhLENBQUM7UUFDdENGLE9BQU9HLEdBQUcsR0FBSTtRQUNkSCxPQUFPSSxLQUFLLEdBQUc7UUFDZkgsU0FBU0ksSUFBSSxDQUFDQyxXQUFXLENBQUNOO1FBRzFCTyxPQUFPQyxPQUFPLEdBQUc7WUFDZixNQUFNQyxNQUFNLElBQUlDLE9BQU9DLElBQUksQ0FBQ0MsR0FBRyxDQUFDWCxTQUFTWSxjQUFjLENBQUMsUUFBUTtnQkFDOURDLFFBQVE7b0JBQUVDLEtBQUs7b0JBQW1CQyxLQUFLLENBQUM7Z0JBQWtCO2dCQUMxREMsTUFBTTtnQkFDTkMsT0FBTztZQUNUO1lBR0EsTUFBTUMsYUFBYTtnQkFDakI7b0JBQ0VDLEtBQUs7b0JBQ0xDLFlBQVksSUFBSVgsT0FBT0MsSUFBSSxDQUFDVyxJQUFJLENBQUMsS0FBSztnQkFDeEM7Z0JBQ0E7Z0JBR0E7YUFFRDtZQUVELHVCQUF1QjtZQUN2QixNQUFNQyxjQUFjO2dCQUNsQjtvQkFDRUMsVUFBVTt3QkFBRVQsS0FBSzt3QkFBbUJDLEtBQUssQ0FBQztvQkFBaUI7b0JBQzNEUyxPQUFPO29CQUNQQyxVQUFVO2dCQUVaO2dCQUNBO29CQUNFRixVQUFVO3dCQUFFVCxLQUFNO3dCQUFtQkMsS0FBSyxDQUFDO29CQUFrQjtvQkFDN0RTLE9BQU87b0JBQ1BDLFVBQVU7Z0JBQ1o7Z0JBQ0E7b0JBQ0VGLFVBQVU7d0JBQUVULEtBQUs7d0JBQW1CQyxLQUFLLENBQUM7b0JBQWtCO29CQUM1RFMsT0FBTztvQkFDUEMsVUFBVTtnQkFDWjthQUdEO1lBRUQsNkNBQTZDO1lBQzdDSCxZQUFZSSxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ25CLE1BQU1DLFNBQVMsSUFBSW5CLE9BQU9DLElBQUksQ0FBQ21CLE1BQU0sQ0FBQztvQkFDcENOLFVBQVVJLFdBQVdKLFFBQVE7b0JBQzdCZixLQUFLQTtvQkFDTGdCLE9BQU9HLFdBQVdILEtBQUs7b0JBQ3ZCTSxNQUFNWixVQUFVLENBQUNTLFdBQVdGLFFBQVEsQ0FBQztnQkFDdkM7Z0JBRUEsd0JBQXdCO2dCQUN4QixNQUFNTSxhQUFhLElBQUl0QixPQUFPQyxJQUFJLENBQUNzQixVQUFVLENBQUM7b0JBQzVDQyxTQUFTLDhCQUErQyxPQUFqQk4sV0FBV0gsS0FBSyxFQUFDO2dCQUMxRDtnQkFFQSxnREFBZ0Q7Z0JBQ2hESSxPQUFPTSxXQUFXLENBQUMsYUFBYTtvQkFDOUJILFdBQVdJLElBQUksQ0FBQzNCLEtBQUtvQjtnQkFDdkI7Z0JBRUEsK0JBQStCO2dCQUMvQkEsT0FBT00sV0FBVyxDQUFDLFlBQVk7b0JBQzdCSCxXQUFXSyxLQUFLO2dCQUNsQjtZQUNGLElBQUksd0NBQXdDO1FBRTlDLEdBQUcsc0RBQXNEO0lBRTNELEdBQUcsRUFBRSxHQUFHLGlDQUFpQztJQUV6QyxxQkFBTyw4REFBQ0M7UUFBSUMsSUFBRztRQUFNQyxPQUFPO1lBQUVDLFFBQVE7WUFBUUMsT0FBTztRQUFPOzs7Ozs7QUFDOUQ7R0FsRk0zQztLQUFBQTtBQW9GTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NeU1hcC5qc3g/NWNhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL015TWFwLmpzXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBNeU1hcCA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgR29vZ2xlIE1hcHMgc2NyaXB0IHRvIHRoZSBkb2N1bWVudCBoZWFkXHJcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIHNjcmlwdC5zcmMgPSBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1BSXphU3lEdktRWWlyWkNCSDA3SERLbHlTZ2hTYWp2NF82OXE5T00mY2FsbGJhY2s9aW5pdE1hcGA7XHJcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuICAgIFxyXG4gICAgd2luZG93LmluaXRNYXAgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgY2VudGVyOiB7IGxhdDogMzUuMjAwMzcxMzE0MzQ3NDQsIGxuZzogLTk3LjQ0Mzk4MzIzNTExMjY1IH0sXHJcbiAgICAgICAgem9vbTogMTMsXHJcbiAgICAgICAgbWFwSUQ6IFwiMzQ3OTM1NDExMTRmMTM4XCIsXHJcbiAgICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgICBjb25zdCBjb3VzdEljb25zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVybDogJ291LW1hcmtlci5wbmcnLCAvLyBVUkwgZm9yIHRoZSBmaXJzdCB0eXBlIG9mIGljb25cclxuICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDEwMCwgMTAwKSwgLy8gU2NhbGUgdGhlIGljb24gc2l6ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy91cmw6ICdzZWNvbmQtbWFya2VyLWljb24ucG5nJywgLy8gVVJMIGZvciB0aGUgc2Vjb25kIHR5cGUgb2YgaWNvblxyXG4gICAgICAgICAgLy9zY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg1MCwgNTApLCAvLyBTY2FsZSB0aGUgaWNvbiBzaXplXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBBZGQgbW9yZSBpY29ucyBhcyBuZWVkZWRcclxuICAgICAgXTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFycmF5IG9mIG1hcmtlciBkYXRhXHJcbiAgICAgIGNvbnN0IG1hcmtlcnNEYXRhID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiB7IGxhdDogMzUuMjEyMDQwMjk5NjQyMDQsIGxuZzogLTk3LjQ0NDU5NTA2NjMwMDYgfSxcclxuICAgICAgICAgIHRpdGxlOiAnRmlyc3QgTWFya2VyIC0gSGlkZWF3YXkgcGl6emEnLFxyXG4gICAgICAgICAgaWNvblR5cGU6IDAsIC8vIFJlZmVyZW5jZSB0byB0aGUgZmlyc3QgaWNvbiBpbiBjb21tb25JY29ucyBhcnJheVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogeyBsYXQ6ICAzNS4yMTE1MjU4OTM2NTIxMywgbG5nOiAtOTcuNDQ0NTI1MTA5ODk4MTggfSxcclxuICAgICAgICAgIHRpdGxlOiAnU2Vjb25kIE1hcmtlciAtIFBpbmtiZXJyeScsXHJcbiAgICAgICAgICBpY29uVHlwZTogMCwgLy8gUmVmZXJlbmNlIHRvIHRoZSBmaXJzdCBpY29uIGluIGNvbW1vbkljb25zIGFycmF5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogeyBsYXQ6IDM1LjIxMjQxNTg5MDQwNjM0LCBsbmc6IC05Ny40NDM5OTUxMjk3MzY0MiB9LFxyXG4gICAgICAgICAgdGl0bGU6ICdUaGlyZCBNYXJrZXInLFxyXG4gICAgICAgICAgaWNvblR5cGU6IDAsIC8vIFJlZmVyZW5jZSB0byB0aGUgZmlyc3QgaWNvbiBpbiBjb21tb25JY29ucyBhcnJheVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWRkIG1vcmUgbWFya2VycyBhcyBuZWVkZWRcclxuICAgICAgXTtcclxuXHJcbiAgICAgIC8vIExvb3AgdGhyb3VnaCBtYXJrZXJzRGF0YSB0byBjcmVhdGUgbWFya2Vyc1xyXG4gICAgICBtYXJrZXJzRGF0YS5mb3JFYWNoKChtYXJrZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICBwb3NpdGlvbjogbWFya2VyRGF0YS5wb3NpdGlvbixcclxuICAgICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgICAgdGl0bGU6IG1hcmtlckRhdGEudGl0bGUsXHJcbiAgICAgICAgICBpY29uOiBjb3VzdEljb25zW21hcmtlckRhdGEuaWNvblR5cGVdLCAvLyBVc2UgaWNvblR5cGUgdG8gc2VsZWN0IHRoZSBjb3JyZWN0IGljb24gZnJvbSBjb21tb25JY29uc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYW4gaW5mbyB3aW5kb3dcclxuICAgICAgICBjb25zdCBpbmZvV2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG4gICAgICAgICAgY29udGVudDogYDxkaXYgc3R5bGU9XCJjb2xvcjogYmxhY2s7XCI+JHttYXJrZXJEYXRhLnRpdGxlfTwvZGl2PmAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGV2ZW50TGlzdGVuZXIgdG8gT3BlbiBJbmZvV2luZG93IG9uIG1vdXNlb3ZlclxyXG4gICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgaW5mb1dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2xvc2UgSW5mb1dpbmRvdyBvbiBtb3VzZW91dFxyXG4gICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICBpbmZvV2luZG93LmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pOyAvLyBOb3RlIHRoZSBjbG9zaW5nIG9mIHRoZSBmb3JFYWNoIGxvb3AgXHJcblxyXG4gICAgfTsgLy8gVGhpcyBjbG9zaW5nIGJyYWNlIGVuZHMgdGhlIHdpbmRvdy5pbml0TWFwIGZ1bmN0aW9uXHJcblxyXG4gIH0sIFtdKTsgLy8gVGhpcyBjbG9zZXMgdGhlIHVzZUVmZmVjdCBob29rXHJcblxyXG4gIHJldHVybiA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3sgaGVpZ2h0OiAnOTB2aCcsIHdpZHRoOiAnMTAwJScgfX0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeU1hcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJNeU1hcCIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFzeW5jIiwiaGVhZCIsImFwcGVuZENoaWxkIiwid2luZG93IiwiaW5pdE1hcCIsIm1hcCIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJtYXBJRCIsImNvdXN0SWNvbnMiLCJ1cmwiLCJzY2FsZWRTaXplIiwiU2l6ZSIsIm1hcmtlcnNEYXRhIiwicG9zaXRpb24iLCJ0aXRsZSIsImljb25UeXBlIiwiZm9yRWFjaCIsIm1hcmtlckRhdGEiLCJtYXJrZXIiLCJNYXJrZXIiLCJpY29uIiwiaW5mb1dpbmRvdyIsIkluZm9XaW5kb3ciLCJjb250ZW50IiwiYWRkTGlzdGVuZXIiLCJvcGVuIiwiY2xvc2UiLCJkaXYiLCJpZCIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MyMap.jsx\n"));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MyMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyMap */ \"./src/components/MyMap.jsx\");\n// pages/index.tsx\n\n\n\nconst LoginPage = ()=>{\n    /* const [email, setEmail] = useState('');\r\n  const [password, setPassword] = useState('');\r\n  const [showPassword, setShowPassword] = useState(false);\r\n\r\n  const handleLogin = (e) => {\r\n    e.preventDefault();\r\n    // login logic here\r\n    \r\n  };\r\n\r\n  return (\r\n    <div className={styles.container}>\r\n      <h1 className={styles.mainTitle}>OU Mapz</h1>\r\n      <div className={styles.loginFormContainer}>\r\n        <form onSubmit={handleLogin} className={styles.loginForm}>\r\n          <h2 className={styles.loginTitle}>Sign in</h2>\r\n          <input\r\n            type=\"email\" // Ensuring this input is for emails\r\n            placeholder=\"Email\"\r\n            value={email}\r\n            onChange={(e) => setEmail(e.target.value)}\r\n            className={styles.inputField}\r\n            required\r\n          />\r\n          <div className={styles.passwordInput}>\r\n            <input\r\n              type={showPassword ? \"text\" : \"password\"}\r\n              placeholder=\"Password\"\r\n              value={password}\r\n              onChange={(e) => setPassword(e.target.value)}\r\n              className={styles.inputField}\r\n              required\r\n            />\r\n            <span className={styles.togglePassword} onClick={() => setShowPassword(!showPassword)}>\r\n              {showPassword ? 'hide' : 'show'}\r\n            </span>\r\n          </div>\r\n          <a href=\"#\" className={styles.forgotPassword}>Forgot password?</a>\r\n          <button type=\"submit\" className={styles.loginButton}>Sign in</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  ); */ // bypassing the login page to work on the Map directly\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyMap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\winte\\\\Desktop\\\\OU mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 62,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\winte\\\\Desktop\\\\OU mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 60,\n        columnNumber: 3\n    }, undefined);\n};\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtCQUFrQjs7QUFDc0I7QUFFQTtBQUV4QyxNQUFNRSxZQUFZO0lBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwQ0ksR0FPTCx1REFBdUQ7SUFFdkQscUJBRUUsOERBQUNDO2tCQUVDLDRFQUFDRix5REFBS0E7Ozs7Ozs7Ozs7QUFRVjtLQWhFTUM7QUFvRU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4LnRzeFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBNeU1hcCBmcm9tICcuLi9jb21wb25lbnRzL015TWFwJzsgXHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAvKiBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBsb2dpbiBsb2dpYyBoZXJlXHJcbiAgICBcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubWFpblRpdGxlfT5PVSBNYXB6PC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkZvcm1Db250YWluZXJ9PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Gb3JtfT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpblRpdGxlfT5TaWduIGluPC9oMj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIiAvLyBFbnN1cmluZyB0aGlzIGlucHV0IGlzIGZvciBlbWFpbHNcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0RmllbGR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXNzd29yZElucHV0fT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0RmllbGR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlUGFzc3dvcmR9IG9uQ2xpY2s9eygpID0+IHNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKX0+XHJcbiAgICAgICAgICAgICAge3Nob3dQYXNzd29yZCA/ICdoaWRlJyA6ICdzaG93J31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17c3R5bGVzLmZvcmdvdFBhc3N3b3JkfT5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5CdXR0b259PlNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTsgKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gYnlwYXNzaW5nIHRoZSBsb2dpbiBwYWdlIHRvIHdvcmsgb24gdGhlIE1hcCBkaXJlY3RseVxyXG5cclxucmV0dXJuKFxyXG5cclxuICA8ZGl2PlxyXG4gICAgXHJcbiAgICA8TXlNYXAvPlxyXG5cclxuICA8L2Rpdj5cclxuXHJcbik7XHJcblxyXG5cclxuXHJcbn07IFxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTXlNYXAiLCJMb2dpblBhZ2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cwinte%5CDesktop%5COU%20mapz%5Cou-mapz%5Csrc%5Cpages%5Cindex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);