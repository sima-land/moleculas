"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[8522],{"./node_modules/@sima-land/ui-nucleons/avatar/avatar.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Avatar=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),avatar_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/avatar/avatar.m.scss")),cx=bind_1.default.bind(avatar_m_scss_1.default);exports.Avatar=function Avatar({src,className,style,children,"data-testid":testId="avatar"}){const[needImage,toggleNeedImage]=(0,react_1.useState)((()=>Boolean(src)));(0,react_1.useEffect)((()=>{toggleNeedImage(Boolean(src))}),[src]);const rootClassName=cx("root",needImage&&"image-overlay",className);return(0,jsx_runtime_1.jsxs)("span",{className:rootClassName,style,"data-testid":testId,children:[needImage&&(0,jsx_runtime_1.jsx)("img",{src,alt:"",className:cx("image"),onError:()=>toggleNeedImage(!1)}),!needImage&&(0,jsx_runtime_1.jsx)("span",{className:cx("content"),children})]})}},"./node_modules/@sima-land/ui-nucleons/avatar/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.YS=exports.qE=void 0;var avatar_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/avatar/avatar.js");Object.defineProperty(exports,"qE",{enumerable:!0,get:function(){return avatar_1.Avatar}});var utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/avatar/utils.js");Object.defineProperty(exports,"YS",{enumerable:!0,get:function(){return utils_1.getUserAvatarProps}})},"./node_modules/@sima-land/ui-nucleons/avatar/utils.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAvatarIconProps=exports.getNameInitials=exports.getUserAvatarColor=exports.getUserAvatarProps=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),Person_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Person.js")),classnames_1=__importDefault(__webpack_require__("./node_modules/classnames/index.js")),utils_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/avatar/utils.m.scss")),USER_AVATAR_COLORS=["#eb8585","#fda09b","#f49bb1","#ffd785","#ffbb85","#89d7c7","#85e5ac","#b5ef90","#93c4ee","#85caf5","#85ddea","#b3c1c7","#dc9bd5","#b4a8f0","#c999e9"];function getUserAvatarColor(identity){let total=0;for(let i=0;i<identity.length;i++)total+=identity.charCodeAt(i);return USER_AVATAR_COLORS[total%USER_AVATAR_COLORS.length]}function getNameInitials(value){var _a;return"string"==typeof value?(null!==(_a=value[0])&&void 0!==_a?_a:"").toUpperCase():""}function getAvatarIconProps(){return{className:utils_m_scss_1.default.icon}}exports.getUserAvatarProps=function getUserAvatarProps({id,name,image},customProps){return{src:image,children:getNameInitials(name)||(0,jsx_runtime_1.jsx)(Person_1.default,{...getAvatarIconProps()}),...customProps,className:(0,classnames_1.default)(utils_m_scss_1.default.user,null==customProps?void 0:customProps.className),style:{"--avatar-color":id?getUserAvatarColor(`${id}`):void 0,...null==customProps?void 0:customProps.style}}},exports.getUserAvatarColor=getUserAvatarColor,exports.getNameInitials=getNameInitials,exports.getAvatarIconProps=getAvatarIconProps},"./node_modules/@sima-land/ui-nucleons/colors/index.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.COLORS=exports.COLOR=void 0,exports.COLOR={"basic-blue":"#1f84db","basic-gray87":"#212121","basic-gray76":"#3a3a3b","basic-gray66":"#545455","basic-gray54":"#757575","basic-gray38":"#9e9e9e","basic-gray24":"#c2c2c2","basic-gray12":"#e0e0e0","basic-gray8":"#ebebeb","basic-gray4":"#f5f5f5","basic-gray2":"#fafafa","basic-white":"#fff","additional-deep-red":"#d50000","additional-red":"#fb3a2f","additional-light-red":"#feebea","additional-dark-teal":"#089176","additional-teal":"#09ab8b","additional-green":"#00c853","additional-light-green":"#64dd17","additional-lime":"#aeea00","additional-faded-green":"#eff9ea","additional-pink":"#e82e5c","additional-purple":"#b52ea8","additional-violet":"#902bd0","additional-deep-purple":"#634bdf","additional-electric-blue":"#2962ff","additional-light-blue":"#0091ea","additional-cyan":"#00b8d4","additional-sky":"#e4f1f9","additional-deep-orange":"#ff7200","additional-amber":"#ffab00","additional-yellow":"#ffd600","additional-gold":"#d5a43b","additional-brown":"#795548","additional-blue-gray":"#607d8b","additional-deep-blue":"#00599d","additional-dark-blue":"#002b41","additional-unlit-blue":"#1b75c2"},exports.COLORS=new Map(Object.entries(exports.COLOR))},"./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Person.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:[(0,jsx_runtime_1.jsx)("path",{d:"M6.936 14.149a1 1 0 0 1-.585 1.287c-1.69.634-2.512 1.774-2.93 2.765a5.66 5.66 0 0 0-.37 1.305 4.584 4.584 0 0 0-.05.482V20.009l.005.085c.007.08.02.19.048.315.055.248.142.451.248.578A1.088 1.088 0 0 0 3.47 21H20.53a1.088 1.088 0 0 0 .168-.013c.106-.127.193-.33.248-.578a2.473 2.473 0 0 0 .053-.4V19.988a4.575 4.575 0 0 0-.05-.481 5.66 5.66 0 0 0-.37-1.306c-.418-.99-1.24-2.13-2.93-2.765a1 1 0 0 1 .702-1.872c2.31.866 3.488 2.476 4.07 3.86.289.685.432 1.313.504 1.773a6.581 6.581 0 0 1 .073.725l.002.05V20L22 20l1 .001v.03a2.904 2.904 0 0 1-.013.236 4.49 4.49 0 0 1-.088.573c-.095.431-.306 1.074-.806 1.584-.51.518-1.181.576-1.563.576H3.47c-.382 0-1.053-.058-1.562-.576-.501-.51-.712-1.153-.807-1.584a4.474 4.474 0 0 1-.1-.809v-.019L1 20.005v-.003S1 20 2 20l-1-.001V19.972a3.002 3.002 0 0 1 .01-.216 7.662 7.662 0 0 1 .568-2.331c.583-1.385 1.761-2.995 4.07-3.861a1 1 0 0 1 1.288.585Z"}),(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M12 3C9.878 3 8 4.923 8 7.5S9.878 12 12 12s4-1.923 4-4.5S14.122 3 12 3ZM6 7.5C6 4.002 8.599 1 12 1s6 3.002 6 6.5-2.599 6.5-6 6.5-6-3.002-6-6.5Z",clipRule:"evenodd"})]})));exports.default=ForwardRef},"./src/desktop/components/person-info/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ArbitraryLink:()=>ArbitraryLink,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var avatar=__webpack_require__("./node_modules/@sima-land/ui-nucleons/avatar/index.js"),box=__webpack_require__("./node_modules/@sima-land/ui-nucleons/box/index.js"),ui_nucleons_text=__webpack_require__("./node_modules/@sima-land/ui-nucleons/text/index.js"),ui_nucleons_link=__webpack_require__("./node_modules/@sima-land/ui-nucleons/link/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),person_info_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/desktop/components/person-info/person-info.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(person_info_module.Z,options);const person_info_person_info_module=person_info_module.Z&&person_info_module.Z.locals?person_info_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(person_info_person_info_module);function PersonInfo({personId,name,appointment,photoUrl,email,skype,social,phoneHref,phoneText,secondPhoneHref,secondPhoneText,arbitraryLinkProps}){return(0,jsx_runtime.jsxs)("div",{className:cx("main"),children:[(0,jsx_runtime.jsx)(box.x,{marginBottom:6,children:(0,jsx_runtime.jsx)(avatar.qE,{...(0,avatar.YS)({id:personId,name,image:photoUrl})})}),(0,jsx_runtime.jsx)(box.x,{marginBottom:1,children:(0,jsx_runtime.jsx)(ui_nucleons_text.xv,{color:"basic-gray38",size:14,weight:400,children:appointment})}),(0,jsx_runtime.jsx)("div",{className:cx("name"),children:name}),arbitraryLinkProps&&(0,jsx_runtime.jsx)(box.x,{marginTop:2,children:(0,jsx_runtime.jsx)(ui_nucleons_text.xv,{size:12,weight:600,children:(0,jsx_runtime.jsx)(ui_nucleons_link.Link,{...arbitraryLinkProps})})}),(0,jsx_runtime.jsxs)("div",{className:cx("contacts"),children:[email&&(0,jsx_runtime.jsxs)("span",{className:cx("contacts-item"),children:["Email: ",(0,jsx_runtime.jsx)(ui_nucleons_link.Link,{color:"basic-gray87",href:`mailto:${email}`,children:email})]}),Array.isArray(social)&&social.length>0&&(0,jsx_runtime.jsxs)("span",{className:cx("contacts-item"),children:["Соц. сети:"," ",social.map(((props,key)=>(0,jsx_runtime.jsx)(ui_nucleons_link.Link,{className:cx("inline"),color:"basic-gray87",target:"_blank",rel:"nofollow",...props},key)))]}),skype&&(0,jsx_runtime.jsxs)("span",{className:cx("contacts-item"),children:["Skype: ",(0,jsx_runtime.jsx)(ui_nucleons_link.Link,{color:"basic-gray87",href:`skype:${skype}`,children:skype})]}),phoneText&&(0,jsx_runtime.jsx)("span",{className:cx("contacts-item"),children:(0,jsx_runtime.jsx)(ui_nucleons_link.Link,{color:"basic-gray87",href:phoneHref,children:phoneText})}),secondPhoneText&&(0,jsx_runtime.jsx)("span",{className:cx("contacts-item"),children:(0,jsx_runtime.jsx)(ui_nucleons_link.Link,{color:"basic-gray87",href:secondPhoneHref,children:secondPhoneText})})]})]})}try{PersonInfo.displayName="PersonInfo",PersonInfo.__docgenInfo={description:"Информация о персоне.",displayName:"PersonInfo",props:{personId:{defaultValue:null,description:"Идентификатор.",name:"personId",required:!1,type:{name:"number | undefined"}},name:{defaultValue:null,description:"Имя.",name:"name",required:!0,type:{name:"string"}},appointment:{defaultValue:null,description:"Должность.",name:"appointment",required:!0,type:{name:"string"}},photoUrl:{defaultValue:null,description:"Ссылка на фото.",name:"photoUrl",required:!1,type:{name:"string | undefined"}},email:{defaultValue:null,description:"Почта.",name:"email",required:!1,type:{name:"string | undefined"}},skype:{defaultValue:null,description:"Skype.",name:"skype",required:!1,type:{name:"string | undefined"}},social:{defaultValue:null,description:"Социальные сети.",name:"social",required:!1,type:{name:"any[] | undefined"}},phoneHref:{defaultValue:null,description:"Ссылка на рабочий номер телефона.",name:"phoneHref",required:!1,type:{name:"string | undefined"}},phoneText:{defaultValue:null,description:"Рабочий номер телефона.",name:"phoneText",required:!1,type:{name:"string | undefined"}},secondPhoneHref:{defaultValue:null,description:"Ссылка на сотовый номер телефона.",name:"secondPhoneHref",required:!1,type:{name:"string | undefined"}},secondPhoneText:{defaultValue:null,description:"Сотовый номер телефона.",name:"secondPhoneText",required:!1,type:{name:"string | undefined"}},arbitraryLinkProps:{defaultValue:null,description:"Свойства ссылки под именем.",name:"arbitraryLinkProps",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/desktop/components/person-info/person-info.tsx#PersonInfo"]={docgenInfo:PersonInfo.__docgenInfo,name:"PersonInfo",path:"src/desktop/components/person-info/person-info.tsx#PersonInfo"})}catch(__react_docgen_typescript_loader_error){}var modal=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/index.js"),bottom_bar=__webpack_require__("./node_modules/@sima-land/ui-nucleons/bottom-bar/index.js"),clean_buttons=__webpack_require__("./node_modules/@sima-land/ui-nucleons/clean-buttons/index.js");const index_stories={title:"desktop/PersonInfo",component:PersonInfo,parameters:{storySource:{source:"import { PersonInfo } from '@sima-land/moleculas/desktop/components/person-info';\nimport { Modal, ModalBody } from '@sima-land/ui-nucleons/modal';\nimport { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';\nimport { CleanButton, CleanGroup } from '@sima-land/ui-nucleons/clean-buttons';\n\nexport default {\n  title: 'desktop/PersonInfo',\n  component: PersonInfo,\n  parameters: {\n    docs: {\n      description: {\n        component: 'Компонент модального окна сотрудника.',\n      },\n    },\n  },\n};\n\nexport function Primary() {\n  return (\n    <Modal size='s'>\n      <ModalBody>\n        <PersonInfo\n          personId={123}\n          name='Марина Михайловская'\n          appointment='Менеджер по игрушке'\n          email='example@email.com'\n          skype='example@skype.com'\n          phoneText='+7 (999) 888-77-66'\n          phoneHref='tel:89998887766'\n          secondPhoneHref='tel:+79005554433'\n          secondPhoneText='+7 (900) 555-44-33'\n        />\n      </ModalBody>\n\n      <BottomBar divided>\n        <CleanGroup>\n          <CleanButton>Закрыть</CleanButton>\n        </CleanGroup>\n      </BottomBar>\n    </Modal>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n\nexport function ArbitraryLink() {\n  return (\n    <Modal size='s'>\n      <ModalBody>\n        <PersonInfo\n          personId={123}\n          photoUrl='https://picsum.photos/id/342/200/200'\n          name='Сёмин Денис Геннадьевич (ежедневная отгрузка из Екатеринбурга)'\n          appointment='Менеджер по игрушке'\n          email='example@email.com'\n          skype='example@skype.com'\n          phoneText='89998887766 доб. 8823'\n          phoneHref='tel:89998887766;postd=8823'\n          secondPhoneHref='tel:+79005554433'\n          secondPhoneText='+7 (900) 555-44-33'\n          social={[\n            {\n              children: 'vk.com/oks2art',\n              href: 'https://example.com',\n            },\n            {\n              children: 'twitter.com/oks2art',\n              href: 'https://example.com',\n            },\n            {\n              children: 'odnoklassniki.ru/oks2art',\n              href: 'https://example.com',\n            },\n          ]}\n          arbitraryLinkProps={{\n            children: 'Профиль организатора',\n            href: 'test',\n          }}\n        />\n      </ModalBody>\n\n      <BottomBar divided>\n        <CleanGroup>\n          <CleanButton>Закрыть</CleanButton>\n        </CleanGroup>\n      </BottomBar>\n    </Modal>\n  );\n}\n\nArbitraryLink.storyName = 'С длинным именем и ссылкой';\n",locationsMap:{primary:{startLoc:{col:7,line:18},endLoc:{col:1,line:42},startBody:{col:7,line:18},endBody:{col:1,line:42}},"arbitrary-link":{startLoc:{col:7,line:46},endLoc:{col:1,line:89},startBody:{col:7,line:46},endBody:{col:1,line:89}}}},docs:{description:{component:"Компонент модального окна сотрудника."}}}},Primary=function Primary(){return(0,jsx_runtime.jsxs)(modal.u_,{size:"s",children:[(0,jsx_runtime.jsx)(modal.fe,{children:(0,jsx_runtime.jsx)(PersonInfo,{personId:123,name:"Марина Михайловская",appointment:"Менеджер по игрушке",email:"example@email.com",skype:"example@skype.com",phoneText:"+7 (999) 888-77-66",phoneHref:"tel:89998887766",secondPhoneHref:"tel:+79005554433",secondPhoneText:"+7 (900) 555-44-33"})}),(0,jsx_runtime.jsx)(bottom_bar.BottomBar,{divided:!0,children:(0,jsx_runtime.jsx)(clean_buttons.WB,{children:(0,jsx_runtime.jsx)(clean_buttons.ux,{children:"Закрыть"})})})]})};Primary.storyName="Простой пример";const ArbitraryLink=function ArbitraryLink(){return(0,jsx_runtime.jsxs)(modal.u_,{size:"s",children:[(0,jsx_runtime.jsx)(modal.fe,{children:(0,jsx_runtime.jsx)(PersonInfo,{personId:123,photoUrl:"https://picsum.photos/id/342/200/200",name:"Сёмин Денис Геннадьевич (ежедневная отгрузка из Екатеринбурга)",appointment:"Менеджер по игрушке",email:"example@email.com",skype:"example@skype.com",phoneText:"89998887766 доб. 8823",phoneHref:"tel:89998887766;postd=8823",secondPhoneHref:"tel:+79005554433",secondPhoneText:"+7 (900) 555-44-33",social:[{children:"vk.com/oks2art",href:"https://example.com"},{children:"twitter.com/oks2art",href:"https://example.com"},{children:"odnoklassniki.ru/oks2art",href:"https://example.com"}],arbitraryLinkProps:{children:"Профиль организатора",href:"test"}})}),(0,jsx_runtime.jsx)(bottom_bar.BottomBar,{divided:!0,children:(0,jsx_runtime.jsx)(clean_buttons.WB,{children:(0,jsx_runtime.jsx)(clean_buttons.ux,{children:"Закрыть"})})})]})};ArbitraryLink.storyName="С длинным именем и ссылкой",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <Modal size='s'>\n      <ModalBody>\n        <PersonInfo personId={123} name='Марина Михайловская' appointment='Менеджер по игрушке' email='example@email.com' skype='example@skype.com' phoneText='+7 (999) 888-77-66' phoneHref='tel:89998887766' secondPhoneHref='tel:+79005554433' secondPhoneText='+7 (900) 555-44-33' />\n      </ModalBody>\n\n      <BottomBar divided>\n        <CleanGroup>\n          <CleanButton>Закрыть</CleanButton>\n        </CleanGroup>\n      </BottomBar>\n    </Modal>;\n}",...Primary.parameters?.docs?.source}}},ArbitraryLink.parameters={...ArbitraryLink.parameters,docs:{...ArbitraryLink.parameters?.docs,source:{originalSource:"function ArbitraryLink() {\n  return <Modal size='s'>\n      <ModalBody>\n        <PersonInfo personId={123} photoUrl='https://picsum.photos/id/342/200/200' name='Сёмин Денис Геннадьевич (ежедневная отгрузка из Екатеринбурга)' appointment='Менеджер по игрушке' email='example@email.com' skype='example@skype.com' phoneText='89998887766 доб. 8823' phoneHref='tel:89998887766;postd=8823' secondPhoneHref='tel:+79005554433' secondPhoneText='+7 (900) 555-44-33' social={[{\n        children: 'vk.com/oks2art',\n        href: 'https://example.com'\n      }, {\n        children: 'twitter.com/oks2art',\n        href: 'https://example.com'\n      }, {\n        children: 'odnoklassniki.ru/oks2art',\n        href: 'https://example.com'\n      }]} arbitraryLinkProps={{\n        children: 'Профиль организатора',\n        href: 'test'\n      }} />\n      </ModalBody>\n\n      <BottomBar divided>\n        <CleanGroup>\n          <CleanButton>Закрыть</CleanButton>\n        </CleanGroup>\n      </BottomBar>\n    </Modal>;\n}",...ArbitraryLink.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","ArbitraryLink"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/avatar/avatar.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.avatar-m__root__d12{display:flex;align-items:center;justify-content:center;position:relative;flex-grow:0;flex-shrink:0;border-radius:50%;overflow:hidden;width:var(--avatar-size, 72px);height:var(--avatar-size, 72px);color:var(--avatar-text-color, #212121)}.avatar-m__root__d12::before{position:absolute;top:0;left:0;width:100%;height:100%;content:"";display:block;background:var(--avatar-color, #f5f5f5);opacity:var(--avatar-color-opacity, 1)}.avatar-m__root__d12.avatar-m__image-overlay__a63::after{position:absolute;top:0;left:0;width:100%;height:100%;content:"";pointer-events:none;background:#000;opacity:.04}.avatar-m__image__deb{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.avatar-m__content__c7a{font-size:var(--avatar-font-size, calc(var(--avatar-size, 72px) / 3));position:relative;font-weight:600;white-space:nowrap;text-decoration:none}',"",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/avatar/avatar.m.scss"],names:[],mappings:"AAUA,qBACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,iBAAA,CACA,WAAA,CACA,aAAA,CACA,iBAAA,CACA,eAAA,CACA,8BAAA,CACA,+BAAA,CACA,uCAAA,CACA,6BAnBA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CAiBE,UAAA,CACA,aAAA,CACA,uCAAA,CACA,sCAAA,CAEF,yDA1BA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CAwBE,UAAA,CACA,mBAAA,CACA,eAAA,CACA,WAAA,CAIJ,sBAnCE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CAiCA,gBAAA,CAGF,wBACE,qEAAA,CACA,iBAAA,CACA,eAAA,CACA,kBAAA,CAGA,oBAAA",sourcesContent:["@use '../colors';\n\n@mixin layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.root {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  flex-grow: 0;\n  flex-shrink: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  width: var(--avatar-size, 72px);\n  height: var(--avatar-size, 72px);\n  color: var(--avatar-text-color, #{colors.$basic-gray87});\n  &::before {\n    @include layer;\n    content: '';\n    display: block;\n    background: var(--avatar-color, #{colors.$basic-gray4});\n    opacity: var(--avatar-color-opacity, 1);\n  }\n  &.image-overlay::after {\n    @include layer;\n    content: '';\n    pointer-events: none;\n    background: #000;\n    opacity: 0.04;\n  }\n}\n\n.image {\n  @include layer;\n  object-fit: cover;\n}\n\n.content {\n  font-size: var(--avatar-font-size, calc(var(--avatar-size, 72px) / 3));\n  position: relative;\n  font-weight: 600;\n  white-space: nowrap;\n\n  // ВАЖНО: чтобы например обертка в виде ссылки не накидывала text-decoration: underline\n  text-decoration: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"avatar-m__root__d12","image-overlay":"avatar-m__image-overlay__a63",image:"avatar-m__image__deb",content:"avatar-m__content__c7a"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/avatar/utils.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utils-m__icon__e8b{fill:currentColor;width:calc(var(--avatar-size, 72px)/2);height:calc(var(--avatar-size, 72px)/2)}.utils-m__user__af3{--avatar-text-color: #fff}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/avatar/utils.m.scss"],names:[],mappings:"AAAA,oBACE,iBAAA,CACA,sCAAA,CACA,uCAAA,CAGF,oBACE,yBAAA",sourcesContent:[".icon {\n  fill: currentColor;\n  width: calc(var(--avatar-size, 72px) / 2);\n  height: calc(var(--avatar-size, 72px) / 2);\n}\n\n.user {\n  --avatar-text-color: #fff;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={icon:"utils-m__icon__e8b",user:"utils-m__user__af3"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/desktop/components/person-info/person-info.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.person-info-module__main__c4d{padding:40px 24px;display:flex;flex-direction:column;align-items:center;flex-grow:1;text-align:center}.person-info-module__name__dce{font-weight:600;font-size:20px;line-height:28px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.person-info-module__contacts__f4e{display:flex;flex-direction:column;margin-top:16px}.person-info-module__contacts-item__b5d{font-weight:normal;font-size:14px;line-height:20px;color:#212121}.person-info-module__contacts-item__b5d+.person-info-module__contacts-item__b5d{margin-top:8px}.person-info-module__contacts-item__b5d .person-info-module__inline__dc0{display:inline-block}.person-info-module__contacts-item__b5d .person-info-module__inline__dc0:not(:last-child)::after{content:" ";white-space:pre-wrap}',"",{version:3,sources:["webpack://./src/desktop/components/person-info/person-info.module.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAEA,+BACE,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,WAAA,CACA,iBAAA,CAGF,+BACE,eAAA,CACA,cAAA,CACA,gBAAA,CACA,mBAAA,CACA,oBAAA,CACA,2BAAA,CACA,eAAA,CAGF,mCACE,YAAA,CACA,qBAAA,CACA,eAAA,CAGF,wCACE,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,aC3Ba,CD4Bb,gFACE,cAAA,CAEF,yEACE,oBAAA,CACA,iGACE,WAAA,CACA,oBAAA",sourcesContent:["@use 'node_modules/@sima-land/ui-nucleons/colors';\n\n.main {\n  padding: 40px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.name {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 28px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.contacts {\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n}\n\n.contacts-item {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: colors.$basic-gray87;\n  & + & {\n    margin-top: 8px;\n  }\n  .inline {\n    display: inline-block;\n    &:not(:last-child)::after {\n      content: ' ';\n      white-space: pre-wrap;\n    }\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={main:"person-info-module__main__c4d",name:"person-info-module__name__dce",contacts:"person-info-module__contacts__f4e","contacts-item":"person-info-module__contacts-item__b5d",inline:"person-info-module__inline__dc0"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/avatar/avatar.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_avatar_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/avatar/avatar.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_avatar_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_avatar_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_avatar_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_avatar_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/@sima-land/ui-nucleons/avatar/utils.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_utils_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/avatar/utils.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_utils_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_utils_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_utils_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_utils_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);