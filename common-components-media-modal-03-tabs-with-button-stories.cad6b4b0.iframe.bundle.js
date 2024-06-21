"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[694],{"./node_modules/@sima-land/ui-nucleons/text-button/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.A=void 0;var text_button_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/text-button/text-button.js");Object.defineProperty(exports,"A",{enumerable:!0,get:function(){return text_button_1.TextButton}})},"./node_modules/@sima-land/ui-nucleons/text-button/text-button.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextButton=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),text_button_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/text-button/text-button.m.scss")),cx=bind_1.default.bind(text_button_m_scss_1.default);exports.TextButton=function TextButton({size="m",color="basic-blue",children,className,startIcon:StartIcon,endIcon:EndIcon,buttonRef,anchorRef,underline,disabled,iconGutter=8,"data-testid":testId="text-button",...restProps}){const rooClassName=cx("root",color&&"unset"!==color&&`color-${color}`,size&&"unset"!==size&&`size-${size}`,"number"==typeof iconGutter&&`icon-gutter-${iconGutter}`,underline&&"underline",disabled&&"disabled",className),content=(0,jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment,{children:[StartIcon&&(0,jsx_runtime_1.jsx)(StartIcon,{className:cx("icon-start")}),children,EndIcon&&(0,jsx_runtime_1.jsx)(EndIcon,{className:cx("icon-end")})]});let result;switch(restProps.as){case"anchor":{const{as,...anchorProps}=restProps;result=(0,jsx_runtime_1.jsx)("a",{...anchorProps,ref:anchorRef,className:rooClassName,"data-testid":testId,children:content});break}default:{const{as,...buttonProps}=restProps;result=(0,jsx_runtime_1.jsx)("button",{...buttonProps,ref:buttonRef,className:rooClassName,disabled,"data-testid":testId,children:content});break}}return result}},"./docs/stories/common/components/media-modal/03-tabs-with-button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MediaTabsWithButton:()=>MediaTabsWithButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/components/media-modal/index.ts"),_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/index.js"),_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/top-bar/index.js"),_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/tabs/index.js"),_sima_land_ui_nucleons_text_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/text-button/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/MediaLayout",parameters:{storySource:{source:"import {\n  MediaLayout,\n  MediaHeader,\n  MediaMain,\n  MediaAside,\n  MediaFooter,\n  HeaderLayout,\n  Preset,\n} from '@sima-land/moleculas/common/components/media-modal';\nimport { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';\nimport { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';\nimport { Tabs } from '@sima-land/ui-nucleons/tabs';\nimport { TextButton } from '@sima-land/ui-nucleons/text-button';\n\nexport default {\n  title: 'common/MediaLayout',\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nexport function MediaTabsWithButton() {\n  const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    background: 'rgb(33, 33, 33, 0.16)',\n  };\n\n  return (\n    <Modal {...getResponsiveModalProps({ size: 'fullscreen' })}>\n      <TopBar size='unset' buttons={navigationButtons({ onClose: () => void 0 })} />\n      <ModalBody>\n        <MediaLayout>\n          <MediaHeader>\n            <HeaderLayout>\n              <HeaderLayout.Tabs>\n                <Tabs {...Preset.headerTabs()}>\n                  <Tabs.Item name='Раздел 1' />\n                  <Tabs.Item name='Раздел 2' selected />\n                  <Tabs.Item name='Раздел 3' />\n                  <Tabs.Item name='Раздел 4' />\n                  <Tabs.Item name='Раздел 5' />\n                </Tabs>\n              </HeaderLayout.Tabs>\n              <HeaderLayout.Button>\n                <TextButton {...Preset.headerButton()} />\n              </HeaderLayout.Button>\n            </HeaderLayout>\n          </MediaHeader>\n\n          <MediaMain>\n            <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>\n              Main\n            </div>\n          </MediaMain>\n\n          <MediaAside>\n            <div style={{ ...styles, width: '100%', height: '100%', minHeight: '40px' }}>Aside</div>\n          </MediaAside>\n\n          <MediaFooter>\n            <div style={{ ...styles, width: '100%', height: '100px' }}>Footer</div>\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>\n  );\n}\n\nMediaTabsWithButton.storyName = 'Вкладки и кнопка';\n",locationsMap:{"media-tabs-with-button":{startLoc:{col:7,line:22},endLoc:{col:1,line:69},startBody:{col:7,line:22},endBody:{col:1,line:69}}}},layout:"fullscreen"}},MediaTabsWithButton=function MediaTabsWithButton(){const styles={display:"flex",justifyContent:"center",alignItems:"center",background:"rgb(33, 33, 33, 0.16)"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.u_,{...(0,_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.B1)({size:"fullscreen"}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_2__.TopBar,{size:"unset",buttons:(0,_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_2__.navigationButtons)({onClose:()=>{}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.fe,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.bu,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Ei,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.T$,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.T$.Tabs,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ,{..._sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Sk.headerTabs(),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Раздел 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Раздел 2",selected:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Раздел 3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Раздел 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Раздел 5"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.T$.Button,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_text_button__WEBPACK_IMPORTED_MODULE_4__.A,{..._sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Sk.headerButton()})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.xT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{...styles,position:"absolute",width:"100%",height:"100%"},children:"Main"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.nm,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{...styles,width:"100%",height:"100%",minHeight:"40px"},children:"Aside"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.CT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{...styles,width:"100%",height:"100px"},children:"Footer"})})]})})]})};MediaTabsWithButton.storyName="Вкладки и кнопка",MediaTabsWithButton.parameters={...MediaTabsWithButton.parameters,docs:{...MediaTabsWithButton.parameters?.docs,source:{originalSource:"function MediaTabsWithButton() {\n  const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    background: 'rgb(33, 33, 33, 0.16)'\n  };\n  return <Modal {...getResponsiveModalProps({\n    size: 'fullscreen'\n  })}>\n      <TopBar size='unset' buttons={navigationButtons({\n      onClose: () => void 0\n    })} />\n      <ModalBody>\n        <MediaLayout>\n          <MediaHeader>\n            <HeaderLayout>\n              <HeaderLayout.Tabs>\n                <Tabs {...Preset.headerTabs()}>\n                  <Tabs.Item name='Раздел 1' />\n                  <Tabs.Item name='Раздел 2' selected />\n                  <Tabs.Item name='Раздел 3' />\n                  <Tabs.Item name='Раздел 4' />\n                  <Tabs.Item name='Раздел 5' />\n                </Tabs>\n              </HeaderLayout.Tabs>\n              <HeaderLayout.Button>\n                <TextButton {...Preset.headerButton()} />\n              </HeaderLayout.Button>\n            </HeaderLayout>\n          </MediaHeader>\n\n          <MediaMain>\n            <div style={{\n            ...styles,\n            position: 'absolute',\n            width: '100%',\n            height: '100%'\n          }}>\n              Main\n            </div>\n          </MediaMain>\n\n          <MediaAside>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '100%',\n            minHeight: '40px'\n          }}>Aside</div>\n          </MediaAside>\n\n          <MediaFooter>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '100px'\n          }}>Footer</div>\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>;\n}",...MediaTabsWithButton.parameters?.docs?.source}}};const __namedExportsOrder=["MediaTabsWithButton"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/text-button/text-button.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".text-button-m__root__af1{outline:none;border:none;margin:0;padding:0;width:auto;overflow:visible;background:rgba(0,0,0,0);color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;display:inline-flex;align-items:center;font-weight:600;white-space:nowrap;background:rgba(0,0,0,0);padding:0;border:0}.text-button-m__root__af1::-moz-focus-inner{border:0;padding:0}.text-button-m__root__af1:focus-visible{outline:2px solid #1f84db}.text-button-m__root__af1,.text-button-m__root__af1:link,.text-button-m__root__af1:visited,.text-button-m__root__af1:hover,.text-button-m__root__af1:active{cursor:default;text-decoration:none;border-bottom-color:rgba(0,0,0,0)}.text-button-m__root__af1.text-button-m__underline__f80,.text-button-m__root__af1:link.text-button-m__underline__f80,.text-button-m__root__af1:visited.text-button-m__underline__f80,.text-button-m__root__af1:hover.text-button-m__underline__f80,.text-button-m__root__af1:active.text-button-m__underline__f80{box-shadow:inset 0 -1px 0 0 currentColor}.text-button-m__root__af1:hover{cursor:pointer}.text-button-m__size-s__a0c{font-size:14px;line-height:20px}.text-button-m__size-m__a5a{font-size:16px;line-height:24px}.text-button-m__icon-gutter-4__ab7{--text-button-icon-gutter: 4px}.text-button-m__icon-gutter-8__bfd{--text-button-icon-gutter: 8px}.text-button-m__root__af1.text-button-m__disabled__af8{color:#c2c2c2;pointer-events:none}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-blue__f38{color:#1f84db}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-blue__f38:hover{color:#00599d}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-gray87__bb3{color:#212121}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-gray87__bb3:hover{color:#757575}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-gray38__e5b{color:#9e9e9e}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-gray38__e5b:hover{color:#757575}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-white__be0{color:#fff}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-basic-white__be0:hover{color:#f5f5f5}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-additional-red__cca{color:#fb3a2f}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-additional-red__cca:hover{color:#d50000}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-additional-teal__ad6{color:#09ab8b}.text-button-m__root__af1:not(.text-button-m__disabled__af8).text-button-m__color-additional-teal__ad6:hover{color:#00c853}.text-button-m__icon-start__b60,.text-button-m__icon-end__c2a{flex-shrink:0;fill:currentColor}.text-button-m__icon-start__b60{margin-right:var(--text-button-icon-gutter)}.text-button-m__icon-end__c2a{margin-left:var(--text-button-icon-gutter)}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/text-button/text-button.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/utils.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss","webpack://./node_modules/@sima-land/ui-nucleons/link/link-util.scss"],names:[],mappings:"AAIA,0BCwCE,YAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,gBAAA,CAEA,wBAAA,CAGA,aAAA,CACA,YAAA,CAGA,kBAAA,CAGA,8BAAA,CACA,+BAAA,CAGA,uBAAA,CD1DA,mBAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,wBAAA,CACA,SAAA,CACA,QAAA,CCuDA,4CACE,QAAA,CACA,SAAA,CAeF,wCAPA,yBAAA,CD7DF,4JAKE,cAAA,CACA,oBAAA,CACA,iCAAA,CACA,kTACE,wCAAA,CAIJ,gCACE,cAAA,CAGF,4BACE,cAAA,CACA,gBAAA,CAGF,4BACE,cAAA,CACA,gBAAA,CAGF,mCACE,8BAAA,CAGF,mCACE,8BAAA,CAIF,uDACE,aE7Ca,CF8Cb,mBAAA,CAGF,kGGtDI,aDDS,CCET,wGACE,aDkCiB,CFsBvB,oGGrDI,aDLW,CCMX,0GACE,aDJS,CF2Df,oGGpDI,aDNW,CCOX,0GACE,aDTS,CF+Df,mGGnDI,UDLU,CCMV,yGACE,aDTQ,CF8Dd,sGGlDI,aDNa,CCOb,4GACE,aDTgB,CF6DtB,uGGjDI,aDRc,CCSd,6GACE,aDTa,CF6DnB,8DAEE,aAAA,CACA,iBAAA,CAGF,gCACE,2CAAA,CAGF,8BACE,0CAAA",sourcesContent:["@use '../colors';\n@use '../utils';\n@use '../link/link-util';\n\n.root {\n  @include utils.reset-button;\n  @include utils.focus-visible;\n  display: inline-flex;\n  align-items: center;\n  font-weight: 600;\n  white-space: nowrap;\n  background: transparent;\n  padding: 0;\n  border: 0;\n  // ВАЖНО: не надо указывать здесь сброс margin так как его сложно перебить при сборке стилей\n}\n\n.root,\n.root:link,\n.root:visited,\n.root:hover,\n.root:active {\n  cursor: default;\n  text-decoration: none;\n  border-bottom-color: transparent;\n  &.underline {\n    box-shadow: inset 0 -1px 0 0 currentColor;\n  }\n}\n\n.root:hover {\n  cursor: pointer;\n}\n\n.size-s {\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.size-m {\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.icon-gutter-4 {\n  --text-button-icon-gutter: 4px;\n}\n\n.icon-gutter-8 {\n  --text-button-icon-gutter: 8px;\n}\n\n// ниже двойные классы для высокой специфичности в монолите\n.root.disabled {\n  color: colors.$basic-gray24;\n  pointer-events: none;\n}\n\n.root:not(.disabled).color-basic-blue {\n  @include link-util.color('basic-blue');\n}\n\n.root:not(.disabled).color-basic-gray87 {\n  @include link-util.color('basic-gray87');\n}\n\n.root:not(.disabled).color-basic-gray38 {\n  @include link-util.color('basic-gray38');\n}\n\n.root:not(.disabled).color-basic-white {\n  @include link-util.color('basic-white');\n}\n\n.root:not(.disabled).color-additional-red {\n  @include link-util.color('additional-red');\n}\n\n.root:not(.disabled).color-additional-teal {\n  @include link-util.color('additional-teal');\n}\n\n// иконки\n.icon-start,\n.icon-end {\n  flex-shrink: 0;\n  fill: currentColor;\n}\n\n.icon-start {\n  margin-right: var(--text-button-icon-gutter);\n}\n\n.icon-end {\n  margin-left: var(--text-button-icon-gutter);\n}\n","@use './colors';\n\n/**\n * Скрывает полосы прокрутки у элемента.\n */\n@mixin hidden-scrollbars {\n  scrollbar-width: none; // Firefox\n  overflow: -moz-scrollbars-none; // old Firefox\n  -ms-overflow-style: none; // IE, old Edge\n  &::-webkit-scrollbar {\n    display: none; // Chrome, Safari, Opera\n  }\n}\n\n/**\n * стилизует полосы прокрутки по дизайн-гайдам с ограничениями:\n * - в браузерах на основе webkit/blink (Chrome, Opera, Safari) полоса прокрутки не накладывается поверх контента\n * - в браузерах которые поддерживают только стандартизированный способ стилизации (Firefox) определяет только цвет ползунка\n */\n@mixin semi-stylized-scrollbars($bg-color: #fff) {\n  // firefox\n  scrollbar-width: thin;\n  scrollbar-color: colors.$basic-gray12 transparent;\n\n  // webkit\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n  &::-webkit-scrollbar-track {\n    background: $bg-color;\n    border-radius: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid $bg-color;\n    border-radius: 12px;\n    background: colors.$basic-gray12;\n  }\n}\n\n/**\n * Полный сброс стилей button до состояния сравнимого с div.\n * взято отсюда: https://gist.github.com/MoOx/9137295\n */\n@mixin reset-button {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n\n  /* Remove excess padding and border in Firefox 4+ */\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n/**\n * Добавляет стандартную визуальную подсветку состояния focus-visible.\n */\n@mixin focus-visible-style() {\n  outline: 2px solid colors.$basic-blue;\n}\n\n/**\n * Формирует стандартную визуальную подсветку для состояния focus-visible.\n */\n@mixin focus-visible() {\n  &:focus-visible {\n    @include focus-visible-style;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n","@use '../colors';\n\n@mixin color($key) {\n  @if $key == 'basic-blue' {\n    color: colors.$basic-blue;\n    &:hover {\n      color: colors.$additional-deep-blue;\n    }\n  } @else if $key == 'basic-gray87' {\n    color: colors.$basic-gray87;\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  } @else if $key == 'basic-gray38' {\n    color: colors.$basic-gray38;\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  } @else if $key == 'basic-white' {\n    color: colors.$basic-white;\n    &:hover {\n      color: colors.$basic-gray4;\n    }\n  } @else if $key == 'additional-red' {\n    color: colors.$additional-red;\n    &:hover {\n      color: colors.$additional-deep-red;\n    }\n  } @else if $key == 'additional-teal' {\n    color: colors.$additional-teal;\n    &:hover {\n      color: colors.$additional-green;\n    }\n  } @else {\n    @warn '[link-color] No such color `#{$key}`.';\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"text-button-m__root__af1",underline:"text-button-m__underline__f80","size-s":"text-button-m__size-s__a0c","size-m":"text-button-m__size-m__a5a","icon-gutter-4":"text-button-m__icon-gutter-4__ab7","icon-gutter-8":"text-button-m__icon-gutter-8__bfd",disabled:"text-button-m__disabled__af8","color-basic-blue":"text-button-m__color-basic-blue__f38","color-basic-gray87":"text-button-m__color-basic-gray87__bb3","color-basic-gray38":"text-button-m__color-basic-gray38__e5b","color-basic-white":"text-button-m__color-basic-white__be0","color-additional-red":"text-button-m__color-additional-red__cca","color-additional-teal":"text-button-m__color-additional-teal__ad6","icon-start":"text-button-m__icon-start__b60","icon-end":"text-button-m__icon-end__c2a"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/text-button/text-button.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_text_button_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/text-button/text-button.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_text_button_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_text_button_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_text_button_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_text_button_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);