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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDIg7M-S34qJfxO3PCEz7DMKu7rty-Oyqw\",\n    authDomain: \"ou-mapz.firebaseapp.com\",\n    projectId: \"ou-mapz\",\n    storageBucket: \"ou-mapz.appspot.com\",\n    messagingSenderId: \"526498569132\",\n    appId: \"1:526498569132:web:aaa5242f24381da906f809\",\n    measurementId: \"G-5GHXE5WJTL\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n// const analytics = getAnalytics(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ1Y7QUFDSztBQUNiO0FBQ2E7QUFDbEQsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1JLGlCQUFpQjtJQUNyQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87SUFDUEMsZUFBZTtBQUNqQjtBQUVBLHNCQUFzQjtBQUN0QixNQUFNQyxNQUFNWiwyREFBYUEsQ0FBQ0k7QUFDMUIsdUNBQXVDO0FBQ3ZDLE1BQU1TLE9BQU9YLHNEQUFPQSxDQUFDVTtBQUNyQixNQUFNRSxLQUFLWCxnRUFBWUEsQ0FBQ1M7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL291LW1hcHovLi9maXJlYmFzZS5qcz80ZDk3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgZ2V0QW5hbHl0aWNzIH0gZnJvbSBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xyXG5pbXBvcnQge2dldEF1dGh9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuLy8gVE9ETzogQWRkIFNES3MgZm9yIEZpcmViYXNlIHByb2R1Y3RzIHRoYXQgeW91IHdhbnQgdG8gdXNlXHJcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXHJcblxyXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeURJZzdNLVMzNHFKZnhPM1BDRXo3RE1LdTdydHktT3lxd1wiLFxyXG4gIGF1dGhEb21haW46IFwib3UtbWFwei5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwib3UtbWFwelwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwib3UtbWFwei5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjUyNjQ5ODU2OTEzMlwiLFxyXG4gIGFwcElkOiBcIjE6NTI2NDk4NTY5MTMyOndlYjphYWE1MjQyZjI0MzgxZGE5MDZmODA5XCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLTVHSFhFNVdKVExcIlxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuLy8gY29uc3QgYW5hbHl0aWNzID0gZ2V0QW5hbHl0aWNzKGFwcCk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbmV4cG9ydCB7YXV0aCwgYXBwLCBkYn07XHJcblxyXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFuYWx5dGljcyIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJhdXRoIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./src/contexts/authContext.js":
/*!*************************************!*\
  !*** ./src/contexts/authContext.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase.js */ \"./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_js__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase_js__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n/*\r\nThis context was made by Tristen Pham\r\n-> Implemented authentication context and associated functions\r\n*/ const authContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext) // function to allow other pages to use this context\n    ;\n}\nfunction AuthProvider({ children }) {\n    const [currentUser, setcurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)() // allows updating/setting of user upon authentication changes\n    ;\n    function signup(email, password) {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_firebase_js__WEBPACK_IMPORTED_MODULE_2__.auth, email, password) // firebase function used to create user account\n        ;\n    }\n    function login(email, password) {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_firebase_js__WEBPACK_IMPORTED_MODULE_2__.auth, email, password) // firebase function used to log in user\n        ;\n    }\n    function logout() {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebase_js__WEBPACK_IMPORTED_MODULE_2__.auth) // firebase function used to sign user out\n        ;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = _firebase_js__WEBPACK_IMPORTED_MODULE_2__.auth.onAuthStateChanged((user)=>{\n            setcurrentUser(user) // sets the current user to the user parameter when logging in/out\n            ;\n        });\n        return unsubscribe /* unsubscribes from the onAuthStateChanged listener when done mounting so \r\n        that it completes upon authentication change */ ;\n    }, []);\n    const value = {\n        currentUser,\n        signup,\n        login,\n        logout\n    };\n    return(/* allows other pages to use this context through the provider, \r\n        applies its value to all child html tags of provider */ /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(authContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mahno\\\\Documents\\\\ou-mapz\\\\src\\\\contexts\\\\authContext.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this));\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvYXV0aENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ3JCO0FBQzJEO0FBRXBHOzs7QUFHQSxHQUVBLE1BQU1RLDRCQUFjUiwwREFBbUI7QUFFaEMsU0FBU1U7SUFDWixPQUFPVCxpREFBVUEsQ0FBQ08sYUFBYSxvREFBb0Q7O0FBQ3ZGO0FBRU8sU0FBU0csYUFBYSxFQUFFQyxRQUFRLEVBQUU7SUFDckMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxHQUFHLDhEQUE4RDs7SUFFL0csU0FBU2EsT0FBT0MsS0FBSyxFQUFFQyxRQUFRO1FBQzNCLE9BQU9aLDZFQUE4QkEsQ0FBQ0QsOENBQUlBLEVBQUVZLE9BQU9DLFVBQVUsZ0RBQWdEOztJQUNqSDtJQUVBLFNBQVNDLE1BQU1GLEtBQUssRUFBRUMsUUFBUTtRQUMxQixPQUFPWCx5RUFBMEJBLENBQUNGLDhDQUFJQSxFQUFFWSxPQUFPQyxVQUFVLHdDQUF3Qzs7SUFDckc7SUFFQSxTQUFTRTtRQUNMLE9BQU9aLHNEQUFPQSxDQUFDSCw4Q0FBSUEsRUFBRSwwQ0FBMEM7O0lBQ25FO0lBRUFELGdEQUFTQSxDQUFDO1FBQ04sTUFBTWlCLGNBQWNoQiw4Q0FBSUEsQ0FBQ2lCLGtCQUFrQixDQUFDQyxDQUFBQTtZQUN4Q1IsZUFBZVEsTUFBTSxrRUFBa0U7O1FBQzNGO1FBRUEsT0FBT0YsWUFBWTtxREFDMEI7SUFDakQsR0FBRyxFQUFFO0lBRUwsTUFBTUcsUUFBUTtRQUNWVjtRQUNBRTtRQUNBRztRQUNBQztJQUNKO0lBRUEsT0FBUzs2REFDZ0QsaUJBQ3JELDhEQUFDWCxZQUFZZ0IsUUFBUTtRQUFDRCxPQUFPQTtrQkFDeEJYOzs7Ozs7QUFHYiIsInNvdXJjZXMiOlsid2VicGFjazovL291LW1hcHovLi9zcmMvY29udGV4dHMvYXV0aENvbnRleHQuanM/Y2U3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBzaWduT3V0IH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcblxyXG4vKlxyXG5UaGlzIGNvbnRleHQgd2FzIG1hZGUgYnkgVHJpc3RlbiBQaGFtXHJcbi0+IEltcGxlbWVudGVkIGF1dGhlbnRpY2F0aW9uIGNvbnRleHQgYW5kIGFzc29jaWF0ZWQgZnVuY3Rpb25zXHJcbiovXHJcblxyXG5jb25zdCBhdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCkgLy8gZnVuY3Rpb24gdG8gYWxsb3cgb3RoZXIgcGFnZXMgdG8gdXNlIHRoaXMgY29udGV4dFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRjdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSgpIC8vIGFsbG93cyB1cGRhdGluZy9zZXR0aW5nIG9mIHVzZXIgdXBvbiBhdXRoZW50aWNhdGlvbiBjaGFuZ2VzXHJcblxyXG4gICAgZnVuY3Rpb24gc2lnbnVwKGVtYWlsLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKSAvLyBmaXJlYmFzZSBmdW5jdGlvbiB1c2VkIHRvIGNyZWF0ZSB1c2VyIGFjY291bnRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2dpbihlbWFpbCwgcGFzc3dvcmQpIHtcclxuICAgICAgICByZXR1cm4gc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKSAvLyBmaXJlYmFzZSBmdW5jdGlvbiB1c2VkIHRvIGxvZyBpbiB1c2VyXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgICAgIHJldHVybiBzaWduT3V0KGF1dGgpIC8vIGZpcmViYXNlIGZ1bmN0aW9uIHVzZWQgdG8gc2lnbiB1c2VyIG91dFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyID0+IHtcclxuICAgICAgICAgICAgc2V0Y3VycmVudFVzZXIodXNlcikgLy8gc2V0cyB0aGUgY3VycmVudCB1c2VyIHRvIHRoZSB1c2VyIHBhcmFtZXRlciB3aGVuIGxvZ2dpbmcgaW4vb3V0XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHVuc3Vic2NyaWJlIC8qIHVuc3Vic2NyaWJlcyBmcm9tIHRoZSBvbkF1dGhTdGF0ZUNoYW5nZWQgbGlzdGVuZXIgd2hlbiBkb25lIG1vdW50aW5nIHNvIFxyXG4gICAgICAgIHRoYXQgaXQgY29tcGxldGVzIHVwb24gYXV0aGVudGljYXRpb24gY2hhbmdlICovXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IHtcclxuICAgICAgICBjdXJyZW50VXNlcixcclxuICAgICAgICBzaWdudXAsXHJcbiAgICAgICAgbG9naW4sXHJcbiAgICAgICAgbG9nb3V0XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICggLyogYWxsb3dzIG90aGVyIHBhZ2VzIHRvIHVzZSB0aGlzIGNvbnRleHQgdGhyb3VnaCB0aGUgcHJvdmlkZXIsIFxyXG4gICAgICAgIGFwcGxpZXMgaXRzIHZhbHVlIHRvIGFsbCBjaGlsZCBodG1sIHRhZ3Mgb2YgcHJvdmlkZXIgKi9cclxuICAgICAgICA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufSBcclxuICAgICAgICA8L2F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXV0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUF1dGgiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImN1cnJlbnRVc2VyIiwic2V0Y3VycmVudFVzZXIiLCJzaWdudXAiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9naW4iLCJsb2dvdXQiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/authContext.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/authContext */ \"./src/contexts/authContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_authContext__WEBPACK_IMPORTED_MODULE_2__]);\n_contexts_authContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// pages/_app.tsx\n\n // Path to your global CSS file\n\nfunction MyApp({ Component, pageProps }) {\n    // Wrap the Component with layout here if you have a common layout component\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_authContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mahno\\\\Documents\\\\ou-mapz\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mahno\\\\Documents\\\\ou-mapz\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsaUJBQWlCOztBQUNhLENBQUMsK0JBQStCO0FBRVI7QUFFdEQsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyw0RUFBNEU7SUFDNUUscUJBQ0UsOERBQUNILCtEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3UtbWFwei8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL19hcHAudHN4XHJcbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnOyAvLyBQYXRoIHRvIHlvdXIgZ2xvYmFsIENTUyBmaWxlXHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL2F1dGhDb250ZXh0J1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIC8vIFdyYXAgdGhlIENvbXBvbmVudCB3aXRoIGxheW91dCBoZXJlIGlmIHlvdSBoYXZlIGEgY29tbW9uIGxheW91dCBjb21wb25lbnRcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

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