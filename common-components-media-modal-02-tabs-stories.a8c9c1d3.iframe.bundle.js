"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[8586],{"./docs/stories/common/components/media-modal/02-tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MediaTabs:()=>MediaTabs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/components/media-modal/index.ts"),_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/index.js"),_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/top-bar/index.js"),_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/tabs/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/MediaLayout",parameters:{storySource:{source:"import {\n  MediaLayout,\n  MediaHeader,\n  MediaMain,\n  MediaAside,\n  MediaFooter,\n  HeaderLayout,\n  Preset,\n} from '@sima-land/moleculas/common/components/media-modal';\nimport { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';\nimport { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';\nimport { Tabs } from '@sima-land/ui-nucleons/tabs';\n\nexport default {\n  title: 'common/MediaLayout',\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nexport function MediaTabs() {\n  const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    background: 'rgb(33, 33, 33, 0.16)',\n  };\n\n  return (\n    <Modal {...getResponsiveModalProps({ size: 'fullscreen' })}>\n      <TopBar size='unset' buttons={navigationButtons({ onClose: () => void 0 })} />\n      <ModalBody>\n        <MediaLayout>\n          <MediaHeader>\n            <HeaderLayout>\n              <HeaderLayout.Tabs>\n                <Tabs {...Preset.headerTabs()}>\n                  <Tabs.Item name='Раздел 1' />\n                  <Tabs.Item name='Раздел 2' selected />\n                  <Tabs.Item name='Раздел 3' />\n                  <Tabs.Item name='Раздел 4' />\n                  <Tabs.Item name='Раздел 5' />\n                  <Tabs.Item name='Раздел 6' />\n                  <Tabs.Item name='Раздел 7' />\n                </Tabs>\n              </HeaderLayout.Tabs>\n            </HeaderLayout>\n          </MediaHeader>\n\n          <MediaMain>\n            <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>\n              Main\n            </div>\n          </MediaMain>\n\n          <MediaAside>\n            <div style={{ ...styles, width: '100%', height: '100%', minHeight: '40px' }}>Aside</div>\n          </MediaAside>\n\n          <MediaFooter>\n            <div style={{ ...styles, width: '100%', height: '100px' }}>Footer</div>\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>\n  );\n}\n\nMediaTabs.storyName = 'Вкладки';\n",locationsMap:{"media-tabs":{startLoc:{col:7,line:21},endLoc:{col:1,line:67},startBody:{col:7,line:21},endBody:{col:1,line:67}}}},layout:"fullscreen"}},MediaTabs=function MediaTabs(){const styles={display:"flex",justifyContent:"center",alignItems:"center",background:"rgb(33, 33, 33, 0.16)"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.u_,{...(0,_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.B1)({size:"fullscreen"}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_2__.TopBar,{size:"unset",buttons:(0,_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_2__.navigationButtons)({onClose:()=>{}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.fe,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.bu,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Ei,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.T$,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.T$.Tabs,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ,{..._sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Sk.headerTabs(),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Раздел 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Раздел 2",selected:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Раздел 3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Раздел 4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Раздел 5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Раздел 6"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Раздел 7"})]})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.xT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{...styles,position:"absolute",width:"100%",height:"100%"},children:"Main"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.nm,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{...styles,width:"100%",height:"100%",minHeight:"40px"},children:"Aside"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.CT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{...styles,width:"100%",height:"100px"},children:"Footer"})})]})})]})};MediaTabs.storyName="Вкладки",MediaTabs.parameters={...MediaTabs.parameters,docs:{...MediaTabs.parameters?.docs,source:{originalSource:"function MediaTabs() {\n  const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    background: 'rgb(33, 33, 33, 0.16)'\n  };\n  return <Modal {...getResponsiveModalProps({\n    size: 'fullscreen'\n  })}>\n      <TopBar size='unset' buttons={navigationButtons({\n      onClose: () => void 0\n    })} />\n      <ModalBody>\n        <MediaLayout>\n          <MediaHeader>\n            <HeaderLayout>\n              <HeaderLayout.Tabs>\n                <Tabs {...Preset.headerTabs()}>\n                  <Tabs.Item name='Раздел 1' />\n                  <Tabs.Item name='Раздел 2' selected />\n                  <Tabs.Item name='Раздел 3' />\n                  <Tabs.Item name='Раздел 4' />\n                  <Tabs.Item name='Раздел 5' />\n                  <Tabs.Item name='Раздел 6' />\n                  <Tabs.Item name='Раздел 7' />\n                </Tabs>\n              </HeaderLayout.Tabs>\n            </HeaderLayout>\n          </MediaHeader>\n\n          <MediaMain>\n            <div style={{\n            ...styles,\n            position: 'absolute',\n            width: '100%',\n            height: '100%'\n          }}>\n              Main\n            </div>\n          </MediaMain>\n\n          <MediaAside>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '100%',\n            minHeight: '40px'\n          }}>Aside</div>\n          </MediaAside>\n\n          <MediaFooter>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '100px'\n          }}>Footer</div>\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>;\n}",...MediaTabs.parameters?.docs?.source}}};const __namedExportsOrder=["MediaTabs"]}}]);