/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDIg7M-S34qJfxO3PCEz7DMKu7rty-Oyqw\",\n    authDomain: \"ou-mapz.firebaseapp.com\",\n    projectId: \"ou-mapz\",\n    storageBucket: \"ou-mapz.appspot.com\",\n    messagingSenderId: \"526498569132\",\n    appId: \"1:526498569132:web:aaa5242f24381da906f809\",\n    measurementId: \"G-5GHXE5WJTL\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n// const analytics = getAnalytics(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ1Y7QUFDSztBQUNiO0FBQ2E7QUFDbEQsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1JLGlCQUFpQjtJQUNyQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87SUFDUEMsZUFBZTtBQUNqQjtBQUVBLHNCQUFzQjtBQUN0QixNQUFNQyxNQUFNWiwyREFBYUEsQ0FBQ0k7QUFDMUIsdUNBQXVDO0FBQ3ZDLE1BQU1TLE9BQU9YLHNEQUFPQSxDQUFDVTtBQUNyQixNQUFNRSxLQUFLWCxnRUFBWUEsQ0FBQ1M7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL291LW1hcHovLi9maXJlYmFzZS5qcz80ZDk3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tIFwiZmlyZWJhc2UvYW5hbHl0aWNzXCI7XG5pbXBvcnQge2dldEF1dGh9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2Vcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5RElnN00tUzM0cUpmeE8zUENFejdETUt1N3J0eS1PeXF3XCIsXG4gIGF1dGhEb21haW46IFwib3UtbWFwei5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcIm91LW1hcHpcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJvdS1tYXB6LmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjUyNjQ5ODU2OTEzMlwiLFxuICBhcHBJZDogXCIxOjUyNjQ5ODU2OTEzMjp3ZWI6YWFhNTI0MmYyNDM4MWRhOTA2ZjgwOVwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctNUdIWEU1V0pUTFwiXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbi8vIGNvbnN0IGFuYWx5dGljcyA9IGdldEFuYWx5dGljcyhhcHApO1xuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5leHBvcnQge2F1dGgsIGFwcCwgZGJ9O1xuXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFuYWx5dGljcyIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJhdXRoIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./src/contexts/authContext.js":
/*!*************************************!*\
  !*** ./src/contexts/authContext.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase.js */ \"./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_js__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase_js__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n/*\nThis context was made by Tristen Pham\n-> Implemented authentication context and associated functions\n*/ const authContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext) // function to allow other pages to use this context\n    ;\n}\nfunction AuthProvider({ children }) {\n    const [currentUser, setcurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)() // allows updating/setting of user upon authentication changes\n    ;\n    function signup(email, password) {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_firebase_js__WEBPACK_IMPORTED_MODULE_2__.auth, email, password) // firebase function used to create user account\n        ;\n    }\n    function login(email, password) {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_firebase_js__WEBPACK_IMPORTED_MODULE_2__.auth, email, password) // firebase function used to log in user\n        ;\n    }\n    function logout() {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebase_js__WEBPACK_IMPORTED_MODULE_2__.auth) // firebase function used to sign user out\n        ;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = _firebase_js__WEBPACK_IMPORTED_MODULE_2__.auth.onAuthStateChanged((user)=>{\n            setcurrentUser(user) // sets the current user to the user parameter when logging in/out\n            ;\n        });\n        return unsubscribe /* unsubscribes from the onAuthStateChanged listener when done mounting so \n        that it completes upon authentication change */ ;\n    }, []);\n    const value = {\n        currentUser,\n        signup,\n        login,\n        logout\n    };\n    return(/* allows other pages to use this context through the provider, \n        applies its value to all child html tags of provider */ /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(authContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/tuannguyen/Desktop/ou-mapz/src/contexts/authContext.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this));\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvYXV0aENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ3JCO0FBQzJEO0FBRXBHOzs7QUFHQSxHQUVBLE1BQU1RLDRCQUFjUiwwREFBbUI7QUFFaEMsU0FBU1U7SUFDWixPQUFPVCxpREFBVUEsQ0FBQ08sYUFBYSxvREFBb0Q7O0FBQ3ZGO0FBRU8sU0FBU0csYUFBYSxFQUFFQyxRQUFRLEVBQUU7SUFDckMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxHQUFHLDhEQUE4RDs7SUFFL0csU0FBU2EsT0FBT0MsS0FBSyxFQUFFQyxRQUFRO1FBQzNCLE9BQU9aLDZFQUE4QkEsQ0FBQ0QsOENBQUlBLEVBQUVZLE9BQU9DLFVBQVUsZ0RBQWdEOztJQUNqSDtJQUVBLFNBQVNDLE1BQU1GLEtBQUssRUFBRUMsUUFBUTtRQUMxQixPQUFPWCx5RUFBMEJBLENBQUNGLDhDQUFJQSxFQUFFWSxPQUFPQyxVQUFVLHdDQUF3Qzs7SUFDckc7SUFFQSxTQUFTRTtRQUNMLE9BQU9aLHNEQUFPQSxDQUFDSCw4Q0FBSUEsRUFBRSwwQ0FBMEM7O0lBQ25FO0lBRUFELGdEQUFTQSxDQUFDO1FBQ04sTUFBTWlCLGNBQWNoQiw4Q0FBSUEsQ0FBQ2lCLGtCQUFrQixDQUFDQyxDQUFBQTtZQUN4Q1IsZUFBZVEsTUFBTSxrRUFBa0U7O1FBQzNGO1FBRUEsT0FBT0YsWUFBWTtxREFDMEI7SUFDakQsR0FBRyxFQUFFO0lBRUwsTUFBTUcsUUFBUTtRQUNWVjtRQUNBRTtRQUNBRztRQUNBQztJQUNKO0lBRUEsT0FBUzs2REFDZ0QsaUJBQ3JELDhEQUFDWCxZQUFZZ0IsUUFBUTtRQUFDRCxPQUFPQTtrQkFDeEJYOzs7Ozs7QUFHYiIsInNvdXJjZXMiOlsid2VicGFjazovL291LW1hcHovLi9zcmMvY29udGV4dHMvYXV0aENvbnRleHQuanM/Y2U3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uLy4uL2ZpcmViYXNlLmpzJztcbmltcG9ydCB7IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25PdXQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcblxuLypcblRoaXMgY29udGV4dCB3YXMgbWFkZSBieSBUcmlzdGVuIFBoYW1cbi0+IEltcGxlbWVudGVkIGF1dGhlbnRpY2F0aW9uIGNvbnRleHQgYW5kIGFzc29jaWF0ZWQgZnVuY3Rpb25zXG4qL1xuXG5jb25zdCBhdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCkgLy8gZnVuY3Rpb24gdG8gYWxsb3cgb3RoZXIgcGFnZXMgdG8gdXNlIHRoaXMgY29udGV4dFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Y3VycmVudFVzZXJdID0gdXNlU3RhdGUoKSAvLyBhbGxvd3MgdXBkYXRpbmcvc2V0dGluZyBvZiB1c2VyIHVwb24gYXV0aGVudGljYXRpb24gY2hhbmdlc1xuXG4gICAgZnVuY3Rpb24gc2lnbnVwKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCkgLy8gZmlyZWJhc2UgZnVuY3Rpb24gdXNlZCB0byBjcmVhdGUgdXNlciBhY2NvdW50XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9naW4oZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpIC8vIGZpcmViYXNlIGZ1bmN0aW9uIHVzZWQgdG8gbG9nIGluIHVzZXJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgICAgIHJldHVybiBzaWduT3V0KGF1dGgpIC8vIGZpcmViYXNlIGZ1bmN0aW9uIHVzZWQgdG8gc2lnbiB1c2VyIG91dFxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB7XG4gICAgICAgICAgICBzZXRjdXJyZW50VXNlcih1c2VyKSAvLyBzZXRzIHRoZSBjdXJyZW50IHVzZXIgdG8gdGhlIHVzZXIgcGFyYW1ldGVyIHdoZW4gbG9nZ2luZyBpbi9vdXRcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdW5zdWJzY3JpYmUgLyogdW5zdWJzY3JpYmVzIGZyb20gdGhlIG9uQXV0aFN0YXRlQ2hhbmdlZCBsaXN0ZW5lciB3aGVuIGRvbmUgbW91bnRpbmcgc28gXG4gICAgICAgIHRoYXQgaXQgY29tcGxldGVzIHVwb24gYXV0aGVudGljYXRpb24gY2hhbmdlICovXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgY3VycmVudFVzZXIsXG4gICAgICAgIHNpZ251cCxcbiAgICAgICAgbG9naW4sXG4gICAgICAgIGxvZ291dFxuICAgIH1cblxuICAgIHJldHVybiAoIC8qIGFsbG93cyBvdGhlciBwYWdlcyB0byB1c2UgdGhpcyBjb250ZXh0IHRocm91Z2ggdGhlIHByb3ZpZGVyLCBcbiAgICAgICAgYXBwbGllcyBpdHMgdmFsdWUgdG8gYWxsIGNoaWxkIGh0bWwgdGFncyBvZiBwcm92aWRlciAqL1xuICAgICAgICA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn0gXG4gICAgICAgIDwvYXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJhdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBdXRoIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50VXNlciIsInNldGN1cnJlbnRVc2VyIiwic2lnbnVwIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ2luIiwibG9nb3V0IiwidW5zdWJzY3JpYmUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwidmFsdWUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/authContext.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/authContext */ \"./src/contexts/authContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_authContext__WEBPACK_IMPORTED_MODULE_2__]);\n_contexts_authContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// pages/_app.tsx\n\n // Path to your global CSS file\n\nfunction MyApp({ Component, pageProps }) {\n    // Wrap the Component with layout here if you have a common layout component\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_authContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/tuannguyen/Desktop/ou-mapz/src/pages/_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tuannguyen/Desktop/ou-mapz/src/pages/_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsaUJBQWlCOztBQUNhLENBQUMsK0JBQStCO0FBRVI7QUFFdEQsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyw0RUFBNEU7SUFDNUUscUJBQ0UsOERBQUNILCtEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3UtbWFwei8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL19hcHAudHN4XG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJzsgLy8gUGF0aCB0byB5b3VyIGdsb2JhbCBDU1MgZmlsZVxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL2F1dGhDb250ZXh0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIC8vIFdyYXAgdGhlIENvbXBvbmVudCB3aXRoIGxheW91dCBoZXJlIGlmIHlvdSBoYXZlIGEgY29tbW9uIGxheW91dCBjb21wb25lbnRcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/analytics");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();