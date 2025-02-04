"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst nextAuthOptions = (req, res)=>{\n    return {\n        session: {\n            strategy: \"jwt\",\n            maxAge: 60 * 60 * 24 * 14\n        },\n        jwt: {\n            maxAge: 60 * 60 * 24 * 14,\n            secret: \"Cronus-pro\",\n            async encode ({ secret, token }) {\n                return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign(token, secret);\n            },\n            async decode ({ secret, token }) {\n                return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, secret);\n            }\n        },\n        providers: [\n            next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n                id: \"nextjs-mainlogin-form\",\n                name: \"Sign in\",\n                credentials: {\n                    email: {\n                        label: \"Email\",\n                        type: \"email\",\n                        placeholder: \"example@example.com\"\n                    },\n                    password: {\n                        label: \"Password\",\n                        type: \"password\"\n                    }\n                },\n                secret: \"farichildFun@09072023\",\n                async authorize (credentials) {\n                    const formData = new FormData();\n                    try {\n                        formData.append(\"email\", credentials.username);\n                        formData.append(\"password\", credentials.password);\n                        const loginRes = await fetch(`${{\"path\":\"https://back.cronuspro.in/\",\"api\":\"https://back.cronuspro.in/api/\",\"jwt_secret\":\"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs\"}.api}login`, {\n                            method: \"POST\",\n                            body: formData\n                        });\n                        const loginData = await loginRes.json();\n                        if (loginData.status == false) {\n                            formData.append(\"email\", \"\");\n                            formData.append(\"password\", \"\");\n                            nookies.destroy(null, \"access_token\");\n                            return false;\n                        } else {\n                            const access_token = loginData.data.access_token;\n                            const userData = loginData.data.user_info;\n                            const user = {\n                                id: userData.id,\n                                f_name: userData.name,\n                                l_name: userData.last_name,\n                                email: userData.email,\n                                bcId: userData.bigcommerce_customer_id,\n                                access_token: access_token\n                            };\n                            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)({\n                                res\n                            }, \"access_token\", access_token, {\n                                maxAge: 5 * 24 * 60 * 60,\n                                httpOnly: true,\n                                path: \"/\"\n                            });\n                            formData.append(\"email\", \"\");\n                            formData.append(\"password\", \"\");\n                            return {\n                                user: user\n                            };\n                        }\n                    } catch (err) {\n                        formData.append(\"email\", \"\");\n                        formData.append(\"password\", \"\");\n                        return false;\n                    }\n                }\n            })\n        ],\n        callbacks: {\n            async jwt ({ token, user }) {\n                return {\n                    ...token,\n                    ...user\n                };\n            },\n            async session ({ session, user, token }) {\n                return {\n                    ...token,\n                    ...user\n                };\n            },\n            authorized: ({ token })=>!!token\n        },\n        pages: {\n            signIn: \"/login\",\n            signOut: \"/logout\",\n            error: \"/auth/error\"\n        }\n    };\n};\nconst NextAuthFN = (req, res)=>{\n    return next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, nextAuthOptions(req, res));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextAuthFN);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNpQztBQUNuQztBQUNLO0FBRXBDLE1BQU1JLGtCQUFrQixDQUFDQyxLQUFLQztJQUM1QixPQUFPO1FBQ0xDLFNBQVM7WUFDUEMsVUFBVTtZQUNWQyxRQUFRLEtBQUssS0FBSyxLQUFLO1FBQ3pCO1FBQ0FQLEtBQUs7WUFDSE8sUUFBUSxLQUFLLEtBQUssS0FBSztZQUN2QkMsUUFBUUMsWUFBMkJFO1lBQ25DLE1BQU1DLFFBQU8sRUFBRUosTUFBTSxFQUFFSyxLQUFLLEVBQUU7Z0JBQzVCLE9BQU9iLHdEQUFRYyxDQUFDRCxPQUFPTDtZQUN6QjtZQUNBLE1BQU1PLFFBQU8sRUFBRVAsTUFBTSxFQUFFSyxLQUFLLEVBQUU7Z0JBQzVCLE9BQU9iLDBEQUFVZ0IsQ0FBQ0gsT0FBT0w7WUFDM0I7UUFDRjtRQUNBUyxXQUFXO1lBQ1RsQixzRUFBbUJBLENBQUM7Z0JBQ2xCbUIsSUFBSTtnQkFDSkMsTUFBTTtnQkFDTkMsYUFBYTtvQkFDWEMsT0FBTzt3QkFDTEMsT0FBTzt3QkFDUEMsTUFBTTt3QkFDTkMsYUFBYTtvQkFDZjtvQkFDQUMsVUFBVTt3QkFBRUgsT0FBTzt3QkFBWUMsTUFBTTtvQkFBVztnQkFDbEQ7Z0JBQ0FmLFFBQVE7Z0JBQ1IsTUFBTWtCLFdBQVVOLFdBQVc7b0JBQ3pCLE1BQU1PLFdBQVcsSUFBSUM7b0JBRXJCLElBQUk7d0JBQ0ZELFNBQVNFLE9BQU8sU0FBU1QsWUFBWVU7d0JBQ3JDSCxTQUFTRSxPQUFPLFlBQVlULFlBQVlLO3dCQUN4QyxNQUFNTSxXQUFXLE1BQU1DLE1BQU0sQ0FBQyxFQUFFdkIsNEpBQWtCd0IsQ0FBQ0MsSUFBSSxLQUFLLENBQUMsRUFBRTs0QkFBRUMsUUFBUTs0QkFBT0MsTUFBTVQ7d0JBQVE7d0JBQzlGLE1BQU1VLFlBQVksTUFBTU4sU0FBU087d0JBQ2pDLElBQUlELFVBQVVFLFVBQVUsT0FBTzs0QkFDN0JaLFNBQVNFLE9BQU8sU0FBUzs0QkFDekJGLFNBQVNFLE9BQU8sWUFBWTs0QkFDNUJXLFFBQVFDLFFBQVEsTUFBTTs0QkFDdEIsT0FBTzt3QkFDVCxPQUFPOzRCQUNMLE1BQU1DLGVBQWVMLFVBQVVNLEtBQUtEOzRCQUNwQyxNQUFNRSxXQUFXUCxVQUFVTSxLQUFLRTs0QkFFaEMsTUFBTUMsT0FBTztnQ0FDWDVCLElBQUkwQixTQUFTMUI7Z0NBQ2I2QixRQUFRSCxTQUFTekI7Z0NBQ2pCNkIsUUFBUUosU0FBU0s7Z0NBQ2pCNUIsT0FBT3VCLFNBQVN2QjtnQ0FDaEI2QixNQUFNTixTQUFTTztnQ0FDZlQsY0FBY0E7NEJBQ2hCOzRCQUVBekMsa0RBQVNBLENBQUM7Z0NBQUVHOzRCQUFJLEdBQUcsZ0JBQWdCc0MsY0FBYztnQ0FDL0NuQyxRQUFRLElBQUksS0FBSyxLQUFLO2dDQUN0QjZDLFVBQVU7Z0NBQ1ZDLE1BQU07NEJBQ1I7NEJBQ0ExQixTQUFTRSxPQUFPLFNBQVM7NEJBQ3pCRixTQUFTRSxPQUFPLFlBQVk7NEJBQzVCLE9BQU87Z0NBQUVpQixNQUFNQTs0QkFBSzt3QkFDdEI7b0JBQ0YsRUFBRSxPQUFPUSxLQUFLO3dCQUNaM0IsU0FBU0UsT0FBTyxTQUFTO3dCQUN6QkYsU0FBU0UsT0FBTyxZQUFZO3dCQUM1QixPQUFPO29CQUNUO2dCQUNGO1lBQ0Y7U0FDRDtRQUNEMEIsV0FBVztZQUNULE1BQU12RCxLQUFJLEVBQUVhLEtBQUssRUFBRWlDLElBQUksRUFBRTtnQkFDdkIsT0FBTztvQkFBRSxHQUFHakMsS0FBSztvQkFBRSxHQUFHaUMsSUFBSTtnQkFBQztZQUM3QjtZQUNBLE1BQU16QyxTQUFRLEVBQUVBLE9BQU8sRUFBRXlDLElBQUksRUFBRWpDLEtBQUssRUFBRTtnQkFDcEMsT0FBTztvQkFBRSxHQUFHQSxLQUFLO29CQUFFLEdBQUdpQyxJQUFJO2dCQUFDO1lBQzdCO1lBQ0FVLFlBQVksQ0FBQyxFQUFFM0MsS0FBSyxFQUFFLEdBQUssQ0FBQyxDQUFDQTtRQUMvQjtRQUNBNEMsT0FBTztZQUNMQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEMsT0FBTztRQUNUO0lBQ0Y7QUFDRjtBQUVBLE1BQU1DLGFBQWEsQ0FBQzFELEtBQUtDO0lBQ3ZCLE9BQU9OLGdEQUFRQSxDQUFDSyxLQUFLQyxLQUFLRixnQkFBZ0JDLEtBQUtDO0FBQ2pEO0FBRUEsaUVBQWV5RCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFpcmNoaWxkZnVuLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgeyBzZXRDb29raWUgfSBmcm9tIFwibm9va2llc1wiO1xyXG5cclxuY29uc3QgbmV4dEF1dGhPcHRpb25zID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNlc3Npb246IHtcclxuICAgICAgc3RyYXRlZ3k6IFwiand0XCIsXHJcbiAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMTQsXHJcbiAgICB9LFxyXG4gICAgand0OiB7XHJcbiAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMTQsXHJcbiAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG4gICAgICBhc3luYyBlbmNvZGUoeyBzZWNyZXQsIHRva2VuIH0pIHtcclxuICAgICAgICByZXR1cm4gand0LnNpZ24odG9rZW4sIHNlY3JldCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGRlY29kZSh7IHNlY3JldCwgdG9rZW4gfSkge1xyXG4gICAgICAgIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBzZWNyZXQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgIGlkOiBcIm5leHRqcy1tYWlubG9naW4tZm9ybVwiLFxyXG4gICAgICAgIG5hbWU6IFwiU2lnbiBpblwiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImV4YW1wbGVAZXhhbXBsZS5jb21cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlY3JldDogXCJmYXJpY2hpbGRGdW5AMDkwNzIwMjNcIixcclxuICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZW1haWxcIiwgY3JlZGVudGlhbHMudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwYXNzd29yZFwiLCBjcmVkZW50aWFscy5wYXNzd29yZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuc2VydmVyLmFwaX1sb2dpbmAsIHsgbWV0aG9kOiBcIlBPU1RcIixib2R5OiBmb3JtRGF0YX0pO1xyXG4gICAgICAgICAgICBjb25zdCBsb2dpbkRhdGEgPSBhd2FpdCBsb2dpblJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGlmIChsb2dpbkRhdGEuc3RhdHVzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZW1haWxcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGFzc3dvcmRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgbm9va2llcy5kZXN0cm95KG51bGwsIFwiYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zdCBhY2Nlc3NfdG9rZW4gPSBsb2dpbkRhdGEuZGF0YS5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBsb2dpbkRhdGEuZGF0YS51c2VyX2luZm87XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogdXNlckRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICBmX25hbWU6IHVzZXJEYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBsX25hbWU6IHVzZXJEYXRhLmxhc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyRGF0YS5lbWFpbCxcclxuICAgICAgICAgICAgICAgIGJjSWQ6IHVzZXJEYXRhLmJpZ2NvbW1lcmNlX2N1c3RvbWVyX2lkLFxyXG4gICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBhY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgc2V0Q29va2llKHsgcmVzIH0sIFwiYWNjZXNzX3Rva2VuXCIsIGFjY2Vzc190b2tlbiwge1xyXG4gICAgICAgICAgICAgICAgbWF4QWdlOiA1ICogMjQgKiA2MCAqIDYwLFxyXG4gICAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJlbWFpbFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwYXNzd29yZFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICByZXR1cm4geyB1c2VyOiB1c2VyIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJlbWFpbFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGFzc3dvcmRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgICBjYWxsYmFja3M6IHtcclxuICAgICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnRva2VuLCAuLi51c2VyIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB1c2VyLCB0b2tlbiB9KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4udG9rZW4sIC4uLnVzZXIgfTtcclxuICAgICAgfSxcclxuICAgICAgYXV0aG9yaXplZDogKHsgdG9rZW4gfSkgPT4gISF0b2tlbixcclxuICAgIH0sXHJcbiAgICBwYWdlczoge1xyXG4gICAgICBzaWduSW46IFwiL2xvZ2luXCIsXHJcbiAgICAgIHNpZ25PdXQ6IFwiL2xvZ291dFwiLFxyXG4gICAgICBlcnJvcjogXCIvYXV0aC9lcnJvclwiLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgTmV4dEF1dGhGTiA9IChyZXEsIHJlcykgPT4ge1xyXG4gIHJldHVybiBOZXh0QXV0aChyZXEsIHJlcywgbmV4dEF1dGhPcHRpb25zKHJlcSwgcmVzKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aEZOO1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiand0Iiwic2V0Q29va2llIiwibmV4dEF1dGhPcHRpb25zIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsImVuY29kZSIsInRva2VuIiwic2lnbiIsImRlY29kZSIsInZlcmlmeSIsInByb3ZpZGVycyIsImlkIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVzZXJuYW1lIiwibG9naW5SZXMiLCJmZXRjaCIsInNlcnZlciIsImFwaSIsIm1ldGhvZCIsImJvZHkiLCJsb2dpbkRhdGEiLCJqc29uIiwic3RhdHVzIiwibm9va2llcyIsImRlc3Ryb3kiLCJhY2Nlc3NfdG9rZW4iLCJkYXRhIiwidXNlckRhdGEiLCJ1c2VyX2luZm8iLCJ1c2VyIiwiZl9uYW1lIiwibF9uYW1lIiwibGFzdF9uYW1lIiwiYmNJZCIsImJpZ2NvbW1lcmNlX2N1c3RvbWVyX2lkIiwiaHR0cE9ubHkiLCJwYXRoIiwiZXJyIiwiY2FsbGJhY2tzIiwiYXV0aG9yaXplZCIsInBhZ2VzIiwic2lnbkluIiwic2lnbk91dCIsImVycm9yIiwiTmV4dEF1dGhGTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();