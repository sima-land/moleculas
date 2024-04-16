"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[2428],{"./node_modules/@sima-land/ui-nucleons/link/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Link=void 0;var link_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/link/link.js");Object.defineProperty(exports,"Link",{enumerable:!0,get:function(){return link_1.Link}})},"./node_modules/@sima-land/ui-nucleons/link/link.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Link=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),link_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/link/link.m.scss")),cx=bind_1.default.bind(link_m_scss_1.default);exports.Link=(0,react_1.forwardRef)((function Link({children,className,color="basic-blue",disabled,pseudo,role,tabIndex,underline,"data-testid":testId="anchor",...restProps},ref){const baseProps=pseudo?{role:role||"button",tabIndex:disabled?void 0:tabIndex||0}:{role,tabIndex};return(0,jsx_runtime_1.jsx)("a",{...baseProps,...restProps,"data-testid":testId,ref,className:cx("link",className,color,{disabled,underline}),children})}))},"./node_modules/@sima-land/ui-nucleons/plate/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Plate=void 0;var plate_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/plate/plate.js");Object.defineProperty(exports,"Plate",{enumerable:!0,get:function(){return plate_1.Plate}})},"./node_modules/@sima-land/ui-nucleons/plate/plate.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Plate=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),shadows_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/styling/shadows.js"),shapes_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/styling/shapes.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),plate_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/plate/plate.m.scss")),cx=bind_1.default.bind(plate_m_scss_1.default);exports.Plate=(0,react_1.forwardRef)((function Plate({className,children,rounds="s",shadow="z1","data-testid":testId="plate",...restProps},ref){return(0,jsx_runtime_1.jsx)("div",{ref,className:cx("root",className,shadow&&shadows_1.BoxShadow[shadow],"s"===rounds&&shapes_1.SmallRounds.all,"m"===rounds&&shapes_1.MediumRounds.all),"data-testid":testId,children,...restProps})}))},"./node_modules/@sima-land/ui-nucleons/styling/shadows.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.BoxShadow=void 0;const shadows_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/styling/shadows.m.scss"));exports.BoxShadow={z1:shadows_m_scss_1.default["shadow-z1"],z2:shadows_m_scss_1.default["shadow-z2"],z2straight:shadows_m_scss_1.default["shadow-z2-straight"],z3:shadows_m_scss_1.default["shadow-z3"],z4:shadows_m_scss_1.default["shadow-z4"]}},"./node_modules/@sima-land/ui-nucleons/styling/shapes.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MediumRounds=exports.SmallRounds=void 0;const shapes_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/styling/shapes.m.scss"));exports.SmallRounds={all:shapes_m_scss_1.default["rounds-sm__all"],top:shapes_m_scss_1.default["rounds-sm__t"],right:shapes_m_scss_1.default["rounds-sm__r"],bottom:shapes_m_scss_1.default["rounds-sm__b"],left:shapes_m_scss_1.default["rounds-sm__l"],topLeft:shapes_m_scss_1.default["rounds-sm__t-l"],topRight:shapes_m_scss_1.default["rounds-sm__t-r"],bottomLeft:shapes_m_scss_1.default["rounds-sm__b-l"],bottomRight:shapes_m_scss_1.default["rounds-sm__b-r"]},exports.MediumRounds={all:shapes_m_scss_1.default["rounds-md__all"],top:shapes_m_scss_1.default["rounds-md__t"],right:shapes_m_scss_1.default["rounds-md__r"],bottom:shapes_m_scss_1.default["rounds-md__b"],left:shapes_m_scss_1.default["rounds-md__l"],topLeft:shapes_m_scss_1.default["rounds-md__t-l"],topRight:shapes_m_scss_1.default["rounds-md__t-r"],bottomLeft:shapes_m_scss_1.default["rounds-md__b-l"],bottomRight:shapes_m_scss_1.default["rounds-md__b-r"]}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/link/link.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".link-m__link__aa6,.link-m__link__aa6:link,.link-m__link__aa6:visited,.link-m__link__aa6:hover,.link-m__link__aa6:active{text-decoration:none;font-weight:inherit;cursor:default;border-bottom-color:rgba(0,0,0,0)}.link-m__link__aa6.link-m__underline__ebf,.link-m__link__aa6:link.link-m__underline__ebf,.link-m__link__aa6:visited.link-m__underline__ebf,.link-m__link__aa6:hover.link-m__underline__ebf,.link-m__link__aa6:active.link-m__underline__ebf{text-decoration:underline}.link-m__link__aa6:hover{cursor:pointer}.link-m__link__aa6.link-m__disabled__d3d{color:#c2c2c2;pointer-events:none}.link-m__link__aa6:not(.link-m__disabled__d3d).link-m__basic-blue__cc3{color:#1f84db}.link-m__link__aa6:not(.link-m__disabled__d3d).link-m__basic-blue__cc3:hover{color:#00599d}.link-m__link__aa6:not(.link-m__disabled__d3d).link-m__basic-gray87__f91{color:#212121}.link-m__link__aa6:not(.link-m__disabled__d3d).link-m__basic-gray87__f91:hover{color:#757575}.link-m__link__aa6:not(.link-m__disabled__d3d).link-m__basic-gray38__c01{color:#9e9e9e}.link-m__link__aa6:not(.link-m__disabled__d3d).link-m__basic-gray38__c01:hover{color:#757575}.link-m__link__aa6:not(.link-m__disabled__d3d).link-m__basic-white__ab9{color:#fff}.link-m__link__aa6:not(.link-m__disabled__d3d).link-m__basic-white__ab9:hover{color:#f5f5f5}.link-m__link__aa6:not(.link-m__disabled__d3d).link-m__additional-red__f23{color:#fb3a2f}.link-m__link__aa6:not(.link-m__disabled__d3d).link-m__additional-red__f23:hover{color:#d50000}.link-m__link__aa6:not(.link-m__disabled__d3d).link-m__additional-teal__d95{color:#09ab8b}.link-m__link__aa6:not(.link-m__disabled__d3d).link-m__additional-teal__d95:hover{color:#00c853}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/link/link.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss","webpack://./node_modules/@sima-land/ui-nucleons/link/link-util.scss"],names:[],mappings:"AAGA,yHAKE,oBAAA,CACA,mBAAA,CACA,cAAA,CACA,iCAAA,CACA,4OACE,yBAAA,CAIJ,yBACE,cAAA,CAIF,yCACE,aCda,CDeb,mBAAA,CAGF,uEEvBI,aDDS,CCET,6EACE,aDkCiB,CDTvB,yEEtBI,aDLW,CCMX,+EACE,aDJS,CD4Bf,yEErBI,aDNW,CCOX,+EACE,aDTS,CDgCf,wEEpBI,UDLU,CCMV,8EACE,aDTQ,CD+Bd,2EEnBI,aDNa,CCOb,iFACE,aDTgB,CD8BtB,4EElBI,aDRc,CCSd,kFACE,aDTa",sourcesContent:["@use '../colors';\n@use './link-util';\n\n.link,\n.link:link,\n.link:visited,\n.link:hover,\n.link:active {\n  text-decoration: none;\n  font-weight: inherit; // @todo выяснить можно ли это убрать\n  cursor: default;\n  border-bottom-color: transparent;\n  &.underline {\n    text-decoration: underline;\n  }\n}\n\n.link:hover {\n  cursor: pointer;\n}\n\n// ниже двойные классы для высокой специфичности в монолите\n.link.disabled {\n  color: colors.$basic-gray24;\n  pointer-events: none;\n}\n\n.link:not(.disabled).basic-blue {\n  @include link-util.color('basic-blue');\n}\n\n.link:not(.disabled).basic-gray87 {\n  @include link-util.color('basic-gray87');\n}\n\n.link:not(.disabled).basic-gray38 {\n  @include link-util.color('basic-gray38');\n}\n\n.link:not(.disabled).basic-white {\n  @include link-util.color('basic-white');\n}\n\n.link:not(.disabled).additional-red {\n  @include link-util.color('additional-red');\n}\n\n.link:not(.disabled).additional-teal {\n  @include link-util.color('additional-teal');\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n","@use '../colors';\n\n@mixin color($key) {\n  @if $key == 'basic-blue' {\n    color: colors.$basic-blue;\n    &:hover {\n      color: colors.$additional-deep-blue;\n    }\n  } @else if $key == 'basic-gray87' {\n    color: colors.$basic-gray87;\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  } @else if $key == 'basic-gray38' {\n    color: colors.$basic-gray38;\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  } @else if $key == 'basic-white' {\n    color: colors.$basic-white;\n    &:hover {\n      color: colors.$basic-gray4;\n    }\n  } @else if $key == 'additional-red' {\n    color: colors.$additional-red;\n    &:hover {\n      color: colors.$additional-deep-red;\n    }\n  } @else if $key == 'additional-teal' {\n    color: colors.$additional-teal;\n    &:hover {\n      color: colors.$additional-green;\n    }\n  } @else {\n    @warn '[link-color] No such color `#{$key}`.';\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link-m__link__aa6",underline:"link-m__underline__ebf",disabled:"link-m__disabled__d3d","basic-blue":"link-m__basic-blue__cc3","basic-gray87":"link-m__basic-gray87__f91","basic-gray38":"link-m__basic-gray38__c01","basic-white":"link-m__basic-white__ab9","additional-red":"link-m__additional-red__f23","additional-teal":"link-m__additional-teal__d95"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/plate/plate.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".plate-m__root__bf8{background:#fff}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/plate/plate.m.scss"],names:[],mappings:"AAAA,oBACE,eAAA",sourcesContent:[".root {\n  background: #fff;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"plate-m__root__bf8"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/styling/shadows.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".shadows-m__shadow-z1__fff{box-shadow:0 0 4px rgba(0,0,0,.04),0 2px 4px rgba(0,0,0,.08)}.shadows-m__shadow-z2__d58{box-shadow:0 0 4px rgba(0,0,0,.04),0 4px 8px rgba(0,0,0,.1)}.shadows-m__shadow-z2-straight__c12{box-shadow:0 0 15px rgba(0,0,0,.12)}.shadows-m__shadow-z3__fa6{box-shadow:0 8px 16px rgba(0,0,0,.08),0 0 4px rgba(0,0,0,.04)}.shadows-m__shadow-z4__ef9{box-shadow:0 0 4px rgba(0,0,0,.04),0 12px 30px rgba(0,0,0,.1)}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/styling/shadows.m.scss"],names:[],mappings:"AAAA,2BACE,4DACE,CAIJ,2BACE,2DACE,CAIJ,oCACE,mCAAA,CAGF,2BACE,6DACE,CAIJ,2BACE,6DACE",sourcesContent:[".shadow-z1 {\n  box-shadow:\n    0 0 4px rgba(0, 0, 0, 0.04),\n    0 2px 4px rgba(0, 0, 0, 0.08);\n}\n\n.shadow-z2 {\n  box-shadow:\n    0 0 4px rgba(0, 0, 0, 0.04),\n    0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.shadow-z2-straight {\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);\n}\n\n.shadow-z3 {\n  box-shadow:\n    0 8px 16px rgba(0, 0, 0, 0.08),\n    0 0 4px rgba(0, 0, 0, 0.04);\n}\n\n.shadow-z4 {\n  box-shadow:\n    0 0 4px rgba(0, 0, 0, 0.04),\n    0 12px 30px rgba(0, 0, 0, 0.1);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"shadow-z1":"shadows-m__shadow-z1__fff","shadow-z2":"shadows-m__shadow-z2__d58","shadow-z2-straight":"shadows-m__shadow-z2-straight__c12","shadow-z3":"shadows-m__shadow-z3__fa6","shadow-z4":"shadows-m__shadow-z4__ef9"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/styling/shapes.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".shapes-m__rounds-sm__all__faa{border-radius:4px}.shapes-m__rounds-sm__t__c08{border-top-left-radius:4px;border-top-right-radius:4px}.shapes-m__rounds-sm__l__c15{border-top-left-radius:4px;border-bottom-left-radius:4px}.shapes-m__rounds-sm__b__b17{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.shapes-m__rounds-sm__r__d4d{border-top-right-radius:4px;border-bottom-right-radius:4px}.shapes-m__rounds-sm__b-l__cb6{border-bottom-left-radius:4px}.shapes-m__rounds-sm__b-r__cdc{border-bottom-right-radius:4px}.shapes-m__rounds-sm__t-l__b57{border-top-left-radius:4px}.shapes-m__rounds-sm__t-r__be0{border-top-right-radius:4px}.shapes-m__rounds-md__all__a29{border-radius:8px}.shapes-m__rounds-md__t__d95{border-top-left-radius:8px;border-top-right-radius:8px}.shapes-m__rounds-md__l__da4{border-top-left-radius:8px;border-bottom-left-radius:8px}.shapes-m__rounds-md__b__d75{border-bottom-left-radius:8px;border-bottom-right-radius:8px}.shapes-m__rounds-md__r__e71{border-top-right-radius:8px;border-bottom-right-radius:8px}.shapes-m__rounds-md__b-l__ca9{border-bottom-left-radius:8px}.shapes-m__rounds-md__b-r__d72{border-bottom-right-radius:8px}.shapes-m__rounds-md__t-l__e20{border-top-left-radius:8px}.shapes-m__rounds-md__t-r__b44{border-top-right-radius:8px}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/styling/shapes.m.scss"],names:[],mappings:"AAME,+BACE,iBAPI,CASN,6BACE,0BAVI,CAWJ,2BAXI,CAaN,6BACE,0BAdI,CAeJ,6BAfI,CAiBN,6BACE,6BAlBI,CAmBJ,8BAnBI,CAqBN,6BACE,2BAtBI,CAuBJ,8BAvBI,CAyBN,+BACE,6BA1BI,CA4BN,+BACE,8BA7BI,CA+BN,+BACE,0BAhCI,CAkCN,+BACE,2BAnCI,CAMN,+BACE,iBAPI,CASN,6BACE,0BAVI,CAWJ,2BAXI,CAaN,6BACE,0BAdI,CAeJ,6BAfI,CAiBN,6BACE,6BAlBI,CAmBJ,8BAnBI,CAqBN,6BACE,2BAtBI,CAuBJ,8BAvBI,CAyBN,+BACE,6BA1BI,CA4BN,+BACE,8BA7BI,CA+BN,+BACE,0BAhCI,CAkCN,+BACE,2BAnCI",sourcesContent:["$sizes: (\n  sm: 4px,\n  md: 8px,\n);\n\n@each $key, $value in $sizes {\n  .rounds-#{$key}__all {\n    border-radius: $value;\n  }\n  .rounds-#{$key}__t {\n    border-top-left-radius: $value;\n    border-top-right-radius: $value;\n  }\n  .rounds-#{$key}__l {\n    border-top-left-radius: $value;\n    border-bottom-left-radius: $value;\n  }\n  .rounds-#{$key}__b {\n    border-bottom-left-radius: $value;\n    border-bottom-right-radius: $value;\n  }\n  .rounds-#{$key}__r {\n    border-top-right-radius: $value;\n    border-bottom-right-radius: $value;\n  }\n  .rounds-#{$key}__b-l {\n    border-bottom-left-radius: $value;\n  }\n  .rounds-#{$key}__b-r {\n    border-bottom-right-radius: $value;\n  }\n  .rounds-#{$key}__t-l {\n    border-top-left-radius: $value;\n  }\n  .rounds-#{$key}__t-r {\n    border-top-right-radius: $value;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"rounds-sm__all":"shapes-m__rounds-sm__all__faa","rounds-sm__t":"shapes-m__rounds-sm__t__c08","rounds-sm__l":"shapes-m__rounds-sm__l__c15","rounds-sm__b":"shapes-m__rounds-sm__b__b17","rounds-sm__r":"shapes-m__rounds-sm__r__d4d","rounds-sm__b-l":"shapes-m__rounds-sm__b-l__cb6","rounds-sm__b-r":"shapes-m__rounds-sm__b-r__cdc","rounds-sm__t-l":"shapes-m__rounds-sm__t-l__b57","rounds-sm__t-r":"shapes-m__rounds-sm__t-r__be0","rounds-md__all":"shapes-m__rounds-md__all__a29","rounds-md__t":"shapes-m__rounds-md__t__d95","rounds-md__l":"shapes-m__rounds-md__l__da4","rounds-md__b":"shapes-m__rounds-md__b__d75","rounds-md__r":"shapes-m__rounds-md__r__e71","rounds-md__b-l":"shapes-m__rounds-md__b-l__ca9","rounds-md__b-r":"shapes-m__rounds-md__b-r__d72","rounds-md__t-l":"shapes-m__rounds-md__t-l__e20","rounds-md__t-r":"shapes-m__rounds-md__t-r__b44"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/link/link.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_link_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/link/link.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_link_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_link_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_link_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_link_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/@sima-land/ui-nucleons/plate/plate.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_plate_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/plate/plate.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_plate_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_plate_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_plate_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_plate_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/@sima-land/ui-nucleons/styling/shadows.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_shadows_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/styling/shadows.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_shadows_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_shadows_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_shadows_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_shadows_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/@sima-land/ui-nucleons/styling/shapes.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_shapes_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/styling/shapes.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_shapes_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_shapes_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_shapes_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_shapes_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);