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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase.js */ \"./firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_authContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/authContext */ \"./src/contexts/authContext.js\");\n// pages/index.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n/*\r\nThis page was created by Mahnoor Saeed and Vishnu Patel\r\nPage, layout and styling was created by Mahnoor Saeed\r\nFirebase functions(handleUserCreation, loginUser, addData, and getData) \r\nwere created by Vishnu Patel\r\n*/ const LoginPage = ()=>{\n    _s();\n    const pageRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    // email variable that is changed in input\n    let [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // password varibale to be changed in input\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // e is just a temporary variable (event handler) because this function is embedded in the \n    // submit form function in order to test it\n    const { currentUser } = (0,_contexts_authContext__WEBPACK_IMPORTED_MODULE_6__.useAuth)() // gets the currentUser (logged in or out) from authContext\n    ;\n    const { login } = (0,_contexts_authContext__WEBPACK_IMPORTED_MODULE_6__.useAuth)() // gets login function from authContext\n    ;\n    const { logout } = (0,_contexts_authContext__WEBPACK_IMPORTED_MODULE_6__.useAuth)();\n    /*\r\n  if (currentUser) {\r\n    pageRouter.push('/map') // redirects user to map page if already logged in\r\n    // idea: instead of redirecting immediately, could prompt user to sign out or redirect\r\n  }\r\n  */ async function addData(e) {\n        // prevent default form submission behavior\n        e.preventDefault();\n        // get whatever collection is needed(will specify in firebase, in this case users)\n        const usersRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_js__WEBPACK_IMPORTED_MODULE_3__.db, \"users\");\n        // set a doc in the usersRef collection, we will name it aum\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(usersRef, \"aum\"), {\n            // this doc will have the parameter data, name aumm age 81\n            name: \"aum\",\n            age: 81\n        });\n    }\n    // this function is not yet tested and functional\n    // e is still an event listener which is temporarily needed to test on a form\n    async function getData(e) {\n        // prevent default form submission behavior\n        e.preventDefault();\n        // get collection name in this case \"users\"\n        const collectionRef = \"users\";\n        const document = \"aum\";\n        // try to retrieve data\n        try {\n            // get document reference\n            // db is our firebase variable, collection ref is our collection and\n            // document is the doc we are trying to retrieve from firebase in the \"users\" collection\n            // get doc reference\n            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase_js__WEBPACK_IMPORTED_MODULE_3__.db, collectionRef, document);\n            // get the snapshot of data from the reference\n            const docSnap = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docRef);\n            // get the actual data from snapshot\n            let data = (await docSnap).data;\n        } catch (error) {\n            // log any error caught \n            console.log(error);\n        }\n    }\n    // e is event handler\n    const handleUserCreation = (e)=>{\n        // prevent default form behavior\n        e.preventDefault();\n        // login logic here\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_firebase_js__WEBPACK_IMPORTED_MODULE_3__.auth, email, password).then((userCredential)=>{\n            // User created and get user info\n            const user = userCredential.user;\n        }).catch((error)=>{\n            // Handle errors here\n            console.error(\"Error creating user:\", error.message);\n        });\n    };\n    // e is event handler\n    const loginUser = (e)=>{\n        // prevent default form behavior\n        e.preventDefault();\n        // check authentication in firebase\n        login(email, password) // calls login function from authContext\n        .then(()=>{\n            /* Commented out by Tristen Pham because it was underlined red\r\n    // Signed in, so get user information/ credential\r\n    const user = userCredential.user;\r\n    */ // reroute user to map page upon successful login\n            pageRouter.push(\"/map\");\n            //setTimeout(function(){}, 100); \n            //window.location.reload();\n            setTimeout(function() {\n                location.reload();\n            }, 500); // Delay 300 ms before refreshing\n        // ...\n        }).catch((error)=>{\n            /* Commented out by Tristen Pham because error needed type Error but Error type does not have 'code' property\r\n    // print error message from firebase\r\n    const errorCode = error.code; Error does not have 'code' property\r\n    */ const errorMessage = error.message;\n        });\n    };\n    function handleGuest() {\n        logout().then(()=>{\n            // Sign-out successful, reroutes user to map page\n            pageRouter.push(\"/map\");\n        }).catch((error)=>{\n        // An error happened.\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainTitle),\n                children: \"OU Mapz\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginFormContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>loginUser(e),\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginForm),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginTitle),\n                                children: \"Sign in\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 140,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\" // Ensuring this input is for emails\n                                ,\n                                placeholder: \"Email\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputField),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().passwordInput),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: showPassword ? \"text\" : \"password\",\n                                        placeholder: \"Password\",\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value),\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputField),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 150,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().togglePassword),\n                                        onClick: ()=>setShowPassword(!showPassword),\n                                        children: showPassword ? \"hide\" : \"show\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 158,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 149,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().forgotPassword),\n                                children: \"Forgot password?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 162,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginButton),\n                                children: \"Sign in\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>pageRouter.push(\"/register\"),\n                                type: \"submit\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginButton),\n                                children: \"Register\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 164,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleGuest(),\n                        type: \"submit\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginButton),\n                        children: \"Continue as Guest\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 166,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\simba\\\\OneDrive\\\\Desktop\\\\ou-mapz\\\\ou-mapz\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 135,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginPage, \"jsoHs/sXX/GzpDUz3QY8ZKtO5U8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _contexts_authContext__WEBPACK_IMPORTED_MODULE_6__.useAuth,\n        _contexts_authContext__WEBPACK_IMPORTED_MODULE_6__.useAuth,\n        _contexts_authContext__WEBPACK_IMPORTED_MODULE_6__.useAuth\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDMkU7Z0NBQU9kLE1BQUs7Z0NBQVNYLFdBQVdsRCw0RUFBa0I7MENBQUU7Ozs7OzswQ0FDckQsOERBQUMyRTtnQ0FBT0osU0FBUyxJQUFNNUQsV0FBV2dDLElBQUksQ0FBQztnQ0FBYWtCLE1BQUs7Z0NBQVNYLFdBQVdsRCw0RUFBa0I7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FFbkcsOERBQUMyRTt3QkFBT0osU0FBUyxJQUFNdkI7d0JBQWNhLE1BQUs7d0JBQVNYLFdBQVdsRCw0RUFBa0I7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxRjtHQXpKTVU7O1FBQ2VGLGtEQUFTQTtRQVFKQywwREFBT0E7UUFDYkEsMERBQU9BO1FBQ05BLDBEQUFPQTs7O0tBWHRCQztBQTJKTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXgudHN4XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbk91dCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQge2F1dGgsIGRifSBmcm9tICcuLi8uLi9maXJlYmFzZS5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ2RvbWFpbic7XHJcbmltcG9ydCB7Y29sbGVjdGlvbiwgYWRkRG9jLCBzZXREb2MsIGRvYywgZ2V0RG9jfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9jb250ZXh0cy9hdXRoQ29udGV4dCc7XHJcblxyXG4vKlxyXG5UaGlzIHBhZ2Ugd2FzIGNyZWF0ZWQgYnkgTWFobm9vciBTYWVlZCBhbmQgVmlzaG51IFBhdGVsXHJcblBhZ2UsIGxheW91dCBhbmQgc3R5bGluZyB3YXMgY3JlYXRlZCBieSBNYWhub29yIFNhZWVkXHJcbkZpcmViYXNlIGZ1bmN0aW9ucyhoYW5kbGVVc2VyQ3JlYXRpb24sIGxvZ2luVXNlciwgYWRkRGF0YSwgYW5kIGdldERhdGEpIFxyXG53ZXJlIGNyZWF0ZWQgYnkgVmlzaG51IFBhdGVsXHJcbiovXHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGFnZVJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgLy8gZW1haWwgdmFyaWFibGUgdGhhdCBpcyBjaGFuZ2VkIGluIGlucHV0XHJcbiAgbGV0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vIHBhc3N3b3JkIHZhcmliYWxlIHRvIGJlIGNoYW5nZWQgaW4gaW5wdXRcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIGUgaXMganVzdCBhIHRlbXBvcmFyeSB2YXJpYWJsZSAoZXZlbnQgaGFuZGxlcikgYmVjYXVzZSB0aGlzIGZ1bmN0aW9uIGlzIGVtYmVkZGVkIGluIHRoZSBcclxuICAvLyBzdWJtaXQgZm9ybSBmdW5jdGlvbiBpbiBvcmRlciB0byB0ZXN0IGl0XHJcbiAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpIC8vIGdldHMgdGhlIGN1cnJlbnRVc2VyIChsb2dnZWQgaW4gb3Igb3V0KSBmcm9tIGF1dGhDb250ZXh0XHJcbiAgY29uc3QgeyBsb2dpbiB9ID0gdXNlQXV0aCgpIC8vIGdldHMgbG9naW4gZnVuY3Rpb24gZnJvbSBhdXRoQ29udGV4dFxyXG4gIGNvbnN0IHsgbG9nb3V0IH0gPSB1c2VBdXRoKClcclxuXHJcbiAgLypcclxuICBpZiAoY3VycmVudFVzZXIpIHtcclxuICAgIHBhZ2VSb3V0ZXIucHVzaCgnL21hcCcpIC8vIHJlZGlyZWN0cyB1c2VyIHRvIG1hcCBwYWdlIGlmIGFscmVhZHkgbG9nZ2VkIGluXHJcbiAgICAvLyBpZGVhOiBpbnN0ZWFkIG9mIHJlZGlyZWN0aW5nIGltbWVkaWF0ZWx5LCBjb3VsZCBwcm9tcHQgdXNlciB0byBzaWduIG91dCBvciByZWRpcmVjdFxyXG4gIH1cclxuICAqL1xyXG4gXHJcbiBcclxuICBhc3luYyBmdW5jdGlvbiBhZGREYXRhKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KXtcclxuICAvLyBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIGJlaGF2aW9yXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBnZXQgd2hhdGV2ZXIgY29sbGVjdGlvbiBpcyBuZWVkZWQod2lsbCBzcGVjaWZ5IGluIGZpcmViYXNlLCBpbiB0aGlzIGNhc2UgdXNlcnMpXHJcbiAgICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZGIsJ3VzZXJzJyk7XHJcbiAgICAvLyBzZXQgYSBkb2MgaW4gdGhlIHVzZXJzUmVmIGNvbGxlY3Rpb24sIHdlIHdpbGwgbmFtZSBpdCBhdW1cclxuICAgIGF3YWl0IHNldERvYyhkb2ModXNlcnNSZWYsIFwiYXVtXCIpLCB7XHJcbiAgICAgIC8vIHRoaXMgZG9jIHdpbGwgaGF2ZSB0aGUgcGFyYW1ldGVyIGRhdGEsIG5hbWUgYXVtbSBhZ2UgODFcclxuICAgICAgbmFtZTogXCJhdW1cIixcclxuICAgICAgYWdlOiA4MSxcclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyB0aGlzIGZ1bmN0aW9uIGlzIG5vdCB5ZXQgdGVzdGVkIGFuZCBmdW5jdGlvbmFsXHJcbiAgLy8gZSBpcyBzdGlsbCBhbiBldmVudCBsaXN0ZW5lciB3aGljaCBpcyB0ZW1wb3JhcmlseSBuZWVkZWQgdG8gdGVzdCBvbiBhIGZvcm1cclxuICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KXtcclxuICAgIC8vIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGdldCBjb2xsZWN0aW9uIG5hbWUgaW4gdGhpcyBjYXNlIFwidXNlcnNcIlxyXG4gICAgY29uc3QgY29sbGVjdGlvblJlZiA9IFwidXNlcnNcIjtcclxuICAgIGNvbnN0IGRvY3VtZW50ID0gXCJhdW1cIjtcclxuICAgIC8vIHRyeSB0byByZXRyaWV2ZSBkYXRhXHJcbiAgICB0cnl7XHJcbiAgICAgIC8vIGdldCBkb2N1bWVudCByZWZlcmVuY2VcclxuICAgICAgLy8gZGIgaXMgb3VyIGZpcmViYXNlIHZhcmlhYmxlLCBjb2xsZWN0aW9uIHJlZiBpcyBvdXIgY29sbGVjdGlvbiBhbmRcclxuICAgICAgLy8gZG9jdW1lbnQgaXMgdGhlIGRvYyB3ZSBhcmUgdHJ5aW5nIHRvIHJldHJpZXZlIGZyb20gZmlyZWJhc2UgaW4gdGhlIFwidXNlcnNcIiBjb2xsZWN0aW9uXHJcbiAgICAgIC8vIGdldCBkb2MgcmVmZXJlbmNlXHJcbiAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgY29sbGVjdGlvblJlZiwgZG9jdW1lbnQpO1xyXG4gICAgICAvLyBnZXQgdGhlIHNuYXBzaG90IG9mIGRhdGEgZnJvbSB0aGUgcmVmZXJlbmNlXHJcbiAgICAgIGNvbnN0IGRvY1NuYXAgPSBnZXREb2MoZG9jUmVmKTtcclxuICAgICAgLy8gZ2V0IHRoZSBhY3R1YWwgZGF0YSBmcm9tIHNuYXBzaG90XHJcbiAgICAgIGxldCBkYXRhID0gKGF3YWl0IGRvY1NuYXApLmRhdGFcclxuXHJcblxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgLy8gbG9nIGFueSBlcnJvciBjYXVnaHQgXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gZSBpcyBldmVudCBoYW5kbGVyXHJcbiAgY29uc3QgaGFuZGxlVXNlckNyZWF0aW9uID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICAvLyBwcmV2ZW50IGRlZmF1bHQgZm9ybSBiZWhhdmlvclxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gbG9naW4gbG9naWMgaGVyZVxyXG4gICAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbiAgICAgICAgLy8gVXNlciBjcmVhdGVkIGFuZCBnZXQgdXNlciBpbmZvXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBIYW5kbGUgZXJyb3JzIGhlcmVcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyB1c2VyOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgLy8gZSBpcyBldmVudCBoYW5kbGVyXHJcbmNvbnN0IGxvZ2luVXNlciA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gIC8vIHByZXZlbnQgZGVmYXVsdCBmb3JtIGJlaGF2aW9yXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vIGNoZWNrIGF1dGhlbnRpY2F0aW9uIGluIGZpcmViYXNlXHJcbiAgbG9naW4oZW1haWwsIHBhc3N3b3JkKSAvLyBjYWxscyBsb2dpbiBmdW5jdGlvbiBmcm9tIGF1dGhDb250ZXh0XHJcbiAgLnRoZW4oKCkgPT4ge1xyXG4gICAgLyogQ29tbWVudGVkIG91dCBieSBUcmlzdGVuIFBoYW0gYmVjYXVzZSBpdCB3YXMgdW5kZXJsaW5lZCByZWRcclxuICAgIC8vIFNpZ25lZCBpbiwgc28gZ2V0IHVzZXIgaW5mb3JtYXRpb24vIGNyZWRlbnRpYWxcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4gICAgKi9cclxuICAgIC8vIHJlcm91dGUgdXNlciB0byBtYXAgcGFnZSB1cG9uIHN1Y2Nlc3NmdWwgbG9naW5cclxuICAgIHBhZ2VSb3V0ZXIucHVzaCgnL21hcCcpXHJcbiAgICAvL3NldFRpbWVvdXQoZnVuY3Rpb24oKXt9LCAxMDApOyBcclxuICAgIC8vd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0sIDUwMCk7IC8vIERlbGF5IDMwMCBtcyBiZWZvcmUgcmVmcmVzaGluZ1xyXG4gICAgXHJcbiAgICAvLyAuLi5cclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XHJcbiAgICAvKiBDb21tZW50ZWQgb3V0IGJ5IFRyaXN0ZW4gUGhhbSBiZWNhdXNlIGVycm9yIG5lZWRlZCB0eXBlIEVycm9yIGJ1dCBFcnJvciB0eXBlIGRvZXMgbm90IGhhdmUgJ2NvZGUnIHByb3BlcnR5XHJcbiAgICAvLyBwcmludCBlcnJvciBtZXNzYWdlIGZyb20gZmlyZWJhc2VcclxuICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7IEVycm9yIGRvZXMgbm90IGhhdmUgJ2NvZGUnIHByb3BlcnR5XHJcbiAgICAqL1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlR3Vlc3QoKSB7XHJcbiAgbG9nb3V0KClcclxuICAudGhlbigoKSA9PiB7IC8vIHNpZ25zIG91dCB1c2VyXHJcbiAgICAvLyBTaWduLW91dCBzdWNjZXNzZnVsLCByZXJvdXRlcyB1c2VyIHRvIG1hcCBwYWdlXHJcbiAgICBwYWdlUm91dGVyLnB1c2goJy9tYXAnKVxyXG4gIH0pLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcclxuICAgIC8vIEFuIGVycm9yIGhhcHBlbmVkLlxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5tYWluVGl0bGV9Pk9VIE1hcHo8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luRm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBsb2dpblVzZXIoZSl9IC8vIHBsZWFzZSBkb24ndCBlZGl0IHRoaXMgbGluZSwgb3IgaWYgeW91IGFyZSBqdXN0IHNhdmUgb3JpZ2luYWwgdmVyc2lvbiBhcyB3ZWxsIC12aXNobnUgXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Gb3JtfT4gXHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5UaXRsZX0+U2lnbiBpbjwvaDI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgLy8gRW5zdXJpbmcgdGhpcyBpbnB1dCBpcyBmb3IgZW1haWxzXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFzc3dvcmRJbnB1dH0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZVBhc3N3b3JkfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCl9PlxyXG4gICAgICAgICAgICAgIHtzaG93UGFzc3dvcmQgPyAnaGlkZScgOiAnc2hvdyd9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e3N0eWxlcy5mb3Jnb3RQYXNzd29yZH0+Rm9yZ290IHBhc3N3b3JkPzwvYT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luQnV0dG9ufT5TaWduIGluPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHBhZ2VSb3V0ZXIucHVzaCgnL3JlZ2lzdGVyJyl9dHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luQnV0dG9ufT5SZWdpc3RlcjwvYnV0dG9uPiBcclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVHdWVzdCgpfXR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ1dHRvbn0+Q29udGludWUgYXMgR3Vlc3Q8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImF1dGgiLCJkYiIsImNvbGxlY3Rpb24iLCJzZXREb2MiLCJkb2MiLCJnZXREb2MiLCJ1c2VSb3V0ZXIiLCJ1c2VBdXRoIiwiTG9naW5QYWdlIiwicGFnZVJvdXRlciIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiY3VycmVudFVzZXIiLCJsb2dpbiIsImxvZ291dCIsImFkZERhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2Vyc1JlZiIsIm5hbWUiLCJhZ2UiLCJnZXREYXRhIiwiY29sbGVjdGlvblJlZiIsImRvY3VtZW50IiwiZG9jUmVmIiwiZG9jU25hcCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVVc2VyQ3JlYXRpb24iLCJ0aGVuIiwidXNlckNyZWRlbnRpYWwiLCJ1c2VyIiwiY2F0Y2giLCJtZXNzYWdlIiwibG9naW5Vc2VyIiwicHVzaCIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yTWVzc2FnZSIsImhhbmRsZUd1ZXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJtYWluVGl0bGUiLCJsb2dpbkZvcm1Db250YWluZXIiLCJmb3JtIiwib25TdWJtaXQiLCJsb2dpbkZvcm0iLCJoMiIsImxvZ2luVGl0bGUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJpbnB1dEZpZWxkIiwicmVxdWlyZWQiLCJwYXNzd29yZElucHV0Iiwic3BhbiIsInRvZ2dsZVBhc3N3b3JkIiwib25DbGljayIsImEiLCJocmVmIiwiZm9yZ290UGFzc3dvcmQiLCJidXR0b24iLCJsb2dpbkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});