"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[1660],{"./node_modules/@sima-land/ui-nucleons/helpers/media-query-list.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.subscribe=void 0,exports.subscribe=function subscribe(mql,fn){return mql.addEventListener?mql.addEventListener("change",fn):mql.addListener&&mql.addListener(fn),{unsubscribe:()=>{mql.removeEventListener?mql.removeEventListener("change",fn):mql.removeListener&&mql.removeListener(fn)}}}},"./node_modules/@sima-land/ui-nucleons/hooks/breakpoint/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.useBreakpoint=exports.BreakpointProvider=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),__1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hooks/index.js"),is_browser_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/is-browser.js")),utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hooks/breakpoint/utils.js"),Context=(0,react_1.createContext)(null);exports.BreakpointProvider=function BreakpointProvider({children}){const[contextValue,setRegistry]=(0,react_1.useState)(null);return(0,__1.useIsomorphicLayoutEffect)((()=>{(0,is_browser_1.default)()&&setRegistry((0,utils_1.createRegistry)())}),[]),(0,jsx_runtime_1.jsx)(Context.Provider,{value:contextValue,children})},exports.useBreakpoint=function useBreakpoint(query){if(!utils_1.BreakpointQuery.isValid(query))throw Error(`useBreakpoint: Invalid query, "${query}"`);const[,setRegistry]=(0,react_1.useState)(null),registryFromContext=(0,react_1.useContext)(Context),[matches,setMatches]=(0,react_1.useState)(!1);return(0,__1.useIsomorphicLayoutEffect)((()=>{let registry;registry=registryFromContext||(0,utils_1.createRegistry)(),setRegistry(registryFromContext);const subscription=registry.subscribe(query,(e=>{setMatches(e.matches)}));return setMatches(subscription.matches),subscription.unsubscribe}),[registryFromContext]),matches}},"./node_modules/@sima-land/ui-nucleons/hooks/breakpoint/utils.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.createRegistry=exports.BreakpointQuery=void 0;const media_query_list_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/media-query-list.js"),Resolution={mxs:0,ms:480,mm:720,ml:840,xs:1024,s:1280,m:1440,l:1600,xl:1920},BREAKPOINTS=["mxs","ms","mm","ml","xs","s","m","l","xl"];exports.BreakpointQuery={getBreakpoint:query=>query.slice(0,-1),getDirection:query=>query.slice(-1),isValid:value=>"string"==typeof value&&value.length>=2&&BREAKPOINTS.includes(exports.BreakpointQuery.getBreakpoint(value))&&["+","-",""].includes(exports.BreakpointQuery.getDirection(value)),parse:query=>[exports.BreakpointQuery.getBreakpoint(query),exports.BreakpointQuery.getDirection(query)],toMediaQuery:query=>{const[breakpoint,direction]=exports.BreakpointQuery.parse(query);return`(${"+"===direction?"min-width":"max-width"}: ${Resolution[breakpoint]+("+"===direction?0:-1)}px)`}};exports.createRegistry=()=>{const registry={items:{},subscribe:(query,listener)=>{let item=registry.items[query];if(item)item.handlers.add(listener);else{const newItem={mql:window.matchMedia(exports.BreakpointQuery.toMediaQuery(query)),handlers:new Set([listener])};(0,media_query_list_1.subscribe)(newItem.mql,(e=>{newItem.handlers.forEach((fn=>fn(e)))})),item=newItem,registry.items[query]=newItem}return createSubscription(item,listener)}};return registry};const createSubscription=(item,listener)=>({matches:item.mql.matches,unsubscribe:()=>item.handlers.delete(listener)})},"./node_modules/@sima-land/ui-nucleons/price/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Price=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/price/utils.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),price_module_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/price/price.module.scss")),cx=bind_1.default.bind(price_module_scss_1.default);exports.Price=function Price({className,currencyGrapheme:grapheme,graphemeBefore,crossedOut,value,"data-testid":testId="price"}){const content=(0,utils_1.formatPrice)(value,grapheme,{graphemeBefore});return(0,jsx_runtime_1.jsx)("span",{className:cx("root",className,crossedOut&&"crossed-out"),"data-testid":testId,children:content})}},"./node_modules/@sima-land/ui-nucleons/price/utils.js":(__unused_webpack_module,exports)=>{function formatInteger(value){let result="0";if(Number.isFinite(value)){const separated=[],list=toString(0===value?0:Math.max(value,1e-4)).replace(/\..*$/g,"").split("");for(;list.length;)separated.unshift(list.splice(-3).join(""));result=separated.join(" ")}return result}function formatFractional(value){let fractional="";return Number.isFinite(value)&&!Number.isInteger(value)&&(fractional=toString(value).replace(/^.*\./g,"")),fractional}function toString(value){let result;return result=value<=1e-4?"0.0001":value<.01?value.toFixed(4):value.toFixed(2),result}Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatFractional=exports.formatInteger=exports.formatPrice=void 0,exports.formatPrice=function formatPrice(value,grapheme,{graphemeBefore}={}){const number=Number(value);return[grapheme&&graphemeBefore&&`${grapheme} `,formatInteger(number),Number.isFinite(number)&&!Number.isInteger(number)&&`,${formatFractional(number)}`,grapheme&&!graphemeBefore&&` ${grapheme}`].filter(Boolean).map((s=>s.replace(/\s/g," "))).join("")},exports.formatInteger=formatInteger,exports.formatFractional=formatFractional},"./node_modules/@sima-land/ui-nucleons/tabs/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tabs=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),tabs_module_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/tabs/tabs.module.scss")),cx=bind_1.default.bind(tabs_module_scss_1.default),Tab=({name,selected,disabled,"data-testid":testId="tab",onClick})=>(0,jsx_runtime_1.jsx)("li",{className:cx("item",{selected,disabled}),"data-testid":testId,onClick:disabled?void 0:onClick,children:String(name)});exports.Tabs=({children,view="clean",stretch=!1,gapSize="m",className,"data-testid":testId="tabs"})=>(0,jsx_runtime_1.jsx)("ul",{"data-testid":testId,className:cx("root",`view-${view}`,`gap-${gapSize}`,{stretch},className),children:react_1.Children.toArray(children).filter((child=>(0,react_1.isValidElement)(child)&&child.type===Tab))}),exports.Tabs.Item=Tab},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Left.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M9.659 3.247a1 1 0 0 1 .094 1.412L6.829 8l2.924 3.341a1 1 0 0 1-1.506 1.318l-3.5-4a1 1 0 0 1 0-1.317l3.5-4a1 1 0 0 1 1.412-.095Z",clipRule:"evenodd"})})));exports.default=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/64x64/Colorful/TouchScrollX.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{width:64,height:64,fill:"none",viewBox:"0 0 64 64",ref,...props,children:[(0,jsx_runtime_1.jsx)("path",{fill:"#fff",d:"M24 16v28l-5.005-5.34a3.704 3.704 0 1 0-5.387 5.085l12.126 12.764A14.429 14.429 0 0 0 36.195 61h.986c5.976 0 10.82-4.844 10.82-10.82V39.75a6 6 0 0 0-6-6A3.75 3.75 0 0 0 38.25 30H36a4.25 4.25 0 0 0-4.25-4.25H30V16a3 3 0 0 0-6 0Z"}),(0,jsx_runtime_1.jsx)("path",{fill:"#212121",fillRule:"evenodd",d:"M27 14a2 2 0 0 0-2 2v28a1 1 0 0 1-1.729.684l-5.005-5.34a2.704 2.704 0 1 0-3.933 3.712L26.46 55.82A13.429 13.429 0 0 0 36.195 60h.986c5.423 0 9.82-4.397 9.82-9.82V39.75a5.002 5.002 0 0 0-4-4.9v4.65a1 1 0 1 1-2 0v-5.75A2.75 2.75 0 0 0 38.25 31H37v8a1 1 0 1 1-2 0v-9a3.25 3.25 0 0 0-3.25-3.25H31V39a1 1 0 1 1-2 0V16a2 2 0 0 0-2-2Zm4 10.75V16a4 4 0 0 0-8 0v25.471l-3.275-3.494a4.703 4.703 0 1 0-6.842 6.456L25.01 57.198A15.43 15.43 0 0 0 36.195 62h.986c6.528 0 11.82-5.292 11.82-11.82V39.75a7.001 7.001 0 0 0-6.093-6.942A4.752 4.752 0 0 0 38.25 29h-1.345a5.252 5.252 0 0 0-5.155-4.25H31Z",clipRule:"evenodd"}),(0,jsx_runtime_1.jsx)("path",{fill:"#fff",d:"M12.414 9.586 11.828 9h40.344l-.586.586a1.92 1.92 0 0 0-.582 1.516c.039.518.284.968.605 1.29.321.32.771.565 1.289.604a1.92 1.92 0 0 0 1.516-.582l1.173-1.172c1.134-1.135 2.553-2.555 2.825-2.825.778-.776.78-2.053.002-2.831l-4-4a1.92 1.92 0 0 0-1.516-.582 2.056 2.056 0 0 0-1.29.605 2.056 2.056 0 0 0-.604 1.289 1.92 1.92 0 0 0 .582 1.516l.586.586H11.828l.586-.586a1.92 1.92 0 0 0 .582-1.516 2.056 2.056 0 0 0-.605-1.29 2.056 2.056 0 0 0-1.289-.604 1.92 1.92 0 0 0-1.516.582l-4 4a2 2 0 0 0 0 2.828l4 4a1.92 1.92 0 0 0 1.516.582c.518-.039.968-.284 1.29-.605.32-.321.565-.771.604-1.289a1.92 1.92 0 0 0-.582-1.516Z"}),(0,jsx_runtime_1.jsx)("path",{fill:"#212121",d:"M52.293 3.707a1 1 0 0 1 1.414-1.414l4 4a.997.997 0 0 1 .011 1.403c-1.316 1.357-2.675 2.675-4.01 4.011a1 1 0 0 1-1.415-1.414L54.586 8H9.414l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L9.414 6h45.172l-2.293-2.293Z"})]})));exports.Z=ForwardRef},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/price/price.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".price-module__root__dea{position:relative;display:inline-block;white-space:nowrap}.price-module__root__dea.price-module__crossed-out__ec8{color:#9e9e9e;text-decoration:line-through}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/price/price.module.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAEA,yBACE,iBAAA,CACA,oBAAA,CACA,kBAAA,CACA,wDACE,aCCW,CAAA,4BAAA",sourcesContent:["@use '../colors';\n\n.root {\n  position: relative;\n  display: inline-block;\n  white-space: nowrap;\n  &.crossed-out {\n    color: colors.$basic-gray38;\n    text-decoration: line-through;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"price-module__root__dea","crossed-out":"price-module__crossed-out__ec8"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/tabs/tabs.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.tabs-module__root__e3d{list-style-type:none;user-select:none;display:flex;margin:0;padding:0;font-size:16px;font-weight:600;line-height:24px}.tabs-module__root__e3d li{display:block;margin:0}.tabs-module__root__e3d li::before{content:none}.tabs-module__root__e3d.tabs-module__stretch__b4b{justify-items:stretch}.tabs-module__root__e3d.tabs-module__stretch__b4b .tabs-module__item__d5b{width:100%}.tabs-module__root__e3d.tabs-module__view-clean__f68,.tabs-module__root__e3d.tabs-module__view-clean-underline__b21{height:32px}.tabs-module__root__e3d.tabs-module__view-clean__f68 .tabs-module__item__d5b,.tabs-module__root__e3d.tabs-module__view-clean-underline__b21 .tabs-module__item__d5b{color:#9e9e9e}.tabs-module__root__e3d.tabs-module__view-clean__f68 .tabs-module__item__d5b.tabs-module__selected__e6f,.tabs-module__root__e3d.tabs-module__view-clean-underline__b21 .tabs-module__item__d5b.tabs-module__selected__e6f{position:relative;color:#212121}.tabs-module__root__e3d.tabs-module__view-clean__f68 .tabs-module__item__d5b.tabs-module__selected__e6f::before,.tabs-module__root__e3d.tabs-module__view-clean-underline__b21 .tabs-module__item__d5b.tabs-module__selected__e6f::before{content:"";position:absolute;height:2px;margin:0 -1px;left:0;right:0;bottom:0;background-color:#1f84db;border-top-left-radius:4px;border-top-right-radius:4px}.tabs-module__root__e3d.tabs-module__view-clean__f68 .tabs-module__item__d5b.tabs-module__disabled__dc6,.tabs-module__root__e3d.tabs-module__view-clean-underline__b21 .tabs-module__item__d5b.tabs-module__disabled__dc6{color:#e0e0e0}.tabs-module__root__e3d.tabs-module__view-clean__f68 .tabs-module__item__d5b:not(.tabs-module__selected__e6f):not(.tabs-module__disabled__dc6):hover,.tabs-module__root__e3d.tabs-module__view-clean-underline__b21 .tabs-module__item__d5b:not(.tabs-module__selected__e6f):not(.tabs-module__disabled__dc6):hover{cursor:pointer;color:#757575}.tabs-module__root__e3d.tabs-module__view-clean-underline__b21{height:40px;position:relative}.tabs-module__root__e3d.tabs-module__view-clean-underline__b21::before{position:absolute;bottom:0;content:"";height:1px;width:100%;background-color:#e0e0e0}.tabs-module__root__e3d.tabs-module__view-round__c4f{height:40px}.tabs-module__root__e3d.tabs-module__view-round__c4f .tabs-module__item__d5b{color:#212121;padding:8px 16px;border-radius:4px;background-color:#f5f5f5}.tabs-module__root__e3d.tabs-module__view-round__c4f .tabs-module__item__d5b.tabs-module__selected__e6f{background-color:#1f84db;color:#fff}.tabs-module__root__e3d.tabs-module__view-round__c4f .tabs-module__item__d5b.tabs-module__disabled__dc6{color:#c2c2c2}.tabs-module__root__e3d.tabs-module__view-round__c4f .tabs-module__item__d5b:not(.tabs-module__selected__e6f):not(.tabs-module__disabled__dc6):hover{cursor:pointer;background-color:#ebebeb}.tabs-module__root__e3d.tabs-module__gap-m__c02{--tabs-gap: 24px}.tabs-module__root__e3d.tabs-module__gap-s__f62{--tabs-gap: 16px}.tabs-module__root__e3d .tabs-module__item__d5b{text-align:center}.tabs-module__root__e3d .tabs-module__item__d5b:not(:last-child){margin-right:var(--tabs-gap)}',"",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/tabs/tabs.module.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAEA,wBACE,oBAAA,CACA,gBAAA,CACA,YAAA,CACA,QAAA,CACA,SAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CACA,2BACE,aAAA,CACA,QAAA,CACA,mCACE,YAAA,CAGJ,kDACE,qBAAA,CACA,0EACE,UAAA,CAGJ,oHAEE,WAAA,CACA,oKACE,aCpBS,CDqBT,0NACE,iBAAA,CACA,aC3BO,CD4BP,0OACE,UAAA,CACA,iBAAA,CACA,UAAA,CACA,aAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,wBCrCG,CDsCH,0BAAA,CACA,2BAAA,CAGJ,0NACE,aCpCO,CDsCT,oTACE,cAAA,CACA,aC3CO,CD+Cb,+DACE,WAAA,CACA,iBAAA,CACA,uEACE,iBAAA,CACA,QAAA,CACA,UAAA,CACA,UAAA,CACA,UAAA,CACA,wBCrDS,CDwDb,qDACE,WAAA,CACA,6EACE,aCjES,CDkET,gBAAA,CACA,iBAAA,CACA,wBC5DQ,CD6DR,wGACE,wBCvEK,CDwEL,UC7DM,CD+DR,wGACE,aCrEO,CDuET,qJACE,cAAA,CACA,wBCvEM,CD2EZ,gDACE,gBAAA,CAEF,gDACE,gBAAA,CAEF,gDACE,iBAAA,CACA,iEACE,4BAAA",sourcesContent:["@use '../colors';\n\n.root {\n  list-style-type: none;\n  user-select: none;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  li {\n    display: block;\n    margin: 0;\n    &::before {\n      content: none;\n    }\n  }\n  &.stretch {\n    justify-items: stretch;\n    .item {\n      width: 100%;\n    }\n  }\n  &.view-clean,\n  &.view-clean-underline {\n    height: 32px;\n    .item {\n      color: colors.$basic-gray38;\n      &.selected {\n        position: relative;\n        color: colors.$basic-gray87;\n        &::before {\n          content: '';\n          position: absolute;\n          height: 2px;\n          margin: 0 -1px;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background-color: colors.$basic-blue;\n          border-top-left-radius: 4px;\n          border-top-right-radius: 4px;\n        }\n      }\n      &.disabled {\n        color: colors.$basic-gray12;\n      }\n      &:not(.selected):not(.disabled):hover {\n        cursor: pointer;\n        color: colors.$basic-gray54;\n      }\n    }\n  }\n  &.view-clean-underline {\n    height: 40px;\n    position: relative;\n    &::before {\n      position: absolute;\n      bottom: 0;\n      content: '';\n      height: 1px;\n      width: 100%;\n      background-color: colors.$basic-gray12;\n    }\n  }\n  &.view-round {\n    height: 40px;\n    .item {\n      color: colors.$basic-gray87;\n      padding: 8px 16px;\n      border-radius: 4px;\n      background-color: colors.$basic-gray4;\n      &.selected {\n        background-color: colors.$basic-blue;\n        color: colors.$basic-white;\n      }\n      &.disabled {\n        color: colors.$basic-gray24;\n      }\n      &:not(.selected):not(.disabled):hover {\n        cursor: pointer;\n        background-color: colors.$basic-gray8;\n      }\n    }\n  }\n  &.gap-m {\n    --tabs-gap: 24px;\n  }\n  &.gap-s {\n    --tabs-gap: 16px;\n  }\n  .item {\n    text-align: center;\n    &:not(:last-child) {\n      margin-right: var(--tabs-gap);\n    }\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"tabs-module__root__e3d",stretch:"tabs-module__stretch__b4b",item:"tabs-module__item__d5b","view-clean":"tabs-module__view-clean__f68","view-clean-underline":"tabs-module__view-clean-underline__b21",selected:"tabs-module__selected__e6f",disabled:"tabs-module__disabled__dc6","view-round":"tabs-module__view-round__c4f","gap-m":"tabs-module__gap-m__c02","gap-s":"tabs-module__gap-s__f62"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/price/price.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_price_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/price/price.module.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_price_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_price_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_price_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_price_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/@sima-land/ui-nucleons/tabs/tabs.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/tabs/tabs.module.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);