"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[7924],{"./node_modules/@sima-land/ui-nucleons/helpers/layer.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useLayer=exports.LayerProvider=void 0;const react_1=__webpack_require__("./node_modules/react/index.js"),LayerContext=(0,react_1.createContext)(0);exports.LayerProvider=LayerContext.Provider,exports.useLayer=function useLayer(){return(0,react_1.useContext)(LayerContext)}},"./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Check.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M21.678 5.265a1 1 0 0 1 .057 1.413l-12 13a1 1 0 0 1-1.36.103l-5-4a1 1 0 0 1 1.25-1.562l4.272 3.418L20.265 5.322a1 1 0 0 1 1.413-.057Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./src/mobile/components/select-screen/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,SizeXL:()=>SizeXL,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),layout=__webpack_require__("./node_modules/@sima-land/ui-nucleons/layout/index.js"),Check=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Check.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),select_screen_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/mobile/components/select-screen/select-screen.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(select_screen_module.Z,options);const select_screen_select_screen_module=select_screen_module.Z&&select_screen_module.Z.locals?select_screen_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function SelectScreenLayout({children,...props}){return(0,jsx_runtime.jsx)(layout.MobileLayout,{...props,disabledOn:["mxs","ms"],children:(0,jsx_runtime.jsx)("div",{className:select_screen_select_screen_module.container,children:react.Children.toArray(children).filter((x=>(0,react.isValidElement)(x)&&x.type===SelectScreenOption))})})}function SelectScreenOption({children,className,selected,withSelectedIcon=selected,size="m",...props}){return(0,jsx_runtime.jsxs)("button",{...props,type:"button",className:classnames_default()(select_screen_select_screen_module.item,className,select_screen_select_screen_module[`size-${size}`]),"data-testid":"select-screen:option",children:[children,selected&&withSelectedIcon&&(0,jsx_runtime.jsx)(Check.Z,{role:"presentation",className:select_screen_select_screen_module.icon})]})}try{SelectScreenLayout.displayName="SelectScreenLayout",SelectScreenLayout.__docgenInfo={description:"Отступы для вывода опций в компоненте Screen.",displayName:"SelectScreenLayout",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/mobile/components/select-screen/select-screen.tsx#SelectScreenLayout"]={docgenInfo:SelectScreenLayout.__docgenInfo,name:"SelectScreenLayout",path:"src/mobile/components/select-screen/select-screen.tsx#SelectScreenLayout"})}catch(__react_docgen_typescript_loader_error){}try{SelectScreenOption.displayName="SelectScreenOption",SelectScreenOption.__docgenInfo={description:"Опция.",displayName:"SelectScreenOption",props:{size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'}]}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean | undefined"}},withSelectedIcon:{defaultValue:null,description:"",name:"withSelectedIcon",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/mobile/components/select-screen/select-screen.tsx#SelectScreenOption"]={docgenInfo:SelectScreenOption.__docgenInfo,name:"SelectScreenOption",path:"src/mobile/components/select-screen/select-screen.tsx#SelectScreenOption"})}catch(__react_docgen_typescript_loader_error){}var modal=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/index.js"),input=__webpack_require__("./node_modules/@sima-land/ui-nucleons/input/index.js"),top_bar=__webpack_require__("./node_modules/@sima-land/ui-nucleons/top-bar/index.js");const index_stories={title:"mobile/SelectScreenLayout",component:SelectScreenLayout,parameters:{storySource:{source:"import {\n  SelectScreenLayout,\n  SelectScreenOption,\n} from '@sima-land/moleculas/mobile/components/select-screen';\nimport { Modal, ModalBody } from '@sima-land/ui-nucleons/modal';\nimport { CSSProperties, useState } from 'react';\nimport { Input } from '@sima-land/ui-nucleons/input';\nimport { MobileLayout } from '@sima-land/ui-nucleons/layout';\nimport { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';\n\nexport default {\n  title: 'mobile/SelectScreenLayout',\n  component: SelectScreenLayout,\n  parameters: {\n    layout: 'fullscreen',\n    docs: {\n      description: {\n        component: 'Экран выбора опции из списка (обычно открывается по нажатию на поле)',\n      },\n    },\n  },\n};\n\nexport const Primary = () => {\n  const items: string[] = [\n    'Верх-Исетский',\n    'Чкаловский',\n    'Железнодорожный',\n    'Кировский',\n    'Орджоникидзевский',\n    'Октябрьский',\n    'Ленинский',\n  ];\n\n  const [opened, toggleModal] = useState<boolean>(false);\n  const [selectedId, selectItem] = useState<number>(1);\n\n  return (\n    <>\n      <MobileLayout style={{ padding: '16px 0' }}>\n        <Input\n          style={{ width: '100%' }}\n          label='Район'\n          value={items[selectedId]}\n          rootProps={{\n            onClick: e => {\n              e.preventDefault();\n              toggleModal(true);\n            },\n          }}\n        />\n      </MobileLayout>\n\n      {opened && (\n        <Modal size='fullscreen'>\n          <TopBar\n            divided\n            title='Район'\n            buttons={navigationButtons({ onBack: () => toggleModal(false) })}\n          />\n\n          <ModalBody>\n            <SelectScreenLayout style={{ padding: '16px 0' }}>\n              {items.map((item, id) => (\n                <SelectScreenOption\n                  key={id}\n                  selected={id === selectedId}\n                  onClick={() => {\n                    selectItem(id);\n                    toggleModal(false);\n                  }}\n                >\n                  {item}\n                </SelectScreenOption>\n              ))}\n            </SelectScreenLayout>\n          </ModalBody>\n        </Modal>\n      )}\n    </>\n  );\n};\n\nPrimary.storyName = 'Простой пример';\n\nexport const SizeXL = () => {\n  const [opened, toggleModal] = useState<boolean>(false);\n  const [selectedId, selectItem] = useState<number>(0);\n\n  const items: Array<{ name: string; shortName: string }> = [\n    { shortName: 'RUB', name: 'Российский рубль' },\n    { shortName: 'USD', name: 'Американский доллар' },\n    { shortName: 'EUR', name: 'Единая европейская валюта' },\n  ];\n\n  const styles: Record<string, CSSProperties> = {\n    item: {\n      display: 'grid',\n      gridTemplateColumns: '48px 1fr',\n      gridTemplateRows: '24px 20px',\n      gap: '4px 16px',\n    },\n    icon: {\n      width: '48px',\n      height: '48px',\n      background: '#eee',\n      gridColumn: '1 / 3',\n      gridRow: '1 / 2',\n      borderRadius: '50%',\n    },\n    shortName: {\n      fontSize: '16px',\n      lineHeight: '24px',\n      gridColumn: '2 / 3',\n      gridRow: '1 / 2',\n    },\n    name: {\n      fontSize: '14px',\n      lineHeight: '20px',\n      color: '#9e9e9e',\n      gridColumn: '2 / 3',\n      gridRow: '2 / 3',\n    },\n  };\n\n  return (\n    <>\n      <MobileLayout style={{ padding: '16px 0' }}>\n        <Input\n          style={{ width: '100%' }}\n          label='Район (нажмите чтобы выбрать)'\n          value={items[selectedId].name}\n          rootProps={{\n            onClick: e => {\n              e.preventDefault();\n              toggleModal(true);\n            },\n          }}\n        />\n      </MobileLayout>\n\n      {opened && (\n        <Modal size='fullscreen'>\n          <TopBar\n            divided\n            title='Район'\n            buttons={navigationButtons({ onBack: () => toggleModal(false) })}\n          />\n\n          <ModalBody>\n            <SelectScreenLayout style={{ padding: '16px 0' }}>\n              {items.map((item, id) => (\n                <SelectScreenOption\n                  size='xl'\n                  key={id}\n                  selected={id === selectedId}\n                  onClick={() => {\n                    selectItem(id);\n                    toggleModal(false);\n                  }}\n                >\n                  <div style={styles.item}>\n                    <div style={styles.icon} />\n                    <div style={styles.shortName}>{item.shortName}</div>\n                    <div style={styles.name}>{item.name}</div>\n                  </div>\n                </SelectScreenOption>\n              ))}\n            </SelectScreenLayout>\n          </ModalBody>\n        </Modal>\n      )}\n    </>\n  );\n};\n\nSizeXL.storyName = 'Большие опции';\n",locationsMap:{primary:{startLoc:{col:23,line:24},endLoc:{col:1,line:82},startBody:{col:23,line:24},endBody:{col:1,line:82}},"size-xl":{startLoc:{col:22,line:86},endLoc:{col:1,line:175},startBody:{col:22,line:86},endBody:{col:1,line:175}}}},layout:"fullscreen",docs:{description:{component:"Экран выбора опции из списка (обычно открывается по нажатию на поле)"}}}},Primary=()=>{const items=["Верх-Исетский","Чкаловский","Железнодорожный","Кировский","Орджоникидзевский","Октябрьский","Ленинский"],[opened,toggleModal]=(0,react.useState)(!1),[selectedId,selectItem]=(0,react.useState)(1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(layout.MobileLayout,{style:{padding:"16px 0"},children:(0,jsx_runtime.jsx)(input.I,{style:{width:"100%"},label:"Район",value:items[selectedId],rootProps:{onClick:e=>{e.preventDefault(),toggleModal(!0)}}})}),opened&&(0,jsx_runtime.jsxs)(modal.u_,{size:"fullscreen",children:[(0,jsx_runtime.jsx)(top_bar.TopBar,{divided:!0,title:"Район",buttons:(0,top_bar.navigationButtons)({onBack:()=>toggleModal(!1)})}),(0,jsx_runtime.jsx)(modal.fe,{children:(0,jsx_runtime.jsx)(SelectScreenLayout,{style:{padding:"16px 0"},children:items.map(((item,id)=>(0,jsx_runtime.jsx)(SelectScreenOption,{selected:id===selectedId,onClick:()=>{selectItem(id),toggleModal(!1)},children:item},id)))})})]})]})};Primary.storyName="Простой пример";const SizeXL=()=>{const[opened,toggleModal]=(0,react.useState)(!1),[selectedId,selectItem]=(0,react.useState)(0),items=[{shortName:"RUB",name:"Российский рубль"},{shortName:"USD",name:"Американский доллар"},{shortName:"EUR",name:"Единая европейская валюта"}],styles={item:{display:"grid",gridTemplateColumns:"48px 1fr",gridTemplateRows:"24px 20px",gap:"4px 16px"},icon:{width:"48px",height:"48px",background:"#eee",gridColumn:"1 / 3",gridRow:"1 / 2",borderRadius:"50%"},shortName:{fontSize:"16px",lineHeight:"24px",gridColumn:"2 / 3",gridRow:"1 / 2"},name:{fontSize:"14px",lineHeight:"20px",color:"#9e9e9e",gridColumn:"2 / 3",gridRow:"2 / 3"}};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(layout.MobileLayout,{style:{padding:"16px 0"},children:(0,jsx_runtime.jsx)(input.I,{style:{width:"100%"},label:"Район (нажмите чтобы выбрать)",value:items[selectedId].name,rootProps:{onClick:e=>{e.preventDefault(),toggleModal(!0)}}})}),opened&&(0,jsx_runtime.jsxs)(modal.u_,{size:"fullscreen",children:[(0,jsx_runtime.jsx)(top_bar.TopBar,{divided:!0,title:"Район",buttons:(0,top_bar.navigationButtons)({onBack:()=>toggleModal(!1)})}),(0,jsx_runtime.jsx)(modal.fe,{children:(0,jsx_runtime.jsx)(SelectScreenLayout,{style:{padding:"16px 0"},children:items.map(((item,id)=>(0,jsx_runtime.jsx)(SelectScreenOption,{size:"xl",selected:id===selectedId,onClick:()=>{selectItem(id),toggleModal(!1)},children:(0,jsx_runtime.jsxs)("div",{style:styles.item,children:[(0,jsx_runtime.jsx)("div",{style:styles.icon}),(0,jsx_runtime.jsx)("div",{style:styles.shortName,children:item.shortName}),(0,jsx_runtime.jsx)("div",{style:styles.name,children:item.name})]})},id)))})})]})]})};SizeXL.storyName="Большие опции",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"() => {\n  const items: string[] = ['Верх-Исетский', 'Чкаловский', 'Железнодорожный', 'Кировский', 'Орджоникидзевский', 'Октябрьский', 'Ленинский'];\n  const [opened, toggleModal] = useState<boolean>(false);\n  const [selectedId, selectItem] = useState<number>(1);\n  return <>\n      <MobileLayout style={{\n      padding: '16px 0'\n    }}>\n        <Input style={{\n        width: '100%'\n      }} label='Район' value={items[selectedId]} rootProps={{\n        onClick: e => {\n          e.preventDefault();\n          toggleModal(true);\n        }\n      }} />\n      </MobileLayout>\n\n      {opened && <Modal size='fullscreen'>\n          <TopBar divided title='Район' buttons={navigationButtons({\n        onBack: () => toggleModal(false)\n      })} />\n\n          <ModalBody>\n            <SelectScreenLayout style={{\n          padding: '16px 0'\n        }}>\n              {items.map((item, id) => <SelectScreenOption key={id} selected={id === selectedId} onClick={() => {\n            selectItem(id);\n            toggleModal(false);\n          }}>\n                  {item}\n                </SelectScreenOption>)}\n            </SelectScreenLayout>\n          </ModalBody>\n        </Modal>}\n    </>;\n}",...Primary.parameters?.docs?.source}}},SizeXL.parameters={...SizeXL.parameters,docs:{...SizeXL.parameters?.docs,source:{originalSource:"() => {\n  const [opened, toggleModal] = useState<boolean>(false);\n  const [selectedId, selectItem] = useState<number>(0);\n  const items: Array<{\n    name: string;\n    shortName: string;\n  }> = [{\n    shortName: 'RUB',\n    name: 'Российский рубль'\n  }, {\n    shortName: 'USD',\n    name: 'Американский доллар'\n  }, {\n    shortName: 'EUR',\n    name: 'Единая европейская валюта'\n  }];\n  const styles: Record<string, CSSProperties> = {\n    item: {\n      display: 'grid',\n      gridTemplateColumns: '48px 1fr',\n      gridTemplateRows: '24px 20px',\n      gap: '4px 16px'\n    },\n    icon: {\n      width: '48px',\n      height: '48px',\n      background: '#eee',\n      gridColumn: '1 / 3',\n      gridRow: '1 / 2',\n      borderRadius: '50%'\n    },\n    shortName: {\n      fontSize: '16px',\n      lineHeight: '24px',\n      gridColumn: '2 / 3',\n      gridRow: '1 / 2'\n    },\n    name: {\n      fontSize: '14px',\n      lineHeight: '20px',\n      color: '#9e9e9e',\n      gridColumn: '2 / 3',\n      gridRow: '2 / 3'\n    }\n  };\n  return <>\n      <MobileLayout style={{\n      padding: '16px 0'\n    }}>\n        <Input style={{\n        width: '100%'\n      }} label='Район (нажмите чтобы выбрать)' value={items[selectedId].name} rootProps={{\n        onClick: e => {\n          e.preventDefault();\n          toggleModal(true);\n        }\n      }} />\n      </MobileLayout>\n\n      {opened && <Modal size='fullscreen'>\n          <TopBar divided title='Район' buttons={navigationButtons({\n        onBack: () => toggleModal(false)\n      })} />\n\n          <ModalBody>\n            <SelectScreenLayout style={{\n          padding: '16px 0'\n        }}>\n              {items.map((item, id) => <SelectScreenOption size='xl' key={id} selected={id === selectedId} onClick={() => {\n            selectItem(id);\n            toggleModal(false);\n          }}>\n                  <div style={styles.item}>\n                    <div style={styles.icon} />\n                    <div style={styles.shortName}>{item.shortName}</div>\n                    <div style={styles.name}>{item.name}</div>\n                  </div>\n                </SelectScreenOption>)}\n            </SelectScreenLayout>\n          </ModalBody>\n        </Modal>}\n    </>;\n}",...SizeXL.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","SizeXL"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/mobile/components/select-screen/select-screen.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".select-screen-module__container__c11{--gutter: 24px;margin:0 auto;max-width:calc(var(--gutter)*5 + (var(--layoutWidth) - var(--gutter)*7)*6/8)}@media(max-width: 719px){.select-screen-module__container__c11{--gutter: 16px}}@media(max-width: 479px){.select-screen-module__container__c11{max-width:none}}.select-screen-module__item__fb7{display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px 16px;font-size:16px;line-height:24px;height:48px;margin:0;border:0;outline:0;font:inherit;background-color:rgba(0,0,0,0);text-align:left}.select-screen-module__item__fb7:active{background-color:#f5f5f5}.select-screen-module__item__fb7:disabled{color:#c2c2c2}.select-screen-module__item__fb7:disabled .select-screen-module__icon__d40{fill:#c2c2c2}.select-screen-module__size-s__ec9{height:40px}.select-screen-module__size-m__b01{height:48px}.select-screen-module__size-l__ca3{height:56px}.select-screen-module__size-xl__aea{height:72px}.select-screen-module__icon__d40{display:block;margin-left:8px;fill:#212121}","",{version:3,sources:["webpack://./src/mobile/components/select-screen/select-screen.module.scss","webpack://./node_modules/@sima-land/ui-nucleons/breakpoints.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAGA,sCACE,cAAA,CACA,aAAA,CACA,4EAAA,CC2BE,yBD9BJ,sCAMI,cAAA,CAAA,CCwBA,yBD9BJ,sCAUI,cAAA,CAAA,CAIJ,iCACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,UAAA,CACA,gBAAA,CACA,cAAA,CACA,gBAAA,CACA,WAAA,CACA,QAAA,CACA,QAAA,CACA,SAAA,CACA,YAAA,CACA,8BAAA,CACA,eAAA,CACA,wCACE,wBErBU,CFuBZ,0CACE,aE3BW,CF4BX,2EACE,YE7BS,CFkCf,mCACE,WAAA,CAGF,mCACE,WAAA,CAGF,mCACE,WAAA,CAGF,oCACE,WAAA,CAGF,iCACE,aAAA,CACA,eAAA,CACA,YE1Da",sourcesContent:["@use 'node_modules/@sima-land/ui-nucleons/breakpoints';\n@use 'node_modules/@sima-land/ui-nucleons/colors';\n\n.container {\n  --gutter: 24px;\n  margin: 0 auto;\n  max-width: calc((var(--gutter) * 5) + ((var(--layoutWidth) - (var(--gutter) * 7)) * 6 / 8));\n\n  @include breakpoints.down('mm') {\n    --gutter: 16px;\n  }\n\n  @include breakpoints.down('ms') {\n    max-width: none;\n  }\n}\n\n.item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 8px 16px;\n  font-size: 16px;\n  line-height: 24px;\n  height: 48px;\n  margin: 0;\n  border: 0;\n  outline: 0;\n  font: inherit;\n  background-color: transparent;\n  text-align: left;\n  &:active {\n    background-color: colors.$basic-gray4;\n  }\n  &:disabled {\n    color: colors.$basic-gray24;\n    .icon {\n      fill: colors.$basic-gray24;\n    }\n  }\n}\n\n.size-s {\n  height: 40px;\n}\n\n.size-m {\n  height: 48px;\n}\n\n.size-l {\n  height: 56px;\n}\n\n.size-xl {\n  height: 72px;\n}\n\n.icon {\n  display: block;\n  margin-left: 8px;\n  fill: colors.$basic-gray87;\n}\n",'/* stylelint-disable length-zero-no-unit */\n$map: (\n  // ВАЖНО: тут именно 0px а не 0 - в Safari нельзя использовать @media (min-width: 0)\n  mxs: 0px,\n\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px\n) !default;\n/* stylelint-enable length-zero-no-unit */\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n',"// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"select-screen-module__container__c11",item:"select-screen-module__item__fb7",icon:"select-screen-module__icon__d40","size-s":"select-screen-module__size-s__ec9","size-m":"select-screen-module__size-m__b01","size-l":"select-screen-module__size-l__ca3","size-xl":"select-screen-module__size-xl__aea"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);