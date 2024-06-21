"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[3087],{"./docs/stories/common/components/media-modal/loading-video.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoadingVideo:()=>LoadingVideo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/components/media-modal/index.ts"),_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/index.js"),_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/top-bar/index.js"),_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/tabs/index.js"),_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/layout/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/MediaLayout",component:_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.bu,parameters:{storySource:{source:"import {\n  MediaLayout,\n  MediaHeader,\n  MediaMain,\n  MediaAside,\n  MediaFooter,\n  Preset,\n  HeaderLayout,\n  Thumbnails,\n  Thumbnail,\n  ProductBrief,\n  MediaView,\n} from '@sima-land/moleculas/common/components/media-modal';\nimport { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';\nimport { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';\nimport { Tabs } from '@sima-land/ui-nucleons/tabs';\nimport { Layout } from '@sima-land/ui-nucleons/layout';\n\nexport default {\n  title: 'common/MediaLayout',\n  component: MediaLayout,\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nexport function LoadingVideo() {\n  const items = Array(15).fill(0);\n\n  return (\n    <Modal {...getResponsiveModalProps({ size: 'fullscreen' })}>\n      <TopBar size='unset' buttons={navigationButtons({ onClose: () => void 0 })} />\n      <ModalBody withScrollDisable>\n        <MediaLayout>\n          <MediaHeader>\n            <HeaderLayout>\n              <HeaderLayout.Tabs>\n                <Tabs {...Preset.headerTabs()}>\n                  <Tabs.Item name='Фото ' />\n                  <Tabs.Item name='Видео ' />\n                  <Tabs.Item name='360 ' />\n                  <Tabs.Item name='Фото покупателей' />\n                </Tabs>\n              </HeaderLayout.Tabs>\n            </HeaderLayout>\n          </MediaHeader>\n\n          <MediaMain>\n            <MediaView loading />\n          </MediaMain>\n\n          <MediaAside>\n            <Thumbnails>\n              {items.map((item, index) => (\n                <Thumbnail key={index} type='preview-video' loading />\n              ))}\n            </Thumbnails>\n          </MediaAside>\n\n          <MediaFooter>\n            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>\n              <ProductBrief loading />\n            </Layout>\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>\n  );\n}\n\nLoadingVideo.storyName = 'Загрузка видео';\n",locationsMap:{"loading-video":{startLoc:{col:7,line:27},endLoc:{col:1,line:69},startBody:{col:7,line:27},endBody:{col:1,line:69}}}},layout:"fullscreen"}},LoadingVideo=function LoadingVideo(){const items=Array(15).fill(0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.u_,{...(0,_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.B1)({size:"fullscreen"}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_2__.TopBar,{size:"unset",buttons:(0,_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_2__.navigationButtons)({onClose:()=>{}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.fe,{withScrollDisable:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.bu,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Ei,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.T$,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.T$.Tabs,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ,{..._sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Sk.headerTabs(),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Фото "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Видео "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"360 "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.mQ.Item,{name:"Фото покупателей"})]})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.xT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.px,{loading:!0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.nm,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.es,{children:items.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.pl,{type:"preview-video",loading:!0},index)))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.CT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_4__.Layout,{disabledOn:["xs","s","m","l","xl"],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Q_,{loading:!0})})})]})})]})};LoadingVideo.storyName="Загрузка видео",LoadingVideo.parameters={...LoadingVideo.parameters,docs:{...LoadingVideo.parameters?.docs,source:{originalSource:"function LoadingVideo() {\n  const items = Array(15).fill(0);\n  return <Modal {...getResponsiveModalProps({\n    size: 'fullscreen'\n  })}>\n      <TopBar size='unset' buttons={navigationButtons({\n      onClose: () => void 0\n    })} />\n      <ModalBody withScrollDisable>\n        <MediaLayout>\n          <MediaHeader>\n            <HeaderLayout>\n              <HeaderLayout.Tabs>\n                <Tabs {...Preset.headerTabs()}>\n                  <Tabs.Item name='Фото ' />\n                  <Tabs.Item name='Видео ' />\n                  <Tabs.Item name='360 ' />\n                  <Tabs.Item name='Фото покупателей' />\n                </Tabs>\n              </HeaderLayout.Tabs>\n            </HeaderLayout>\n          </MediaHeader>\n\n          <MediaMain>\n            <MediaView loading />\n          </MediaMain>\n\n          <MediaAside>\n            <Thumbnails>\n              {items.map((item, index) => <Thumbnail key={index} type='preview-video' loading />)}\n            </Thumbnails>\n          </MediaAside>\n\n          <MediaFooter>\n            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>\n              <ProductBrief loading />\n            </Layout>\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>;\n}",...LoadingVideo.parameters?.docs?.source}}};const __namedExportsOrder=["LoadingVideo"]}}]);