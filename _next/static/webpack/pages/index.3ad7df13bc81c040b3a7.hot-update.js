webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/hirokidaichi/.ghq/github.com/hirokidaichi/hirokidaichi.github.io/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Header = function Header() {\n  return __jsx(\"header\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"intro\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"profile\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \"\\u5E83\\u6728 \\u5927\\u5730 ( Daichi Hiroki )\"), __jsx(\"div\", {\n    className: \"job\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, \"Software Engineer / Engineering Manager / Organization Architect\")));\n};\n\n_c = Header;\n\nvar codecopy = __webpack_require__(/*! codecopy */ \"./node_modules/codecopy/src/index.js\");\n\nvar Content = function Content(_ref) {\n  _s();\n\n  var markdown = _ref.markdown;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    codecopy(\"pre\");\n  });\n  return __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    source: markdown,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Content, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c2 = Content;\n\nvar QiitaPosts = function QiitaPosts(_ref2) {\n  var data = _ref2.data;\n  var list = data.map(function (e) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      href: e.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }\n    }, e.title));\n  });\n  return __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \" Qiita\\u306E\\u8A18\\u4E8B\\u4E00\\u89A7 \"), __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, list));\n};\n\n_c3 = QiitaPosts;\n\nvar NotePosts = function NotePosts(_ref3) {\n  var data = _ref3.data;\n  var list = data.map(function (e) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      href: e.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }\n    }, e.title));\n  });\n  return __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, \" note\\u306E\\u8A18\\u4E8B\\u4E00\\u89A7 \"), __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, list));\n};\n\n_c4 = NotePosts;\n\nvar IndexPage = function IndexPage(_ref4) {\n  var content = _ref4.content,\n      qiitaList = _ref4.qiitaList;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css?family=M+PLUS+1p\",\n    rel: \"stylesheet\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://cdn.jsdelivr.net/npm/codecopy/umd/codecopy.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  })), __jsx(Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(Content, {\n    markdown: content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }), __jsx(QiitaPosts, {\n    data: qiitaList,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_c5 = IndexPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c2, \"Content\");\n$RefreshReg$(_c3, \"QiitaPosts\");\n$RefreshReg$(_c4, \"NotePosts\");\n$RefreshReg$(_c5, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSGVhZGVyIiwiY29kZWNvcHkiLCJyZXF1aXJlIiwiQ29udGVudCIsIm1hcmtkb3duIiwidXNlRWZmZWN0IiwiUWlpdGFQb3N0cyIsImRhdGEiLCJsaXN0IiwibWFwIiwiZSIsInVybCIsInRpdGxlIiwiTm90ZVBvc3RzIiwiSW5kZXhQYWdlIiwiY29udGVudCIsInFpaXRhTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFGRixFQUdFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3RUFIRixDQURGLENBRGE7QUFBQSxDQUFmOztLQUFNQSxNOztBQVdOLElBQU1DLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyxzREFBRCxDQUF4Qjs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUF1QjtBQUFBOztBQUFBLE1BQW5CQyxRQUFtQixRQUFuQkEsUUFBbUI7QUFDckNDLHlEQUFTLENBQUMsWUFBTTtBQUNkSixZQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0QsR0FGUSxDQUFUO0FBR0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFVLFVBQU0sRUFBRUcsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRCxDQVREOztHQUFNRCxPOztNQUFBQSxPOztBQVdOLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFFBQWtCO0FBQUEsTUFBZkMsSUFBZSxTQUFmQSxJQUFlO0FBQ25DLE1BQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzNCLFdBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJO0FBQUcsVUFBSSxFQUFFQSxDQUFDLENBQUNDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQkQsQ0FBQyxDQUFDRSxLQUFuQixDQUFKLENBQVI7QUFDRCxHQUZZLENBQWI7QUFHQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSixJQUFMLENBRkYsQ0FERjtBQU1ELENBVkQ7O01BQU1GLFU7O0FBWU4sSUFBTU8sU0FBUyxHQUFHLFNBQVpBLFNBQVksUUFBa0I7QUFBQSxNQUFmTixJQUFlLFNBQWZBLElBQWU7QUFDbEMsTUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQU87QUFDM0IsV0FBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUk7QUFBRyxVQUFJLEVBQUVBLENBQUMsQ0FBQ0MsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlCRCxDQUFDLENBQUNFLEtBQW5CLENBQUosQ0FBUjtBQUNELEdBRlksQ0FBYjtBQUdBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtKLElBQUwsQ0FGRixDQURGO0FBTUQsQ0FWRDs7TUFBTUssUzs7QUFXTixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxRQUErQjtBQUFBLE1BQTVCQyxPQUE0QixTQUE1QkEsT0FBNEI7QUFBQSxNQUFwQkMsU0FBb0IsU0FBcEJBLFNBQW9CO0FBRS9DLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxRQUFJLEVBQUMsbURBQVg7QUFBK0QsT0FBRyxFQUFDLFlBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLDREQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsT0FBRDtBQUFTLFlBQVEsRUFBRUQsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBRUEsTUFBQyxVQUFEO0FBQVksUUFBSSxFQUFFQyxTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsQ0FERixDQU5GLENBREY7QUFnQkQsQ0FsQkQ7O01BQU1GLFM7O0FBaURTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxoZWFkZXI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj7luoPmnKgg5aSn5ZywICggRGFpY2hpIEhpcm9raSApPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYlwiPlNvZnR3YXJlIEVuZ2luZWVyIC8gRW5naW5lZXJpbmcgTWFuYWdlciAvIE9yZ2FuaXphdGlvbiBBcmNoaXRlY3Q8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9oZWFkZXI+XG4pXG5cblxuY29uc3QgY29kZWNvcHkgPSByZXF1aXJlKFwiY29kZWNvcHlcIik7XG5cbmNvbnN0IENvbnRlbnQgPSAoeyAgbWFya2Rvd24gfTphbnkpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb2RlY29weShcInByZVwiKVxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxNYXJrZG93biBzb3VyY2U9e21hcmtkb3dufSAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5jb25zdCBRaWl0YVBvc3RzID0gKHsgZGF0YSB9OmFueSkgPT4ge1xuICBjb25zdCBsaXN0ID0gZGF0YS5tYXAoKGUpID0+IHsgXG4gICAgcmV0dXJuICg8bGk+PGEgaHJlZj17ZS51cmx9PntlLnRpdGxlfTwvYT48L2xpPilcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDE+IFFpaXRh44Gu6KiY5LqL5LiA6KanIDwvaDE+XG4gICAgICA8dWw+e2xpc3R9PC91bD5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuY29uc3QgTm90ZVBvc3RzID0gKHsgZGF0YSB9OmFueSkgPT4ge1xuICBjb25zdCBsaXN0ID0gZGF0YS5tYXAoKGUpID0+IHsgXG4gICAgcmV0dXJuICg8bGk+PGEgaHJlZj17ZS51cmx9PntlLnRpdGxlfTwvYT48L2xpPilcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDE+IG5vdGXjga7oqJjkuovkuIDopqcgPC9oMT5cbiAgICAgIDx1bD57bGlzdH08L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuY29uc3QgSW5kZXhQYWdlID0gKHsgY29udGVudCxxaWl0YUxpc3R9IDphbnkpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NK1BMVVMrMXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvZGVjb3B5L3VtZC9jb2RlY29weS5taW4uY3NzXCI+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgIDxDb250ZW50IG1hcmtkb3duPXtjb250ZW50fSAvPlxuICAgICAgICA8UWlpdGFQb3N0cyBkYXRhPXtxaWl0YUxpc3R9IC8+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xuXG59XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5jb25zdCBmc3AgPSBmcy5wcm9taXNlcztcblxuY29uc3QgZ2V0UWlpdGFQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IChhd2FpdCBmZXRjaChcImh0dHBzOi8vcWlpdGEuY29tL2FwaS92Mi91c2Vycy9oaXJva2lkYWljaGkvaXRlbXM/cGVyX3BhZ2U9MTAwXCIpKS5qc29uKCk7XG4gIHJldHVybiBkYXRhLm1hcCgoZSkgPT4gKHsgdGl0bGU6IGUudGl0bGUsIHVybDogZS51cmwgfSkpO1xufTtcblxuY29uc3QgZ2V0Tm90ZVBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBqc29uID0gYXdhaXQgKGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9ub3RlLmNvbS9hcGkvdjIvY3JlYXRvcnMvaGlyb2tpZGFpY2hpL2NvbnRlbnRzP2tpbmQ9bm90ZSZwYWdlPTFcIikpLmpzb24oKTtcbiAgY29uc3QgY29udGVudHMgPSBqc29uLmRhdGEuY29udGVudHM7XG5cbiAgcmV0dXJuIGNvbnRlbnRzLm1hcCgoZSkgPT4gKFxuICAgIHsgdGl0bGU6IGUubmFtZSwgdXJsOiBgaHR0cHM6Ly9ub3RlLmNvbS9oaXJva2lkYWljaGkvJHtlLmtleX1gIH1cbiAgKSk7XG59O1xuXG5jb25zdCBnZXRNYXJrZG93biA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIFN0cmluZyhhd2FpdCBmc3AucmVhZEZpbGUoXCIuL2RhdGEvX2luZGV4Lm1kXCIpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jKCkgPT4geyBcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGdldE1hcmtkb3duKCk7XG4gIGNvbnN0IHFpaXRhTGlzdCA9IGF3YWl0IGdldFFpaXRhUG9zdHMoKTtcbiAgY29uc3Qgbm90ZUxpc3QgPSBhd2FpdCBnZXROb3RlUG9zdHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBjb250ZW50LHFpaXRhTGlzdCAsbm90ZUxpc3R9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})