"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[1192],{"./node_modules/@sima-land/ui-nucleons/colors/index.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.COLORS=exports.COLOR=void 0,exports.COLOR={"basic-blue":"#1f84db","basic-gray87":"#212121","basic-gray76":"#3a3a3b","basic-gray66":"#545455","basic-gray54":"#757575","basic-gray38":"#9e9e9e","basic-gray24":"#c2c2c2","basic-gray12":"#e0e0e0","basic-gray8":"#ebebeb","basic-gray4":"#f5f5f5","basic-gray2":"#fafafa","basic-white":"#fff","additional-deep-red":"#d50000","additional-red":"#fb3a2f","additional-light-red":"#feebea","additional-dark-teal":"#089176","additional-teal":"#09ab8b","additional-green":"#00c853","additional-light-green":"#64dd17","additional-lime":"#aeea00","additional-faded-green":"#eff9ea","additional-pink":"#e82e5c","additional-purple":"#b52ea8","additional-violet":"#902bd0","additional-deep-purple":"#634bdf","additional-electric-blue":"#2962ff","additional-light-blue":"#0091ea","additional-cyan":"#00b8d4","additional-sky":"#e4f1f9","additional-deep-orange":"#ff7200","additional-amber":"#ffab00","additional-yellow":"#ffd600","additional-gold":"#d5a43b","additional-brown":"#795548","additional-blue-gray":"#607d8b","additional-deep-blue":"#00599d","additional-dark-blue":"#002b41","additional-unlit-blue":"#1b75c2","additional-crimson":"#f4446b"},exports.COLORS=new Map(Object.entries(exports.COLOR))},"./src/common/components/media-modal/__stories__/06-footer-product.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExampleFooterProduct:()=>ExampleFooterProduct,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/components/media-modal/index.ts"),_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/button/index.js"),_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/layout/index.js"),_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/index.js"),_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/top-bar/index.js"),_mocks_thumbnails_vase_jpg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/common/components/media-modal/__mocks__/thumbnails/vase.jpg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/MediaLayout",parameters:{storySource:{source:"import {\n  MediaLayout,\n  MediaHeader,\n  MediaMain,\n  MediaAside,\n  MediaFooter,\n  ProductBrief,\n} from '@sima-land/moleculas/common/components/media-modal';\nimport { Button } from '@sima-land/ui-nucleons/button';\nimport { Layout } from '@sima-land/ui-nucleons/layout';\nimport { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';\nimport { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';\nimport vase from '../__mocks__/thumbnails/vase.jpg';\n\nexport default {\n  title: 'common/MediaLayout',\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nexport function ExampleFooterProduct() {\n  const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    background: 'rgb(33, 33, 33, 0.16)',\n  };\n\n  return (\n    <Modal {...getResponsiveModalProps({ size: 'fullscreen' })}>\n      <TopBar size='unset' buttons={navigationButtons({ onClose: () => void 0 })} />\n      <ModalBody>\n        <MediaLayout>\n          <MediaHeader>\n            <div style={{ ...styles, width: '100%', height: '40px' }}>Header</div>\n          </MediaHeader>\n\n          <MediaMain>\n            <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>\n              Main\n            </div>\n          </MediaMain>\n\n          <MediaAside>\n            <div style={{ ...styles, width: '100%', height: '100%', minHeight: '40px' }}>Aside</div>\n          </MediaAside>\n\n          <MediaFooter>\n            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>\n              <ProductBrief\n                href='https://sima-land.ru'\n                imageSrc={vase}\n                title='Игровая приставка Sony PlayStation 5 Digital 3,5 ГГц модифицированная'\n                price={60235}\n                currency='₽'\n                footer={\n                  <Button size='s' style={{ width: '122px' }}>\n                    В корзину\n                  </Button>\n                }\n              />\n            </Layout>\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>\n  );\n}\n\nExampleFooterProduct.storyName = 'Футер с товаром';\n",locationsMap:{"example-footer-product":{startLoc:{col:7,line:22},endLoc:{col:1,line:69},startBody:{col:7,line:22},endBody:{col:1,line:69}}}},layout:"fullscreen"}},ExampleFooterProduct=function ExampleFooterProduct(){const styles={display:"flex",justifyContent:"center",alignItems:"center",background:"rgb(33, 33, 33, 0.16)"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_3__.u_,{...(0,_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_3__.B1)({size:"fullscreen"}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_4__.TopBar,{size:"unset",buttons:(0,_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_4__.navigationButtons)({onClose:()=>{}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_3__.fe,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.bu,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Ei,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{...styles,width:"100%",height:"40px"},children:"Header"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.xT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{...styles,position:"absolute",width:"100%",height:"100%"},children:"Main"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.nm,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{...styles,width:"100%",height:"100%",minHeight:"40px"},children:"Aside"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.CT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_2__.Layout,{disabledOn:["xs","s","m","l","xl"],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Q_,{href:"https://sima-land.ru",imageSrc:_mocks_thumbnails_vase_jpg__WEBPACK_IMPORTED_MODULE_5__,title:"Игровая приставка Sony PlayStation 5 Digital 3,5 ГГц модифицированная",price:60235,currency:"₽",footer:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_1__.z,{size:"s",style:{width:"122px"},children:"В корзину"})})})})]})})]})};ExampleFooterProduct.storyName="Футер с товаром",ExampleFooterProduct.parameters={...ExampleFooterProduct.parameters,docs:{...ExampleFooterProduct.parameters?.docs,source:{originalSource:"function ExampleFooterProduct() {\n  const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    background: 'rgb(33, 33, 33, 0.16)'\n  };\n  return <Modal {...getResponsiveModalProps({\n    size: 'fullscreen'\n  })}>\n      <TopBar size='unset' buttons={navigationButtons({\n      onClose: () => void 0\n    })} />\n      <ModalBody>\n        <MediaLayout>\n          <MediaHeader>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '40px'\n          }}>Header</div>\n          </MediaHeader>\n\n          <MediaMain>\n            <div style={{\n            ...styles,\n            position: 'absolute',\n            width: '100%',\n            height: '100%'\n          }}>\n              Main\n            </div>\n          </MediaMain>\n\n          <MediaAside>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '100%',\n            minHeight: '40px'\n          }}>Aside</div>\n          </MediaAside>\n\n          <MediaFooter>\n            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>\n              <ProductBrief href='https://sima-land.ru' imageSrc={vase} title='Игровая приставка Sony PlayStation 5 Digital 3,5 ГГц модифицированная' price={60235} currency='₽' footer={<Button size='s' style={{\n              width: '122px'\n            }}>\n                    В корзину\n                  </Button>} />\n            </Layout>\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>;\n}",...ExampleFooterProduct.parameters?.docs?.source}}};const __namedExportsOrder=["ExampleFooterProduct"]},"./src/common/components/media-modal/__mocks__/thumbnails/vase.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/vase.8ec5f9e4.jpg"}}]);