"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[6124],{"./node_modules/@sima-land/ui-nucleons/_internal/page-scroll-lock/adapters/body-scroll-lock.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.allowTouchMove=exports.PageScrollLockAdapterBSL=exports.BSL_IGNORE_ATTR=void 0;const body_scroll_lock_1=__webpack_require__("./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");exports.BSL_IGNORE_ATTR="data-bsl-ignore";exports.PageScrollLockAdapterBSL=class PageScrollLockAdapterBSL{constructor(element,options){this.element=element,this.options=options,this.lib={disableBodyScroll:body_scroll_lock_1.disableBodyScroll,enableBodyScroll:body_scroll_lock_1.enableBodyScroll}}replaceLib(lib){this.lib=lib}lock(){this.lib.disableBodyScroll(this.element,{...this.options,allowTouchMove:exports.allowTouchMove})}unlock(){this.lib.enableBodyScroll(this.element)}};exports.allowTouchMove=startEl=>{let el=startEl;for(;el&&el!==document.body;){if(null!==el.getAttribute(exports.BSL_IGNORE_ATTR))return!0;el=el.parentElement}return!1}},"./node_modules/@sima-land/ui-nucleons/_internal/page-scroll-lock/adapters/ui-nucleons.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.StyleAffect=exports.PageScrollLockAdapterNucleons=void 0;const MARK_ATTR="data-scroll-locked";exports.PageScrollLockAdapterNucleons=class PageScrollLockAdapterNucleons{constructor(options){this.options=options}lock(){var _a;if(!this.isLocked()){const scrollTop=document.documentElement.scrollTop;if(this.bodyStyle=new StyleAffect(document.body),this.bodyStyle.set("width","100vw").set("position","fixed").set("top",-scrollTop+"px"),null===(_a=this.options)||void 0===_a?void 0:_a.reserveScrollBarGap){const gap=this.getScrollbarWidth();gap>0&&this.bodyStyle.set("padding-right",`${gap}px`)}document.body.setAttribute(MARK_ATTR,"true")}}unlock(){var _a;if(this.isLocked()){const{body}=document,parsed=parseFloat(body.style.getPropertyValue("top").replace(/[A-z]*/g,""))||0;null===(_a=this.bodyStyle)||void 0===_a||_a.restore(),window.scrollTo(0,-parsed),document.body.removeAttribute(MARK_ATTR)}}isLocked(){return document.body.hasAttribute(MARK_ATTR)}getScrollbarWidth(){const div=document.createElement("div");div.style.overflowY="scroll",div.style.width="50px",div.style.height="50px",document.body.append(div);const scrollBarWidth=div.offsetWidth-div.clientWidth;return div.remove(),scrollBarWidth}};class StyleAffect{constructor(element){this.element=element,this.changes=new Map}set(prop,value,priority){return this.changes.has(prop)||this.changes.set(prop,{oldValue:this.element.style.getPropertyValue(prop),oldPriority:this.element.style.getPropertyPriority(prop)}),this.element.style.setProperty(prop,value,priority),this}restore(){for(const[prop,{oldValue,oldPriority}]of this.changes)this.element.style.setProperty(prop,oldValue,oldPriority);return this.changes.clear(),this}}exports.StyleAffect=StyleAffect},"./node_modules/@sima-land/ui-nucleons/_internal/page-scroll-lock/context.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.PageScrollLockContext=void 0;const react_1=__webpack_require__("./node_modules/react/index.js"),body_scroll_lock_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/_internal/page-scroll-lock/adapters/body-scroll-lock.js");exports.PageScrollLockContext=(0,react_1.createContext)({adapter:(element,options)=>new body_scroll_lock_1.PageScrollLockAdapterBSL(element,options)})},"./node_modules/@sima-land/ui-nucleons/_internal/page-scroll-lock/hook.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.usePageScrollLock=void 0;const react_1=__webpack_require__("./node_modules/react/index.js"),hooks_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hooks/index.js"),context_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/_internal/page-scroll-lock/context.js"),DEFAULTS={lockEnabled:!0,reserveScrollBarGap:!0};exports.usePageScrollLock=function usePageScrollLock(ref,options){const{adapter}=(0,react_1.useContext)(context_1.PageScrollLockContext),{lockEnabled=DEFAULTS.lockEnabled,reserveScrollBarGap=DEFAULTS.reserveScrollBarGap}=null!=options?options:DEFAULTS;(0,hooks_1.useIsomorphicLayoutEffect)((()=>{const element=ref.current;if(element&&lockEnabled){const pageScroll=adapter(element,{reserveScrollBarGap});return pageScroll.lock(),()=>pageScroll.unlock()}}),[ref,lockEnabled,reserveScrollBarGap])}},"./node_modules/@sima-land/ui-nucleons/_internal/page-scroll-lock/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.PageScrollLockAdapterNucleons=exports.BSL_IGNORE_ATTR=exports.PageScrollLockAdapterBSL=exports.PageScrollLockContext=exports.usePageScrollLock=void 0;var hook_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/_internal/page-scroll-lock/hook.js");Object.defineProperty(exports,"usePageScrollLock",{enumerable:!0,get:function(){return hook_1.usePageScrollLock}});var context_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/_internal/page-scroll-lock/context.js");Object.defineProperty(exports,"PageScrollLockContext",{enumerable:!0,get:function(){return context_1.PageScrollLockContext}});var body_scroll_lock_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/_internal/page-scroll-lock/adapters/body-scroll-lock.js");Object.defineProperty(exports,"PageScrollLockAdapterBSL",{enumerable:!0,get:function(){return body_scroll_lock_1.PageScrollLockAdapterBSL}}),Object.defineProperty(exports,"BSL_IGNORE_ATTR",{enumerable:!0,get:function(){return body_scroll_lock_1.BSL_IGNORE_ATTR}});var ui_nucleons_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/_internal/page-scroll-lock/adapters/ui-nucleons.js");Object.defineProperty(exports,"PageScrollLockAdapterNucleons",{enumerable:!0,get:function(){return ui_nucleons_1.PageScrollLockAdapterNucleons}})},"./node_modules/@sima-land/ui-nucleons/touch-slider/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.L=void 0;var touch_slider_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/touch-slider/touch-slider.js");Object.defineProperty(exports,"L",{enumerable:!0,get:function(){return touch_slider_1.TouchSlider}})},"./node_modules/@sima-land/ui-nucleons/touch-slider/touch-slider.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.TouchSlider=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),layout_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/layout/index.js"),page_scroll_lock_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/_internal/page-scroll-lock/index.js"),touch_slider_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/touch-slider/touch-slider.m.scss"));exports.TouchSlider=function TouchSlider({children}){return(0,jsx_runtime_1.jsx)(layout_1.MobileLayout,{children:(0,jsx_runtime_1.jsx)("div",{className:touch_slider_m_scss_1.default.outer,[page_scroll_lock_1.BSL_IGNORE_ATTR]:!0,children:(0,jsx_runtime_1.jsx)("div",{className:touch_slider_m_scss_1.default.inner,children})})})}},"./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{clearAllBodyScrollLocks:()=>clearAllBodyScrollLocks,disableBodyScroll:()=>disableBodyScroll,enableBodyScroll:()=>enableBodyScroll});var hasPassiveEvents=!1;if("undefined"!=typeof window){var passiveTestOptions={get passive(){hasPassiveEvents=!0}};window.addEventListener("testPassive",null,passiveTestOptions),window.removeEventListener("testPassive",null,passiveTestOptions)}var isIosDevice="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),locks=[],documentListenerAdded=!1,initialClientY=-1,previousBodyOverflowSetting=void 0,previousBodyPaddingRight=void 0,allowTouchMove=function allowTouchMove(el){return locks.some((function(lock){return!(!lock.options.allowTouchMove||!lock.options.allowTouchMove(el))}))},preventDefault=function preventDefault(rawEvent){var e=rawEvent||window.event;return!!allowTouchMove(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},restoreOverflowSetting=function restoreOverflowSetting(){void 0!==previousBodyPaddingRight&&(document.body.style.paddingRight=previousBodyPaddingRight,previousBodyPaddingRight=void 0),void 0!==previousBodyOverflowSetting&&(document.body.style.overflow=previousBodyOverflowSetting,previousBodyOverflowSetting=void 0)},disableBodyScroll=function disableBodyScroll(targetElement,options){if(targetElement){if(!locks.some((function(lock){return lock.targetElement===targetElement}))){var lock={targetElement,options:options||{}};locks=[].concat(function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}(locks),[lock]),isIosDevice?(targetElement.ontouchstart=function(event){1===event.targetTouches.length&&(initialClientY=event.targetTouches[0].clientY)},targetElement.ontouchmove=function(event){1===event.targetTouches.length&&function handleScroll(event,targetElement){var clientY=event.targetTouches[0].clientY-initialClientY;!allowTouchMove(event.target)&&(targetElement&&0===targetElement.scrollTop&&clientY>0||function isTargetElementTotallyScrolled(targetElement){return!!targetElement&&targetElement.scrollHeight-targetElement.scrollTop<=targetElement.clientHeight}(targetElement)&&clientY<0?preventDefault(event):event.stopPropagation())}(event,targetElement)},documentListenerAdded||(document.addEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!0)):function setOverflowHidden(options){if(void 0===previousBodyPaddingRight){var _reserveScrollBarGap=!!options&&!0===options.reserveScrollBarGap,scrollBarGap=window.innerWidth-document.documentElement.clientWidth;_reserveScrollBarGap&&scrollBarGap>0&&(previousBodyPaddingRight=document.body.style.paddingRight,document.body.style.paddingRight=scrollBarGap+"px")}void 0===previousBodyOverflowSetting&&(previousBodyOverflowSetting=document.body.style.overflow,document.body.style.overflow="hidden")}(options)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},clearAllBodyScrollLocks=function clearAllBodyScrollLocks(){isIosDevice?(locks.forEach((function(lock){lock.targetElement.ontouchstart=null,lock.targetElement.ontouchmove=null})),documentListenerAdded&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1),initialClientY=-1):restoreOverflowSetting(),locks=[]},enableBodyScroll=function enableBodyScroll(targetElement){targetElement?(locks=locks.filter((function(lock){return lock.targetElement!==targetElement})),isIosDevice?(targetElement.ontouchstart=null,targetElement.ontouchmove=null,documentListenerAdded&&0===locks.length&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1)):locks.length||restoreOverflowSetting()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/touch-slider/touch-slider.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".touch-slider-m__outer__fc8{display:flex;overflow:hidden;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;overflow:-moz-scrollbars-none;-ms-overflow-style:none}.touch-slider-m__outer__fc8::-webkit-scrollbar{display:none}.touch-slider-m__inner__c7c{display:flex}@media(max-width: 719px){.touch-slider-m__outer__fc8{--slider-gutter: calc((100vw - var(--l-width)) / 2);margin:0 calc(-1*var(--slider-gutter))}.touch-slider-m__inner__c7c{padding:0 var(--slider-gutter)}}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/touch-slider/touch-slider.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/utils.scss","webpack://./node_modules/@sima-land/ui-nucleons/breakpoints.scss"],names:[],mappings:"AAGA,4BACE,YAAA,CACA,eAAA,CACA,eAAA,CACA,gCAAA,CCDA,oBAAA,CACA,6BAAA,CACA,uBAAA,CACA,+CACE,YAAA,CDCJ,4BACE,YAAA,CEqBE,yBFjBF,4BACE,mDAAA,CACA,sCAAA,CAEF,4BACE,8BAAA,CAAA",sourcesContent:["@use '../breakpoints';\n@use '../utils';\n\n.outer {\n  display: flex;\n  overflow: hidden;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  @include utils.hidden-scrollbars;\n}\n\n.inner {\n  display: flex;\n}\n\n@include breakpoints.down('mm') {\n  .outer {\n    --slider-gutter: calc((100vw - var(--l-width)) / 2);\n    margin: 0 calc(-1 * var(--slider-gutter));\n  }\n  .inner {\n    padding: 0 var(--slider-gutter);\n  }\n}\n","@use './colors';\n\n/**\n * Скрывает полосы прокрутки у элемента.\n */\n@mixin hidden-scrollbars {\n  scrollbar-width: none; // Firefox\n  overflow: -moz-scrollbars-none; // old Firefox\n  -ms-overflow-style: none; // IE, old Edge\n  &::-webkit-scrollbar {\n    display: none; // Chrome, Safari, Opera\n  }\n}\n\n/**\n * стилизует полосы прокрутки по дизайн-гайдам с ограничениями:\n * - в браузерах на основе webkit/blink (Chrome, Opera, Safari) полоса прокрутки не накладывается поверх контента\n * - в браузерах которые поддерживают только стандартизированный способ стилизации (Firefox) определяет только цвет ползунка\n */\n@mixin semi-stylized-scrollbars($bg-color: #fff) {\n  // firefox\n  scrollbar-width: thin;\n  scrollbar-color: colors.$basic-gray12 transparent;\n\n  // webkit\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n  &::-webkit-scrollbar-track {\n    background: $bg-color;\n    border-radius: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid $bg-color;\n    border-radius: 12px;\n    background: colors.$basic-gray12;\n  }\n}\n\n/**\n * Полный сброс стилей button до состояния сравнимого с div.\n * взято отсюда: https://gist.github.com/MoOx/9137295\n */\n@mixin reset-button {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n\n  /* Remove excess padding and border in Firefox 4+ */\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n/**\n * Добавляет стандартную визуальную подсветку состояния focus-visible.\n */\n@mixin focus-visible-style() {\n  outline: 2px solid colors.$basic-blue;\n}\n\n/**\n * Формирует стандартную визуальную подсветку для состояния focus-visible.\n */\n@mixin focus-visible() {\n  &:focus-visible {\n    @include focus-visible-style;\n  }\n}\n",'/* stylelint-disable length-zero-no-unit */\n$map: (\n  // ВАЖНО: тут именно 0px а не 0 - в Safari нельзя использовать @media (min-width: 0)\n  mxs: 0px,\n\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px\n) !default;\n/* stylelint-enable length-zero-no-unit */\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={outer:"touch-slider-m__outer__fc8",inner:"touch-slider-m__inner__c7c"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/touch-slider/touch-slider.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_touch_slider_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/touch-slider/touch-slider.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_touch_slider_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_touch_slider_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_touch_slider_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_touch_slider_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);