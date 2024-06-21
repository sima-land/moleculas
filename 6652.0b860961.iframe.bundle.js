/*! For license information please see 6652.0b860961.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[6652],{"./src/common/components/interactive-image/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>InteractiveImage,Q:()=>Parts});var react=__webpack_require__("./node_modules/react/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),interactive_image_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/common/components/interactive-image/interactive-image.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(interactive_image_m.Z,options);const interactive_image_interactive_image_m=interactive_image_m.Z&&interactive_image_m.Z.locals?interactive_image_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(interactive_image_interactive_image_m),InteractiveImage=(0,react.forwardRef)((({children,"data-testid":testId,className,dotSize,...rest},ref)=>{const rootClassName=cx("root",{"dot-size-unset":"unset"===dotSize},className);return function validateChildren(children){let counter=0;for(const child of react.Children.toArray(children))if(!(0,react.isValidElement)(child)||child.type!==ImageAnchor&&child.type!==Image||counter++,counter>1)throw new Error("[InteractiveImage] Either Image or ImageAnchor allowed. Not both.")}(children),(0,jsx_runtime.jsx)("div",{ref,className:rootClassName,...rest,"data-testid":testId,children:react.Children.toArray(children).filter((child=>(0,react.isValidElement)(child)&&(child.type===ImageAnchor||child.type===Image||child.type===Point)))})}));function ImageAnchor({children,className,...rest}){return(0,jsx_runtime.jsx)("a",{...rest,className:cx("image-anchor",className),"data-testid":"interactive-image:image-anchor",children:react.Children.toArray(children).filter((child=>(0,react.isValidElement)(child)&&child.type===Image))})}const Image=(0,react.forwardRef)((({className,"data-testid":testId="interactive-image:image",...rest},ref)=>(0,jsx_runtime.jsx)("img",{ref,className:cx("image",className),"data-testid":testId,...rest}))),Point=(0,react.forwardRef)((({x,y,className,style,"data-testid":testId="interactive-image:point",...rest},ref)=>(0,jsx_runtime.jsx)("a",{ref,"aria-label":"Точка на изображении","data-testid":testId,className:cx("point",className),style:{...style,top:`${y}%`,left:`${x}%`},...rest}))),Parts={ImageAnchor,Image,Point};try{InteractiveImage.displayName="InteractiveImage",InteractiveImage.__docgenInfo={description:"",displayName:"InteractiveImage",props:{dotSize:{defaultValue:null,description:'Размер точек. При указании "unset" можно задать css-переменные через className или style.',name:"dotSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"unset"'}]}},style:{defaultValue:null,description:"Стили с возможностью указания размера точек через css-переменные.",name:"style",required:!1,type:{name:"InteractiveImageStyle | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/interactive-image/interactive-image.tsx#InteractiveImage"]={docgenInfo:InteractiveImage.__docgenInfo,name:"InteractiveImage",path:"src/common/components/interactive-image/interactive-image.tsx#InteractiveImage"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/common/components/interactive-image/interactive-image.m.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.interactive-image-m__root__a59{display:inline-block;font-size:0;position:relative;overflow:hidden;background:#f5f5f5}.interactive-image-m__root__a59:not(.interactive-image-m__dot-size-unset__a95){--dot-size: 32px;--dot-size-core: 12px}@media(max-width: 1023px){.interactive-image-m__root__a59:not(.interactive-image-m__dot-size-unset__a95){--dot-size: 40px;--dot-size-core: 16px}}.interactive-image-m__image-anchor__c23,.interactive-image-m__image__c4e{display:block;max-width:100%;max-height:100%;min-width:100%;min-height:100%}.interactive-image-m__point__d72{position:absolute;display:flex;justify-content:center;align-items:center;width:var(--dot-size, 32px);height:var(--dot-size, 32px);background:rgba(33,33,33,.4);border-radius:50%;transform:translate(-50%, -50%)}.interactive-image-m__point__d72:hover{cursor:pointer;background:rgba(33,33,33,.64)}.interactive-image-m__point__d72::after{content:"";display:block;width:var(--dot-size-core, 12px);height:var(--dot-size-core, 12px);background:#fff;border-radius:50%}',"",{version:3,sources:["webpack://./src/common/components/interactive-image/interactive-image.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss","webpack://./src/common/components/interactive-image/interactive-image-util.scss","webpack://./node_modules/@sima-land/ui-nucleons/breakpoints.scss"],names:[],mappings:"AAIA,gCACE,oBAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,kBCGY,CDFZ,+EEPA,gBAAA,CACA,qBAAA,CC6BE,0BHvBF,+EEJE,gBAAA,CACA,qBAAA,CAAA,CFQJ,yEAEE,aAAA,CACA,cAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CAGF,iCACE,iBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,2BAAA,CACA,4BAAA,CACA,4BAAA,CACA,iBAAA,CACA,+BAAA,CACA,uCACE,cAAA,CACA,6BAAA,CAEF,wCACE,UAAA,CACA,aAAA,CACA,gCAAA,CACA,iCAAA,CACA,eAAA,CACA,iBAAA",sourcesContent:["@use 'node_modules/@sima-land/ui-nucleons/colors';\n@use 'node_modules/@sima-land/ui-nucleons/breakpoints';\n@use './interactive-image-util';\n\n.root {\n  display: inline-block;\n  font-size: 0;\n  position: relative;\n  overflow: hidden;\n  background: colors.$basic-gray4;\n  &:not(.dot-size-unset) {\n    @include interactive-image-util.dot-size-default;\n  }\n}\n\n.image-anchor,\n.image {\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.point {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--dot-size, 32px);\n  height: var(--dot-size, 32px);\n  background: rgba(colors.$basic-gray87, 0.4);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  &:hover {\n    cursor: pointer;\n    background: rgba(colors.$basic-gray87, 0.64);\n  }\n  &::after {\n    content: '';\n    display: block;\n    width: var(--dot-size-core, 12px);\n    height: var(--dot-size-core, 12px);\n    background: #fff;\n    border-radius: 50%;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n","@use 'node_modules/@sima-land/ui-nucleons/breakpoints';\n\n@mixin dot-size-default {\n  --dot-size: 32px;\n  --dot-size-core: 12px;\n  @include breakpoints.down('xs') {\n    --dot-size: 40px;\n    --dot-size-core: 16px;\n  }\n}\n",'/* stylelint-disable length-zero-no-unit */\n$map: (\n  // ВАЖНО: тут именно 0px а не 0 - в Safari нельзя использовать @media (min-width: 0)\n  mxs: 0px,\n\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px\n) !default;\n/* stylelint-enable length-zero-no-unit */\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"interactive-image-m__root__a59","dot-size-unset":"interactive-image-m__dot-size-unset__a95","image-anchor":"interactive-image-m__image-anchor__c23",image:"interactive-image-m__image__c4e",point:"interactive-image-m__point__d72"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./src/common/components/interactive-image/__stories__/image.png":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/image.3487bf79.png"}}]);