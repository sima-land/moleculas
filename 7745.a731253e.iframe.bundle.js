"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[7745],{"./node_modules/@sima-land/ui-nucleons/price/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.tA=void 0;var price_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/price/price.js");Object.defineProperty(exports,"tA",{enumerable:!0,get:function(){return price_1.Price}});var utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/price/utils.js")},"./node_modules/@sima-land/ui-nucleons/price/price.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Price=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/price/utils.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),price_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/price/price.m.scss")),cx=bind_1.default.bind(price_m_scss_1.default);exports.Price=function Price({className,currencyGrapheme:grapheme,graphemeBefore,crossedOut,value,"data-testid":testId="price"}){const content=(0,utils_1.formatPrice)(value,grapheme,{graphemeBefore});return(0,jsx_runtime_1.jsx)("span",{className:cx("root",className,crossedOut&&"crossed-out"),"data-testid":testId,children:content})}},"./node_modules/@sima-land/ui-nucleons/price/utils.js":(__unused_webpack_module,exports)=>{function formatInteger(value){let result="0";if(Number.isFinite(value)){const separated=[],list=toString(0===value?0:Math.max(value,1e-4)).replace(/\..*$/g,"").split("");for(;list.length;)separated.unshift(list.splice(-3).join(""));result=separated.join(" ")}return result}function formatFractional(value){let fractional="";return Number.isFinite(value)&&!Number.isInteger(value)&&(fractional=toString(value).replace(/^.*\./g,"")),fractional}function toString(value){let result;return result=value<=1e-4?"0.0001":value<.01?value.toFixed(4):value.toFixed(2),result}Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatFractional=exports.formatInteger=exports.formatPrice=void 0,exports.formatPrice=function formatPrice(value,grapheme,{graphemeBefore}={}){const number=Number(value);return[grapheme&&graphemeBefore&&`${grapheme} `,formatInteger(number),Number.isFinite(number)&&!Number.isInteger(number)&&`,${formatFractional(number)}`,grapheme&&!graphemeBefore&&` ${grapheme}`].filter(Boolean).map((s=>s.replace(/\s/g," "))).join("")},exports.formatInteger=formatInteger,exports.formatFractional=formatFractional},"./node_modules/@sima-land/ui-nucleons/text-button/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.A=void 0;var text_button_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/text-button/text-button.js");Object.defineProperty(exports,"A",{enumerable:!0,get:function(){return text_button_1.TextButton}})},"./node_modules/@sima-land/ui-nucleons/text-button/text-button.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextButton=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),text_button_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/text-button/text-button.m.scss")),cx=bind_1.default.bind(text_button_m_scss_1.default);exports.TextButton=function TextButton({size="m",color="basic-blue",children,className,startIcon:StartIcon,endIcon:EndIcon,buttonRef,anchorRef,underline,disabled,iconGutter=8,"data-testid":testId="text-button",...restProps}){const rooClassName=cx("root",color&&"unset"!==color&&`color-${color}`,size&&"unset"!==size&&`size-${size}`,"number"==typeof iconGutter&&`icon-gutter-${iconGutter}`,underline&&"underline",disabled&&"disabled",className),content=(0,jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment,{children:[StartIcon&&(0,jsx_runtime_1.jsx)(StartIcon,{className:cx("icon-start")}),children,EndIcon&&(0,jsx_runtime_1.jsx)(EndIcon,{className:cx("icon-end")})]});let result;switch(restProps.as){case"anchor":{const{as,...anchorProps}=restProps;result=(0,jsx_runtime_1.jsx)("a",{...anchorProps,ref:anchorRef,className:rooClassName,"data-testid":testId,children:content});break}default:{const{as,...buttonProps}=restProps;result=(0,jsx_runtime_1.jsx)("button",{...buttonProps,ref:buttonRef,className:rooClassName,disabled,"data-testid":testId,children:content});break}}return result}},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Left.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M9.659 3.247a1 1 0 0 1 .094 1.412L6.829 8l2.924 3.341a1 1 0 0 1-1.506 1.318l-3.5-4a1 1 0 0 1 0-1.317l3.5-4a1 1 0 0 1 1.412-.095Z",clipRule:"evenodd"})})));exports.default=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/64x64/Colorful/TouchScrollX.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{width:64,height:64,fill:"none",viewBox:"0 0 64 64",ref,...props,children:[(0,jsx_runtime_1.jsx)("path",{fill:"#fff",d:"M24 16v28l-5.005-5.34a3.704 3.704 0 1 0-5.387 5.085l12.126 12.764A14.429 14.429 0 0 0 36.195 61h.986c5.976 0 10.82-4.844 10.82-10.82V39.75a6 6 0 0 0-6-6A3.75 3.75 0 0 0 38.25 30H36a4.25 4.25 0 0 0-4.25-4.25H30V16a3 3 0 0 0-6 0Z"}),(0,jsx_runtime_1.jsx)("path",{fill:"#212121",fillRule:"evenodd",d:"M27 14a2 2 0 0 0-2 2v28a1 1 0 0 1-1.729.684l-5.005-5.34a2.704 2.704 0 1 0-3.933 3.712L26.46 55.82A13.429 13.429 0 0 0 36.195 60h.986c5.423 0 9.82-4.397 9.82-9.82V39.75a5.002 5.002 0 0 0-4-4.9v4.65a1 1 0 1 1-2 0v-5.75A2.75 2.75 0 0 0 38.25 31H37v8a1 1 0 1 1-2 0v-9a3.25 3.25 0 0 0-3.25-3.25H31V39a1 1 0 1 1-2 0V16a2 2 0 0 0-2-2Zm4 10.75V16a4 4 0 0 0-8 0v25.471l-3.275-3.494a4.703 4.703 0 1 0-6.842 6.456L25.01 57.198A15.43 15.43 0 0 0 36.195 62h.986c6.528 0 11.82-5.292 11.82-11.82V39.75a7.001 7.001 0 0 0-6.093-6.942A4.752 4.752 0 0 0 38.25 29h-1.345a5.252 5.252 0 0 0-5.155-4.25H31Z",clipRule:"evenodd"}),(0,jsx_runtime_1.jsx)("path",{fill:"#fff",d:"M12.414 9.586 11.828 9h40.344l-.586.586a1.92 1.92 0 0 0-.582 1.516c.039.518.284.968.605 1.29.321.32.771.565 1.289.604a1.92 1.92 0 0 0 1.516-.582l1.173-1.172c1.134-1.135 2.553-2.555 2.825-2.825.778-.776.78-2.053.002-2.831l-4-4a1.92 1.92 0 0 0-1.516-.582 2.056 2.056 0 0 0-1.29.605 2.056 2.056 0 0 0-.604 1.289 1.92 1.92 0 0 0 .582 1.516l.586.586H11.828l.586-.586a1.92 1.92 0 0 0 .582-1.516 2.056 2.056 0 0 0-.605-1.29 2.056 2.056 0 0 0-1.289-.604 1.92 1.92 0 0 0-1.516.582l-4 4a2 2 0 0 0 0 2.828l4 4a1.92 1.92 0 0 0 1.516.582c.518-.039.968-.284 1.29-.605.32-.321.565-.771.604-1.289a1.92 1.92 0 0 0-.582-1.516Z"}),(0,jsx_runtime_1.jsx)("path",{fill:"#212121",d:"M52.293 3.707a1 1 0 0 1 1.414-1.414l4 4a.997.997 0 0 1 .011 1.403c-1.316 1.357-2.675 2.675-4.01 4.011a1 1 0 0 1-1.415-1.414L54.586 8H9.414l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L9.414 6h45.172l-2.293-2.293Z"})]})));exports.Z=ForwardRef},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/price/price.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".price-m__root__d4d{position:relative;display:inline-block;white-space:nowrap}.price-m__root__d4d.price-m__crossed-out__d8c{color:#9e9e9e;text-decoration:line-through}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/price/price.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAEA,oBACE,iBAAA,CACA,oBAAA,CACA,kBAAA,CACA,8CACE,aCCW,CAAA,4BAAA",sourcesContent:["@use '../colors';\n\n.root {\n  position: relative;\n  display: inline-block;\n  white-space: nowrap;\n  &.crossed-out {\n    color: colors.$basic-gray38;\n    text-decoration: line-through;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"price-m__root__d4d","crossed-out":"price-m__crossed-out__d8c"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/text-button/text-button.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".text-button-m__root__af1{outline:none;border:none;margin:0;padding:0;width:auto;overflow:visible;background:rgba(0,0,0,0);color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;display:inline-flex;align-items:center;font-weight:600;white-space:nowrap;background:rgba(0,0,0,0);padding:0;border:0}.text-button-m__root__af1::-moz-focus-inner{border:0;padding:0}.text-button-m__root__af1:focus-visible{outline:2px solid #1f84db}.text-button-m__root__af1,.text-button-m__root__af1:link,.text-button-m__root__af1:visited,.text-button-m__root__af1:hover,.text-button-m__root__af1:active{cursor:default;text-decoration:none;border-bottom-color:rgba(0,0,0,0)}.text-button-m__root__af1.text-button-m__underline__f80,.text-button-m__root__af1:link.text-button-m__underline__f80,.text-button-m__root__af1:visited.text-button-m__underline__f80,.text-button-m__root__af1:hover.text-button-m__underline__f80,.text-button-m__root__af1:active.text-button-m__underline__f80{box-shadow:inset 0 -1px 0 0 currentColor}.text-button-m__root__af1:hover{cursor:pointer}.text-button-m__size-s__a0c{font-size:14px;line-height:20px}.text-button-m__size-m__a5a{font-size:16px;line-height:24px}.text-button-m__icon-gutter-4__ab7{--text-button-icon-gutter: 4px}.text-button-m__icon-gutter-8__bfd{--text-button-icon-gutter: 8px}.text-button-m__root__af1.text-button-m__disabled__af8{color:#c2c2c2;pointer-events:none}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-blue__f38{color:#1f84db}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-blue__f38:hover{color:#00599d}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-gray87__bb3{color:#212121}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-gray87__bb3:hover{color:#757575}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-gray38__e5b{color:#9e9e9e}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-gray38__e5b:hover{color:#757575}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-white__be0{color:#fff}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-white__be0:hover{color:#f5f5f5}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-additional-red__cca{color:#fb3a2f}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-additional-red__cca:hover{color:#d50000}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-additional-teal__ad6{color:#09ab8b}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-additional-teal__ad6:hover{color:#00c853}.text-button-m__icon-start__b60,.text-button-m__icon-end__c2a{flex-shrink:0;fill:currentColor}.text-button-m__icon-start__b60{margin-right:var(--text-button-icon-gutter)}.text-button-m__icon-end__c2a{margin-left:var(--text-button-icon-gutter)}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/text-button/text-button.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/utils.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss","webpack://./node_modules/@sima-land/ui-nucleons/link/link-util.scss"],names:[],mappings:"AAIA,0BCwCE,YAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,gBAAA,CAEA,wBAAA,CAGA,aAAA,CACA,YAAA,CAGA,kBAAA,CAGA,8BAAA,CACA,+BAAA,CAGA,uBAAA,CD1DA,mBAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,wBAAA,CACA,SAAA,CACA,QAAA,CCuDA,4CACE,QAAA,CACA,SAAA,CAeF,wCAPA,yBAAA,CD7DF,4JAKE,cAAA,CACA,oBAAA,CACA,iCAAA,CACA,kTACE,wCAAA,CAIJ,gCACE,cAAA,CAGF,4BACE,cAAA,CACA,gBAAA,CAGF,4BACE,cAAA,CACA,gBAAA,CAGF,mCACE,8BAAA,CAGF,mCACE,8BAAA,CAIF,uDACE,aE7Ca,CF8Cb,mBAAA,CAGF,kGGtDI,aDDS,CCET,wGACE,aDkCiB,CFsBvB,oGGrDI,aDLW,CCMX,0GACE,aDJS,CF2Df,oGGpDI,aDNW,CCOX,0GACE,aDTS,CF+Df,mGGnDI,UDLU,CCMV,yGACE,aDTQ,CF8Dd,sGGlDI,aDNa,CCOb,4GACE,aDTgB,CF6DtB,uGGjDI,aDRc,CCSd,6GACE,aDTa,CF6DnB,8DAEE,aAAA,CACA,iBAAA,CAGF,gCACE,2CAAA,CAGF,8BACE,0CAAA",sourcesContent:["@use '../colors';\n@use '../utils';\n@use '../link/link-util';\n\n.root {\n  @include utils.reset-button;\n  @include utils.focus-visible;\n  display: inline-flex;\n  align-items: center;\n  font-weight: 600;\n  white-space: nowrap;\n  background: transparent;\n  padding: 0;\n  border: 0;\n  // ВАЖНО: не надо указывать здесь сброс margin так как его сложно перебить при сборке стилей\n}\n\n.root,\n.root:link,\n.root:visited,\n.root:hover,\n.root:active {\n  cursor: default;\n  text-decoration: none;\n  border-bottom-color: transparent;\n  &.underline {\n    box-shadow: inset 0 -1px 0 0 currentColor;\n  }\n}\n\n.root:hover {\n  cursor: pointer;\n}\n\n.size-s {\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.size-m {\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.icon-gutter-4 {\n  --text-button-icon-gutter: 4px;\n}\n\n.icon-gutter-8 {\n  --text-button-icon-gutter: 8px;\n}\n\n// ниже двойные классы для высокой специфичности в монолите\n.root.disabled {\n  color: colors.$basic-gray24;\n  pointer-events: none;\n}\n\n.root:not(.disabled).color-basic-blue {\n  @include link-util.color('basic-blue');\n}\n\n.root:not(.disabled).color-basic-gray87 {\n  @include link-util.color('basic-gray87');\n}\n\n.root:not(.disabled).color-basic-gray38 {\n  @include link-util.color('basic-gray38');\n}\n\n.root:not(.disabled).color-basic-white {\n  @include link-util.color('basic-white');\n}\n\n.root:not(.disabled).color-additional-red {\n  @include link-util.color('additional-red');\n}\n\n.root:not(.disabled).color-additional-teal {\n  @include link-util.color('additional-teal');\n}\n\n// иконки\n.icon-start,\n.icon-end {\n  flex-shrink: 0;\n  fill: currentColor;\n}\n\n.icon-start {\n  margin-right: var(--text-button-icon-gutter);\n}\n\n.icon-end {\n  margin-left: var(--text-button-icon-gutter);\n}\n","@use './colors';\n\n/**\n * Скрывает полосы прокрутки у элемента.\n */\n@mixin hidden-scrollbars {\n  scrollbar-width: none; // Firefox\n  overflow: -moz-scrollbars-none; // old Firefox\n  -ms-overflow-style: none; // IE, old Edge\n  &::-webkit-scrollbar {\n    display: none; // Chrome, Safari, Opera\n  }\n}\n\n/**\n * стилизует полосы прокрутки по дизайн-гайдам с ограничениями:\n * - в браузерах на основе webkit/blink (Chrome, Opera, Safari) полоса прокрутки не накладывается поверх контента\n * - в браузерах которые поддерживают только стандартизированный способ стилизации (Firefox) определяет только цвет ползунка\n */\n@mixin semi-stylized-scrollbars($bg-color: #fff) {\n  // firefox\n  scrollbar-width: thin;\n  scrollbar-color: colors.$basic-gray12 transparent;\n\n  // webkit\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n  &::-webkit-scrollbar-track {\n    background: $bg-color;\n    border-radius: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid $bg-color;\n    border-radius: 12px;\n    background: colors.$basic-gray12;\n  }\n}\n\n/**\n * Полный сброс стилей button до состояния сравнимого с div.\n * взято отсюда: https://gist.github.com/MoOx/9137295\n */\n@mixin reset-button {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n\n  /* Remove excess padding and border in Firefox 4+ */\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n/**\n * Добавляет стандартную визуальную подсветку состояния focus-visible.\n */\n@mixin focus-visible-style() {\n  outline: 2px solid colors.$basic-blue;\n}\n\n/**\n * Формирует стандартную визуальную подсветку для состояния focus-visible.\n */\n@mixin focus-visible() {\n  &:focus-visible {\n    @include focus-visible-style;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n","@use '../colors';\n\n@mixin color($key) {\n  @if $key == 'basic-blue' {\n    color: colors.$basic-blue;\n    &:hover {\n      color: colors.$additional-deep-blue;\n    }\n  } @else if $key == 'basic-gray87' {\n    color: colors.$basic-gray87;\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  } @else if $key == 'basic-gray38' {\n    color: colors.$basic-gray38;\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  } @else if $key == 'basic-white' {\n    color: colors.$basic-white;\n    &:hover {\n      color: colors.$basic-gray4;\n    }\n  } @else if $key == 'additional-red' {\n    color: colors.$additional-red;\n    &:hover {\n      color: colors.$additional-deep-red;\n    }\n  } @else if $key == 'additional-teal' {\n    color: colors.$additional-teal;\n    &:hover {\n      color: colors.$additional-green;\n    }\n  } @else {\n    @warn '[link-color] No such color `#{$key}`.';\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"text-button-m__root__af1",underline:"text-button-m__underline__f80","size-s":"text-button-m__size-s__a0c","size-m":"text-button-m__size-m__a5a","icon-gutter-4":"text-button-m__icon-gutter-4__ab7","icon-gutter-8":"text-button-m__icon-gutter-8__bfd",disabled:"text-button-m__disabled__af8","color-basic-blue":"text-button-m__color-basic-blue__f38","color-basic-gray87":"text-button-m__color-basic-gray87__bb3","color-basic-gray38":"text-button-m__color-basic-gray38__e5b","color-basic-white":"text-button-m__color-basic-white__be0","color-additional-red":"text-button-m__color-additional-red__cca","color-additional-teal":"text-button-m__color-additional-teal__ad6","icon-start":"text-button-m__icon-start__b60","icon-end":"text-button-m__icon-end__c2a"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/price/price.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_price_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/price/price.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_price_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_price_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_price_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_price_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/@sima-land/ui-nucleons/text-button/text-button.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_text_button_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/text-button/text-button.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_text_button_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_text_button_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_text_button_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_text_button_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);