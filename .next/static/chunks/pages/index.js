/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Faumpatel%2FDesktop%2FSWE%2Fou-mapz%2Fsrc%2Fpages%2Findex.tsx&page=%2F!":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Faumpatel%2FDesktop%2FSWE%2Fou-mapz%2Fsrc%2Fpages%2Findex.tsx&page=%2F! ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/index.tsx */ \"./src/pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmF1bXBhdGVsJTJGRGVza3RvcCUyRlNXRSUyRm91LW1hcHolMkZzcmMlMkZwYWdlcyUyRmluZGV4LnRzeCZwYWdlPSUyRiEiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxvREFBdUI7QUFDOUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvP2YzNzIiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Faumpatel%2FDesktop%2FSWE%2Fou-mapz%2Fsrc%2Fpages%2Findex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./src/components/MyMap.jsx":
/*!**********************************!*\
  !*** ./src/components/MyMap.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/MyMap.js\n\nvar _s = $RefreshSig$();\n\nconst MyMap = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Append the Google Maps script to the document head\n        const script = document.createElement(\"script\");\n        script.src = \"https://maps.googleapis.com/maps/api/js?key=AIzaSyDvKQYirZCBH07HDKlySghSajv4_69q9OM&callback=initMap\";\n        script.async = true;\n        document.head.appendChild(script);\n        window.initMap = ()=>{\n            const map = new google.maps.Map(document.getElementById(\"map\"), {\n                center: {\n                    lat: 35.20037131434744,\n                    lng: -97.44398323511265\n                },\n                zoom: 13,\n                mapID: \"34793541114f138\"\n            });\n            //35.21241589040634, -97.44399512973642\n            // Array of marker data\n            const markersData = [\n                {\n                    position: {\n                        lat: 35.21204029964204,\n                        lng: -97.4445950663006\n                    },\n                    title: \"First Marker - Hideaway pizza\"\n                },\n                {\n                    position: {\n                        lat: 35.21152589365213,\n                        lng: -97.44452510989818\n                    },\n                    title: \"Second Marker - Pinkberry\"\n                },\n                {\n                    position: {\n                        lat: 35.21241589040634,\n                        lng: -97.44399512973642\n                    },\n                    title: \"Third Marker\"\n                }\n            ];\n            // Loop through markersData to create markers\n            markersData.forEach((markerData)=>{\n                const marker = new google.maps.Marker({\n                    position: markerData.position,\n                    map: map,\n                    title: markerData.title\n                });\n                // Create an info window\n                const infoWindow = new google.maps.InfoWindow({\n                    content: '<div style=\"color: black;\">'.concat(markerData.title, \"</div>\")\n                });\n                // eventListener to Open InfoWindow on mouseover\n                marker.addListener(\"mouseover\", ()=>{\n                    infoWindow.open(map, marker);\n                });\n                // Close InfoWindow on mouseout\n                marker.addListener(\"mouseout\", ()=>{\n                    infoWindow.close();\n                });\n            }); // Note the closing of the forEach loop \n        }; // This closing brace ends the window.initMap function\n    }, []); // This closes the useEffect hook\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"map\",\n        style: {\n            height: \"90vh\",\n            width: \"100%\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/aumpatel/Desktop/SWE/ou-mapz/src/components/MyMap.jsx\",\n        lineNumber: 72,\n        columnNumber: 10\n    }, undefined);\n};\n_s(MyMap, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MyMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyMap);\nvar _c;\n$RefreshReg$(_c, \"MyMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NeU1hcC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzQkFBc0I7OztBQUNtQjtBQUV6QyxNQUFNRSxRQUFROztJQUNaRCxnREFBU0EsQ0FBQztRQUVSLHFEQUFxRDtRQUNyRCxNQUFNRSxTQUFTQyxTQUFTQyxhQUFhLENBQUM7UUFDdENGLE9BQU9HLEdBQUcsR0FBSTtRQUNkSCxPQUFPSSxLQUFLLEdBQUc7UUFDZkgsU0FBU0ksSUFBSSxDQUFDQyxXQUFXLENBQUNOO1FBRzFCTyxPQUFPQyxPQUFPLEdBQUc7WUFDZixNQUFNQyxNQUFNLElBQUlDLE9BQU9DLElBQUksQ0FBQ0MsR0FBRyxDQUFDWCxTQUFTWSxjQUFjLENBQUMsUUFBUTtnQkFDOURDLFFBQVE7b0JBQUVDLEtBQUs7b0JBQW1CQyxLQUFLLENBQUM7Z0JBQWtCO2dCQUMxREMsTUFBTTtnQkFDTkMsT0FBTztZQUNUO1lBRUosdUNBQXVDO1lBQ25DLHVCQUF1QjtZQUN2QixNQUFNQyxjQUFjO2dCQUNsQjtvQkFDRUMsVUFBVTt3QkFBRUwsS0FBSzt3QkFBbUJDLEtBQUssQ0FBQztvQkFBaUI7b0JBQzNESyxPQUFPO2dCQUVUO2dCQUNBO29CQUNFRCxVQUFVO3dCQUFFTCxLQUFNO3dCQUFtQkMsS0FBSyxDQUFDO29CQUFrQjtvQkFDN0RLLE9BQU87Z0JBRVQ7Z0JBQ0E7b0JBQ0VELFVBQVU7d0JBQUVMLEtBQUs7d0JBQW1CQyxLQUFLLENBQUM7b0JBQWtCO29CQUM1REssT0FBTztnQkFFVDthQUdEO1lBRUQsNkNBQTZDO1lBQzdDRixZQUFZRyxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ25CLE1BQU1DLFNBQVMsSUFBSWQsT0FBT0MsSUFBSSxDQUFDYyxNQUFNLENBQUM7b0JBQ3BDTCxVQUFVRyxXQUFXSCxRQUFRO29CQUM3QlgsS0FBS0E7b0JBQ0xZLE9BQU9FLFdBQVdGLEtBQUs7Z0JBRXpCO2dCQUVBLHdCQUF3QjtnQkFDeEIsTUFBTUssYUFBYSxJQUFJaEIsT0FBT0MsSUFBSSxDQUFDZ0IsVUFBVSxDQUFDO29CQUM1Q0MsU0FBUyw4QkFBK0MsT0FBakJMLFdBQVdGLEtBQUssRUFBQztnQkFDMUQ7Z0JBRUEsZ0RBQWdEO2dCQUNoREcsT0FBT0ssV0FBVyxDQUFDLGFBQWE7b0JBQzlCSCxXQUFXSSxJQUFJLENBQUNyQixLQUFLZTtnQkFDdkI7Z0JBRUEsK0JBQStCO2dCQUMvQkEsT0FBT0ssV0FBVyxDQUFDLFlBQVk7b0JBQzdCSCxXQUFXSyxLQUFLO2dCQUNsQjtZQUNGLElBQUksd0NBQXdDO1FBRTlDLEdBQUcsc0RBQXNEO0lBRTNELEdBQUcsRUFBRSxHQUFHLGlDQUFpQztJQUV6QyxxQkFBTyw4REFBQ0M7UUFBSUMsSUFBRztRQUFNQyxPQUFPO1lBQUVDLFFBQVE7WUFBUUMsT0FBTztRQUFPOzs7Ozs7QUFDOUQ7R0FyRU1yQztLQUFBQTtBQXVFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NeU1hcC5qc3g/NWNhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL015TWFwLmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBNeU1hcCA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIC8vIEFwcGVuZCB0aGUgR29vZ2xlIE1hcHMgc2NyaXB0IHRvIHRoZSBkb2N1bWVudCBoZWFkXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNyYyA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PUFJemFTeUR2S1FZaXJaQ0JIMDdIREtseVNnaFNhanY0XzY5cTlPTSZjYWxsYmFjaz1pbml0TWFwYDtcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICAgIFxuICAgIHdpbmRvdy5pbml0TWFwID0gKCkgPT4ge1xuICAgICAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgICAgY2VudGVyOiB7IGxhdDogMzUuMjAwMzcxMzE0MzQ3NDQsIGxuZzogLTk3LjQ0Mzk4MzIzNTExMjY1IH0sXG4gICAgICAgIHpvb206IDEzLFxuICAgICAgICBtYXBJRDogXCIzNDc5MzU0MTExNGYxMzhcIixcbiAgICAgIH0pO1xuICAgIFxuICAvLzM1LjIxMjQxNTg5MDQwNjM0LCAtOTcuNDQzOTk1MTI5NzM2NDJcbiAgICAgIC8vIEFycmF5IG9mIG1hcmtlciBkYXRhXG4gICAgICBjb25zdCBtYXJrZXJzRGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHBvc2l0aW9uOiB7IGxhdDogMzUuMjEyMDQwMjk5NjQyMDQsIGxuZzogLTk3LjQ0NDU5NTA2NjMwMDYgfSxcbiAgICAgICAgICB0aXRsZTogJ0ZpcnN0IE1hcmtlciAtIEhpZGVhd2F5IHBpenphJyxcbiAgICAgICAgIC8vIGljb246ICcvcGF0aC90by95b3VyL2ZpcnN0LWljb24uc3ZnJywgLy8gT3B0aW9uYWwgY3VzdG9tIGljb25cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBvc2l0aW9uOiB7IGxhdDogIDM1LjIxMTUyNTg5MzY1MjEzLCBsbmc6IC05Ny40NDQ1MjUxMDk4OTgxOCB9LFxuICAgICAgICAgIHRpdGxlOiAnU2Vjb25kIE1hcmtlciAtIFBpbmtiZXJyeScsXG4gICAgICAgICAgLy9pY29uOiAnL3BhdGgvdG8veW91ci9zZWNvbmQtaWNvbi5zdmcnLCAvLyBPcHRpb25hbCBjdXN0b20gaWNvblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcG9zaXRpb246IHsgbGF0OiAzNS4yMTI0MTU4OTA0MDYzNCwgbG5nOiAtOTcuNDQzOTk1MTI5NzM2NDIgfSxcbiAgICAgICAgICB0aXRsZTogJ1RoaXJkIE1hcmtlcicsXG4gICAgICAgICAgLy9pY29uOiAnL3BhdGgvdG8veW91ci9zZWNvbmQtaWNvbi5zdmcnLCAvLyBPcHRpb25hbCBjdXN0b20gaWNvblxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLy8gQWRkIG1vcmUgbWFya2VycyBhcyBuZWVkZWRcbiAgICAgIF07XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBtYXJrZXJzRGF0YSB0byBjcmVhdGUgbWFya2Vyc1xuICAgICAgbWFya2Vyc0RhdGEuZm9yRWFjaCgobWFya2VyRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICBwb3NpdGlvbjogbWFya2VyRGF0YS5wb3NpdGlvbixcbiAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICB0aXRsZTogbWFya2VyRGF0YS50aXRsZSxcbiAgICAgICAgIC8vIGljb246IG1hcmtlckRhdGEuaWNvbiwgLy8gVGhpcyBpcyBvcHRpb25hbCBpZiB5b3UncmUgdXNpbmcgY3VzdG9tIGljb25zXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBpbmZvIHdpbmRvd1xuICAgICAgICBjb25zdCBpbmZvV2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgIGNvbnRlbnQ6IGA8ZGl2IHN0eWxlPVwiY29sb3I6IGJsYWNrO1wiPiR7bWFya2VyRGF0YS50aXRsZX08L2Rpdj5gLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBldmVudExpc3RlbmVyIHRvIE9wZW4gSW5mb1dpbmRvdyBvbiBtb3VzZW92ZXJcbiAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgaW5mb1dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2xvc2UgSW5mb1dpbmRvdyBvbiBtb3VzZW91dFxuICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgIGluZm9XaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gTm90ZSB0aGUgY2xvc2luZyBvZiB0aGUgZm9yRWFjaCBsb29wIFxuXG4gICAgfTsgLy8gVGhpcyBjbG9zaW5nIGJyYWNlIGVuZHMgdGhlIHdpbmRvdy5pbml0TWFwIGZ1bmN0aW9uXG5cbiAgfSwgW10pOyAvLyBUaGlzIGNsb3NlcyB0aGUgdXNlRWZmZWN0IGhvb2tcblxuICByZXR1cm4gPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IGhlaWdodDogJzkwdmgnLCB3aWR0aDogJzEwMCUnIH19IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlNYXA7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTXlNYXAiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIndpbmRvdyIsImluaXRNYXAiLCJtYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZ2V0RWxlbWVudEJ5SWQiLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJ6b29tIiwibWFwSUQiLCJtYXJrZXJzRGF0YSIsInBvc2l0aW9uIiwidGl0bGUiLCJmb3JFYWNoIiwibWFya2VyRGF0YSIsIm1hcmtlciIsIk1hcmtlciIsImluZm9XaW5kb3ciLCJJbmZvV2luZG93IiwiY29udGVudCIsImFkZExpc3RlbmVyIiwib3BlbiIsImNsb3NlIiwiZGl2IiwiaWQiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MyMap.jsx\n"));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MyMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyMap */ \"./src/components/MyMap.jsx\");\n// pages/index.tsx\n\n\n\nconst LoginPage = ()=>{\n    /* const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n  const [showPassword, setShowPassword] = useState(false);\n\n  const handleLogin = (e) => {\n    e.preventDefault();\n    // login logic here\n    \n  };\n\n  return (\n    <div className={styles.container}>\n      <h1 className={styles.mainTitle}>OU Mapz</h1>\n      <div className={styles.loginFormContainer}>\n        <form onSubmit={handleLogin} className={styles.loginForm}>\n          <h2 className={styles.loginTitle}>Sign in</h2>\n          <input\n            type=\"email\" // Ensuring this input is for emails\n            placeholder=\"Email\"\n            value={email}\n            onChange={(e) => setEmail(e.target.value)}\n            className={styles.inputField}\n            required\n          />\n          <div className={styles.passwordInput}>\n            <input\n              type={showPassword ? \"text\" : \"password\"}\n              placeholder=\"Password\"\n              value={password}\n              onChange={(e) => setPassword(e.target.value)}\n              className={styles.inputField}\n              required\n            />\n            <span className={styles.togglePassword} onClick={() => setShowPassword(!showPassword)}>\n              {showPassword ? 'hide' : 'show'}\n            </span>\n          </div>\n          <a href=\"#\" className={styles.forgotPassword}>Forgot password?</a>\n          <button type=\"submit\" className={styles.loginButton}>Sign in</button>\n        </form>\n      </div>\n    </div>\n  ); */ // bypassing the login page to work on the Map directly\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyMap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/aumpatel/Desktop/SWE/ou-mapz/src/pages/index.tsx\",\n            lineNumber: 62,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/aumpatel/Desktop/SWE/ou-mapz/src/pages/index.tsx\",\n        lineNumber: 60,\n        columnNumber: 3\n    }, undefined);\n};\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtCQUFrQjs7QUFDc0I7QUFFQTtBQUV4QyxNQUFNRSxZQUFZO0lBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwQ0ksR0FPTCx1REFBdUQ7SUFFdkQscUJBRUUsOERBQUNDO2tCQUVDLDRFQUFDRix5REFBS0E7Ozs7Ozs7Ozs7QUFRVjtLQWhFTUM7QUFvRU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4LnRzeFxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBNeU1hcCBmcm9tICcuLi9jb21wb25lbnRzL015TWFwJzsgXG5cbmNvbnN0IExvZ2luUGFnZSA9ICgpID0+IHtcbiAvKiBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBsb2dpbiBsb2dpYyBoZXJlXG4gICAgXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubWFpblRpdGxlfT5PVSBNYXB6PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Gb3JtQ29udGFpbmVyfT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2lufSBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkZvcm19PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpblRpdGxlfT5TaWduIGluPC9oMj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIC8vIEVuc3VyaW5nIHRoaXMgaW5wdXQgaXMgZm9yIGVtYWlsc1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0RmllbGR9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXNzd29yZElucHV0fT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0RmllbGR9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlUGFzc3dvcmR9IG9uQ2xpY2s9eygpID0+IHNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKX0+XG4gICAgICAgICAgICAgIHtzaG93UGFzc3dvcmQgPyAnaGlkZScgOiAnc2hvdyd9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e3N0eWxlcy5mb3Jnb3RQYXNzd29yZH0+Rm9yZ290IHBhc3N3b3JkPzwvYT5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ1dHRvbn0+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTsgKi9cblxuXG5cblxuXG5cbi8vIGJ5cGFzc2luZyB0aGUgbG9naW4gcGFnZSB0byB3b3JrIG9uIHRoZSBNYXAgZGlyZWN0bHlcblxucmV0dXJuKFxuXG4gIDxkaXY+XG4gICAgXG4gICAgPE15TWFwLz5cblxuICA8L2Rpdj5cblxuKTtcblxuXG5cbn07IFxuXG5cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTXlNYXAiLCJMb2dpblBhZ2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Faumpatel%2FDesktop%2FSWE%2Fou-mapz%2Fsrc%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);