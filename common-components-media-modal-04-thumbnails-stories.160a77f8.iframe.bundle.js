"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[6907],{"./node_modules/@sima-land/ui-nucleons/price/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.tA=void 0;var price_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/price/price.js");Object.defineProperty(exports,"tA",{enumerable:!0,get:function(){return price_1.Price}});var utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/price/utils.js")},"./node_modules/@sima-land/ui-nucleons/price/price.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Price=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/price/utils.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),price_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/price/price.m.scss")),react_1=__webpack_require__("./node_modules/react/index.js"),cx=bind_1.default.bind(price_m_scss_1.default);exports.Price=function Price({className,currencyGrapheme:grapheme,graphemeBefore,crossedOut,value,"data-testid":testId="price"}){const content=(0,react_1.useMemo)((()=>(0,utils_1.formatPrice)(value,grapheme,{graphemeBefore})),[value,grapheme,graphemeBefore]);return(0,jsx_runtime_1.jsx)("span",{className:cx("root",className,crossedOut&&"crossed-out"),"data-testid":testId,children:content})}},"./node_modules/@sima-land/ui-nucleons/price/utils.js":(__unused_webpack_module,exports)=>{function formatInteger(value){let result="0";if(Number.isFinite(value)){const separated=[],list=toString(0===value?0:Math.max(Math.abs(value),1e-4)).replace(/\..*$/g,"").split("");for(;list.length;)separated.unshift(list.splice(-3).join(""));result=separated.join(" ")}return value<0?`-${result}`:result}function formatFractional(value){let fractional="";return Number.isFinite(value)&&!Number.isInteger(value)&&(fractional=toString(value).replace(/^.*\./g,"")),fractional}function toString(value){let result;const absolute=Math.abs(value);return result=absolute<=1e-4?"0.0001":absolute<.01?absolute.toFixed(4):absolute.toFixed(2),value<0?`-${result}`:result}Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatFractional=exports.formatInteger=exports.formatPrice=void 0,exports.formatPrice=function formatPrice(value,grapheme,{graphemeBefore}={}){const number=Number(value);return[grapheme&&graphemeBefore&&`${grapheme} `,formatInteger(number),Number.isFinite(number)&&!Number.isInteger(number)&&`,${formatFractional(number)}`,grapheme&&!graphemeBefore&&` ${grapheme}`].filter(Boolean).map((s=>s.replace(/\s/g," "))).join("")},exports.formatInteger=formatInteger,exports.formatFractional=formatFractional},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Stroked/ArrowExpandLeft.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M9.659 3.247a1 1 0 0 1 .094 1.412L6.829 8l2.924 3.341a1 1 0 0 1-1.506 1.318l-3.5-4a1 1 0 0 1 0-1.317l3.5-4a1 1 0 0 1 1.412-.095Z",clipRule:"evenodd"}))))},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/64x64/Colorful/TouchScrollX.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:64,height:64,fill:"none",viewBox:"0 0 64 64",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#fff",d:"M24 16v28l-5.005-5.34a3.704 3.704 0 1 0-5.387 5.085l12.126 12.764A14.429 14.429 0 0 0 36.195 61h.986c5.976 0 10.82-4.844 10.82-10.82V39.75a6 6 0 0 0-6-6A3.75 3.75 0 0 0 38.25 30H36a4.25 4.25 0 0 0-4.25-4.25H30V16a3 3 0 0 0-6 0Z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#212121",fillRule:"evenodd",d:"M27 14a2 2 0 0 0-2 2v28a1 1 0 0 1-1.729.684l-5.005-5.34a2.704 2.704 0 1 0-3.933 3.712L26.46 55.82A13.429 13.429 0 0 0 36.195 60h.986c5.423 0 9.82-4.397 9.82-9.82V39.75a5.002 5.002 0 0 0-4-4.9v4.65a1 1 0 1 1-2 0v-5.75A2.75 2.75 0 0 0 38.25 31H37v8a1 1 0 1 1-2 0v-9a3.25 3.25 0 0 0-3.25-3.25H31V39a1 1 0 1 1-2 0V16a2 2 0 0 0-2-2Zm4 10.75V16a4 4 0 0 0-8 0v25.471l-3.275-3.494a4.703 4.703 0 1 0-6.842 6.456L25.01 57.198A15.43 15.43 0 0 0 36.195 62h.986c6.528 0 11.82-5.292 11.82-11.82V39.75a7.001 7.001 0 0 0-6.093-6.942A4.752 4.752 0 0 0 38.25 29h-1.345a5.252 5.252 0 0 0-5.155-4.25H31Z",clipRule:"evenodd"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#fff",d:"M12.414 9.586 11.828 9h40.344l-.586.586a1.92 1.92 0 0 0-.582 1.516c.039.518.284.968.605 1.29.321.32.771.565 1.289.604a1.92 1.92 0 0 0 1.516-.582l1.173-1.172c1.134-1.135 2.553-2.555 2.825-2.825.778-.776.78-2.053.002-2.831l-4-4a1.92 1.92 0 0 0-1.516-.582 2.056 2.056 0 0 0-1.29.605 2.056 2.056 0 0 0-.604 1.289 1.92 1.92 0 0 0 .582 1.516l.586.586H11.828l.586-.586a1.92 1.92 0 0 0 .582-1.516 2.056 2.056 0 0 0-.605-1.29 2.056 2.056 0 0 0-1.289-.604 1.92 1.92 0 0 0-1.516.582l-4 4a2 2 0 0 0 0 2.828l4 4a1.92 1.92 0 0 0 1.516.582c.518-.039.968-.284 1.29-.605.32-.321.565-.771.604-1.289a1.92 1.92 0 0 0-.582-1.516Z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#212121",d:"M52.293 3.707a1 1 0 0 1 1.414-1.414l4 4a.997.997 0 0 1 .011 1.403c-1.316 1.357-2.675 2.675-4.01 4.011a1 1 0 0 1-1.415-1.414L54.586 8H9.414l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L9.414 6h45.172l-2.293-2.293Z"}))))},"./docs/stories/common/components/media-modal/04-thumbnails.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExampleThumbnails:()=>ExampleThumbnails,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/components/media-modal/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/index.js"),_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/top-bar/index.js"),_sima_land_ui_nucleons_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hooks/index.js"),_fixture__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./docs/stories/common/components/media-modal/fixture.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/MediaLayout",parameters:{storySource:{source:"import {\n  MediaLayout,\n  MediaHeader,\n  MediaMain,\n  MediaAside,\n  MediaFooter,\n  Thumbnails,\n  Thumbnail,\n} from '@sima-land/moleculas/common/components/media-modal';\nimport { Fragment, useState } from 'react';\nimport { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';\nimport { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';\nimport { useBreakpoint } from '@sima-land/ui-nucleons/hooks';\nimport { mixed } from './fixture';\n\nexport default {\n  title: 'common/MediaLayout',\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nexport function ExampleThumbnails() {\n  const desktop = useBreakpoint('xs+');\n  const [target, setTarget] = useState(0);\n\n  const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    background: 'rgb(33, 33, 33, 0.16)',\n  };\n\n  const thumbnails = (\n    <Thumbnails>\n      {mixed.map((item, index) => (\n        <Fragment key={index}>\n          {item.type === '360' && (\n            <Thumbnail\n              checked={target === index}\n              onClick={() => setTarget(index)}\n              type='icon-360'\n            />\n          )}\n          {item.type === 'video' && (\n            <Thumbnail\n              checked={target === index}\n              onClick={() => setTarget(index)}\n              type='icon-video'\n            />\n          )}\n          {item.type === 'image' && (\n            <Thumbnail\n              checked={target === index}\n              onClick={() => setTarget(index)}\n              type='preview-image'\n              src={item.data.src}\n            />\n          )}\n        </Fragment>\n      ))}\n    </Thumbnails>\n  );\n\n  return (\n    <Modal {...getResponsiveModalProps({ size: 'fullscreen' })}>\n      <TopBar size='unset' buttons={navigationButtons({ onClose: () => void 0 })} />\n      <ModalBody>\n        <MediaLayout>\n          <MediaHeader>\n            <div style={{ ...styles, width: '100%', height: '40px' }}>Header</div>\n          </MediaHeader>\n\n          <MediaMain>\n            <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>\n              Main\n            </div>\n          </MediaMain>\n\n          {desktop && <MediaAside>{thumbnails}</MediaAside>}\n\n          <MediaFooter>\n            <div style={{ ...styles, width: '100%', height: '100px' }}>Footer</div>\n\n            {!desktop && (\n              <div style={{ marginTop: '24px' }}>\n                <MediaAside>{thumbnails}</MediaAside>\n              </div>\n            )}\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>\n  );\n}\n\nExampleThumbnails.storyName = 'Превью';\n",locationsMap:{"example-thumbnails":{startLoc:{col:7,line:23},endLoc:{col:1,line:95},startBody:{col:7,line:23},endBody:{col:1,line:95}}}},layout:"fullscreen"}},ExampleThumbnails=function ExampleThumbnails(){const desktop=(0,_sima_land_ui_nucleons_hooks__WEBPACK_IMPORTED_MODULE_4__.useBreakpoint)("xs+"),[target,setTarget]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),styles={display:"flex",justifyContent:"center",alignItems:"center",background:"rgb(33, 33, 33, 0.16)"},thumbnails=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.es,{children:_fixture__WEBPACK_IMPORTED_MODULE_5__.n.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["360"===item.type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.pl,{checked:target===index,onClick:()=>setTarget(index),type:"icon-360"}),"video"===item.type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.pl,{checked:target===index,onClick:()=>setTarget(index),type:"icon-video"}),"image"===item.type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.pl,{checked:target===index,onClick:()=>setTarget(index),type:"preview-image",src:item.data.src})]},index)))});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_2__.u_,{...(0,_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_2__.B1)({size:"fullscreen"}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_3__.TopBar,{size:"unset",buttons:(0,_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_3__.navigationButtons)({onClose:()=>{}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_2__.fe,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.bu,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Ei,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{...styles,width:"100%",height:"40px"},children:"Header"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.xT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{...styles,position:"absolute",width:"100%",height:"100%"},children:"Main"})}),desktop&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.nm,{children:thumbnails}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.CT,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{...styles,width:"100%",height:"100px"},children:"Footer"}),!desktop&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{marginTop:"24px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.nm,{children:thumbnails})})]})]})})]})};ExampleThumbnails.storyName="Превью",ExampleThumbnails.parameters={...ExampleThumbnails.parameters,docs:{...ExampleThumbnails.parameters?.docs,source:{originalSource:"function ExampleThumbnails() {\n  const desktop = useBreakpoint('xs+');\n  const [target, setTarget] = useState(0);\n  const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    background: 'rgb(33, 33, 33, 0.16)'\n  };\n  const thumbnails = <Thumbnails>\n      {mixed.map((item, index) => <Fragment key={index}>\n          {item.type === '360' && <Thumbnail checked={target === index} onClick={() => setTarget(index)} type='icon-360' />}\n          {item.type === 'video' && <Thumbnail checked={target === index} onClick={() => setTarget(index)} type='icon-video' />}\n          {item.type === 'image' && <Thumbnail checked={target === index} onClick={() => setTarget(index)} type='preview-image' src={item.data.src} />}\n        </Fragment>)}\n    </Thumbnails>;\n  return <Modal {...getResponsiveModalProps({\n    size: 'fullscreen'\n  })}>\n      <TopBar size='unset' buttons={navigationButtons({\n      onClose: () => void 0\n    })} />\n      <ModalBody>\n        <MediaLayout>\n          <MediaHeader>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '40px'\n          }}>Header</div>\n          </MediaHeader>\n\n          <MediaMain>\n            <div style={{\n            ...styles,\n            position: 'absolute',\n            width: '100%',\n            height: '100%'\n          }}>\n              Main\n            </div>\n          </MediaMain>\n\n          {desktop && <MediaAside>{thumbnails}</MediaAside>}\n\n          <MediaFooter>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '100px'\n          }}>Footer</div>\n\n            {!desktop && <div style={{\n            marginTop: '24px'\n          }}>\n                <MediaAside>{thumbnails}</MediaAside>\n              </div>}\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>;\n}",...ExampleThumbnails.parameters?.docs?.source}}};const __namedExportsOrder=["ExampleThumbnails"]},"./docs/stories/common/components/media-modal/fixture.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>mixed,L:()=>videos});const armchair_namespaceObject=__webpack_require__.p+"static/media/armchair.8347d452.jpg",cup_namespaceObject=__webpack_require__.p+"static/media/cup.4ac64164.jpg";var plant=__webpack_require__("./docs/stories/common/components/media-modal/images/plant.jpg");const stump_namespaceObject=__webpack_require__.p+"static/media/stump.438d7094.jpg",table_namespaceObject=__webpack_require__.p+"static/media/table.1c9fc117.jpg",vase_namespaceObject=__webpack_require__.p+"static/media/vase.cf404f80.jpg",thumbnails_armchair_namespaceObject=__webpack_require__.p+"static/media/armchair.0eb8c0d8.jpg",thumbnails_cup_namespaceObject=__webpack_require__.p+"static/media/cup.77549b3e.jpg",thumbnails_plant_namespaceObject=__webpack_require__.p+"static/media/plant.f7b5dc5f.jpg",thumbnails_stump_namespaceObject=__webpack_require__.p+"static/media/stump.22e264ce.jpg",thumbnails_table_namespaceObject=__webpack_require__.p+"static/media/table.59e8ee51.jpg";var vase=__webpack_require__("./docs/stories/common/components/media-modal/thumbnails/vase.jpg");const video3404953_namespaceObject=__webpack_require__.p+"static/media/video3404953.2973b798.jpg",video3619217_namespaceObject=__webpack_require__.p+"static/media/video3619217.54d710f1.jpg",video4093038_namespaceObject=__webpack_require__.p+"static/media/video4093038.efe5f840.jpg",video6907296_namespaceObject=__webpack_require__.p+"static/media/video6907296.99087e77.jpg",mixed=[{type:"360",data:{photos:["https://cdn2.static1-sima-land.com/3d/3243668/0/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/1/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/2/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/3/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/4/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/5/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/6/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/7/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/8/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/9/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/10/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/11/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/12/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/13/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/14/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/15/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/16/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/17/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/18/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/19/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/20/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/21/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/22/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/23/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/24/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/25/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/26/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/27/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/28/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/29/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/30/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/31/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/32/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/33/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/34/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/35/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/36/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/37/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/38/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/39/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/40/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/41/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/42/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/43/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/44/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/45/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/46/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/47/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/48/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/49/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/50/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/51/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/52/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/53/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/54/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/55/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/56/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/57/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/58/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/59/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/60/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/61/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/62/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/63/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/64/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/65/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/66/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/67/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/68/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/69/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/70/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/71/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/72/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/73/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/74/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/75/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/76/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/77/700.jpg","https://cdn2.static1-sima-land.com/3d/3243668/78/700.jpg"]}},{type:"video",data:{src:"https://cdn2.static1-sima-land.com/flv/3404953.mp4"}},{type:"image",data:{alt:"Стул",src:armchair_namespaceObject,thumbnail:thumbnails_armchair_namespaceObject}},{type:"image",data:{alt:"Чашка",src:cup_namespaceObject,thumbnail:thumbnails_cup_namespaceObject}},{type:"image",data:{alt:"Растение",src:plant,thumbnail:thumbnails_plant_namespaceObject}},{type:"image",data:{alt:"Пень",src:stump_namespaceObject,thumbnail:thumbnails_stump_namespaceObject}},{type:"image",data:{alt:"Стол",src:table_namespaceObject,thumbnail:thumbnails_table_namespaceObject}},{type:"image",data:{alt:"Ваза",src:vase_namespaceObject,thumbnail:vase}}],videos=[{type:"video",data:{src:"https://cdn2.static1-sima-land.com/flv/6907296.mp4",thumbnail:video6907296_namespaceObject}},{type:"video",data:{src:"https://cdn2.static1-sima-land.com/flv/3619217.mp4",thumbnail:video3619217_namespaceObject}},{type:"video",data:{src:"https://cdn2.static1-sima-land.com/flv/4093038.mp4",thumbnail:video4093038_namespaceObject}},{type:"video",data:{src:"https://cdn2.static1-sima-land.com/flv/3404953.mp4",thumbnail:video3404953_namespaceObject}},{type:"video",data:{src:"https://cdn2.static1-sima-land.com/flv/6907296.mp4",thumbnail:video6907296_namespaceObject}},{type:"video",data:{src:"https://cdn2.static1-sima-land.com/flv/3619217.mp4",thumbnail:video3619217_namespaceObject}},{type:"video",data:{src:"https://cdn2.static1-sima-land.com/flv/4093038.mp4",thumbnail:video4093038_namespaceObject}},{type:"video",data:{src:"https://cdn2.static1-sima-land.com/flv/3404953.mp4",thumbnail:video3404953_namespaceObject}},{type:"video",data:{src:"https://cdn2.static1-sima-land.com/flv/6907296.mp4",thumbnail:video6907296_namespaceObject}},{type:"video",data:{src:"https://cdn2.static1-sima-land.com/flv/3619217.mp4",thumbnail:video3619217_namespaceObject}},{type:"video",data:{src:"https://cdn2.static1-sima-land.com/flv/4093038.mp4",thumbnail:video4093038_namespaceObject}},{type:"video",data:{src:"https://cdn2.static1-sima-land.com/flv/3404953.mp4",thumbnail:video3404953_namespaceObject}}]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/price/price.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".price-m__root__d4d{position:relative;display:inline-block;white-space:nowrap}.price-m__root__d4d.price-m__crossed-out__d8c{color:#9e9e9e;text-decoration:line-through}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/price/price.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAEA,oBACE,iBAAA,CACA,oBAAA,CACA,kBAAA,CACA,8CACE,aCCW,CAAA,4BAAA",sourcesContent:["@use '../colors';\n\n.root {\n  position: relative;\n  display: inline-block;\n  white-space: nowrap;\n  &.crossed-out {\n    color: colors.$basic-gray38;\n    text-decoration: line-through;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"price-m__root__d4d","crossed-out":"price-m__crossed-out__d8c"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/price/price.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_price_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/price/price.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_price_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_price_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_price_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_price_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./docs/stories/common/components/media-modal/images/plant.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/plant.a9868ddc.jpg"},"./docs/stories/common/components/media-modal/thumbnails/vase.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/vase.8ec5f9e4.jpg"}}]);