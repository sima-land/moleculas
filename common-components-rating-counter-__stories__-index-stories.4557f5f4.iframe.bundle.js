/*! For license information please see common-components-rating-counter-__stories__-index-stories.4557f5f4.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[6368],{"./node_modules/@sima-land/ui-nucleons/helpers/is-browser.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isBrowser=void 0,exports.isBrowser=function isBrowser(){return"undefined"!=typeof window}},"./node_modules/@sima-land/ui-nucleons/helpers/is-touch-device.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isTouchDevice=void 0;const is_browser_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/is-browser.js");exports.isTouchDevice=function isTouchDevice(){return(0,is_browser_1.isBrowser)()&&"ontouchstart"in window}},"./node_modules/@sima-land/ui-nucleons/helpers/on.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.on=void 0,exports.on=function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Filled/Star.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M7.536 1.545a.5.5 0 0 1 .928 0l1.711 4.262 4.583.311a.5.5 0 0 1 .287.883L11.52 9.945l1.12 4.454a.5.5 0 0 1-.75.546L8 12.503l-3.89 2.442a.5.5 0 0 1-.75-.546l1.12-4.454L.955 7.001a.5.5 0 0 1 .287-.883l4.583-.31 1.711-4.263Z"}))))},"./src/common/components/rating-counter/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_common_components_rating_counter__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/components/rating-counter/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/RatingCounter",component:_sima_land_moleculas_common_components_rating_counter__WEBPACK_IMPORTED_MODULE_0__.i,parameters:{storySource:{source:"import { RatingCounter } from '@sima-land/moleculas/common/components/rating-counter';\n\nexport default {\n  title: 'common/RatingCounter',\n  component: RatingCounter,\n  parameters: {\n    layout: 'padded',\n    docs: {\n      description: {\n        component: 'Карточка базовой информации о товаре',\n      },\n    },\n  },\n};\n\nexport function Primary() {\n  return (\n    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>\n      <RatingCounter value={4.5} reviewCount={28} />\n      <RatingCounter size='m' value={4.5} reviewCount={28} />\n\n      <RatingCounter value={0} reviewCount={0} />\n      <RatingCounter size='m' value={0} reviewCount={0} />\n    </div>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n",locationsMap:{primary:{startLoc:{col:7,line:16},endLoc:{col:1,line:26},startBody:{col:7,line:16},endBody:{col:1,line:26}}}},layout:"padded",docs:{description:{component:"Карточка базовой информации о товаре"}}}},Primary=function Primary(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_moleculas_common_components_rating_counter__WEBPACK_IMPORTED_MODULE_0__.i,{value:4.5,reviewCount:28}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_moleculas_common_components_rating_counter__WEBPACK_IMPORTED_MODULE_0__.i,{size:"m",value:4.5,reviewCount:28}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_moleculas_common_components_rating_counter__WEBPACK_IMPORTED_MODULE_0__.i,{value:0,reviewCount:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_moleculas_common_components_rating_counter__WEBPACK_IMPORTED_MODULE_0__.i,{size:"m",value:0,reviewCount:0})]})};Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: 12,\n    alignItems: 'flex-start'\n  }}>\n      <RatingCounter value={4.5} reviewCount={28} />\n      <RatingCounter size='m' value={4.5} reviewCount={28} />\n\n      <RatingCounter value={0} reviewCount={0} />\n      <RatingCounter size='m' value={0} reviewCount={0} />\n    </div>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/common/components/rating-counter/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>RatingCounter});var Star=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Filled/Star.js"),helpers=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),rating_counter_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/common/components/rating-counter/rating-counter.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(rating_counter_module.Z,options);const rating_counter_rating_counter_module=rating_counter_module.Z&&rating_counter_module.Z.locals?rating_counter_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(rating_counter_rating_counter_module);function RatingCounter({size="s",value,reviewCount,className,hoverDisabled,"data-testid":testId="rating-counter",...restProps}){return(0,jsx_runtime.jsxs)("div",{className:cx("root",`size-${size}`,!(value>0)&&"empty",hoverDisabled&&"hover-disabled",className),"data-testid":testId,...restProps,children:[(0,jsx_runtime.jsx)(Star.Z,{className:cx("star")}),value>0&&(0,jsx_runtime.jsx)("span",{className:cx("value"),children:String(value).replace(".",",")}),(0,jsx_runtime.jsx)("span",{className:cx("count"),children:reviewCount>0?`${reviewCount} ${(0,helpers.pd)(reviewCount,["отзыв","отзыва","отзывов"])}`:"Нет отзывов"})]})}try{RatingCounter.displayName="RatingCounter",RatingCounter.__docgenInfo={description:"Счетчик рейтинга.",displayName:"RatingCounter",props:{size:{defaultValue:{value:"s"},description:'Размер.\nПри указании "unset" необходимо определить стили самостоятельно с помощью миксина из rating-counter-util.scss.',name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"unset"'},{value:'"s"'},{value:'"m"'}]}},value:{defaultValue:null,description:"Значение рейтинга.",name:"value",required:!0,type:{name:"number"}},reviewCount:{defaultValue:null,description:"Количество отзывов.",name:"reviewCount",required:!0,type:{name:"number"}},hoverDisabled:{defaultValue:null,description:"Нужно ли отключить эффект при наведении.",name:"hoverDisabled",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"Стили корневого элемента.",name:"style",required:!1,type:{name:"RatingCounterStyle | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/rating-counter/rating-counter.tsx#RatingCounter"]={docgenInfo:RatingCounter.__docgenInfo,name:"RatingCounter",path:"src/common/components/rating-counter/rating-counter.tsx#RatingCounter"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/common/components/rating-counter/rating-counter.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rating-counter-module__root__bc0{display:inline-flex;flex-wrap:nowrap;align-items:center;white-space:nowrap;--rating-icon-color: #ffab00;--rating-count-color: #9e9e9e}.rating-counter-module__root__bc0:hover:not(.rating-counter-module__hover-disabled__e2e){cursor:pointer;--rating-count-color: #757575}.rating-counter-module__empty__b18{--rating-icon-color: #e0e0e0}.rating-counter-module__size-s__acd{--rating-icon-size: 16px;--rating-value-size: 12px;--rating-value-height: 16px;--rating-count-gutter: 8px;--rating-count-size: 12px;--rating-count-height: 16px}.rating-counter-module__size-m__ea0{--rating-icon-size: 24px;--rating-value-size: 16px;--rating-value-height: 24px;--rating-count-gutter: 12px;--rating-count-size: 14px;--rating-count-height: 20px}.rating-counter-module__star__e16{flex-shrink:0;display:block;width:var(--rating-icon-size);height:var(--rating-icon-size);fill:var(--rating-icon-color)}.rating-counter-module__value__ac2{font-weight:700;color:#ffab00;font-size:var(--rating-value-size);line-height:var(--rating-value-height)}.rating-counter-module__count__b63{overflow:hidden;color:var(--rating-count-color);font-size:var(--rating-count-size);line-height:var(--rating-count-height);text-overflow:ellipsis}.rating-counter-module__star__e16+.rating-counter-module__value__ac2{margin-left:4px}.rating-counter-module__star__e16+.rating-counter-module__count__b63{margin-left:var(--rating-count-gutter)}.rating-counter-module__value__ac2+.rating-counter-module__count__b63{margin-left:var(--rating-count-gutter)}","",{version:3,sources:["webpack://./src/common/components/rating-counter/rating-counter.module.scss","webpack://./src/common/components/rating-counter/rating-counter-util.scss"],names:[],mappings:"AAIA,kCACE,mBAAA,CACA,gBAAA,CACA,kBAAA,CACA,kBAAA,CACA,4BAAA,CACA,6BAAA,CACA,yFACE,cAAA,CACA,6BAAA,CAKJ,mCACE,4BAAA,CAGF,oCCrBE,wBAAA,CACA,yBAAA,CACA,2BAAA,CACA,0BAAA,CACA,yBAAA,CACA,2BAAA,CDoBF,oCChBE,wBAAA,CACA,yBAAA,CACA,2BAAA,CACA,2BAAA,CACA,yBAAA,CACA,2BAAA,CDgBF,kCACE,aAAA,CACA,aAAA,CACA,6BAAA,CACA,8BAAA,CACA,6BAAA,CAGF,mCACE,eAAA,CACA,aAAA,CACA,kCAAA,CACA,sCAAA,CAGF,mCACE,eAAA,CACA,+BAAA,CACA,kCAAA,CACA,sCAAA,CACA,sBAAA,CAIF,qEACE,eAAA,CAGF,qEACE,sCAAA,CAGF,sEACE,sCAAA",sourcesContent:["@use 'node_modules/@sima-land/ui-nucleons/colors';\n@use 'node_modules/@sima-land/ui-nucleons/breakpoints';\n@use './rating-counter-util';\n\n.root {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  white-space: nowrap;\n  --rating-icon-color: #{colors.$additional-amber};\n  --rating-count-color: #{colors.$basic-gray38};\n  &:hover:not(.hover-disabled) {\n    cursor: pointer;\n    --rating-count-color: #{colors.$basic-gray54};\n  }\n}\n\n// модификаторы\n.empty {\n  --rating-icon-color: #{colors.$basic-gray12};\n}\n\n.size-s {\n  @include rating-counter-util.size-s;\n}\n\n.size-m {\n  @include rating-counter-util.size-m;\n}\n\n// составляющие\n.star {\n  flex-shrink: 0;\n  display: block;\n  width: var(--rating-icon-size);\n  height: var(--rating-icon-size);\n  fill: var(--rating-icon-color);\n}\n\n.value {\n  font-weight: 700;\n  color: #{colors.$additional-amber};\n  font-size: var(--rating-value-size);\n  line-height: var(--rating-value-height);\n}\n\n.count {\n  overflow: hidden;\n  color: var(--rating-count-color);\n  font-size: var(--rating-count-size);\n  line-height: var(--rating-count-height);\n  text-overflow: ellipsis;\n}\n\n// отступы\n.star + .value {\n  margin-left: 4px;\n}\n\n.star + .count {\n  margin-left: var(--rating-count-gutter);\n}\n\n.value + .count {\n  margin-left: var(--rating-count-gutter);\n}\n","@mixin size-s {\n  --rating-icon-size: 16px;\n  --rating-value-size: 12px;\n  --rating-value-height: 16px;\n  --rating-count-gutter: 8px;\n  --rating-count-size: 12px;\n  --rating-count-height: 16px;\n}\n\n@mixin size-m {\n  --rating-icon-size: 24px;\n  --rating-value-size: 16px;\n  --rating-value-height: 24px;\n  --rating-count-gutter: 12px;\n  --rating-count-size: 14px;\n  --rating-count-height: 20px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"rating-counter-module__root__bc0","hover-disabled":"rating-counter-module__hover-disabled__e2e",empty:"rating-counter-module__empty__b18","size-s":"rating-counter-module__size-s__acd","size-m":"rating-counter-module__size-m__ea0",star:"rating-counter-module__star__e16",value:"rating-counter-module__value__ac2",count:"rating-counter-module__count__b63"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);