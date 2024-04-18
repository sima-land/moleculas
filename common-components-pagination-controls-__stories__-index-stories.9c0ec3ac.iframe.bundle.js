"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[3554],{"./src/common/components/pagination-controls/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChangeLayout:()=>ChangeLayout,Primary:()=>Primary,TestRanges:()=>TestRanges,VerticalLayout:()=>VerticalLayout,WithoutForm:()=>WithoutForm,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),input=__webpack_require__("./node_modules/@sima-land/ui-nucleons/input/index.js"),pagination=__webpack_require__("./node_modules/@sima-land/ui-nucleons/pagination/index.js"),ArrowExpandRight=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Stroked/ArrowExpandRight.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),pagination_controls_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/common/components/pagination-controls/pagination-controls.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(pagination_controls_m.Z,options);const pagination_controls_pagination_controls_m=pagination_controls_m.Z&&pagination_controls_m.Z.locals?pagination_controls_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(pagination_controls_pagination_controls_m);function PaginationControls({current:currentProp,total:totalProp,onPageChange,flow="horizontal",Buttons=PageButtons,Form=PageForm,withForm:withFormProp,className,...restProps}){const{current,total}=(0,react.useMemo)((()=>(0,pagination.a2)({current:currentProp,total:totalProp})),[currentProp,totalProp]),withForm=withFormProp??total>=7,handlePageChange=(0,react.useCallback)((page=>{onPageChange?.(Math.max(1,Math.min(total,page)))}),[onPageChange]);return(0,jsx_runtime.jsxs)("div",{className:cx("layout","unset"!==flow&&`flow-${flow}`,className),...restProps,children:[(0,jsx_runtime.jsx)("div",{className:cx("slot-buttons"),children:(0,jsx_runtime.jsx)(Buttons,{current,total,onPageChange:handlePageChange})}),withForm&&(0,jsx_runtime.jsx)("div",{className:cx("slot-form"),children:(0,jsx_runtime.jsx)(Form,{current,total,onPageChange:handlePageChange})})]})}function PageButtons({total,current,onPageChange}){return(0,jsx_runtime.jsx)(pagination.tl,{total,current,onPageChange:(event,button)=>onPageChange(button.value)})}function PageForm({total,onPageChange}){const[value,setValue]=(0,react.useState)(""),handleSubmit=(0,react.useCallback)((event=>{event.preventDefault();const numeric=parseInt(value);Number.isNaN(numeric)||(onPageChange?.(numeric),setValue(""))}),[total,value,onPageChange]),handleChange=(0,react.useCallback)((event=>{setValue(event.target.value.replace(/\D/g,""))}),[]);return(0,jsx_runtime.jsxs)("form",{onSubmit:handleSubmit,className:cx("form"),children:[(0,jsx_runtime.jsx)("span",{className:cx("label"),children:"К странице"}),(0,jsx_runtime.jsx)(PageFormInput,{value,onChange:handleChange,adornmentEnd:(0,jsx_runtime.jsx)("button",{disabled:0===value.length,type:"submit",className:cx("submit"),onMouseDown:event=>event.preventDefault(),children:(0,jsx_runtime.jsx)(ArrowExpandRight.Z,{fill:"currentColor"})})})]})}function PageFormInput({className,...restProps}){return(0,jsx_runtime.jsx)(input.I,{size:"m",...restProps,className:cx("input",className)})}try{PaginationControls.displayName="PaginationControls",PaginationControls.__docgenInfo={description:"Блок управления пагинацией.",displayName:"PaginationControls",props:{flow:{defaultValue:{value:"horizontal"},description:"",name:"flow",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"unset"'},{value:'"horizontal"'},{value:'"vertical"'}]}},withForm:{defaultValue:null,description:"",name:"withForm",required:!1,type:{name:"boolean | undefined"}},Buttons:{defaultValue:null,description:"",name:"Buttons",required:!1,type:{name:"ComponentType<{ total: number; current: number; onPageChange: (page: number) => void; }> | undefined"}},Form:{defaultValue:null,description:"",name:"Form",required:!1,type:{name:"ComponentType<{ total: number; current: number; onPageChange: (page: number) => void; }> | undefined"}},total:{defaultValue:null,description:"",name:"total",required:!1,type:{name:"number | undefined"}},current:{defaultValue:null,description:"",name:"current",required:!1,type:{name:"number | undefined"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!1,type:{name:"((page: number) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/pagination-controls/pagination-controls.tsx#PaginationControls"]={docgenInfo:PaginationControls.__docgenInfo,name:"PaginationControls",path:"src/common/components/pagination-controls/pagination-controls.tsx#PaginationControls"})}catch(__react_docgen_typescript_loader_error){}try{PageButtons.displayName="PageButtons",PageButtons.__docgenInfo={description:"Кнопки страниц.",displayName:"PageButtons",props:{total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},current:{defaultValue:null,description:"",name:"current",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/pagination-controls/pagination-controls.tsx#PageButtons"]={docgenInfo:PageButtons.__docgenInfo,name:"PageButtons",path:"src/common/components/pagination-controls/pagination-controls.tsx#PageButtons"})}catch(__react_docgen_typescript_loader_error){}try{PageForm.displayName="PageForm",PageForm.__docgenInfo={description:"Форма выбора страницы.",displayName:"PageForm",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/pagination-controls/pagination-controls.tsx#PageForm"]={docgenInfo:PageForm.__docgenInfo,name:"PageForm",path:"src/common/components/pagination-controls/pagination-controls.tsx#PageForm"})}catch(__react_docgen_typescript_loader_error){}try{PageFormInput.displayName="PageFormInput",PageFormInput.__docgenInfo={description:"Поле ввода номера страницы. Только стилизует Input.",displayName:"PageFormInput",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/pagination-controls/pagination-controls.tsx#PageFormInput"]={docgenInfo:PageFormInput.__docgenInfo,name:"PageFormInput",path:"src/common/components/pagination-controls/pagination-controls.tsx#PageFormInput"})}catch(__react_docgen_typescript_loader_error){}var layout=__webpack_require__("./node_modules/@sima-land/ui-nucleons/layout/index.js"),hooks=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hooks/index.js");const index_stories={title:"common/PaginationControls",component:PaginationControls,parameters:{storySource:{source:"import { PaginationControls } from '@sima-land/moleculas/common/components/pagination-controls';\nimport { useState } from 'react';\nimport { Layout } from '@sima-land/ui-nucleons/layout';\nimport { useBreakpoint } from '@sima-land/ui-nucleons/hooks';\n\nexport default {\n  title: 'common/PaginationControls',\n  component: PaginationControls,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function Primary() {\n  const [page, setPage] = useState(1);\n\n  return (\n    <Layout>\n      <PaginationControls current={page} total={99} onPageChange={setPage} />\n    </Layout>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n\nexport function VerticalLayout() {\n  const [page, setPage] = useState(1);\n\n  return (\n    <Layout>\n      <PaginationControls flow='vertical' current={page} total={99} onPageChange={setPage} />\n    </Layout>\n  );\n}\n\nVerticalLayout.storyName = 'Вертикальная раскладка';\n\nexport function ChangeLayout() {\n  const [page, setPage] = useState(1);\n  const desktop = useBreakpoint('xs+');\n\n  return (\n    <Layout>\n      <PaginationControls\n        current={page}\n        total={99}\n        onPageChange={setPage}\n        flow={desktop ? 'horizontal' : 'vertical'}\n      />\n    </Layout>\n  );\n}\n\nChangeLayout.storyName = 'Смена раскладки по breakpoint';\n\nexport function WithoutForm() {\n  const [page, setPage] = useState(1);\n\n  return (\n    <Layout>\n      <PaginationControls withForm={false} current={page} total={6} onPageChange={setPage} />\n    </Layout>\n  );\n}\n\nWithoutForm.storyName = 'Без формы';\n\nexport function TestRanges() {\n  const MyPagination = ({ total }: { total: number }) => {\n    const [page, setPage] = useState(1);\n\n    return <PaginationControls current={page} total={total} onPageChange={setPage} />;\n  };\n\n  return (\n    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>\n      {Array(16)\n        .fill(0)\n        .map((zero, index) => index)\n        .slice(5)\n        .concat(99, 999, 9999)\n        .map(count => (\n          <div key={count}>\n            <h5>Total: {count}</h5>\n            <MyPagination total={count} />\n          </div>\n        ))}\n    </div>\n  );\n}\n\nTestRanges.storyName = 'Тест: варианты данных';\n",locationsMap:{primary:{startLoc:{col:7,line:14},endLoc:{col:1,line:22},startBody:{col:7,line:14},endBody:{col:1,line:22}},"vertical-layout":{startLoc:{col:7,line:26},endLoc:{col:1,line:34},startBody:{col:7,line:26},endBody:{col:1,line:34}},"change-layout":{startLoc:{col:7,line:38},endLoc:{col:1,line:52},startBody:{col:7,line:38},endBody:{col:1,line:52}},"without-form":{startLoc:{col:7,line:56},endLoc:{col:1,line:64},startBody:{col:7,line:56},endBody:{col:1,line:64}},"test-ranges":{startLoc:{col:7,line:68},endLoc:{col:1,line:90},startBody:{col:7,line:68},endBody:{col:1,line:90}}}},layout:"padded"}},Primary=function Primary(){const[page,setPage]=(0,react.useState)(1);return(0,jsx_runtime.jsx)(layout.Layout,{children:(0,jsx_runtime.jsx)(PaginationControls,{current:page,total:99,onPageChange:setPage})})};Primary.storyName="Простой пример";const VerticalLayout=function VerticalLayout(){const[page,setPage]=(0,react.useState)(1);return(0,jsx_runtime.jsx)(layout.Layout,{children:(0,jsx_runtime.jsx)(PaginationControls,{flow:"vertical",current:page,total:99,onPageChange:setPage})})};VerticalLayout.storyName="Вертикальная раскладка";const ChangeLayout=function ChangeLayout(){const[page,setPage]=(0,react.useState)(1),desktop=(0,hooks.useBreakpoint)("xs+");return(0,jsx_runtime.jsx)(layout.Layout,{children:(0,jsx_runtime.jsx)(PaginationControls,{current:page,total:99,onPageChange:setPage,flow:desktop?"horizontal":"vertical"})})};ChangeLayout.storyName="Смена раскладки по breakpoint";const WithoutForm=function WithoutForm(){const[page,setPage]=(0,react.useState)(1);return(0,jsx_runtime.jsx)(layout.Layout,{children:(0,jsx_runtime.jsx)(PaginationControls,{withForm:!1,current:page,total:6,onPageChange:setPage})})};WithoutForm.storyName="Без формы";const TestRanges=function TestRanges(){const MyPagination=({total})=>{const[page,setPage]=(0,react.useState)(1);return(0,jsx_runtime.jsx)(PaginationControls,{current:page,total,onPageChange:setPage})};return(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:24},children:Array(16).fill(0).map(((zero,index)=>index)).slice(5).concat(99,999,9999).map((count=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("h5",{children:["Total: ",count]}),(0,jsx_runtime.jsx)(MyPagination,{total:count})]},count)))})};TestRanges.storyName="Тест: варианты данных",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  const [page, setPage] = useState(1);\n  return <Layout>\n      <PaginationControls current={page} total={99} onPageChange={setPage} />\n    </Layout>;\n}",...Primary.parameters?.docs?.source}}},VerticalLayout.parameters={...VerticalLayout.parameters,docs:{...VerticalLayout.parameters?.docs,source:{originalSource:"function VerticalLayout() {\n  const [page, setPage] = useState(1);\n  return <Layout>\n      <PaginationControls flow='vertical' current={page} total={99} onPageChange={setPage} />\n    </Layout>;\n}",...VerticalLayout.parameters?.docs?.source}}},ChangeLayout.parameters={...ChangeLayout.parameters,docs:{...ChangeLayout.parameters?.docs,source:{originalSource:"function ChangeLayout() {\n  const [page, setPage] = useState(1);\n  const desktop = useBreakpoint('xs+');\n  return <Layout>\n      <PaginationControls current={page} total={99} onPageChange={setPage} flow={desktop ? 'horizontal' : 'vertical'} />\n    </Layout>;\n}",...ChangeLayout.parameters?.docs?.source}}},WithoutForm.parameters={...WithoutForm.parameters,docs:{...WithoutForm.parameters?.docs,source:{originalSource:"function WithoutForm() {\n  const [page, setPage] = useState(1);\n  return <Layout>\n      <PaginationControls withForm={false} current={page} total={6} onPageChange={setPage} />\n    </Layout>;\n}",...WithoutForm.parameters?.docs?.source}}},TestRanges.parameters={...TestRanges.parameters,docs:{...TestRanges.parameters?.docs,source:{originalSource:"function TestRanges() {\n  const MyPagination = ({\n    total\n  }: {\n    total: number;\n  }) => {\n    const [page, setPage] = useState(1);\n    return <PaginationControls current={page} total={total} onPageChange={setPage} />;\n  };\n  return <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: 24\n  }}>\n      {Array(16).fill(0).map((zero, index) => index).slice(5).concat(99, 999, 9999).map(count => <div key={count}>\n            <h5>Total: {count}</h5>\n            <MyPagination total={count} />\n          </div>)}\n    </div>;\n}",...TestRanges.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","VerticalLayout","ChangeLayout","WithoutForm","TestRanges"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/common/components/pagination-controls/pagination-controls.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".pagination-controls-m__layout__fd8{display:flex}.pagination-controls-m__layout__fd8.pagination-controls-m__flow-vertical__f2b{flex-direction:column;justify-content:center}.pagination-controls-m__layout__fd8.pagination-controls-m__flow-vertical__f2b .pagination-controls-m__slot-buttons__e61{display:flex;justify-content:center}.pagination-controls-m__layout__fd8.pagination-controls-m__flow-vertical__f2b .pagination-controls-m__slot-form__c87{margin-top:24px}.pagination-controls-m__layout__fd8.pagination-controls-m__flow-horizontal__a7a{flex-direction:row;justify-content:space-between}.pagination-controls-m__layout__fd8.pagination-controls-m__flow-horizontal__a7a .pagination-controls-m__slot-form__c87{margin-left:40px}.pagination-controls-m__form__cbe{display:flex;align-items:center;justify-content:center}.pagination-controls-m__form__cbe .pagination-controls-m__label__ec2+.pagination-controls-m__input__d4b{margin-left:8px}.pagination-controls-m__label__ec2{white-space:nowrap;font-size:16px;line-height:24px;color:#9e9e9e}.pagination-controls-m__input__d4b{width:100px}.pagination-controls-m__input__d4b .pagination-controls-m__submit__b32{margin:-4px -8px}.pagination-controls-m__submit__b32{outline:none;border:none;margin:0;padding:0;width:auto;overflow:visible;background:rgba(0,0,0,0);color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:#212121;color:#fff;border-radius:4px}.pagination-controls-m__submit__b32::-moz-focus-inner{border:0;padding:0}.pagination-controls-m__submit__b32:hover{cursor:pointer}.pagination-controls-m__submit__b32:disabled{background:#ebebeb;color:#c2c2c2}.pagination-controls-m__submit__b32:focus-visible{outline:2px solid #1f84db}","",{version:3,sources:["webpack://./src/common/components/pagination-controls/pagination-controls.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss","webpack://./node_modules/@sima-land/ui-nucleons/utils.scss"],names:[],mappings:"AAGA,oCACE,YAAA,CACA,8EACE,qBAAA,CACA,sBAAA,CACA,wHACE,YAAA,CACA,sBAAA,CAEF,qHACE,eAAA,CAGJ,gFACE,kBAAA,CACA,6BAAA,CACA,uHACE,gBAAA,CAKN,kCACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,wGACE,eAAA,CAIJ,mCACE,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,aC9Ba,CDiCf,mCACE,WAAA,CAGF,uEACE,gBAAA,CAGF,oCELE,YAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,gBAAA,CAEA,wBAAA,CAGA,aAAA,CACA,YAAA,CAGA,kBAAA,CAGA,8BAAA,CACA,+BAAA,CAGA,uBAAA,CFdA,UAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBCpDa,CDqDb,UAAA,CACA,iBAAA,CEUA,sDACE,QAAA,CACA,SAAA,CFXF,0CACE,cAAA,CAEF,6CACE,kBCpDU,CDqDV,aCvDW,CDyDb,kDEYA,yBAAA",sourcesContent:["@use 'node_modules/@sima-land/ui-nucleons/colors';\n@use 'node_modules/@sima-land/ui-nucleons/utils';\n\n.layout {\n  display: flex;\n  &.flow-vertical {\n    flex-direction: column;\n    justify-content: center;\n    .slot-buttons {\n      display: flex;\n      justify-content: center;\n    }\n    .slot-form {\n      margin-top: 24px;\n    }\n  }\n  &.flow-horizontal {\n    flex-direction: row;\n    justify-content: space-between;\n    .slot-form {\n      margin-left: 40px;\n    }\n  }\n}\n\n.form {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .label + .input {\n    margin-left: 8px;\n  }\n}\n\n.label {\n  white-space: nowrap;\n  font-size: 16px;\n  line-height: 24px;\n  color: colors.$basic-gray38;\n}\n\n.input {\n  width: 100px;\n}\n\n.input .submit {\n  margin: -4px -8px;\n}\n\n.submit {\n  @include utils.reset-button;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: colors.$basic-gray87;\n  color: #fff;\n  border-radius: 4px;\n  &:hover {\n    cursor: pointer;\n  }\n  &:disabled {\n    background: colors.$basic-gray8;\n    color: colors.$basic-gray24;\n  }\n  &:focus-visible {\n    @include utils.focus-visible-style;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n","@use './colors';\n\n/**\n * Скрывает полосы прокрутки у элемента.\n */\n@mixin hidden-scrollbars {\n  scrollbar-width: none; // Firefox\n  overflow: -moz-scrollbars-none; // old Firefox\n  -ms-overflow-style: none; // IE, old Edge\n  &::-webkit-scrollbar {\n    display: none; // Chrome, Safari, Opera\n  }\n}\n\n/**\n * стилизует полосы прокрутки по дизайн-гайдам с ограничениями:\n * - в браузерах на основе webkit/blink (Chrome, Opera, Safari) полоса прокрутки не накладывается поверх контента\n * - в браузерах которые поддерживают только стандартизированный способ стилизации (Firefox) определяет только цвет ползунка\n */\n@mixin semi-stylized-scrollbars($bg-color: #fff) {\n  // firefox\n  scrollbar-width: thin;\n  scrollbar-color: colors.$basic-gray12 transparent;\n\n  // webkit\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n  &::-webkit-scrollbar-track {\n    background: $bg-color;\n    border-radius: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid $bg-color;\n    border-radius: 12px;\n    background: colors.$basic-gray12;\n  }\n}\n\n/**\n * Полный сброс стилей button до состояния сравнимого с div.\n * взято отсюда: https://gist.github.com/MoOx/9137295\n */\n@mixin reset-button {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n\n  /* Remove excess padding and border in Firefox 4+ */\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n/**\n * Добавляет стандартную визуальную подсветку состояния focus-visible.\n */\n@mixin focus-visible-style() {\n  outline: 2px solid colors.$basic-blue;\n}\n\n/**\n * Формирует стандартную визуальную подсветку для состояния focus-visible.\n */\n@mixin focus-visible() {\n  &:focus-visible {\n    @include focus-visible-style;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={layout:"pagination-controls-m__layout__fd8","flow-vertical":"pagination-controls-m__flow-vertical__f2b","slot-buttons":"pagination-controls-m__slot-buttons__e61","slot-form":"pagination-controls-m__slot-form__c87","flow-horizontal":"pagination-controls-m__flow-horizontal__a7a",form:"pagination-controls-m__form__cbe",label:"pagination-controls-m__label__ec2",input:"pagination-controls-m__input__d4b",submit:"pagination-controls-m__submit__b32"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);