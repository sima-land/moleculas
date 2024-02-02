"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[1889],{"./node_modules/@sima-land/ui-nucleons/context/viewport.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.ViewportContext=void 0;const react_1=__webpack_require__("./node_modules/react/index.js");exports.ViewportContext=(0,react_1.createContext)((0,react_1.createRef)())},"./node_modules/@sima-land/ui-nucleons/modal/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.B1=exports.u_=exports.fe=void 0;var slots_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/slots.js");Object.defineProperty(exports,"fe",{enumerable:!0,get:function(){return slots_1.ModalBody}});var modal_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/modal.js");Object.defineProperty(exports,"u_",{enumerable:!0,get:function(){return modal_1.Modal}});var utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/utils.js");Object.defineProperty(exports,"B1",{enumerable:!0,get:function(){return utils_1.getResponsiveModalProps}})},"./node_modules/@sima-land/ui-nucleons/modal/modal.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Modal=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),modal_overlay_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal-overlay/index.js"),utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal-overlay/utils.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),modal_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/modal.m.scss")),cx=bind_1.default.bind(modal_m_scss_1.default);exports.Modal=function Modal({flexLayout=!0,size="m",rounds="fullscreen"===size?"unset":"m",className,children,onClose,overlayProps,"data-testid":testId="modal",...restProps}){const overlayClickProps=(0,utils_1.useExactClick)(onClose,{onMouseDown:null==overlayProps?void 0:overlayProps.onMouseDown,onMouseUp:null==overlayProps?void 0:overlayProps.onMouseUp}),overlayClassName=cx("overlay","unset"!==size&&`size-${size}`,"unset"!==rounds&&`rounds-${rounds}`,null==overlayProps?void 0:overlayProps.className),modalClassName=cx("modal",flexLayout&&"modal-layout",className);return(0,jsx_runtime_1.jsx)(modal_overlay_1.ModalOverlay,{...overlayProps,className:overlayClassName,...overlayClickProps,children:(0,jsx_runtime_1.jsx)("div",{className:modalClassName,"data-testid":testId,...restProps,children})})}},"./node_modules/@sima-land/ui-nucleons/modal/slots.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModalBottomGap=exports.ModalOverlap=exports.ModalBody=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),custom_scrollbar_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/_internal/custom-scrollbar/index.js"),viewport_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/context/viewport.js"),page_scroll_lock_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/_internal/page-scroll-lock/index.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),modal_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/modal.m.scss")),cx=bind_1.default.bind(modal_m_scss_1.default);exports.ModalBody=function ModalBody({children,className,rootRef,viewportRef,viewportProps,withScrollDisable=!1,scrollDisableOptions,"data-testid":testId="modal-body",...restProps}){const viewportInnerRef=(0,react_1.useRef)(null);return(0,react_1.useImperativeHandle)(viewportRef,(()=>viewportInnerRef.current)),(0,page_scroll_lock_1.usePageScrollLock)(viewportInnerRef,{lockEnabled:withScrollDisable,...scrollDisableOptions}),(0,jsx_runtime_1.jsx)(viewport_1.ViewportContext.Provider,{value:viewportInnerRef,children:(0,jsx_runtime_1.jsx)(custom_scrollbar_1.CustomScrollbar,{...restProps,"data-testid":testId,rootRef,viewportRef:viewportInnerRef,viewportProps,className:cx("body",className),overflow:{x:"hidden",y:"scroll"},children})})},exports.ModalOverlap=function ModalOverlap({children}){return(0,jsx_runtime_1.jsx)("div",{className:cx("overlap"),children})},exports.ModalBottomGap=function ModalBottomGap(){return(0,jsx_runtime_1.jsx)("div",{className:cx("bottom-gap")})}},"./node_modules/@sima-land/ui-nucleons/modal/utils.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getResponsiveModalProps=void 0;const bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),utils_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/utils.m.scss")),cx=bind_1.default.bind(utils_m_scss_1.default);exports.getResponsiveModalProps=function getResponsiveModalProps(config){const{size,overlayProps}=config;return{size:"unset",rounds:"unset",overlayProps:{...overlayProps,className:cx(`size-${size}`,null==overlayProps?void 0:overlayProps.className)}}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/modal/modal.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".overlay{display:flex;align-items:center;padding:var(--modal-overlay-padding)}.modal{width:var(--modal-width);height:var(--modal-height);max-height:var(--modal-max-height);min-height:var(--modal-min-height);border-radius:var(--modal-border-radius);box-shadow:var(--modal-box-shadow);flex-shrink:0;margin:auto;position:relative;z-index:1;background-color:#fff}.modal-layout{display:flex;flex-direction:column}.size-s{--modal-width: 480px;--modal-max-height: min(696px, calc(100% - 32px));--modal-min-height: 232px;--modal-overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.size-m{--modal-width: 640px;--modal-max-height: min(696px, calc(100% - 32px));--modal-min-height: 232px;--modal-overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.size-l{--modal-width: 768px;--modal-max-height: min(696px, calc(100% - 32px));--modal-min-height: 232px;--modal-overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.size-xl{--modal-width: 960px;--modal-max-height: min(696px, calc(100% - 32px));--modal-min-height: 232px;--modal-overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.size-fullscreen{--modal-width: 100%;--modal-height: 100%;--modal-max-height: 100%;--modal-overlay-padding: 0;--modal-box-shadow: none}.rounds-s{--modal-border-radius: 4px}.rounds-m{--modal-border-radius: 8px}.body{flex-grow:1}.overlap{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.overlap *{pointer-events:auto}.bottom-gap{flex-shrink:0;border-radius:0 0 8px 8px;height:16px;background:#fff}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/modal/modal.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/modal/modal-util.scss"],names:[],mappings:"AAGA,SACE,YAAA,CACA,kBAAA,CACA,oCAAA,CAIF,OACE,wBAAA,CACA,0BAAA,CACA,kCAAA,CACA,kCAAA,CACA,wCAAA,CACA,kCAAA,CACA,aAAA,CACA,WAAA,CACA,iBAAA,CACA,SAAA,CACA,qBAAA,CAGF,cACE,YAAA,CACA,qBAAA,CAGF,QC1BE,oBAAA,CACA,iDAAA,CACA,yBAAA,CACA,6BAAA,CACA,+EAAA,CACA,0BAAA,CDyBF,QCrBE,oBAAA,CACA,iDAAA,CACA,yBAAA,CACA,6BAAA,CACA,+EAAA,CACA,0BAAA,CDoBF,QChBE,oBAAA,CACA,iDAAA,CACA,yBAAA,CACA,6BAAA,CACA,+EAAA,CACA,0BAAA,CDeF,SCXE,oBAAA,CACA,iDAAA,CACA,yBAAA,CACA,6BAAA,CACA,+EAAA,CACA,0BAAA,CDUF,iBCNE,mBAAA,CACA,oBAAA,CACA,wBAAA,CACA,0BAAA,CACA,wBAAA,CDMF,UACE,0BAAA,CAGF,UACE,0BAAA,CAGF,MACE,WAAA,CAGF,SACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CACA,WACE,mBAAA,CAIJ,YACE,aAAA,CACA,yBAAA,CACA,WAAA,CACA,eAAA",sourcesContent:["@use '../shadows';\n@use './modal-util';\n\n.overlay {\n  display: flex;\n  align-items: center;\n  padding: var(--modal-overlay-padding);\n  // ВАЖНО: для корректной прокрутки во flex-контейнере не надо использовать тут justify-content: center\n}\n\n.modal {\n  width: var(--modal-width);\n  height: var(--modal-height);\n  max-height: var(--modal-max-height);\n  min-height: var(--modal-min-height);\n  border-radius: var(--modal-border-radius);\n  box-shadow: var(--modal-box-shadow);\n  flex-shrink: 0;\n  margin: auto; // ВАЖНО: для корректной прокрутки во flex-контейнере\n  position: relative; // ВАЖНО: для overlap\n  z-index: 1;\n  background-color: #fff;\n}\n\n.modal-layout {\n  display: flex;\n  flex-direction: column;\n}\n\n.size-s {\n  @include modal-util.size-s;\n}\n\n.size-m {\n  @include modal-util.size-m;\n}\n\n.size-l {\n  @include modal-util.size-l;\n}\n\n.size-xl {\n  @include modal-util.size-xl;\n}\n\n.size-fullscreen {\n  @include modal-util.size-fullscreen;\n}\n\n.rounds-s {\n  --modal-border-radius: 4px;\n}\n\n.rounds-m {\n  --modal-border-radius: 8px;\n}\n\n.body {\n  flex-grow: 1;\n}\n\n.overlap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  * {\n    pointer-events: auto;\n  }\n}\n\n.bottom-gap {\n  flex-shrink: 0;\n  border-radius: 0 0 8px 8px;\n  height: 16px;\n  background: #fff;\n}\n","@use '../shadows';\n\n@mixin size-s {\n  --modal-width: 480px;\n  --modal-max-height: min(696px, calc(100% - 32px));\n  --modal-min-height: 232px;\n  --modal-overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-m {\n  --modal-width: 640px;\n  --modal-max-height: min(696px, calc(100% - 32px));\n  --modal-min-height: 232px;\n  --modal-overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-l {\n  --modal-width: 768px;\n  --modal-max-height: min(696px, calc(100% - 32px));\n  --modal-min-height: 232px;\n  --modal-overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-xl {\n  --modal-width: 960px;\n  --modal-max-height: min(696px, calc(100% - 32px));\n  --modal-min-height: 232px;\n  --modal-overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-fullscreen {\n  --modal-width: 100%;\n  --modal-height: 100%;\n  --modal-max-height: 100%;\n  --modal-overlay-padding: 0;\n  --modal-box-shadow: none;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/modal/utils.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media(max-width: 1023px){.size-s,.size-m,.size-l,.size-xl,.size-fullscreen{--modal-width: 100%;--modal-height: 100%;--modal-max-height: 100%;--modal-overlay-padding: 0;--modal-box-shadow: none;--top-bar-height: 64px;--top-bar-title-size: 16px;--top-bar-title-height: 24px;--top-bar-gutter: 24px;--top-bar-icon-button-width: 60px;--bottom-bar-height: 72px;--clean-group-height: 72px}}@media(min-width: 1024px){.size-s{--modal-width: 480px;--modal-max-height: min(696px, calc(100% - 32px));--modal-min-height: 232px;--modal-overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.size-m{--modal-width: 640px;--modal-max-height: min(696px, calc(100% - 32px));--modal-min-height: 232px;--modal-overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.size-l{--modal-width: 768px;--modal-max-height: min(696px, calc(100% - 32px));--modal-min-height: 232px;--modal-overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.size-xl{--modal-width: 960px;--modal-max-height: min(696px, calc(100% - 32px));--modal-min-height: 232px;--modal-overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.size-fullscreen{--modal-width: 100%;--modal-height: 100%;--modal-max-height: 100%;--modal-overlay-padding: 0;--modal-box-shadow: none}.size-s,.size-m,.size-l,.size-xl{--top-bar-height: 64px;--top-bar-title-size: 16px;--top-bar-title-height: 24px;--top-bar-gutter: 24px;--top-bar-icon-button-width: 60px;--bottom-bar-height: 72px;--clean-group-height: 72px}.size-fullscreen{--top-bar-height: 80px;--top-bar-title-size: 16px;--top-bar-title-height: 24px;--top-bar-gutter: 40px;--top-bar-icon-button-width: 76px;--top-bar-title-only-size: 20px;--top-bar-title-only-height: 28px;--bottom-bar-height: 80px;--clean-group-height: 80px}}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/breakpoints.scss","webpack://./node_modules/@sima-land/ui-nucleons/modal/utils.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/modal/modal-util.scss","webpack://./node_modules/@sima-land/ui-nucleons/top-bar/top-bar-util.scss","webpack://./node_modules/@sima-land/ui-nucleons/bottom-bar/bottom-bar-util.scss","webpack://./node_modules/@sima-land/ui-nucleons/clean-buttons/clean-buttons-util.scss"],names:[],mappings:"AAiCI,0BC3BF,kDCiCA,mBAAA,CACA,oBAAA,CACA,wBAAA,CACA,0BAAA,CACA,wBAAA,CC9BA,sBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,iCAAA,CCLA,yBAAA,CCHA,0BAAA,CAAA,CLcE,0BCLF,QCfA,oBAAA,CACA,iDAAA,CACA,yBAAA,CACA,6BAAA,CACA,+EAAA,CACA,0BAAA,CDaA,QCTA,oBAAA,CACA,iDAAA,CACA,yBAAA,CACA,6BAAA,CACA,+EAAA,CACA,0BAAA,CDOA,QCHA,oBAAA,CACA,iDAAA,CACA,yBAAA,CACA,6BAAA,CACA,+EAAA,CACA,0BAAA,CDCA,SCGA,oBAAA,CACA,iDAAA,CACA,yBAAA,CACA,6BAAA,CACA,+EAAA,CACA,0BAAA,CDLA,iBCSA,mBAAA,CACA,oBAAA,CACA,wBAAA,CACA,0BAAA,CACA,wBAAA,CDVA,iCEpBA,sBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,iCAAA,CCLA,yBAAA,CCHA,0BAAA,CJ+BA,iBEnBA,sBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,iCAAA,CACA,+BAAA,CACA,iCAAA,CCVA,yBAAA,CCJA,0BAAA,CAAA",sourcesContent:['/* stylelint-disable length-zero-no-unit */\n$map: (\n  // ВАЖНО: тут именно 0px а не 0 - в Safari нельзя использовать @media (min-width: 0)\n  mxs: 0px,\n\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px\n) !default;\n/* stylelint-enable length-zero-no-unit */\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n',"@use '../breakpoints';\n@use './modal-util';\n@use '../top-bar/top-bar-util';\n@use '../bottom-bar/bottom-bar-util';\n\n@include breakpoints.lt('xs') {\n  .size-s,\n  .size-m,\n  .size-l,\n  .size-xl,\n  .size-fullscreen {\n    @include modal-util.size-fullscreen;\n    @include top-bar-util.size-m;\n    @include bottom-bar-util.size-m;\n  }\n}\n\n@include breakpoints.gte('xs') {\n  .size-s {\n    @include modal-util.size-s;\n  }\n  .size-m {\n    @include modal-util.size-m;\n  }\n  .size-l {\n    @include modal-util.size-l;\n  }\n  .size-xl {\n    @include modal-util.size-xl;\n  }\n  .size-fullscreen {\n    @include modal-util.size-fullscreen;\n  }\n  .size-s,\n  .size-m,\n  .size-l,\n  .size-xl {\n    @include top-bar-util.size-m;\n    @include bottom-bar-util.size-m;\n  }\n  .size-fullscreen {\n    @include top-bar-util.size-xl;\n    @include bottom-bar-util.size-l;\n  }\n}\n","@use '../shadows';\n\n@mixin size-s {\n  --modal-width: 480px;\n  --modal-max-height: min(696px, calc(100% - 32px));\n  --modal-min-height: 232px;\n  --modal-overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-m {\n  --modal-width: 640px;\n  --modal-max-height: min(696px, calc(100% - 32px));\n  --modal-min-height: 232px;\n  --modal-overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-l {\n  --modal-width: 768px;\n  --modal-max-height: min(696px, calc(100% - 32px));\n  --modal-min-height: 232px;\n  --modal-overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-xl {\n  --modal-width: 960px;\n  --modal-max-height: min(696px, calc(100% - 32px));\n  --modal-min-height: 232px;\n  --modal-overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-fullscreen {\n  --modal-width: 100%;\n  --modal-height: 100%;\n  --modal-max-height: 100%;\n  --modal-overlay-padding: 0;\n  --modal-box-shadow: none;\n}\n","$size-s-height: 56px;\n$size-m-height: 64px;\n$size-xl-height: 80px;\n\n@mixin size-s {\n  --top-bar-height: #{$size-s-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 16px;\n  --top-bar-icon-button-width: 52px;\n}\n\n@mixin size-m {\n  --top-bar-height: #{$size-m-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 24px;\n  --top-bar-icon-button-width: 60px;\n}\n\n@mixin size-xl {\n  --top-bar-height: #{$size-xl-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 40px;\n  --top-bar-icon-button-width: 76px;\n  --top-bar-title-only-size: 20px;\n  --top-bar-title-only-height: 28px;\n}\n","@use '../clean-buttons/clean-buttons-util';\n\n$size-s-height: 64px;\n$size-m-height: 72px;\n$size-l-height: 80px;\n\n@mixin size-s {\n  --bottom-bar-height: #{$size-s-height};\n  @include clean-buttons-util.size-s;\n}\n\n@mixin size-m {\n  --bottom-bar-height: #{$size-m-height};\n  @include clean-buttons-util.size-m;\n}\n\n@mixin size-l {\n  --bottom-bar-height: #{$size-l-height};\n  @include clean-buttons-util.size-l;\n}\n","$size-s-height: 64px;\n$size-m-height: 72px;\n$size-l-height: 80px;\n\n@mixin size-s {\n  --clean-group-height: #{$size-s-height};\n}\n\n@mixin size-m {\n  --clean-group-height: #{$size-m-height};\n}\n\n@mixin size-l {\n  --clean-group-height: #{$size-l-height};\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/modal/modal.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modal_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/modal/modal.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modal_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modal_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modal_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modal_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/@sima-land/ui-nucleons/modal/utils.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_utils_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/modal/utils.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_utils_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_utils_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_utils_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_utils_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);