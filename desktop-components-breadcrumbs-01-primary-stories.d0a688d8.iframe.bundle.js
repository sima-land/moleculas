"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[6016],{"./node_modules/@sima-land/ui-nucleons/helpers/is-browser.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.isBrowser=void 0,exports.isBrowser=function isBrowser(){return"undefined"!=typeof window}},"./node_modules/@sima-land/ui-nucleons/helpers/is-touch-device.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.isTouchDevice=void 0;const is_browser_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/is-browser.js");exports.isTouchDevice=function isTouchDevice(){return(0,is_browser_1.isBrowser)()&&"ontouchstart"in window}},"./node_modules/@sima-land/ui-nucleons/helpers/on.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.on=void 0,exports.on=function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}},"./docs/stories/desktop/components/breadcrumbs/01-primary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>_01_primary_stories});var react=__webpack_require__("./node_modules/react/index.js"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),plate=__webpack_require__("./node_modules/@sima-land/ui-nucleons/plate/index.js"),ui_nucleons_link=__webpack_require__("./node_modules/@sima-land/ui-nucleons/link/index.js"),helpers=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),breadcrumbs_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/desktop/components/breadcrumbs/breadcrumbs.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(breadcrumbs_m.Z,options);const breadcrumbs_breadcrumbs_m=breadcrumbs_m.Z&&breadcrumbs_m.Z.locals?breadcrumbs_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(breadcrumbs_breadcrumbs_m);function DownSVG(props){return(0,jsx_runtime.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",...props,children:(0,jsx_runtime.jsx)("path",{d:"M4 6L8 10L12 6",strokeLinecap:"round",strokeLinejoin:"round"})})}const Breadcrumbs=({items,onSiblingsPopupOpen,isSiblingActive,"data-testid":testId="breadcrumbs"})=>(0,jsx_runtime.jsx)("nav",{className:cx("root"),"data-testid":testId,children:items.map(((breadcrumb,index)=>(0,jsx_runtime.jsx)(Breadcrumb,{data:breadcrumb,onSiblingsPopupOpen:()=>onSiblingsPopupOpen?.(breadcrumb),isSiblingActive:sibling=>Boolean(isSiblingActive?.(sibling))},index)))}),Breadcrumb=({data,onSiblingsPopupOpen,isSiblingActive})=>{const popupRef=(0,react.useRef)(null),[withPopup,togglePopup]=(0,react.useState)(!1);(0,react.useEffect)((()=>{if(withPopup)return(0,helpers.on)(window,"mousedown",togglePopup.bind(null,!1))}),[withPopup]);const selfName=(0,jsx_runtime.jsx)(ui_nucleons_link.Link,{color:"basic-gray87",href:data.url,pseudo:!data.url,className:cx("breadcrumb-name",data.siblings&&"with-siblings"),children:data.name});return(0,jsx_runtime.jsxs)("div",{"data-testid":"breadcrumb",className:cx("breadcrumb"),children:[selfName,data.siblings&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{"data-testid":"breadcrumb:siblings-opener",className:cx("toggle-icon"),onClick:()=>{togglePopup(!0),onSiblingsPopupOpen()},children:(0,jsx_runtime.jsx)(DownSVG,{})}),(0,jsx_runtime.jsx)(CSSTransition.Z,{in:withPopup,timeout:200,unmountOnExit:!0,classNames:{enter:cx("fade-enter"),enterActive:cx("fade-enter-active"),exit:cx("fade-exit"),exitActive:cx("fade-exit-active")},children:(0,jsx_runtime.jsxs)(plate.Plate,{ref:popupRef,shadow:"z3",rounds:"m",className:cx("popup"),children:[(0,jsx_runtime.jsxs)("div",{className:cx("popup-header"),children:[selfName,(0,jsx_runtime.jsx)("span",{"data-testid":"breadcrumb:siblings-closer",className:cx("toggle-icon","close"),onClick:()=>togglePopup(!1),children:(0,jsx_runtime.jsx)(DownSVG,{})})]}),(0,jsx_runtime.jsxs)("ul",{className:cx("siblings"),children:["fetching"===data.siblings.state&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Array(8).fill(0).map(((zero,index)=>(0,jsx_runtime.jsx)("div",{className:cx("sibling-placeholder")},index)))}),"ready"===data.siblings.state&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:data.siblings.data?.map(((sibling,index)=>(0,jsx_runtime.jsx)("li",{className:cx("sibling"),"data-testid":"breadcrumb-sibling",children:isSiblingActive(sibling)?(0,jsx_runtime.jsx)("span",{className:cx("active"),children:sibling.name}):(0,jsx_runtime.jsx)(ui_nucleons_link.Link,{color:"basic-gray87",className:cx("link"),href:sibling.url,children:sibling.name})},index)))})]})]})})]})]})};try{Breadcrumbs.displayName="Breadcrumbs",Breadcrumbs.__docgenInfo={description:'Список "хлебных крошек".',displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"Список хлебных крошек.",name:"items",required:!0,type:{name:"Breadcrumb[]"}},isSiblingActive:{defaultValue:null,description:"Получив хлебную крошку должна вернуть true если крошка выбрана.",name:"isSiblingActive",required:!1,type:{name:"((sibling: Sibling) => boolean) | undefined"}},onSiblingsPopupOpen:{defaultValue:null,description:"Сработает при открытии попапа со смежными ссылками.",name:"onSiblingsPopupOpen",required:!1,type:{name:"((item: Breadcrumb) => void) | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/desktop/components/breadcrumbs/breadcrumbs.tsx#Breadcrumbs"]={docgenInfo:Breadcrumbs.__docgenInfo,name:"Breadcrumbs",path:"src/desktop/components/breadcrumbs/breadcrumbs.tsx#Breadcrumbs"})}catch(__react_docgen_typescript_loader_error){}const items=[{name:"Root",url:"/root_path"},{name:"First Level",url:"/first_level_path",siblings:{state:"ready",data:[{name:"First Level Previous Sibling",url:"/first_level_previous_sibling_path"},{name:"First Level",url:"/first_level_path",isActive:!0},{name:"First Level Next Sibling",url:"/first_level_next_sibling_path"},{name:"First Level Next Sibling",url:"/first_level_next_sibling_path"},{name:"First Level Next Sibling",url:"/first_level_next_sibling_path"},{name:"First Level Next Sibling",url:"/first_level_next_sibling_path"},{name:"First Level Next Sibling",url:"/first_level_next_sibling_path"}]}},{name:"Second Level very long title here",url:"/second_level_path",siblings:{state:"ready",data:[{name:"Second Level Previous Sibling",url:"/second_level_previous_sibling_path"},{name:"Second Level",url:"/second_level_path",isActive:!0}]}},{name:"Third Level",url:"/third_level_path",siblings:{state:"ready",data:[{name:"Third Level",url:"/third_level_path",isActive:!0},{name:"Third Level Next Sibling",url:"/third_level_next_sibling_path"}]}},{name:"Fourth Level",url:"/first_level_path",siblings:{state:"fetching",data:[{name:"Fourth Level Previous Sibling",url:"/fourth_level_previous_sibling_path"},{name:"Fourth Level",url:"/fourth_level_path",isActive:!0},{name:"Fourth Level Next Sibling",url:"/fourth_level_next_sibling_path"},{name:"Fourth Level Next Sibling",url:"/fourth_level_next_sibling_path"},{name:"Fourth Level Next Sibling",url:"/Fourth_level_next_sibling_path"},{name:"Fourth Level Next Sibling",url:"/fourth_level_next_sibling_path"},{name:"Fourth Level Next Sibling",url:"/fourth_level_next_sibling_path"}]}},{name:"Fifth Level",url:"/fifth_level_path",siblings:{state:"ready",data:[{name:"Fifth Level Previous Sibling",url:"/fifth_level_previous_sibling_path"},{name:"Fifth Level",url:"/fifth_level_path",isActive:!0}]}},{name:"Sixth Level",url:"/sixth_level_path",siblings:{state:"ready",data:[{name:"Sixth Level",url:"/sixth_level_path",isActive:!0},{name:"Sixth Level Next Sibling",url:"/sixth_level_next_sibling_path"}]}}];const _01_primary_stories={title:"desktop/Breadcrumbs",component:Breadcrumbs,parameters:{storySource:{source:"import { Breadcrumbs } from '@sima-land/moleculas/desktop/components/breadcrumbs';\nimport { items } from './fixture';\n\nexport default {\n  title: 'desktop/Breadcrumbs',\n  component: Breadcrumbs,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function Primary() {\n  return (\n    <>\n      <Breadcrumbs\n        items={items}\n        onSiblingsPopupOpen={() => {\n          console.log('Popup с \"соседними\" ссылками открылся');\n        }}\n        isSiblingActive={sibling => sibling.isActive}\n      />\n    </>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n",locationsMap:{primary:{startLoc:{col:7,line:12},endLoc:{col:1,line:24},startBody:{col:7,line:12},endBody:{col:1,line:24}}}},layout:"padded"}},Primary=function Primary(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Breadcrumbs,{items,onSiblingsPopupOpen:()=>{console.log('Popup с "соседними" ссылками открылся')},isSiblingActive:sibling=>sibling.isActive})})};Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <>\n      <Breadcrumbs items={items} onSiblingsPopupOpen={() => {\n      console.log('Popup с \"соседними\" ссылками открылся');\n    }} isSiblingActive={sibling => sibling.isActive} />\n    </>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/desktop/components/breadcrumbs/breadcrumbs.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.breadcrumbs-m__root__b14{display:flex;flex-wrap:wrap;margin:0;padding:0;border:0;outline:0;font-size:12px;line-height:16px;user-select:none;margin-bottom:-12px}.breadcrumbs-m__breadcrumb__ad8{display:flex;flex-wrap:nowrap;position:relative;white-space:nowrap;margin-bottom:12px}.breadcrumbs-m__breadcrumb__ad8:not(:last-child)::after{content:"/";display:block;margin:0 8px}.breadcrumbs-m__breadcrumb-name__e8c{position:relative}.breadcrumbs-m__breadcrumb-name__e8c::before{content:"";display:block;position:absolute;top:-4px;bottom:-4px;left:0;right:0}.breadcrumbs-m__breadcrumb-name__e8c.breadcrumbs-m__with-siblings__fc2::before{right:-2px}.breadcrumbs-m__breadcrumb-name__e8c:not(.breadcrumbs-m__with-siblings__fc2)::before{right:-8px}.breadcrumbs-m__toggle-icon__c78{position:relative;margin-left:2px;stroke:#212121;display:block;cursor:pointer}.breadcrumbs-m__toggle-icon__c78.breadcrumbs-m__close__fa5{transform:scaleY(-1);stroke:#9e9e9e}.breadcrumbs-m__toggle-icon__c78::before{content:"";display:block;position:absolute;top:-4px;bottom:-4px;left:0;right:-8px}.breadcrumbs-m__toggle-icon__c78>svg{display:block}.breadcrumbs-m__popup__c13{min-width:180px;padding:16px;position:absolute;top:-16px;left:-16px;z-index:2}.breadcrumbs-m__popup-header__f6f{display:flex}.breadcrumbs-m__siblings__f1b{margin-top:16px;list-style:none;padding:0}.breadcrumbs-m__sibling__ca9{display:block;white-space:normal}.breadcrumbs-m__sibling__ca9+.breadcrumbs-m__sibling__ca9{margin-top:8px}.breadcrumbs-m__sibling__ca9 .breadcrumbs-m__active__bf7{color:#c2c2c2}.breadcrumbs-m__sibling-placeholder__e3a{background:#f5f5f5;border-radius:4px;height:12px}.breadcrumbs-m__sibling-placeholder__e3a+.breadcrumbs-m__sibling-placeholder__e3a{margin-top:8px}.breadcrumbs-m__fade-enter__e8e{opacity:0}.breadcrumbs-m__fade-enter-active__dab{opacity:1;transition:opacity .2s ease-in-out}.breadcrumbs-m__fade-exit__c63{opacity:1}.breadcrumbs-m__fade-exit-active__e34{opacity:0;transition:opacity .2s ease-in-out}',"",{version:3,sources:["webpack://./src/desktop/components/breadcrumbs/breadcrumbs.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAKA,0BACE,YAAA,CACA,cAAA,CACA,QAAA,CACA,SAAA,CACA,QAAA,CACA,SAAA,CACA,cAAA,CACA,gBAAA,CACA,gBAAA,CACA,mBAAA,CAGF,gCACE,YAAA,CACA,gBAAA,CACA,iBAAA,CACA,kBAAA,CACA,kBApBY,CAqBZ,wDACE,WAAA,CACA,aAAA,CACA,YAAA,CAIJ,qCACE,iBAAA,CACA,6CACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,QAAA,CACA,WAAA,CACA,MAAA,CACA,OAAA,CAEF,+EACE,UAAA,CAEF,qFACE,UAAA,CAIJ,iCACE,iBAAA,CACA,eAAA,CACA,cCjDa,CDkDb,aAAA,CACA,cAAA,CACA,2DACE,oBAAA,CACA,cClDW,CDoDb,yCACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,QAAA,CACA,WAAA,CACA,MAAA,CACA,UAAA,CAEF,qCACE,aAAA,CAIJ,2BACE,eAAA,CACA,YA1Ec,CA2Ed,iBAAA,CACA,SAAA,CACA,UAAA,CACA,SAAA,CAGF,kCACE,YAAA,CAGF,8BACE,eAAA,CACA,eAAA,CACA,SAAA,CAGF,6BACE,aAAA,CACA,kBAAA,CACA,0DACE,cAAA,CAEF,yDACE,aC3FW,CD+Ff,yCACE,kBC7FY,CD8FZ,iBAAA,CACA,WAAA,CACA,kFACE,cAAA,CAIJ,gCACE,SAAA,CAGF,uCACE,SAAA,CACA,kCAAA,CAGF,+BACE,SAAA,CAGF,sCACE,SAAA,CACA,kCAAA",sourcesContent:["@use 'node_modules/@sima-land/ui-nucleons/colors';\n\n$popup-padding: 16px;\n$line-gutter: 12px;\n\n.root {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 12px;\n  line-height: 16px;\n  user-select: none;\n  margin-bottom: -$line-gutter;\n}\n\n.breadcrumb {\n  display: flex;\n  flex-wrap: nowrap;\n  position: relative;\n  white-space: nowrap;\n  margin-bottom: $line-gutter;\n  &:not(:last-child)::after {\n    content: '/';\n    display: block;\n    margin: 0 8px;\n  }\n}\n\n.breadcrumb-name {\n  position: relative;\n  &::before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: 0;\n    right: 0;\n  }\n  &.with-siblings::before {\n    right: -2px;\n  }\n  &:not(.with-siblings)::before {\n    right: -8px;\n  }\n}\n\n.toggle-icon {\n  position: relative;\n  margin-left: 2px;\n  stroke: colors.$basic-gray87;\n  display: block;\n  cursor: pointer;\n  &.close {\n    transform: scaleY(-1);\n    stroke: colors.$basic-gray38;\n  }\n  &::before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: 0;\n    right: -8px;\n  }\n  > svg {\n    display: block;\n  }\n}\n\n.popup {\n  min-width: 180px;\n  padding: $popup-padding;\n  position: absolute;\n  top: -$popup-padding;\n  left: -$popup-padding;\n  z-index: 2;\n}\n\n.popup-header {\n  display: flex;\n}\n\n.siblings {\n  margin-top: 16px;\n  list-style: none;\n  padding: 0;\n}\n\n.sibling {\n  display: block;\n  white-space: normal;\n  & + & {\n    margin-top: 8px;\n  }\n  .active {\n    color: colors.$basic-gray24;\n  }\n}\n\n.sibling-placeholder {\n  background: colors.$basic-gray4;\n  border-radius: 4px;\n  height: 12px;\n  & + & {\n    margin-top: 8px;\n  }\n}\n\n.fade-enter {\n  opacity: 0;\n}\n\n.fade-enter-active {\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.fade-exit {\n  opacity: 1;\n}\n\n.fade-exit-active {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"breadcrumbs-m__root__b14",breadcrumb:"breadcrumbs-m__breadcrumb__ad8","breadcrumb-name":"breadcrumbs-m__breadcrumb-name__e8c","with-siblings":"breadcrumbs-m__with-siblings__fc2","toggle-icon":"breadcrumbs-m__toggle-icon__c78",close:"breadcrumbs-m__close__fa5",popup:"breadcrumbs-m__popup__c13","popup-header":"breadcrumbs-m__popup-header__f6f",siblings:"breadcrumbs-m__siblings__f1b",sibling:"breadcrumbs-m__sibling__ca9",active:"breadcrumbs-m__active__bf7","sibling-placeholder":"breadcrumbs-m__sibling-placeholder__e3a","fade-enter":"breadcrumbs-m__fade-enter__e8e","fade-enter-active":"breadcrumbs-m__fade-enter-active__dab","fade-exit":"breadcrumbs-m__fade-exit__c63","fade-exit-active":"breadcrumbs-m__fade-exit-active__e34"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);