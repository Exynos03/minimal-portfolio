"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Nav.tsx":
/*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/avatar */ \"(app-pages-browser)/./components/ui/avatar.tsx\");\n/* harmony import */ var _barrel_optimize_names_Github_Linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Github,Linkedin!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/github.js\");\n/* harmony import */ var _barrel_optimize_names_Github_Linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Github,Linkedin!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/linkedin.js\");\n/* harmony import */ var _ui_toggle_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/toggle-mode */ \"(app-pages-browser)/./components/ui/toggle-mode.tsx\");\n/* harmony import */ var _hooks_useActiveSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useActiveSection */ \"(app-pages-browser)/./hooks/useActiveSection.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Nav() {\n    _s();\n    const activeSection = (0,_hooks_useActiveSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([\n        \"about\",\n        \"experience\",\n        \"projects\",\n        \"contact\"\n    ]);\n    const navItems = [\n        {\n            name: \"About\",\n            href: \"#about\"\n        },\n        {\n            name: \"Experience\",\n            href: \"#experience\"\n        },\n        {\n            name: \"Projects\",\n            href: \"#projects\"\n        },\n        {\n            name: \"Contact\",\n            href: \"#contact\"\n        }\n    ];\n    const getNavItemClasses = (href)=>{\n        const isActive = activeSection === href.substring(1);\n        return {\n            linkClass: isActive ? \"active\" : \"\",\n            indicatorClass: \"nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all \".concat(isActive ? \"active w-16 bg-foreground h-2\" : \"group-hover:w-16 group-hover:bg-foreground group-hover:h-px\"),\n            textClass: \"nav-text text-xs font-bold uppercase tracking-widest \".concat(isActive ? \"text-foreground\" : \"text-slate-500 group-hover:text-foreground\")\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4 lg:pr-24 mt-6 lg:mt-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex lg:items-center lg:justify-start\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                            className: \"w-24 lg:w-36 h-auto border-2 border-primary bg-secondary\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarImage, {\n                                    src: \"./avatar.png\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarFallback, {\n                                    className: \"w-24 h-24 lg:w-36 lg:h-36 rounded-full border-1 border-primary\",\n                                    children: \"SG\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-[42px] font-bold lg:text-start\",\n                        children: \"Hi, i'm Sumit \\uD83D\\uDC4B\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl lg:text-start\",\n                        children: \"Adaptable Dev with a Team-Building Superpower!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"lg:text-start text-muted-foreground \",\n                        children: \"Outside of programming, you'll find me scoring screamers in FIFA (because my thumbs have dreams too&#41 or chasing the horizon on my bike probably thinking I'm in a Fast & Furious scene, minus the explosions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"lg:flex hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-col w-max text-start gap-6 uppercase text-xs font-medium\",\n                    children: navItems.map((item)=>{\n                        const { linkClass, indicatorClass, textClass } = getNavItemClasses(item.href);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"group\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: item.href,\n                                className: \"py-3 \".concat(linkClass),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: indicatorClass\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: textClass,\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 17\n                            }, this)\n                        }, item.name, false, {\n                            fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-row gap-6 mt-6 lg:mt-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        variant: \"outline\",\n                        size: \"icon\",\n                        title: \"Github\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://github.com/Exynos03\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Github_Linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"h-[1.2rem] w-[1.2rem]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        variant: \"outline\",\n                        size: \"icon\",\n                        title: \"LinkedIn\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.linkedin.com/in/sumit-ghosh01/\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Github_Linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"h-[1.2rem] w-[1.2rem]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_toggle_mode__WEBPACK_IMPORTED_MODULE_3__.ModeToggle, {}, void 0, false, {\n                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Nav, \"uNM2bWi/SIulEYZS6V7Gm84O3ZY=\", false, function() {\n    return [\n        _hooks_useActiveSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2dEO0FBQzZCO0FBQzdCO0FBQ0Y7QUFDVTtBQU96QyxTQUFTUTs7SUFDdEIsTUFBTUMsZ0JBQWdCRixtRUFBZ0JBLENBQUM7UUFDckM7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU1HLFdBQXNCO1FBQzFCO1lBQUVDLE1BQU07WUFBU0MsTUFBTTtRQUFTO1FBQ2hDO1lBQUVELE1BQU07WUFBY0MsTUFBTTtRQUFjO1FBQzFDO1lBQUVELE1BQU07WUFBWUMsTUFBTTtRQUFZO1FBQ3RDO1lBQUVELE1BQU07WUFBV0MsTUFBTTtRQUFXO0tBQ3JDO0lBRUQsTUFBTUMsb0JBQW9CLENBQUNEO1FBQ3pCLE1BQU1FLFdBQVdMLGtCQUFrQkcsS0FBS0csU0FBUyxDQUFDO1FBQ2xELE9BQU87WUFDTEMsV0FBV0YsV0FBVyxXQUFXO1lBQ2pDRyxnQkFBZ0IsMkRBSWYsT0FIQ0gsV0FDSSxrQ0FDQTtZQUVOSSxXQUFXLHdEQUlWLE9BSENKLFdBQ0ksb0JBQ0E7UUFFUjtJQUNGO0lBRUEscUJBQ0UsOERBQUNLO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ25CLHlEQUFNQTs0QkFBQ21CLFdBQVU7OzhDQUNoQiw4REFBQ2pCLDhEQUFXQTtvQ0FBQ21CLEtBQUk7Ozs7Ozs4Q0FDakIsOERBQUNwQixpRUFBY0E7b0NBQUNrQixXQUFVOzhDQUFpRTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSy9GLDhEQUFDRzt3QkFBR0gsV0FBVTtrQ0FBc0M7Ozs7OztrQ0FHcEQsOERBQUNJO3dCQUFHSixXQUFVO2tDQUF3Qjs7Ozs7O2tDQUd0Qyw4REFBQ0s7d0JBQUVMLFdBQVU7a0NBQ0c7Ozs7Ozs7Ozs7OzswQkFLbEIsOERBQUNNO2dCQUFJTixXQUFVOzBCQUNiLDRFQUFDTztvQkFBR1AsV0FBVTs4QkFDWFYsU0FBU2tCLEdBQUcsQ0FBQyxDQUFDQzt3QkFDYixNQUFNLEVBQUViLFNBQVMsRUFBRUMsY0FBYyxFQUFFQyxTQUFTLEVBQUUsR0FBR0wsa0JBQy9DZ0IsS0FBS2pCLElBQUk7d0JBRVgscUJBQ0UsOERBQUNrQjs0QkFBbUJWLFdBQVU7c0NBQzVCLDRFQUFDVztnQ0FBRW5CLE1BQU1pQixLQUFLakIsSUFBSTtnQ0FBRVEsV0FBVyxRQUFrQixPQUFWSjs7a0RBQ3JDLDhEQUFDZ0I7d0NBQUtaLFdBQVdIOzs7Ozs7a0RBQ2pCLDhEQUFDZTt3Q0FBS1osV0FBV0Y7a0RBQVlXLEtBQUtsQixJQUFJOzs7Ozs7Ozs7Ozs7MkJBSGpDa0IsS0FBS2xCLElBQUk7Ozs7O29CQU90Qjs7Ozs7Ozs7Ozs7MEJBR0osOERBQUNnQjtnQkFBR1AsV0FBVTs7a0NBQ1osOERBQUNwQix5REFBTUE7d0JBQUNpQyxTQUFRO3dCQUFVQyxNQUFLO3dCQUFPQyxPQUFNO2tDQUMxQyw0RUFBQ0o7NEJBQ0NuQixNQUFLOzRCQUNMd0IsUUFBTzs0QkFDUEMsS0FBSTtzQ0FFSiw0RUFBQ2pDLDJGQUFNQTtnQ0FBQ2dCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3RCLDhEQUFDcEIseURBQU1BO3dCQUFDaUMsU0FBUTt3QkFBVUMsTUFBSzt3QkFBT0MsT0FBTTtrQ0FDMUMsNEVBQUNKOzRCQUNDbkIsTUFBSzs0QkFDTHdCLFFBQU87NEJBQ1BDLEtBQUk7c0NBRUosNEVBQUNoQywyRkFBUUE7Z0NBQUNlLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3hCLDhEQUFDZCx1REFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5CO0dBL0Z3QkU7O1FBQ0FELCtEQUFnQkE7OztLQURoQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYudHN4P2U2MzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IEF2YXRhciwgQXZhdGFyRmFsbGJhY2ssIEF2YXRhckltYWdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hdmF0YXJcIjtcclxuaW1wb3J0IHsgR2l0aHViLCBMaW5rZWRpbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kZVRvZ2dsZSB9IGZyb20gXCIuL3VpL3RvZ2dsZS1tb2RlXCI7XHJcbmltcG9ydCB1c2VBY3RpdmVTZWN0aW9uIGZyb20gXCJAL2hvb2tzL3VzZUFjdGl2ZVNlY3Rpb25cIjtcclxuXHJcbnR5cGUgTmF2SXRlbSA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xyXG4gIGNvbnN0IGFjdGl2ZVNlY3Rpb24gPSB1c2VBY3RpdmVTZWN0aW9uKFtcclxuICAgIFwiYWJvdXRcIixcclxuICAgIFwiZXhwZXJpZW5jZVwiLFxyXG4gICAgXCJwcm9qZWN0c1wiLFxyXG4gICAgXCJjb250YWN0XCJcclxuICBdKVxyXG5cclxuICBjb25zdCBuYXZJdGVtczogTmF2SXRlbVtdID0gW1xyXG4gICAgeyBuYW1lOiBcIkFib3V0XCIsIGhyZWY6IFwiI2Fib3V0XCIgfSxcclxuICAgIHsgbmFtZTogXCJFeHBlcmllbmNlXCIsIGhyZWY6IFwiI2V4cGVyaWVuY2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlByb2plY3RzXCIsIGhyZWY6IFwiI3Byb2plY3RzXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb250YWN0XCIsIGhyZWY6IFwiI2NvbnRhY3RcIiB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3QgZ2V0TmF2SXRlbUNsYXNzZXMgPSAoaHJlZjogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBpc0FjdGl2ZSA9IGFjdGl2ZVNlY3Rpb24gPT09IGhyZWYuc3Vic3RyaW5nKDEpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGlua0NsYXNzOiBpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwiLFxyXG4gICAgICBpbmRpY2F0b3JDbGFzczogYG5hdi1pbmRpY2F0b3IgbXItNCBoLXB4IHctOCBiZy1zbGF0ZS02MDAgdHJhbnNpdGlvbi1hbGwgJHtcclxuICAgICAgICBpc0FjdGl2ZVxyXG4gICAgICAgICAgPyBcImFjdGl2ZSB3LTE2IGJnLWZvcmVncm91bmQgaC0yXCJcclxuICAgICAgICAgIDogXCJncm91cC1ob3Zlcjp3LTE2IGdyb3VwLWhvdmVyOmJnLWZvcmVncm91bmQgZ3JvdXAtaG92ZXI6aC1weFwiXHJcbiAgICAgIH1gLFxyXG4gICAgICB0ZXh0Q2xhc3M6IGBuYXYtdGV4dCB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0ICR7XHJcbiAgICAgICAgaXNBY3RpdmVcclxuICAgICAgICAgID8gXCJ0ZXh0LWZvcmVncm91bmRcIlxyXG4gICAgICAgICAgOiBcInRleHQtc2xhdGUtNTAwIGdyb3VwLWhvdmVyOnRleHQtZm9yZWdyb3VuZFwiXHJcbiAgICAgIH1gLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJsZzpzdGlja3kgbGc6dG9wLTAgbGc6ZmxleCBsZzptYXgtaC1zY3JlZW4gbGc6dy0xLzIgbGc6ZmxleC1jb2wgbGc6anVzdGlmeS1iZXR3ZWVuIGxnOnB5LTI0IGZsZXggZmxleC1jb2wgbGc6Z2FwLTRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IGxnOnByLTI0IG10LTYgbGc6bXQtMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggbGc6aXRlbXMtY2VudGVyIGxnOmp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwidy0yNCBsZzp3LTM2IGgtYXV0byBib3JkZXItMiBib3JkZXItcHJpbWFyeSBiZy1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgPEF2YXRhckltYWdlIHNyYz1cIi4vYXZhdGFyLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxBdmF0YXJGYWxsYmFjayBjbGFzc05hbWU9XCJ3LTI0IGgtMjQgbGc6dy0zNiBsZzpoLTM2IHJvdW5kZWQtZnVsbCBib3JkZXItMSBib3JkZXItcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIFNHXHJcbiAgICAgICAgICAgIDwvQXZhdGFyRmFsbGJhY2s+XHJcbiAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bNDJweF0gZm9udC1ib2xkIGxnOnRleHQtc3RhcnRcIj5cclxuICAgICAgICAgIEhpLCBpJiMzOTttIFN1bWl0IPCfkYtcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGxnOnRleHQtc3RhcnRcIj5cclxuICAgICAgICAgQWRhcHRhYmxlIERldiB3aXRoIGEgVGVhbS1CdWlsZGluZyBTdXBlcnBvd2VyIVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGc6dGV4dC1zdGFydCB0ZXh0LW11dGVkLWZvcmVncm91bmQgXCI+XHJcbiAgICAgICAgey8qIHRleHQtbGcgICovfVxyXG4gICAgICAgIE91dHNpZGUgb2YgcHJvZ3JhbW1pbmcsIHlvdSYjMzk7bGwgZmluZCBtZSBzY29yaW5nIHNjcmVhbWVycyBpbiBGSUZBICYjNDA7YmVjYXVzZSBteSB0aHVtYnMgaGF2ZSBkcmVhbXMgdG9vJiM0MSBvciBjaGFzaW5nIHRoZSBob3Jpem9uIG9uIG15IGJpa2UgcHJvYmFibHkgdGhpbmtpbmcgSSYjMzk7bSBpbiBhIEZhc3QgJiBGdXJpb3VzIHNjZW5lLCBtaW51cyB0aGUgZXhwbG9zaW9uc1xyXG4gICAgICAgICAgey8qIE91dHNpZGUgb2YgcHJvZ3JhbW1pbmcsIHlvdSYjMzk7bGwgZmluZCBtZSBzY29yaW5nIGdvYWxzIGluIEZJRkEgb3IgY2hhc2luZyB0aGUgaG9yaXpvbiBvbiBteSBiaWtlICovfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibGc6ZmxleCBoaWRkZW5cIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LW1heCB0ZXh0LXN0YXJ0IGdhcC02IHVwcGVyY2FzZSB0ZXh0LXhzIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICB7bmF2SXRlbXMubWFwKChpdGVtOiBOYXZJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbGlua0NsYXNzLCBpbmRpY2F0b3JDbGFzcywgdGV4dENsYXNzIH0gPSBnZXROYXZJdGVtQ2xhc3NlcyhcclxuICAgICAgICAgICAgICBpdGVtLmhyZWZcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT1cImdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLmhyZWZ9IGNsYXNzTmFtZT17YHB5LTMgJHtsaW5rQ2xhc3N9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aW5kaWNhdG9yQ2xhc3N9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0ZXh0Q2xhc3N9PntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTYgbXQtNiBsZzptdC0wXCIgPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwiaWNvblwiIHRpdGxlPVwiR2l0aHViXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0V4eW5vczAzXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHaXRodWIgY2xhc3NOYW1lPVwiaC1bMS4ycmVtXSB3LVsxLjJyZW1dXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cImljb25cIiB0aXRsZT1cIkxpbmtlZEluXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3N1bWl0LWdob3NoMDEvXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rZWRpbiBjbGFzc05hbWU9XCJoLVsxLjJyZW1dIHctWzEuMnJlbV1cIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxNb2RlVG9nZ2xlIC8+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJBdmF0YXIiLCJBdmF0YXJGYWxsYmFjayIsIkF2YXRhckltYWdlIiwiR2l0aHViIiwiTGlua2VkaW4iLCJNb2RlVG9nZ2xlIiwidXNlQWN0aXZlU2VjdGlvbiIsIk5hdiIsImFjdGl2ZVNlY3Rpb24iLCJuYXZJdGVtcyIsIm5hbWUiLCJocmVmIiwiZ2V0TmF2SXRlbUNsYXNzZXMiLCJpc0FjdGl2ZSIsInN1YnN0cmluZyIsImxpbmtDbGFzcyIsImluZGljYXRvckNsYXNzIiwidGV4dENsYXNzIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiaDEiLCJoMiIsInAiLCJuYXYiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsImEiLCJzcGFuIiwidmFyaWFudCIsInNpemUiLCJ0aXRsZSIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Nav.tsx\n"));

/***/ })

});