"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[872],{"./src/desktop/components/breadcrumbs/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),plate=__webpack_require__("./node_modules/@sima-land/ui-nucleons/plate/index.js"),ui_nucleons_link=__webpack_require__("./node_modules/@sima-land/ui-nucleons/link/index.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),helpers=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),breadcrumbs_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/desktop/components/breadcrumbs/breadcrumbs.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(breadcrumbs_module.Z,options);const breadcrumbs_breadcrumbs_module=breadcrumbs_module.Z&&breadcrumbs_module.Z.locals?breadcrumbs_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(breadcrumbs_breadcrumbs_module);function DownSVG(props){return(0,jsx_runtime.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",...props,children:(0,jsx_runtime.jsx)("path",{d:"M4 6L8 10L12 6",strokeLinecap:"round",strokeLinejoin:"round"})})}DownSVG.displayName="DownSVG";const Breadcrumbs=({items,onSiblingsPopupOpen,isSiblingActive,"data-testid":testId="breadcrumbs"})=>(0,jsx_runtime.jsx)("nav",{className:cx("root"),"data-testid":testId,children:items.map(((breadcrumb,index)=>(0,jsx_runtime.jsx)(Breadcrumb,{data:breadcrumb,onSiblingsPopupOpen:()=>onSiblingsPopupOpen?.(breadcrumb),isSiblingActive:sibling=>Boolean(isSiblingActive?.(sibling))},index)))});Breadcrumbs.displayName="Breadcrumbs";const Breadcrumb=({data,onSiblingsPopupOpen,isSiblingActive})=>{const popupRef=(0,react.useRef)(null),[withPopup,togglePopup]=(0,react.useState)(!1);(0,react.useEffect)((()=>{if(withPopup)return(0,helpers.on)(window,"mousedown",togglePopup.bind(null,!1))}),[withPopup]);const selfName=(0,jsx_runtime.jsx)(ui_nucleons_link.Link,{color:"basic-gray87",href:data.url,pseudo:!data.url,className:cx("breadcrumb-name",data.siblings&&"with-siblings"),children:data.name});return(0,jsx_runtime.jsxs)("div",{"data-testid":"breadcrumb",className:cx("breadcrumb"),children:[selfName,data.siblings&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{"data-testid":"breadcrumb:siblings-opener",className:cx("toggle-icon"),onClick:()=>{togglePopup(!0),onSiblingsPopupOpen()},children:(0,jsx_runtime.jsx)(DownSVG,{})}),(0,jsx_runtime.jsx)(CSSTransition.Z,{in:withPopup,timeout:200,unmountOnExit:!0,classNames:{enter:cx("fade-enter"),enterActive:cx("fade-enter-active"),exit:cx("fade-exit"),exitActive:cx("fade-exit-active")},children:(0,jsx_runtime.jsxs)(plate.Plate,{ref:popupRef,shadow:"z3",rounds:"m",className:cx("popup"),children:[(0,jsx_runtime.jsxs)("div",{className:cx("popup-header"),children:[selfName,(0,jsx_runtime.jsx)("span",{"data-testid":"breadcrumb:siblings-closer",className:cx("toggle-icon","close"),onClick:()=>togglePopup(!1),children:(0,jsx_runtime.jsx)(DownSVG,{})})]}),(0,jsx_runtime.jsxs)("ul",{className:cx("siblings"),children:["fetching"===data.siblings.state&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,lodash.times)(8).map((index=>(0,jsx_runtime.jsx)("div",{className:cx("sibling-placeholder")},index)))}),"ready"===data.siblings.state&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:data.siblings.data?.map(((sibling,index)=>(0,jsx_runtime.jsx)("li",{className:cx("sibling"),"data-testid":"breadcrumb-sibling",children:isSiblingActive(sibling)?(0,jsx_runtime.jsx)("span",{className:cx("active"),children:sibling.name}):(0,jsx_runtime.jsx)(ui_nucleons_link.Link,{color:"basic-gray87",className:cx("link"),href:sibling.url,children:sibling.name})},index)))})]})]})})]})]})};Breadcrumb.displayName="Breadcrumb";try{Breadcrumbs.displayName="Breadcrumbs",Breadcrumbs.__docgenInfo={description:'Список "хлебных крошек".',displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"Список хлебных крошек.",name:"items",required:!0,type:{name:"Breadcrumb[]"}},isSiblingActive:{defaultValue:null,description:"Получив хлебную крошку должна вернуть true если крошка выбрана.",name:"isSiblingActive",required:!1,type:{name:"((sibling: Sibling) => boolean) | undefined"}},onSiblingsPopupOpen:{defaultValue:null,description:"Сработает при открытии попапа со смежными ссылками.",name:"onSiblingsPopupOpen",required:!1,type:{name:"((item: Breadcrumb) => void) | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/desktop/components/breadcrumbs/index.tsx#Breadcrumbs"]={docgenInfo:Breadcrumbs.__docgenInfo,name:"Breadcrumbs",path:"src/desktop/components/breadcrumbs/index.tsx#Breadcrumbs"})}catch(__react_docgen_typescript_loader_error){}const test_items=[{name:"Root",url:"/root_path"},{name:"First Level",url:"/first_level_path",siblings:{state:"ready",data:[{name:"First Level Previous Sibling",url:"/first_level_previous_sibling_path"},{name:"First Level",url:"/first_level_path",isActive:!0},{name:"First Level Next Sibling",url:"/first_level_next_sibling_path"},{name:"First Level Next Sibling",url:"/first_level_next_sibling_path"},{name:"First Level Next Sibling",url:"/first_level_next_sibling_path"},{name:"First Level Next Sibling",url:"/first_level_next_sibling_path"},{name:"First Level Next Sibling",url:"/first_level_next_sibling_path"}]}},{name:"Second Level very long title here",url:"/second_level_path",siblings:{state:"ready",data:[{name:"Second Level Previous Sibling",url:"/second_level_previous_sibling_path"},{name:"Second Level",url:"/second_level_path",isActive:!0}]}},{name:"Third Level",url:"/third_level_path",siblings:{state:"ready",data:[{name:"Third Level",url:"/third_level_path",isActive:!0},{name:"Third Level Next Sibling",url:"/third_level_next_sibling_path"}]}},{name:"Fourth Level",url:"/first_level_path",siblings:{state:"fetching",data:[{name:"Fourth Level Previous Sibling",url:"/fourth_level_previous_sibling_path"},{name:"Fourth Level",url:"/fourth_level_path",isActive:!0},{name:"Fourth Level Next Sibling",url:"/fourth_level_next_sibling_path"},{name:"Fourth Level Next Sibling",url:"/fourth_level_next_sibling_path"},{name:"Fourth Level Next Sibling",url:"/Fourth_level_next_sibling_path"},{name:"Fourth Level Next Sibling",url:"/fourth_level_next_sibling_path"},{name:"Fourth Level Next Sibling",url:"/fourth_level_next_sibling_path"}]}},{name:"Fifth Level",url:"/fifth_level_path",siblings:{state:"ready",data:[{name:"Fifth Level Previous Sibling",url:"/fifth_level_previous_sibling_path"},{name:"Fifth Level",url:"/fifth_level_path",isActive:!0}]}},{name:"Sixth Level",url:"/sixth_level_path",siblings:{state:"ready",data:[{name:"Sixth Level",url:"/sixth_level_path",isActive:!0},{name:"Sixth Level Next Sibling",url:"/sixth_level_next_sibling_path"}]}}];const index_stories={title:"desktop/Breadcrumbs",component:Breadcrumbs,parameters:{storySource:{source:"import { Breadcrumbs } from '@sima-land/moleculas/desktop/components/breadcrumbs';\nimport items from '../__test__/test-items';\nexport default {\n  title: 'desktop/Breadcrumbs',\n  component: Breadcrumbs,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function Primary() {\n  return <>\n      <Breadcrumbs items={items} onSiblingsPopupOpen={() => {\n      console.log('Popup с \"соседними\" ссылками открылся');\n    }} isSiblingActive={sibling => sibling.isActive} />\n    </>;\n}\nPrimary.storyName = 'Простой пример';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  return <>\\n      <Breadcrumbs items={items} onSiblingsPopupOpen={() => {\\n      console.log('Popup \\u0441 \\\"\\u0441\\u043E\\u0441\\u0435\\u0434\\u043D\\u0438\\u043C\\u0438\\\" \\u0441\\u0441\\u044B\\u043B\\u043A\\u0430\\u043C\\u0438 \\u043E\\u0442\\u043A\\u0440\\u044B\\u043B\\u0441\\u044F');\\n    }} isSiblingActive={sibling => sibling.isActive} />\\n    </>;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:10},endLoc:{col:1,line:16},startBody:{col:7,line:10},endBody:{col:1,line:16}}}},layout:"padded"}},Primary=function Primary(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Breadcrumbs,{items:test_items,onSiblingsPopupOpen:()=>{console.log('Popup с "соседними" ссылками открылся')},isSiblingActive:sibling=>sibling.isActive})})};Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <>\n      <Breadcrumbs items={items} onSiblingsPopupOpen={() => {\n      console.log('Popup с \"соседними\" ссылками открылся');\n    }} isSiblingActive={sibling => sibling.isActive} />\n    </>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/desktop/components/breadcrumbs/breadcrumbs.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.breadcrumbs-module__root__ccf{display:flex;flex-wrap:wrap;margin:0;padding:0;border:0;outline:0;font-size:12px;line-height:16px;user-select:none;margin-bottom:-12px}.breadcrumbs-module__breadcrumb__c13{display:flex;flex-wrap:nowrap;position:relative;white-space:nowrap;margin-bottom:12px}.breadcrumbs-module__breadcrumb__c13:not(:last-child)::after{content:"/";display:block;margin:0 8px}.breadcrumbs-module__breadcrumb-name__d59{position:relative}.breadcrumbs-module__breadcrumb-name__d59::before{content:"";display:block;position:absolute;top:-4px;bottom:-4px;left:0;right:0}.breadcrumbs-module__breadcrumb-name__d59.breadcrumbs-module__with-siblings__e67::before{right:-2px}.breadcrumbs-module__breadcrumb-name__d59:not(.breadcrumbs-module__with-siblings__e67)::before{right:-8px}.breadcrumbs-module__toggle-icon__c09{position:relative;margin-left:2px;stroke:#212121;display:block;cursor:pointer}.breadcrumbs-module__toggle-icon__c09.breadcrumbs-module__close__dea{transform:scaleY(-1);stroke:#9e9e9e}.breadcrumbs-module__toggle-icon__c09::before{content:"";display:block;position:absolute;top:-4px;bottom:-4px;left:0;right:-8px}.breadcrumbs-module__toggle-icon__c09>svg{display:block}.breadcrumbs-module__popup__fd8{min-width:180px;padding:16px;position:absolute;top:-16px;left:-16px;z-index:2}.breadcrumbs-module__popup-header__bd2{display:flex}.breadcrumbs-module__siblings__a40{margin-top:16px;list-style:none;padding:0}.breadcrumbs-module__sibling__d08{display:block;white-space:normal}.breadcrumbs-module__sibling__d08+.breadcrumbs-module__sibling__d08{margin-top:8px}.breadcrumbs-module__sibling__d08 .breadcrumbs-module__active__d34{color:#c2c2c2}.breadcrumbs-module__sibling-placeholder__e9c{background:#f5f5f5;border-radius:4px;height:12px}.breadcrumbs-module__sibling-placeholder__e9c+.breadcrumbs-module__sibling-placeholder__e9c{margin-top:8px}.breadcrumbs-module__fade-enter__bf7{opacity:0}.breadcrumbs-module__fade-enter-active__dcb{opacity:1;transition:opacity .2s ease-in-out}.breadcrumbs-module__fade-exit__fe7{opacity:1}.breadcrumbs-module__fade-exit-active__c57{opacity:0;transition:opacity .2s ease-in-out}',"",{version:3,sources:["webpack://./src/desktop/components/breadcrumbs/breadcrumbs.module.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAKA,+BACE,YAAA,CACA,cAAA,CACA,QAAA,CACA,SAAA,CACA,QAAA,CACA,SAAA,CACA,cAAA,CACA,gBAAA,CACA,gBAAA,CACA,mBAAA,CAGF,qCACE,YAAA,CACA,gBAAA,CACA,iBAAA,CACA,kBAAA,CACA,kBApBY,CAqBZ,6DACE,WAAA,CACA,aAAA,CACA,YAAA,CAIJ,0CACE,iBAAA,CACA,kDACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,QAAA,CACA,WAAA,CACA,MAAA,CACA,OAAA,CAEF,yFACE,UAAA,CAEF,+FACE,UAAA,CAIJ,sCACE,iBAAA,CACA,eAAA,CACA,cCjDa,CDkDb,aAAA,CACA,cAAA,CACA,qEACE,oBAAA,CACA,cClDW,CDoDb,8CACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,QAAA,CACA,WAAA,CACA,MAAA,CACA,UAAA,CAEF,0CACE,aAAA,CAIJ,gCACE,eAAA,CACA,YA1Ec,CA2Ed,iBAAA,CACA,SAAA,CACA,UAAA,CACA,SAAA,CAGF,uCACE,YAAA,CAGF,mCACE,eAAA,CACA,eAAA,CACA,SAAA,CAGF,kCACE,aAAA,CACA,kBAAA,CACA,oEACE,cAAA,CAEF,mEACE,aC3FW,CD+Ff,8CACE,kBC7FY,CD8FZ,iBAAA,CACA,WAAA,CACA,4FACE,cAAA,CAIJ,qCACE,SAAA,CAGF,4CACE,SAAA,CACA,kCAAA,CAGF,oCACE,SAAA,CAGF,2CACE,SAAA,CACA,kCAAA",sourcesContent:["@use 'node_modules/@sima-land/ui-nucleons/colors';\n\n$popup-padding: 16px;\n$line-gutter: 12px;\n\n.root {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 12px;\n  line-height: 16px;\n  user-select: none;\n  margin-bottom: -$line-gutter;\n}\n\n.breadcrumb {\n  display: flex;\n  flex-wrap: nowrap;\n  position: relative;\n  white-space: nowrap;\n  margin-bottom: $line-gutter;\n  &:not(:last-child)::after {\n    content: '/';\n    display: block;\n    margin: 0 8px;\n  }\n}\n\n.breadcrumb-name {\n  position: relative;\n  &::before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: 0;\n    right: 0;\n  }\n  &.with-siblings::before {\n    right: -2px;\n  }\n  &:not(.with-siblings)::before {\n    right: -8px;\n  }\n}\n\n.toggle-icon {\n  position: relative;\n  margin-left: 2px;\n  stroke: colors.$basic-gray87;\n  display: block;\n  cursor: pointer;\n  &.close {\n    transform: scaleY(-1);\n    stroke: colors.$basic-gray38;\n  }\n  &::before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: 0;\n    right: -8px;\n  }\n  > svg {\n    display: block;\n  }\n}\n\n.popup {\n  min-width: 180px;\n  padding: $popup-padding;\n  position: absolute;\n  top: -$popup-padding;\n  left: -$popup-padding;\n  z-index: 2;\n}\n\n.popup-header {\n  display: flex;\n}\n\n.siblings {\n  margin-top: 16px;\n  list-style: none;\n  padding: 0;\n}\n\n.sibling {\n  display: block;\n  white-space: normal;\n  & + & {\n    margin-top: 8px;\n  }\n  .active {\n    color: colors.$basic-gray24;\n  }\n}\n\n.sibling-placeholder {\n  background: colors.$basic-gray4;\n  border-radius: 4px;\n  height: 12px;\n  & + & {\n    margin-top: 8px;\n  }\n}\n\n.fade-enter {\n  opacity: 0;\n}\n\n.fade-enter-active {\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.fade-exit {\n  opacity: 1;\n}\n\n.fade-exit-active {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"breadcrumbs-module__root__ccf",breadcrumb:"breadcrumbs-module__breadcrumb__c13","breadcrumb-name":"breadcrumbs-module__breadcrumb-name__d59","with-siblings":"breadcrumbs-module__with-siblings__e67","toggle-icon":"breadcrumbs-module__toggle-icon__c09",close:"breadcrumbs-module__close__dea",popup:"breadcrumbs-module__popup__fd8","popup-header":"breadcrumbs-module__popup-header__bd2",siblings:"breadcrumbs-module__siblings__a40",sibling:"breadcrumbs-module__sibling__d08",active:"breadcrumbs-module__active__d34","sibling-placeholder":"breadcrumbs-module__sibling-placeholder__e9c","fade-enter":"breadcrumbs-module__fade-enter__bf7","fade-enter-active":"breadcrumbs-module__fade-enter-active__dcb","fade-exit":"breadcrumbs-module__fade-exit__fe7","fade-exit-active":"breadcrumbs-module__fade-exit-active__c57"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);