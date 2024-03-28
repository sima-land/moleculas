"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[3369],{"./node_modules/@sima-land/ui-nucleons/tabs/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.mQ=void 0;var tabs_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/tabs/tabs.js");Object.defineProperty(exports,"mQ",{enumerable:!0,get:function(){return tabs_1.Tabs}})},"./node_modules/@sima-land/ui-nucleons/tabs/tabs.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tabs=exports.Tab=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),tabs_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/tabs/tabs.m.scss")),cx=bind_1.default.bind(tabs_m_scss_1.default);function Tab({name,selected,disabled,onClick,children,className,style,"data-testid":testId="tab"}){return(0,jsx_runtime_1.jsx)("li",{className:cx("item",{selected,disabled},className),style,onClick:disabled?void 0:onClick,"data-testid":testId,children:void 0!==name?String(name):children})}function Tabs({children,view="clean",stretch=!1,gapSize="m",className,style,"data-testid":testId="tabs"}){const rootClassName=cx("root",`view-${view}`,gapSize&&"unset"!==gapSize&&`gap-${gapSize}`,{stretch},className);return(0,jsx_runtime_1.jsx)("ul",{"data-testid":testId,className:rootClassName,style,children})}exports.Tab=Tab,exports.Tabs=Tabs,Tabs.Item=Tab},"./src/common/components/media-modal/__stories__/loading-video.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoadingVideo:()=>LoadingVideo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/components/media-modal/index.ts"),_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/index.js"),_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/top-bar/index.js"),_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/tabs/index.js"),_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/layout/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/MediaLayout",component:_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.bu,parameters:{storySource:{source:"import {\n  MediaLayout,\n  MediaHeader,\n  MediaMain,\n  MediaAside,\n  MediaFooter,\n  Preset,\n  HeaderLayout,\n  Thumbnails,\n  Thumbnail,\n  ProductBrief,\n  MediaView,\n} from '@sima-land/moleculas/common/components/media-modal';\nimport { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';\nimport { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';\nimport { Tabs } from '@sima-land/ui-nucleons/tabs';\nimport { Layout } from '@sima-land/ui-nucleons/layout';\n\nexport default {\n  title: 'common/MediaLayout',\n  component: MediaLayout,\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nexport function LoadingVideo() {\n  const items = Array(15).fill(0);\n\n  return (\n    <Modal {...getResponsiveModalProps({ size: 'fullscreen' })}>\n      <TopBar size='unset' buttons={navigationButtons({ onClose: () => void 0 })} />\n      <ModalBody withScrollDisable>\n        <MediaLayout>\n          <MediaHeader>\n            <HeaderLayout>\n              <HeaderLayout.Tabs>\n                <Tabs {...Preset.headerTabs()}>\n                  <Tabs.Item name='Фото ' />\n                  <Tabs.Item name='Видео ' />\n                  <Tabs.Item name='360 ' />\n                  <Tabs.Item name='Фото покупателей' />\n                </Tabs>\n              </HeaderLayout.Tabs>\n            </HeaderLayout>\n          </MediaHeader>\n\n          <MediaMain>\n            <MediaView loading />\n          </MediaMain>\n\n          <MediaAside>\n            <Thumbnails>\n              {items.map((item, index) => (\n                <Thumbnail key={index} type='preview-video' loading />\n              ))}\n            </Thumbnails>\n          </MediaAside>\n\n          <MediaFooter>\n            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>\n              <ProductBrief loading />\n            </Layout>\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>\n  );\n}\n\nLoadingVideo.storyName = 'Загрузка видео';\n",locationsMap:{"loading-video":{startLoc:{col:7,line:27},endLoc:{col:1,line:69},startBody:{col:7,line:27},endBody:{col:1,line:69}}}},layout:"fullscreen"}},LoadingVideo=function LoadingVideo(){const items=Array(15).fill(0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.u_,{...(0,_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.B1)({size:"fullscreen"}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_2__.TopBar,{size:"unset",buttons:(0,_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_2__.navigationButtons)({onClose:()=>{}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.fe,{withScrollDisable:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.bu,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Ei,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.T$,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.T$.Tabs,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ,{..._sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Sk.headerTabs(),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Фото "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Видео "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"360 "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Фото покупателей"})]})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.xT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.px,{loading:!0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.nm,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.es,{children:items.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.pl,{type:"preview-video",loading:!0},index)))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.CT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_4__.Layout,{disabledOn:["xs","s","m","l","xl"],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Q_,{loading:!0})})})]})})]})};LoadingVideo.storyName="Загрузка видео",LoadingVideo.parameters={...LoadingVideo.parameters,docs:{...LoadingVideo.parameters?.docs,source:{originalSource:"function LoadingVideo() {\n  const items = Array(15).fill(0);\n  return <Modal {...getResponsiveModalProps({\n    size: 'fullscreen'\n  })}>\n      <TopBar size='unset' buttons={navigationButtons({\n      onClose: () => void 0\n    })} />\n      <ModalBody withScrollDisable>\n        <MediaLayout>\n          <MediaHeader>\n            <HeaderLayout>\n              <HeaderLayout.Tabs>\n                <Tabs {...Preset.headerTabs()}>\n                  <Tabs.Item name='Фото ' />\n                  <Tabs.Item name='Видео ' />\n                  <Tabs.Item name='360 ' />\n                  <Tabs.Item name='Фото покупателей' />\n                </Tabs>\n              </HeaderLayout.Tabs>\n            </HeaderLayout>\n          </MediaHeader>\n\n          <MediaMain>\n            <MediaView loading />\n          </MediaMain>\n\n          <MediaAside>\n            <Thumbnails>\n              {items.map((item, index) => <Thumbnail key={index} type='preview-video' loading />)}\n            </Thumbnails>\n          </MediaAside>\n\n          <MediaFooter>\n            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>\n              <ProductBrief loading />\n            </Layout>\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>;\n}",...LoadingVideo.parameters?.docs?.source}}};const __namedExportsOrder=["LoadingVideo"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/tabs/tabs.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.tabs-m__root__e40{list-style-type:none;user-select:none;display:flex;margin:0;padding:0;font-size:16px;font-weight:600;line-height:24px}.tabs-m__root__e40 li{display:block;margin:0}.tabs-m__root__e40 li::before{content:none}.tabs-m__root__e40.tabs-m__stretch__cf0{justify-items:stretch}.tabs-m__root__e40.tabs-m__stretch__cf0 .tabs-m__item__d61{width:100%}.tabs-m__root__e40.tabs-m__view-clean__dfe,.tabs-m__root__e40.tabs-m__view-clean-underline__c0d{height:32px}.tabs-m__root__e40.tabs-m__view-clean__dfe .tabs-m__item__d61,.tabs-m__root__e40.tabs-m__view-clean-underline__c0d .tabs-m__item__d61{color:#9e9e9e}.tabs-m__root__e40.tabs-m__view-clean__dfe .tabs-m__item__d61.tabs-m__selected__f37,.tabs-m__root__e40.tabs-m__view-clean-underline__c0d .tabs-m__item__d61.tabs-m__selected__f37{position:relative;color:#212121}.tabs-m__root__e40.tabs-m__view-clean__dfe .tabs-m__item__d61.tabs-m__selected__f37::before,.tabs-m__root__e40.tabs-m__view-clean-underline__c0d .tabs-m__item__d61.tabs-m__selected__f37::before{content:"";position:absolute;height:2px;margin:0 -1px;left:0;right:0;bottom:0;background-color:#1f84db;border-top-left-radius:4px;border-top-right-radius:4px}.tabs-m__root__e40.tabs-m__view-clean__dfe .tabs-m__item__d61.tabs-m__disabled__fdb,.tabs-m__root__e40.tabs-m__view-clean-underline__c0d .tabs-m__item__d61.tabs-m__disabled__fdb{color:#e0e0e0}.tabs-m__root__e40.tabs-m__view-clean__dfe .tabs-m__item__d61:not(.tabs-m__selected__f37):not(.tabs-m__disabled__fdb):hover,.tabs-m__root__e40.tabs-m__view-clean-underline__c0d .tabs-m__item__d61:not(.tabs-m__selected__f37):not(.tabs-m__disabled__fdb):hover{cursor:pointer;color:#757575}.tabs-m__root__e40.tabs-m__view-clean-underline__c0d{height:40px;position:relative}.tabs-m__root__e40.tabs-m__view-clean-underline__c0d::before{position:absolute;bottom:0;content:"";height:1px;width:100%;background-color:#e0e0e0}.tabs-m__root__e40.tabs-m__view-round__b7d{height:40px}.tabs-m__root__e40.tabs-m__view-round__b7d .tabs-m__item__d61{color:#212121;padding:8px 16px;border-radius:4px;background-color:#f5f5f5}.tabs-m__root__e40.tabs-m__view-round__b7d .tabs-m__item__d61.tabs-m__selected__f37{background-color:#1f84db;color:#fff}.tabs-m__root__e40.tabs-m__view-round__b7d .tabs-m__item__d61.tabs-m__disabled__fdb{color:#c2c2c2}.tabs-m__root__e40.tabs-m__view-round__b7d .tabs-m__item__d61:not(.tabs-m__selected__f37):not(.tabs-m__disabled__fdb):hover{cursor:pointer;background-color:#ebebeb}.tabs-m__root__e40.tabs-m__gap-m__ad3{--tabs-gap: 24px}.tabs-m__root__e40.tabs-m__gap-s__a18{--tabs-gap: 16px}.tabs-m__root__e40 .tabs-m__item__d61{text-align:center}.tabs-m__root__e40 .tabs-m__item__d61:not(:last-child){margin-right:var(--tabs-gap)}',"",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/tabs/tabs.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAGA,mBACE,oBAAA,CACA,gBAAA,CACA,YAAA,CACA,QAAA,CACA,SAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CACA,sBACE,aAAA,CACA,QAAA,CACA,8BACE,YAAA,CAGJ,wCACE,qBAAA,CACA,2DACE,UAAA,CAGJ,gGAEE,WAAA,CACA,sIACE,aCrBS,CDsBT,kLACE,iBAAA,CACA,aC5BO,CD6BP,kMACE,UAAA,CACA,iBAAA,CACA,UAAA,CACA,aAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,wBCtCG,CDuCH,0BAAA,CACA,2BAAA,CAGJ,kLACE,aCrCO,CDuCT,kQACE,cAAA,CACA,aC5CO,CDgDb,qDACE,WAAA,CACA,iBAAA,CACA,6DACE,iBAAA,CACA,QAAA,CACA,UAAA,CACA,UAAA,CACA,UAAA,CACA,wBCtDS,CDyDb,2CACE,WAAA,CACA,8DACE,aClES,CDmET,gBAAA,CACA,iBAAA,CACA,wBC7DQ,CD8DR,oFACE,wBCxEK,CDyEL,UC9DM,CDgER,oFACE,aCtEO,CDwET,4HACE,cAAA,CACA,wBCxEM,CD4EZ,sCACE,gBAAA,CAEF,sCACE,gBAAA,CAEF,sCACE,iBAAA,CACA,uDACE,4BAAA",sourcesContent:["@use '../colors';\n\n// @todo убрать вложенность по максимуму\n.root {\n  list-style-type: none;\n  user-select: none;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  li {\n    display: block;\n    margin: 0;\n    &::before {\n      content: none;\n    }\n  }\n  &.stretch {\n    justify-items: stretch;\n    .item {\n      width: 100%;\n    }\n  }\n  &.view-clean,\n  &.view-clean-underline {\n    height: 32px;\n    .item {\n      color: colors.$basic-gray38;\n      &.selected {\n        position: relative;\n        color: colors.$basic-gray87;\n        &::before {\n          content: '';\n          position: absolute;\n          height: 2px;\n          margin: 0 -1px;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background-color: colors.$basic-blue;\n          border-top-left-radius: 4px;\n          border-top-right-radius: 4px;\n        }\n      }\n      &.disabled {\n        color: colors.$basic-gray12;\n      }\n      &:not(.selected):not(.disabled):hover {\n        cursor: pointer;\n        color: colors.$basic-gray54;\n      }\n    }\n  }\n  &.view-clean-underline {\n    height: 40px;\n    position: relative;\n    &::before {\n      position: absolute;\n      bottom: 0;\n      content: '';\n      height: 1px;\n      width: 100%;\n      background-color: colors.$basic-gray12;\n    }\n  }\n  &.view-round {\n    height: 40px;\n    .item {\n      color: colors.$basic-gray87;\n      padding: 8px 16px;\n      border-radius: 4px;\n      background-color: colors.$basic-gray4;\n      &.selected {\n        background-color: colors.$basic-blue;\n        color: colors.$basic-white;\n      }\n      &.disabled {\n        color: colors.$basic-gray24;\n      }\n      &:not(.selected):not(.disabled):hover {\n        cursor: pointer;\n        background-color: colors.$basic-gray8;\n      }\n    }\n  }\n  &.gap-m {\n    --tabs-gap: 24px;\n  }\n  &.gap-s {\n    --tabs-gap: 16px;\n  }\n  .item {\n    text-align: center;\n    &:not(:last-child) {\n      margin-right: var(--tabs-gap);\n    }\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"tabs-m__root__e40",stretch:"tabs-m__stretch__cf0",item:"tabs-m__item__d61","view-clean":"tabs-m__view-clean__dfe","view-clean-underline":"tabs-m__view-clean-underline__c0d",selected:"tabs-m__selected__f37",disabled:"tabs-m__disabled__fdb","view-round":"tabs-m__view-round__b7d","gap-m":"tabs-m__gap-m__ad3","gap-s":"tabs-m__gap-s__a18"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/tabs/tabs.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_tabs_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/tabs/tabs.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_tabs_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_tabs_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_tabs_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_tabs_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);