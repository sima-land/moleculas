"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[3596],{"./src/mobile/components/search-bar/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),colors=__webpack_require__("./node_modules/@sima-land/ui-nucleons/colors/index.js"),dropdown=__webpack_require__("./node_modules/@sima-land/ui-nucleons/dropdown/index.js"),dropdown_item=__webpack_require__("./node_modules/@sima-land/ui-nucleons/dropdown-item/index.js"),hooks=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hooks/index.js"),helpers=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/index.js"),CircleCross=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Filled/CircleCross.js"),Magnifier=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/Magnifier.js"),MoreVert=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Filled/MoreVert.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),search_bar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/mobile/components/search-bar/search-bar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(search_bar_module.Z,options);const search_bar_search_bar_module=search_bar_module.Z&&search_bar_module.Z.locals?search_bar_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(search_bar_search_bar_module),SearchBar=({value,onChange,inputMode,placeholder="Поиск",onClear,endButtons=[],startButtons=[],withSearchIcon=!0,autoFocus=!0,description,inputRef:inputRefProp})=>{const[shownDropdown,toggleDropdown]=(0,react.useState)(!1),inputRef=(0,react.useRef)(null),dropdownRef=(0,react.useRef)(null),dropdownOpenerRef=(0,react.useRef)(null),needHideEndButtons=endButtons.length>1;(0,react.useImperativeHandle)(inputRefProp,(()=>inputRef.current)),(0,hooks.useOutsideClick)(dropdownRef,(e=>{!dropdownOpenerRef.current?.contains(e.target)&&toggleDropdown(!1)})),(0,react.useEffect)((()=>needHideEndButtons?(0,helpers.on)(window,"resize",(()=>toggleDropdown(!1))):void 0),[needHideEndButtons]);return(0,jsx_runtime.jsxs)("div",{className:cx("root"),children:[Boolean(startButtons.length)&&(0,jsx_runtime.jsx)("div",{className:cx("before-field"),children:(0,jsx_runtime.jsx)("div",{className:cx("buttons-container"),children:startButtons.map(((props,index)=>(0,react.createElement)(Button,{...props,key:index})))})}),(0,jsx_runtime.jsxs)("label",{className:cx("input-wrapper"),onMouseDown:e=>{inputRef.current&&inputRef.current!==e.target&&document.activeElement===inputRef.current&&e.preventDefault()},"data-testid":"search-bar:input-wrapper",children:[withSearchIcon&&(0,jsx_runtime.jsx)("span",{className:cx("search-icon"),children:(0,jsx_runtime.jsx)(Magnifier.Z,{fill:colors.COLORS.get("basic-gray38"),"aria-hidden":!0})}),(0,jsx_runtime.jsxs)("div",{className:cx("input-container"),children:[(0,jsx_runtime.jsx)("input",{ref:inputRef,value,onChange,className:cx("search-field"),placeholder,autoFocus,"data-testid":"search-bar-input",type:"text",inputMode,tabIndex:0}),description&&(0,jsx_runtime.jsx)("div",{className:cx("description-container"),children:(0,jsx_runtime.jsx)("span",{className:cx("description"),children:description})})]}),value&&onClear&&(0,jsx_runtime.jsx)("button",{onClick:onClear,"aria-label":"Очистить","data-testid":"search-bar:clear-icon",className:cx("clear-button"),children:(0,jsx_runtime.jsx)(CircleCross.Z,{fill:colors.COLORS.get("basic-gray38"),"aria-hidden":!0})})]}),Boolean(endButtons.length)&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:cx("after-field",needHideEndButtons&&"wide-screen"),children:(0,jsx_runtime.jsx)("div",{className:cx("buttons-container"),children:endButtons.map(((props,index)=>(0,react.createElement)(Button,{...props,key:index})))})}),needHideEndButtons&&(0,jsx_runtime.jsxs)("div",{className:cx("after-field","narrow-screen"),children:[(0,jsx_runtime.jsx)("div",{className:cx("buttons-container"),children:(0,jsx_runtime.jsx)(Button,{text:"Больше",ref:dropdownOpenerRef,icon:MoreVert.Z,onClick:()=>toggleDropdown(!shownDropdown)})}),shownDropdown&&(0,jsx_runtime.jsx)("div",{ref:dropdownRef,className:cx("dropdown-container"),children:(0,jsx_runtime.jsx)(dropdown.Lt,{children:endButtons.map((({text,onClick},index)=>(0,jsx_runtime.jsx)(dropdown_item.h,{size:"s",onClick:event=>{onClick(event),toggleDropdown(!1)},children:text},index)))})})]})]})]})},Button=(0,react.forwardRef)((function Button({text,icon:Icon,iconColor="basic-gray87",onClick},ref){return(0,jsx_runtime.jsx)("div",{ref,onClick,className:cx("button"),role:"button","data-testid":"search-bar-button",tabIndex:0,"aria-label":Icon&&text,children:Icon?(0,jsx_runtime.jsx)(Icon,{fill:colors.COLORS.get(iconColor),"aria-hidden":"true"}):text})}));try{cx.displayName="cx",cx.__docgenInfo={description:"",displayName:"cx",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/mobile/components/search-bar/search-bar.tsx#cx"]={docgenInfo:cx.__docgenInfo,name:"cx",path:"src/mobile/components/search-bar/search-bar.tsx#cx"})}catch(__react_docgen_typescript_loader_error){}try{SearchBar.displayName="SearchBar",SearchBar.__docgenInfo={description:"Компонент поисковой строки.",displayName:"SearchBar",props:{value:{defaultValue:null,description:"Поисковый Запрос.",name:"value",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"Вызовется при изменении поискового запроса.",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},inputMode:{defaultValue:null,description:"Тип клавиатуры.",name:"inputMode",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"text"'},{value:'"decimal"'},{value:'"numeric"'},{value:'"tel"'},{value:'"search"'},{value:'"email"'},{value:'"url"'}]}},placeholder:{defaultValue:{value:"Поиск"},description:"Подсказка.",name:"placeholder",required:!1,type:{name:"string | undefined"}},onClear:{defaultValue:null,description:"Вызовется при нажатии на кнопку очистки.",name:"onClear",required:!1,type:{name:"MouseEventHandler | undefined"}},endButtons:{defaultValue:{value:"[]"},description:"Кнопки(а) после поля.",name:"endButtons",required:!1,type:{name:"any[] | undefined"}},startButtons:{defaultValue:{value:"[]"},description:"Кнопки(а) до поля.",name:"startButtons",required:!1,type:{name:"any[] | undefined"}},withSearchIcon:{defaultValue:{value:"true"},description:"Признак наличия иконки поиска слева.",name:"withSearchIcon",required:!1,type:{name:"boolean | undefined"}},autoFocus:{defaultValue:{value:"true"},description:"Признак авто-фокуса.",name:"autoFocus",required:!1,type:{name:"boolean | undefined"}},description:{defaultValue:null,description:"Описание в поле ввода.",name:"description",required:!1,type:{name:"string | undefined"}},inputRef:{defaultValue:null,description:"Ref для элемента текстового поля.",name:"inputRef",required:!1,type:{name:"MutableRefObject<HTMLInputElement | null> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/mobile/components/search-bar/search-bar.tsx#SearchBar"]={docgenInfo:SearchBar.__docgenInfo,name:"SearchBar",path:"src/mobile/components/search-bar/search-bar.tsx#SearchBar"})}catch(__react_docgen_typescript_loader_error){}var ArrowLeft=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/ArrowLeft.js");const index_stories={title:"mobile/SearchBar",component:SearchBar,parameters:{storySource:{source:"import { SearchBar } from '@sima-land/moleculas/mobile/components/search-bar';\nimport { useState } from 'react';\nimport ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';\n\nexport default {\n  title: 'mobile/SearchBar',\n  component: SearchBar,\n  parameters: {\n    layout: 'padded',\n    docs: {\n      description: {\n        component: 'Компонент Поисковой строки',\n      },\n    },\n    viewport: {\n      defaultViewport: 'iphonex',\n    },\n  },\n};\n\nexport const Primary = () => {\n  const [value, setValue] = useState<string>('');\n\n  return (\n    <SearchBar\n      value={value}\n      onChange={e => setValue(e.target.value)}\n      onClear={() => setValue('')}\n      endButtons={[\n        {\n          text: 'Поиск',\n          onClick: () => alert('Сделаем вид что что-то нашли...'),\n        },\n      ]}\n    />\n  );\n};\n\nPrimary.storyName = 'Простой пример';\n\nexport const Secondary = () => {\n  const [value, setValue] = useState<string>('');\n\n  return (\n    <SearchBar\n      value={value}\n      withSearchIcon={false}\n      onChange={e => setValue(e.target.value)}\n      onClear={() => setValue('')}\n      startButtons={[\n        {\n          text: 'Назад',\n          icon: ArrowLeftSVG,\n          onClick: () => 'К сожалению некуда возвращаться...',\n        },\n      ]}\n      endButtons={[\n        {\n          text: 'Отмена',\n          onClick: () => alert('Якобы произошла отмена...'),\n        },\n        {\n          text: 'Поиск',\n          onClick: () => alert('Сделаем вид что что-то нашли...'),\n        },\n      ]}\n      description='150 324 предложений'\n      placeholder='Найти'\n    />\n  );\n};\n\nSecondary.storyName = 'С иконками';\n",locationsMap:{primary:{startLoc:{col:23,line:21},endLoc:{col:1,line:37},startBody:{col:23,line:21},endBody:{col:1,line:37}},secondary:{startLoc:{col:25,line:41},endLoc:{col:1,line:71},startBody:{col:25,line:41},endBody:{col:1,line:71}}}},layout:"padded",docs:{description:{component:"Компонент Поисковой строки"}},viewport:{defaultViewport:"iphonex"}}},Primary=()=>{const[value,setValue]=(0,react.useState)("");return(0,jsx_runtime.jsx)(SearchBar,{value,onChange:e=>setValue(e.target.value),onClear:()=>setValue(""),endButtons:[{text:"Поиск",onClick:()=>alert("Сделаем вид что что-то нашли...")}]})};Primary.storyName="Простой пример";const Secondary=()=>{const[value,setValue]=(0,react.useState)("");return(0,jsx_runtime.jsx)(SearchBar,{value,withSearchIcon:!1,onChange:e=>setValue(e.target.value),onClear:()=>setValue(""),startButtons:[{text:"Назад",icon:ArrowLeft.Z,onClick:()=>"К сожалению некуда возвращаться..."}],endButtons:[{text:"Отмена",onClick:()=>alert("Якобы произошла отмена...")},{text:"Поиск",onClick:()=>alert("Сделаем вид что что-то нашли...")}],description:"150 324 предложений",placeholder:"Найти"})};Secondary.storyName="С иконками",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState<string>('');\n  return <SearchBar value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} endButtons={[{\n    text: 'Поиск',\n    onClick: () => alert('Сделаем вид что что-то нашли...')\n  }]} />;\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState<string>('');\n  return <SearchBar value={value} withSearchIcon={false} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} startButtons={[{\n    text: 'Назад',\n    icon: ArrowLeftSVG,\n    onClick: () => 'К сожалению некуда возвращаться...'\n  }]} endButtons={[{\n    text: 'Отмена',\n    onClick: () => alert('Якобы произошла отмена...')\n  }, {\n    text: 'Поиск',\n    onClick: () => alert('Сделаем вид что что-то нашли...')\n  }]} description='150 324 предложений' placeholder='Найти' />;\n}",...Secondary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/mobile/components/search-bar/search-bar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".search-bar-module__root__b9e{display:flex}.search-bar-module__input-wrapper__d7a{display:inline-flex;position:relative;flex-grow:1;margin:8px 0;width:100%;background-color:#f5f5f5;border-radius:8px;padding:0 12px}.search-bar-module__input-wrapper__d7a:focus-within .search-bar-module__clear-button__f52{display:flex}.search-bar-module__input-wrapper__d7a:focus-within .search-bar-module__description-container__f59{display:none}.search-bar-module__search-icon__bcc{display:flex;justify-content:center;align-items:center;margin-right:12px}.search-bar-module__input-container__e48{flex-grow:1;display:flex;justify-content:space-around;align-items:center}.search-bar-module__search-field__e9e{background-color:rgba(0,0,0,0);margin:0;padding:0;border:0;outline:0;line-height:24px;font-size:16px;box-sizing:border-box;width:100%;height:40px;color:#000;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:left}.search-bar-module__search-field__e9e::-ms-clear{display:none}.search-bar-module__search-field__e9e::placeholder{color:#9e9e9e}.search-bar-module__description-container__f59{line-height:24px;font-size:16px;color:#9e9e9e;width:100%;max-width:50%;display:flex;justify-content:flex-end;margin-left:12px}.search-bar-module__description__d64{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.search-bar-module__clear-button__f52{position:relative;align-items:center;justify-content:center;padding:0;margin-left:12px;display:none;cursor:pointer;background:rgba(0,0,0,0);border:0}.search-bar-module__hidden__c7c{display:none}.search-bar-module__after-field__a2b,.search-bar-module__before-field__e9e{position:relative}.search-bar-module__after-field__a2b.search-bar-module__narrow-screen__e4a,.search-bar-module__before-field__e9e.search-bar-module__narrow-screen__e4a{display:none}@media(max-width: 360px){.search-bar-module__after-field__a2b.search-bar-module__wide-screen__caf,.search-bar-module__before-field__e9e.search-bar-module__wide-screen__caf{display:none}.search-bar-module__after-field__a2b.search-bar-module__narrow-screen__e4a,.search-bar-module__before-field__e9e.search-bar-module__narrow-screen__e4a{display:block}}.search-bar-module__buttons-container__b38{display:flex;justify-content:space-around;height:100%;align-items:stretch}.search-bar-module__button__fcc{padding:0 12px;font-weight:600;font-size:14px;line-height:20px;color:#1f84db;cursor:pointer;display:flex;align-items:center}.search-bar-module__before-field__e9e .search-bar-module__button__fcc:first-child{padding-left:0;padding-right:16px}.search-bar-module__after-field__a2b .search-bar-module__button__fcc:last-child{padding-left:16px;padding-right:0}.search-bar-module__dropdown-container__d93{position:absolute;top:100%;right:0}","",{version:3,sources:["webpack://./src/mobile/components/search-bar/search-bar.module.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAEA,8BACE,YAAA,CAGF,uCACE,mBAAA,CACA,iBAAA,CACA,WAAA,CACA,YAAA,CACA,UAAA,CACA,wBAAA,CACA,iBAAA,CACA,cAAA,CAEE,0FACE,YAAA,CAEF,mGACE,YAAA,CAKN,qCACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CAGF,yCACE,WAAA,CACA,YAAA,CACA,4BAAA,CACA,kBAAA,CAGF,sCACE,8BAAA,CACA,QAAA,CACA,SAAA,CACA,QAAA,CACA,SAAA,CACA,gBAAA,CACA,cAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CACA,UAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CACA,eAAA,CACA,iDACE,YAAA,CAEF,mDACE,aCnDW,CDuDf,+CACE,gBAAA,CACA,cAAA,CACA,aC1Da,CD2Db,UAAA,CACA,aAAA,CACA,YAAA,CACA,wBAAA,CACA,gBAAA,CAGF,qCACE,kBAAA,CACA,eAAA,CACA,sBAAA,CAGF,sCACE,iBAAA,CACA,kBAAA,CACA,sBAAA,CACA,SAAA,CACA,gBAAA,CACA,YAAA,CACA,cAAA,CACA,wBAAA,CACA,QAAA,CAGF,gCACE,YAAA,CAGF,2EAEE,iBAAA,CACA,uJACE,YAAA,CAEF,yBACE,mJACE,YAAA,CAEF,uJACE,aAAA,CAAA,CAKN,2CACE,YAAA,CACA,4BAAA,CACA,WAAA,CACA,mBAAA,CAGF,gCACE,cAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CACA,aCzHW,CD0HX,cAAA,CACA,YAAA,CACA,kBAAA,CAGF,kFACE,cAAA,CACA,kBAAA,CAGF,gFACE,iBAAA,CACA,eAAA,CAGF,4CACE,iBAAA,CACA,QAAA,CACA,OAAA",sourcesContent:["@use 'node_modules/@sima-land/ui-nucleons/colors';\n\n.root {\n  display: flex;\n}\n\n.input-wrapper {\n  display: inline-flex;\n  position: relative;\n  flex-grow: 1;\n  margin: 8px 0;\n  width: 100%;\n  background-color: colors.$basic-gray4;\n  border-radius: 8px;\n  padding: 0 12px;\n  &:focus-within {\n    .clear-button {\n      display: flex;\n    }\n    .description-container {\n      display: none;\n    }\n  }\n}\n\n.search-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 12px;\n}\n\n.input-container {\n  flex-grow: 1;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.search-field {\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  line-height: 24px;\n  font-size: 16px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  color: #000;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n  &::-ms-clear {\n    display: none;\n  }\n  &::placeholder {\n    color: colors.$basic-gray38;\n  }\n}\n\n.description-container {\n  line-height: 24px;\n  font-size: 16px;\n  color: colors.$basic-gray38;\n  width: 100%;\n  max-width: 50%;\n  display: flex;\n  justify-content: flex-end;\n  margin-left: 12px;\n}\n\n.description {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.clear-button {\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin-left: 12px;\n  display: none;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.after-field,\n.before-field {\n  position: relative;\n  &.narrow-screen {\n    display: none;\n  }\n  @media (max-width: 360px) {\n    &.wide-screen {\n      display: none;\n    }\n    &.narrow-screen {\n      display: block;\n    }\n  }\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-around;\n  height: 100%;\n  align-items: stretch;\n}\n\n.button {\n  padding: 0 12px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: colors.$basic-blue;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n.before-field .button:first-child {\n  padding-left: 0;\n  padding-right: 16px;\n}\n\n.after-field .button:last-child {\n  padding-left: 16px;\n  padding-right: 0;\n}\n\n.dropdown-container {\n  position: absolute;\n  top: 100%;\n  right: 0;\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"search-bar-module__root__b9e","input-wrapper":"search-bar-module__input-wrapper__d7a","clear-button":"search-bar-module__clear-button__f52","description-container":"search-bar-module__description-container__f59","search-icon":"search-bar-module__search-icon__bcc","input-container":"search-bar-module__input-container__e48","search-field":"search-bar-module__search-field__e9e",description:"search-bar-module__description__d64",hidden:"search-bar-module__hidden__c7c","after-field":"search-bar-module__after-field__a2b","before-field":"search-bar-module__before-field__e9e","narrow-screen":"search-bar-module__narrow-screen__e4a","wide-screen":"search-bar-module__wide-screen__caf","buttons-container":"search-bar-module__buttons-container__b38",button:"search-bar-module__button__fcc","dropdown-container":"search-bar-module__dropdown-container__d93"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);