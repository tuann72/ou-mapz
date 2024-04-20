"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase.js */ \"./firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_authContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/authContext */ \"./src/contexts/authContext.js\");\n// pages/index.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n/*\r\nThis page was created by Mahnoor Saeed and Vishnu Patel\r\nPage, layout and styling was created by Mahnoor Saeed\r\nFirebase functions(handleUserCreation, loginUser, addData, and getData) \r\nwere created by Vishnu Patel\r\n*/ const LoginPage = ()=>{\n    _s();\n    const pageRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    // email variable that is changed in input\n    let [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // password varibale to be changed in input\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // e is just a temporary variable (event handler) because this function is embedded in the \n    // submit form function in order to test it\n    const { currentUser } = (0,_contexts_authContext__WEBPACK_IMPORTED_MODULE_6__.useAuth)() // gets the currentUser (logged in or out) from authContext\n    ;\n    const { login } = (0,_contexts_authContext__WEBPACK_IMPORTED_MODULE_6__.useAuth)() // gets login function from authContext\n    ;\n    const { logout } = (0,_contexts_authContext__WEBPACK_IMPORTED_MODULE_6__.useAuth)();\n    /*\r\n  if (currentUser) {\r\n    pageRouter.push('/map') // redirects user to map page if already logged in\r\n    // idea: instead of redirecting immediately, could prompt user to sign out or redirect\r\n  }\r\n  */ async function addData(e) {\n        // prevent default form submission behavior\n        e.preventDefault();\n        // get whatever collection is needed(will specify in firebase, in this case users)\n        const usersRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_js__WEBPACK_IMPORTED_MODULE_3__.db, \"users\");\n        // set a doc in the usersRef collection, we will name it aum\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(usersRef, \"aum\"), {\n            // this doc will have the parameter data, name aumm age 81\n            name: \"aum\",\n            age: 81\n        });\n    }\n    // this function is not yet tested and functional\n    // e is still an event listener which is temporarily needed to test on a form\n    async function getData(e) {\n        // prevent default form submission behavior\n        e.preventDefault();\n        // get collection name in this case \"users\"\n        const collectionRef = \"users\";\n        const document = \"aum\";\n        // try to retrieve data\n        try {\n            // get document reference\n            // db is our firebase variable, collection ref is our collection and\n            // document is the doc we are trying to retrieve from firebase in the \"users\" collection\n            // get doc reference\n            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase_js__WEBPACK_IMPORTED_MODULE_3__.db, collectionRef, document);\n            // get the snapshot of data from the reference\n            const docSnap = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docRef);\n            // get the actual data from snapshot\n            let data = (await docSnap).data;\n        } catch (error) {\n            // log any error caught \n            console.log(error);\n        }\n    }\n    // e is event handler\n    const handleUserCreation = (e)=>{\n        // prevent default form behavior\n        e.preventDefault();\n        // login logic here\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_firebase_js__WEBPACK_IMPORTED_MODULE_3__.auth, email, password).then((userCredential)=>{\n            // User created and get user info\n            const user = userCredential.user;\n        }).catch((error)=>{\n            // Handle errors here\n            console.error(\"Error creating user:\", error.message);\n        });\n    };\n    // e is event handler\n    const loginUser = (e)=>{\n        // prevent default form behavior\n        e.preventDefault();\n        // check authentication in firebase\n        login(email, password) // calls login function from authContext\n        .then(()=>{\n            /* Commented out by Tristen Pham because it was underlined red\r\n    // Signed in, so get user information/ credential\r\n    const user = userCredential.user;\r\n    */ // reroute user to map page upon successful login\n            pageRouter.push(\"/map\");\n            //setTimeout(function(){}, 100); \n            //window.location.reload();\n            setTimeout(function() {\n                location.reload();\n            }, 500); // Delay 300 ms before refreshing\n        // ...\n        }).catch((error)=>{\n            /* Commented out by Tristen Pham because error needed type Error but Error type does not have 'code' property\r\n    // print error message from firebase\r\n    const errorCode = error.code; Error does not have 'code' property\r\n    */ const errorMessage = error.message;\n        });\n    };\n    function handleGuest() {\n        logout().then(()=>{\n            // Sign-out successful, reroutes user to map page\n            pageRouter.push(\"/map\");\n            setTimeout(function() {\n                location.reload();\n            }, 300); // Delay 300 ms before refreshing\n        }).catch((error)=>{\n        // An error happened.\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainTitle),\n                children: \"OU Mapz\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginFormContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>loginUser(e),\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginForm),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginTitle),\n                                children: \"Sign in\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\" // Ensuring this input is for emails\n                                ,\n                                placeholder: \"Email\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputField),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().passwordInput),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: showPassword ? \"text\" : \"password\",\n                                        placeholder: \"Password\",\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value),\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputField),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 153,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().togglePassword),\n                                        onClick: ()=>setShowPassword(!showPassword),\n                                        children: showPassword ? \"hide\" : \"show\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 161,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 152,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().forgotPassword),\n                                children: \"Forgot password?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 165,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginButton),\n                                children: \"Sign in\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 166,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>pageRouter.push(\"/register\"),\n                                type: \"submit\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginButton),\n                                children: \"Register\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 167,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleGuest(),\n                        type: \"submit\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginButton),\n                        children: \"Continue as Guest\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 169,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 138,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginPage, \"jsoHs/sXX/GzpDUz3QY8ZKtO5U8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _contexts_authContext__WEBPACK_IMPORTED_MODULE_6__.useAuth,\n        _contexts_authContext__WEBPACK_IMPORTED_MODULE_6__.useAuth,\n        _contexts_authContext__WEBPACK_IMPORTED_MODULE_6__.useAuth\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtnQ0FBRUMsTUFBSztnQ0FBSXZCLFdBQVdsRCwrRUFBcUI7MENBQUU7Ozs7OzswQ0FDOUMsOERBQUMyRTtnQ0FBT2QsTUFBSztnQ0FBU1gsV0FBV2xELDRFQUFrQjswQ0FBRTs7Ozs7OzBDQUNyRCw4REFBQzJFO2dDQUFPSixTQUFTLElBQU01RCxXQUFXZ0MsSUFBSSxDQUFDO2dDQUFha0IsTUFBSztnQ0FBU1gsV0FBV2xELDRFQUFrQjswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUVuRyw4REFBQzJFO3dCQUFPSixTQUFTLElBQU12Qjt3QkFBY2EsTUFBSzt3QkFBU1gsV0FBV2xELDRFQUFrQjtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFGO0dBNUpNVTs7UUFDZUYsa0RBQVNBO1FBUUpDLDBEQUFPQTtRQUNiQSwwREFBT0E7UUFDTkEsMERBQU9BOzs7S0FYdEJDO0FBOEpOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9pbmRleC50c3hcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBzaWduT3V0IH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCB7YXV0aCwgZGJ9IGZyb20gJy4uLy4uL2ZpcmViYXNlLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnZG9tYWluJztcclxuaW1wb3J0IHtjb2xsZWN0aW9uLCBhZGREb2MsIHNldERvYywgZG9jLCBnZXREb2N9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL2NvbnRleHRzL2F1dGhDb250ZXh0JztcclxuXHJcbi8qXHJcblRoaXMgcGFnZSB3YXMgY3JlYXRlZCBieSBNYWhub29yIFNhZWVkIGFuZCBWaXNobnUgUGF0ZWxcclxuUGFnZSwgbGF5b3V0IGFuZCBzdHlsaW5nIHdhcyBjcmVhdGVkIGJ5IE1haG5vb3IgU2FlZWRcclxuRmlyZWJhc2UgZnVuY3Rpb25zKGhhbmRsZVVzZXJDcmVhdGlvbiwgbG9naW5Vc2VyLCBhZGREYXRhLCBhbmQgZ2V0RGF0YSkgXHJcbndlcmUgY3JlYXRlZCBieSBWaXNobnUgUGF0ZWxcclxuKi9cclxuXHJcbmNvbnN0IExvZ2luUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBwYWdlUm91dGVyID0gdXNlUm91dGVyKClcclxuICAvLyBlbWFpbCB2YXJpYWJsZSB0aGF0IGlzIGNoYW5nZWQgaW4gaW5wdXRcclxuICBsZXQgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgLy8gcGFzc3dvcmQgdmFyaWJhbGUgdG8gYmUgY2hhbmdlZCBpbiBpbnB1dFxyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gZSBpcyBqdXN0IGEgdGVtcG9yYXJ5IHZhcmlhYmxlIChldmVudCBoYW5kbGVyKSBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gaXMgZW1iZWRkZWQgaW4gdGhlIFxyXG4gIC8vIHN1Ym1pdCBmb3JtIGZ1bmN0aW9uIGluIG9yZGVyIHRvIHRlc3QgaXRcclxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCkgLy8gZ2V0cyB0aGUgY3VycmVudFVzZXIgKGxvZ2dlZCBpbiBvciBvdXQpIGZyb20gYXV0aENvbnRleHRcclxuICBjb25zdCB7IGxvZ2luIH0gPSB1c2VBdXRoKCkgLy8gZ2V0cyBsb2dpbiBmdW5jdGlvbiBmcm9tIGF1dGhDb250ZXh0XHJcbiAgY29uc3QgeyBsb2dvdXQgfSA9IHVzZUF1dGgoKVxyXG5cclxuICAvKlxyXG4gIGlmIChjdXJyZW50VXNlcikge1xyXG4gICAgcGFnZVJvdXRlci5wdXNoKCcvbWFwJykgLy8gcmVkaXJlY3RzIHVzZXIgdG8gbWFwIHBhZ2UgaWYgYWxyZWFkeSBsb2dnZWQgaW5cclxuICAgIC8vIGlkZWE6IGluc3RlYWQgb2YgcmVkaXJlY3RpbmcgaW1tZWRpYXRlbHksIGNvdWxkIHByb21wdCB1c2VyIHRvIHNpZ24gb3V0IG9yIHJlZGlyZWN0XHJcbiAgfVxyXG4gICovXHJcbiBcclxuIFxyXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZERhdGEoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pe1xyXG4gIC8vIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGdldCB3aGF0ZXZlciBjb2xsZWN0aW9uIGlzIG5lZWRlZCh3aWxsIHNwZWNpZnkgaW4gZmlyZWJhc2UsIGluIHRoaXMgY2FzZSB1c2VycylcclxuICAgIGNvbnN0IHVzZXJzUmVmID0gY29sbGVjdGlvbihkYiwndXNlcnMnKTtcclxuICAgIC8vIHNldCBhIGRvYyBpbiB0aGUgdXNlcnNSZWYgY29sbGVjdGlvbiwgd2Ugd2lsbCBuYW1lIGl0IGF1bVxyXG4gICAgYXdhaXQgc2V0RG9jKGRvYyh1c2Vyc1JlZiwgXCJhdW1cIiksIHtcclxuICAgICAgLy8gdGhpcyBkb2Mgd2lsbCBoYXZlIHRoZSBwYXJhbWV0ZXIgZGF0YSwgbmFtZSBhdW1tIGFnZSA4MVxyXG4gICAgICBuYW1lOiBcImF1bVwiLFxyXG4gICAgICBhZ2U6IDgxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIHRoaXMgZnVuY3Rpb24gaXMgbm90IHlldCB0ZXN0ZWQgYW5kIGZ1bmN0aW9uYWxcclxuICAvLyBlIGlzIHN0aWxsIGFuIGV2ZW50IGxpc3RlbmVyIHdoaWNoIGlzIHRlbXBvcmFyaWx5IG5lZWRlZCB0byB0ZXN0IG9uIGEgZm9ybVxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pe1xyXG4gICAgLy8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gZ2V0IGNvbGxlY3Rpb24gbmFtZSBpbiB0aGlzIGNhc2UgXCJ1c2Vyc1wiXHJcbiAgICBjb25zdCBjb2xsZWN0aW9uUmVmID0gXCJ1c2Vyc1wiO1xyXG4gICAgY29uc3QgZG9jdW1lbnQgPSBcImF1bVwiO1xyXG4gICAgLy8gdHJ5IHRvIHJldHJpZXZlIGRhdGFcclxuICAgIHRyeXtcclxuICAgICAgLy8gZ2V0IGRvY3VtZW50IHJlZmVyZW5jZVxyXG4gICAgICAvLyBkYiBpcyBvdXIgZmlyZWJhc2UgdmFyaWFibGUsIGNvbGxlY3Rpb24gcmVmIGlzIG91ciBjb2xsZWN0aW9uIGFuZFxyXG4gICAgICAvLyBkb2N1bWVudCBpcyB0aGUgZG9jIHdlIGFyZSB0cnlpbmcgdG8gcmV0cmlldmUgZnJvbSBmaXJlYmFzZSBpbiB0aGUgXCJ1c2Vyc1wiIGNvbGxlY3Rpb25cclxuICAgICAgLy8gZ2V0IGRvYyByZWZlcmVuY2VcclxuICAgICAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCBjb2xsZWN0aW9uUmVmLCBkb2N1bWVudCk7XHJcbiAgICAgIC8vIGdldCB0aGUgc25hcHNob3Qgb2YgZGF0YSBmcm9tIHRoZSByZWZlcmVuY2VcclxuICAgICAgY29uc3QgZG9jU25hcCA9IGdldERvYyhkb2NSZWYpO1xyXG4gICAgICAvLyBnZXQgdGhlIGFjdHVhbCBkYXRhIGZyb20gc25hcHNob3RcclxuICAgICAgbGV0IGRhdGEgPSAoYXdhaXQgZG9jU25hcCkuZGF0YVxyXG5cclxuXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAvLyBsb2cgYW55IGVycm9yIGNhdWdodCBcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBlIGlzIGV2ZW50IGhhbmRsZXJcclxuICBjb25zdCBoYW5kbGVVc2VyQ3JlYXRpb24gPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIC8vIHByZXZlbnQgZGVmYXVsdCBmb3JtIGJlaGF2aW9yXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBsb2dpbiBsb2dpYyBoZXJlXHJcbiAgICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuICAgICAgICAvLyBVc2VyIGNyZWF0ZWQgYW5kIGdldCB1c2VyIGluZm9cclxuICAgICAgICBjb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvcnMgaGVyZVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHVzZXI6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICAvLyBlIGlzIGV2ZW50IGhhbmRsZXJcclxuY29uc3QgbG9naW5Vc2VyID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgLy8gcHJldmVudCBkZWZhdWx0IGZvcm0gYmVoYXZpb3JcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gY2hlY2sgYXV0aGVudGljYXRpb24gaW4gZmlyZWJhc2VcclxuICBsb2dpbihlbWFpbCwgcGFzc3dvcmQpIC8vIGNhbGxzIGxvZ2luIGZ1bmN0aW9uIGZyb20gYXV0aENvbnRleHRcclxuICAudGhlbigoKSA9PiB7XHJcbiAgICAvKiBDb21tZW50ZWQgb3V0IGJ5IFRyaXN0ZW4gUGhhbSBiZWNhdXNlIGl0IHdhcyB1bmRlcmxpbmVkIHJlZFxyXG4gICAgLy8gU2lnbmVkIGluLCBzbyBnZXQgdXNlciBpbmZvcm1hdGlvbi8gY3JlZGVudGlhbFxyXG4gICAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbiAgICAqL1xyXG4gICAgLy8gcmVyb3V0ZSB1c2VyIHRvIG1hcCBwYWdlIHVwb24gc3VjY2Vzc2Z1bCBsb2dpblxyXG4gICAgcGFnZVJvdXRlci5wdXNoKCcvbWFwJylcclxuICAgIC8vc2V0VGltZW91dChmdW5jdGlvbigpe30sIDEwMCk7IFxyXG4gICAgLy93aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSwgNTAwKTsgLy8gRGVsYXkgMzAwIG1zIGJlZm9yZSByZWZyZXNoaW5nXHJcbiAgICBcclxuICAgIC8vIC4uLlxyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcclxuICAgIC8qIENvbW1lbnRlZCBvdXQgYnkgVHJpc3RlbiBQaGFtIGJlY2F1c2UgZXJyb3IgbmVlZGVkIHR5cGUgRXJyb3IgYnV0IEVycm9yIHR5cGUgZG9lcyBub3QgaGF2ZSAnY29kZScgcHJvcGVydHlcclxuICAgIC8vIHByaW50IGVycm9yIG1lc3NhZ2UgZnJvbSBmaXJlYmFzZVxyXG4gICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTsgRXJyb3IgZG9lcyBub3QgaGF2ZSAnY29kZScgcHJvcGVydHlcclxuICAgICovXHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVHdWVzdCgpIHtcclxuICBsb2dvdXQoKVxyXG4gIC50aGVuKCgpID0+IHsgLy8gc2lnbnMgb3V0IHVzZXJcclxuICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwsIHJlcm91dGVzIHVzZXIgdG8gbWFwIHBhZ2VcclxuICAgIHBhZ2VSb3V0ZXIucHVzaCgnL21hcCcpXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSwgMzAwKTsgLy8gRGVsYXkgMzAwIG1zIGJlZm9yZSByZWZyZXNoaW5nXHJcbiAgfSkuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xyXG4gICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm1haW5UaXRsZX0+T1UgTWFwejwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Gb3JtQ29udGFpbmVyfT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGxvZ2luVXNlcihlKX0gLy8gcGxlYXNlIGRvbid0IGVkaXQgdGhpcyBsaW5lLCBvciBpZiB5b3UgYXJlIGp1c3Qgc2F2ZSBvcmlnaW5hbCB2ZXJzaW9uIGFzIHdlbGwgLXZpc2hudSBcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkZvcm19PiBcclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpblRpdGxlfT5TaWduIGluPC9oMj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIiAvLyBFbnN1cmluZyB0aGlzIGlucHV0IGlzIGZvciBlbWFpbHNcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0RmllbGR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXNzd29yZElucHV0fT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0RmllbGR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlUGFzc3dvcmR9IG9uQ2xpY2s9eygpID0+IHNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKX0+XHJcbiAgICAgICAgICAgICAge3Nob3dQYXNzd29yZCA/ICdoaWRlJyA6ICdzaG93J31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17c3R5bGVzLmZvcmdvdFBhc3N3b3JkfT5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5CdXR0b259PlNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcGFnZVJvdXRlci5wdXNoKCcvcmVnaXN0ZXInKX10eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5CdXR0b259PlJlZ2lzdGVyPC9idXR0b24+IFxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUd1ZXN0KCl9dHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luQnV0dG9ufT5Db250aW51ZSBhcyBHdWVzdDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiYXV0aCIsImRiIiwiY29sbGVjdGlvbiIsInNldERvYyIsImRvYyIsImdldERvYyIsInVzZVJvdXRlciIsInVzZUF1dGgiLCJMb2dpblBhZ2UiLCJwYWdlUm91dGVyIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJjdXJyZW50VXNlciIsImxvZ2luIiwibG9nb3V0IiwiYWRkRGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJzUmVmIiwibmFtZSIsImFnZSIsImdldERhdGEiLCJjb2xsZWN0aW9uUmVmIiwiZG9jdW1lbnQiLCJkb2NSZWYiLCJkb2NTbmFwIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVVzZXJDcmVhdGlvbiIsInRoZW4iLCJ1c2VyQ3JlZGVudGlhbCIsInVzZXIiLCJjYXRjaCIsIm1lc3NhZ2UiLCJsb2dpblVzZXIiLCJwdXNoIiwic2V0VGltZW91dCIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3JNZXNzYWdlIiwiaGFuZGxlR3Vlc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsIm1haW5UaXRsZSIsImxvZ2luRm9ybUNvbnRhaW5lciIsImZvcm0iLCJvblN1Ym1pdCIsImxvZ2luRm9ybSIsImgyIiwibG9naW5UaXRsZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImlucHV0RmllbGQiLCJyZXF1aXJlZCIsInBhc3N3b3JkSW5wdXQiLCJzcGFuIiwidG9nZ2xlUGFzc3dvcmQiLCJvbkNsaWNrIiwiYSIsImhyZWYiLCJmb3Jnb3RQYXNzd29yZCIsImJ1dHRvbiIsImxvZ2luQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});