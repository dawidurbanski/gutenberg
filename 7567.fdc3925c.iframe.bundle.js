"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[7567],{"./packages/components/src/unit-control/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{dO:function(){return UnitControl},ZP:function(){return unit_control}});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),react=__webpack_require__("./node_modules/react/index.js"),i18n_build_module=__webpack_require__("./packages/i18n/build-module/index.js"),actions=__webpack_require__("./packages/components/src/input-control/reducer/actions.ts"),unit_control_styles=__webpack_require__("./packages/components/src/unit-control/styles/unit-control-styles.ts"),utils=__webpack_require__("./packages/components/src/unit-control/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnitSelectControl(_ref){let{className:className,isUnitSelectTabbable:isTabbable=!0,onChange:onChange,size:size="default",unit:unit="px",units:units=utils.Ui,...props}=_ref;if(!(0,utils.wW)(units)||1===(null==units?void 0:units.length))return(0,jsx_runtime.jsx)(unit_control_styles.Vh,{className:"components-unit-control__unit-label",selectSize:size,children:unit});const classes=classnames_default()("components-unit-control__select",className);return(0,jsx_runtime.jsx)(unit_control_styles.mY,{className:classes,onChange:event=>{const{value:unitValue}=event.target,data=units.find((option=>option.value===unitValue));null==onChange||onChange(unitValue,{event:event,data:data})},selectSize:size,tabIndex:isTabbable?void 0:-1,value:unit,...props,children:units.map((option=>(0,jsx_runtime.jsx)("option",{value:option.value,children:option.label},option.value)))})}UnitSelectControl.displayName="UnitSelectControl";try{unitselectcontrol.displayName="unitselectcontrol",unitselectcontrol.__docgenInfo={description:"",displayName:"unitselectcontrol",props:{size:{defaultValue:{value:"default"},description:"Adjusts the size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"__unstable-large"'}]}},isUnitSelectTabbable:{defaultValue:{value:"true"},description:"Whether the control can be focused via keyboard navigation.",name:"isUnitSelectTabbable",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"A callback function invoked when the value is changed.",name:"onChange",required:!1,type:{name:"UnitControlOnChangeCallback"}},unit:{defaultValue:{value:"px"},description:"Current unit.",name:"unit",required:!1,type:{name:"string"}},units:{defaultValue:{value:"[\n\tallUnits.px,\n\tallUnits[ '%' ],\n\tallUnits.em,\n\tallUnits.rem,\n\tallUnits.vw,\n\tallUnits.vh,\n]"},description:"Available units to select from.",name:"units",required:!1,type:{name:"WPUnitControlUnit[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/unit-select-control.tsx#unitselectcontrol"]={docgenInfo:unitselectcontrol.__docgenInfo,name:"unitselectcontrol",path:"packages/components/src/unit-control/unit-select-control.tsx#unitselectcontrol"})}catch(__react_docgen_typescript_loader_error){}var use_controlled_state=__webpack_require__("./packages/components/src/utils/hooks/use-controlled-state.js");function UnforwardedUnitControl(unitControlProps,forwardedRef){const{__unstableStateReducer:stateReducerProp,autoComplete:autoComplete="off",children:children,className:className,disabled:disabled=!1,disableUnits:disableUnits=!1,isPressEnterToChange:isPressEnterToChange=!1,isResetValueOnUnitChange:isResetValueOnUnitChange=!1,isUnitSelectTabbable:isUnitSelectTabbable=!0,label:label,onChange:onChangeProp,onUnitChange:onUnitChange,size:size="default",unit:unitProp,units:unitsProp=utils.Ui,value:valueProp,onBlur:onBlurProp,onFocus:onFocusProp,...props}=unitControlProps;"unit"in unitControlProps&&(0,build_module.Z)("UnitControl unit prop",{since:"5.6",hint:"The unit should be provided within the `value` prop.",version:"6.2"});const nonNullValueProp=null!=valueProp?valueProp:void 0,units=(0,react.useMemo)((()=>(0,utils.e_)(nonNullValueProp,unitProp,unitsProp)),[nonNullValueProp,unitProp,unitsProp]),[parsedQuantity,parsedUnit]=(0,utils.hy)(nonNullValueProp,unitProp,units),[unit,setUnit]=(0,use_controlled_state.Z)(1===units.length?units[0].value:unitProp,{initial:parsedUnit,fallback:""});(0,react.useEffect)((()=>{void 0!==parsedUnit&&setUnit(parsedUnit)}),[parsedUnit,setUnit]);const refParsedQuantity=(0,react.useRef)(void 0),classes=classnames_default()("components-unit-control","components-unit-control-wrapper",className),mayUpdateUnit=event=>{if(!isNaN(Number(event.currentTarget.value)))return void(refParsedQuantity.current=void 0);const[validParsedQuantity,validParsedUnit]=(0,utils.Gl)(event.currentTarget.value,units,parsedQuantity,unit);if(refParsedQuantity.current=validParsedQuantity,isPressEnterToChange&&validParsedUnit!==unit){const changeProps={event:event,data:Array.isArray(units)?units.find((option=>option.value===validParsedUnit)):void 0};null==onUnitChange||onUnitChange(validParsedUnit,changeProps),setUnit(validParsedUnit)}},unitControlStateReducer=(state,action)=>{const nextState={...state};var _refParsedQuantity$cu;action.type===actions.g&&(void 0!==refParsedQuantity.current&&(nextState.value=(null!==(_refParsedQuantity$cu=refParsedQuantity.current)&&void 0!==_refParsedQuantity$cu?_refParsedQuantity$cu:"").toString(),refParsedQuantity.current=void 0));return nextState};let stateReducer=unitControlStateReducer;stateReducerProp&&(stateReducer=(state,action)=>{const baseState=unitControlStateReducer(state,action);return stateReducerProp(baseState,action)});const inputSuffix=disableUnits?null:(0,jsx_runtime.jsx)(UnitSelectControl,{"aria-label":(0,i18n_build_module.__)("Select unit"),disabled:disabled,isUnitSelectTabbable:isUnitSelectTabbable,onChange:(nextUnitValue,changeProps)=>{const{data:data}=changeProps;let nextValue=`${null!=parsedQuantity?parsedQuantity:""}${nextUnitValue}`;isResetValueOnUnitChange&&void 0!==(null==data?void 0:data.default)&&(nextValue=`${data.default}${nextUnitValue}`),null==onChangeProp||onChangeProp(nextValue,changeProps),null==onUnitChange||onUnitChange(nextUnitValue,changeProps),setUnit(nextUnitValue)},size:size,unit:unit,units:units,onBlur:onBlurProp,onFocus:onFocusProp});let step=props.step;if(!step&&units){var _activeUnit$step;const activeUnit=units.find((option=>option.value===unit));step=null!==(_activeUnit$step=null==activeUnit?void 0:activeUnit.step)&&void 0!==_activeUnit$step?_activeUnit$step:1}return(0,jsx_runtime.jsx)(unit_control_styles.Ke,{type:isPressEnterToChange?"text":"number",...props,autoComplete:autoComplete,className:classes,disabled:disabled,spinControls:"none",isPressEnterToChange:isPressEnterToChange,label:label,onBlur:event=>{mayUpdateUnit(event),null==onBlurProp||onBlurProp(event)},onKeyDown:event=>{const{key:key}=event;"Enter"===key&&mayUpdateUnit(event)},onChange:(nextQuantityValue,changeProps)=>{if(""===nextQuantityValue||null==nextQuantityValue)return void(null==onChangeProp||onChangeProp("",changeProps));const onChangeValue=(0,utils.Gl)(nextQuantityValue,units,parsedQuantity,unit).join("");null==onChangeProp||onChangeProp(onChangeValue,changeProps)},ref:forwardedRef,size:size,suffix:inputSuffix,value:null!=parsedQuantity?parsedQuantity:"",step:step,__unstableStateReducer:stateReducer,onFocus:onFocusProp})}UnforwardedUnitControl.displayName="UnforwardedUnitControl";const UnitControl=(0,react.forwardRef)(UnforwardedUnitControl);var unit_control=UnitControl;try{UnitControl.displayName="UnitControl",UnitControl.__docgenInfo={description:"`UnitControl` allows the user to set a numeric quantity as well as a unit (e.g. `px`).",displayName:"UnitControl",props:{onChange:{defaultValue:null,description:"A callback function invoked when the value is changed.\nA function that receives the value of the input.",name:"onChange",required:!1,type:{name:"UnitControlOnChangeCallback & InputChangeCallback<{}>"}},size:{defaultValue:{value:"'default'"},description:"Adjusts the size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"__unstable-large"'}]}},isUnitSelectTabbable:{defaultValue:{value:"true"},description:"Whether the control can be focused via keyboard navigation.",name:"isUnitSelectTabbable",required:!1,type:{name:"boolean"}},units:{defaultValue:{value:"CSS_UNITS"},description:"Available units to select from.",name:"units",required:!1,type:{name:"WPUnitControlUnit[]"}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>",name:"prefix",required:!1,type:{name:"ReactNode"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},disabled:{defaultValue:{value:"false"},description:"If true, the `input` will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},__next36pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},__unstableInputWidth:{defaultValue:null,description:"",name:"__unstableInputWidth",required:!1,type:{name:"Width<string | number>"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"'top'"},description:"The position of the label.",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"side"'},{value:'"edge"'}]}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},max:{defaultValue:{value:"Infinity"},description:"The maximum `value` allowed.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"-Infinity"},description:"The minimum `value` allowed.",name:"min",required:!1,type:{name:"number"}},required:{defaultValue:{value:"false"},description:"If `true` enforces a valid number within the control's min/max range.\nIf `false` allows an empty string as a valid value.",name:"required",required:!1,type:{name:"boolean"}},step:{defaultValue:{value:"1"},description:"Amount by which the `value` is changed when incrementing/decrementing.\nIt is also a factor in validation as `value` must be a multiple of `step`\n(offset by `min`, if specified) to be valid. Accepts the special string value `any`\nthat voids the validation constraint and causes stepping actions to increment/decrement by `1`.",name:"step",required:!1,type:{name:"string | number"}},value:{defaultValue:null,description:'The value of the input.\nCurrent value. If passed as a string, the current unit will be inferred from this value.\nFor example, a `value` of "50%" will set the current unit to `%`.',name:"value",required:!1,type:{name:"string | number"}},dragDirection:{defaultValue:{value:"'n'"},description:"Determines the drag axis.",name:"dragDirection",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"n"'},{value:'"e"'},{value:'"w"'}]}},dragThreshold:{defaultValue:{value:"10"},description:"If `isDragEnabled` is true, this controls the amount of `px` to have been dragged before\nthe drag gesture is actually triggered.",name:"dragThreshold",required:!1,type:{name:"number"}},isDragEnabled:{defaultValue:{value:"true"},description:"If true, enables mouse drag gestures.",name:"isDragEnabled",required:!1,type:{name:"boolean"}},isPressEnterToChange:{defaultValue:{value:"false"},description:"If true, the `ENTER` key press is required in order to trigger an `onChange`.\nIf enabled, a change is also triggered when tabbing away (`onBlur`).",name:"isPressEnterToChange",required:!1,type:{name:"boolean"}},onValidate:{defaultValue:null,description:"",name:"onValidate",required:!1,type:{name:"(nextValue: string, event?: SyntheticEvent<HTMLInputElement, Event>) => void"}},__unstableStateReducer:{defaultValue:null,description:"",name:"__unstableStateReducer",required:!1,type:{name:"StateReducer<{}>"}},hideHTMLArrows:{defaultValue:{value:"false"},description:"If true, the default `input` HTML arrows will be hidden.\n@deprecated",name:"hideHTMLArrows",required:!1,type:{name:"boolean"}},isShiftStepEnabled:{defaultValue:{value:"true"},description:"If true, pressing `UP` or `DOWN` along with the `SHIFT` key will increment the\nvalue by the `shiftStep` value.",name:"isShiftStepEnabled",required:!1,type:{name:"boolean"}},shiftStep:{defaultValue:{value:"10"},description:"Amount to increment by when the `SHIFT` key is held down. This shift value is\na multiplier to the `step` value. For example, if the `step` value is `5`,\nand `shiftStep` is `10`, each jump would increment/decrement by `50`.",name:"shiftStep",required:!1,type:{name:"number"}},disableUnits:{defaultValue:{value:"false"},description:"If `true`, the unit `<select>` is hidden.",name:"disableUnits",required:!1,type:{name:"boolean"}},isResetValueOnUnitChange:{defaultValue:{value:"false"},description:"If `true`, and the selected unit provides a `default` value, this value is set\nwhen changing units.",name:"isResetValueOnUnitChange",required:!1,type:{name:"boolean"}},onUnitChange:{defaultValue:null,description:"Callback when the `unit` changes.",name:"onUnitChange",required:!1,type:{name:"UnitControlOnChangeCallback"}},unit:{defaultValue:null,description:"Current unit. _Note: this prop is deprecated. Instead, provide a unit with a value through the `value` prop._\n@deprecated",name:"unit",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/index.tsx#UnitControl"]={docgenInfo:UnitControl.__docgenInfo,name:"UnitControl",path:"packages/components/src/unit-control/index.tsx#UnitControl"})}catch(__react_docgen_typescript_loader_error){}try{parseQuantityAndUnitFromRawValue.displayName="parseQuantityAndUnitFromRawValue",parseQuantityAndUnitFromRawValue.__docgenInfo={description:"Parses a quantity and unit from a raw string value, given a list of allowed\nunits and otherwise falling back to the default unit.",displayName:"parseQuantityAndUnitFromRawValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/index.tsx#parseQuantityAndUnitFromRawValue"]={docgenInfo:parseQuantityAndUnitFromRawValue.__docgenInfo,name:"parseQuantityAndUnitFromRawValue",path:"packages/components/src/unit-control/index.tsx#parseQuantityAndUnitFromRawValue"})}catch(__react_docgen_typescript_loader_error){}try{useCustomUnits.displayName="useCustomUnits",useCustomUnits.__docgenInfo={description:"Custom hook to retrieve and consolidate units setting from add_theme_support().\nTODO: ideally this hook shouldn't be needed\nhttps://github.com/WordPress/gutenberg/pull/31822#discussion_r633280823",displayName:"useCustomUnits",props:{units:{defaultValue:{value:"Object.values( allUnits )"},description:"",name:"units",required:!1,type:{name:"WPUnitControlUnit[]"}},availableUnits:{defaultValue:{value:"[]"},description:"",name:"availableUnits",required:!1,type:{name:"string[]"}},defaultValues:{defaultValue:null,description:"",name:"defaultValues",required:!1,type:{name:"Record<string, number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/index.tsx#useCustomUnits"]={docgenInfo:useCustomUnits.__docgenInfo,name:"useCustomUnits",path:"packages/components/src/unit-control/index.tsx#useCustomUnits"})}catch(__react_docgen_typescript_loader_error){}try{unitcontrol.displayName="unitcontrol",unitcontrol.__docgenInfo={description:"`UnitControl` allows the user to set a numeric quantity as well as a unit (e.g. `px`).",displayName:"unitcontrol",props:{onChange:{defaultValue:null,description:"A callback function invoked when the value is changed.\nA function that receives the value of the input.",name:"onChange",required:!1,type:{name:"UnitControlOnChangeCallback & InputChangeCallback<{}>"}},size:{defaultValue:{value:"'default'"},description:"Adjusts the size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"__unstable-large"'}]}},isUnitSelectTabbable:{defaultValue:{value:"true"},description:"Whether the control can be focused via keyboard navigation.",name:"isUnitSelectTabbable",required:!1,type:{name:"boolean"}},units:{defaultValue:{value:"CSS_UNITS"},description:"Available units to select from.",name:"units",required:!1,type:{name:"WPUnitControlUnit[]"}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>",name:"prefix",required:!1,type:{name:"ReactNode"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},disabled:{defaultValue:{value:"false"},description:"If true, the `input` will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},__next36pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},__unstableInputWidth:{defaultValue:null,description:"",name:"__unstableInputWidth",required:!1,type:{name:"Width<string | number>"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"'top'"},description:"The position of the label.",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"side"'},{value:'"edge"'}]}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},max:{defaultValue:{value:"Infinity"},description:"The maximum `value` allowed.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"-Infinity"},description:"The minimum `value` allowed.",name:"min",required:!1,type:{name:"number"}},required:{defaultValue:{value:"false"},description:"If `true` enforces a valid number within the control's min/max range.\nIf `false` allows an empty string as a valid value.",name:"required",required:!1,type:{name:"boolean"}},step:{defaultValue:{value:"1"},description:"Amount by which the `value` is changed when incrementing/decrementing.\nIt is also a factor in validation as `value` must be a multiple of `step`\n(offset by `min`, if specified) to be valid. Accepts the special string value `any`\nthat voids the validation constraint and causes stepping actions to increment/decrement by `1`.",name:"step",required:!1,type:{name:"string | number"}},value:{defaultValue:null,description:'The value of the input.\nCurrent value. If passed as a string, the current unit will be inferred from this value.\nFor example, a `value` of "50%" will set the current unit to `%`.',name:"value",required:!1,type:{name:"string | number"}},dragDirection:{defaultValue:{value:"'n'"},description:"Determines the drag axis.",name:"dragDirection",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"n"'},{value:'"e"'},{value:'"w"'}]}},dragThreshold:{defaultValue:{value:"10"},description:"If `isDragEnabled` is true, this controls the amount of `px` to have been dragged before\nthe drag gesture is actually triggered.",name:"dragThreshold",required:!1,type:{name:"number"}},isDragEnabled:{defaultValue:{value:"true"},description:"If true, enables mouse drag gestures.",name:"isDragEnabled",required:!1,type:{name:"boolean"}},isPressEnterToChange:{defaultValue:{value:"false"},description:"If true, the `ENTER` key press is required in order to trigger an `onChange`.\nIf enabled, a change is also triggered when tabbing away (`onBlur`).",name:"isPressEnterToChange",required:!1,type:{name:"boolean"}},onValidate:{defaultValue:null,description:"",name:"onValidate",required:!1,type:{name:"(nextValue: string, event?: SyntheticEvent<HTMLInputElement, Event>) => void"}},__unstableStateReducer:{defaultValue:null,description:"",name:"__unstableStateReducer",required:!1,type:{name:"StateReducer<{}>"}},hideHTMLArrows:{defaultValue:{value:"false"},description:"If true, the default `input` HTML arrows will be hidden.\n@deprecated",name:"hideHTMLArrows",required:!1,type:{name:"boolean"}},isShiftStepEnabled:{defaultValue:{value:"true"},description:"If true, pressing `UP` or `DOWN` along with the `SHIFT` key will increment the\nvalue by the `shiftStep` value.",name:"isShiftStepEnabled",required:!1,type:{name:"boolean"}},shiftStep:{defaultValue:{value:"10"},description:"Amount to increment by when the `SHIFT` key is held down. This shift value is\na multiplier to the `step` value. For example, if the `step` value is `5`,\nand `shiftStep` is `10`, each jump would increment/decrement by `50`.",name:"shiftStep",required:!1,type:{name:"number"}},disableUnits:{defaultValue:{value:"false"},description:"If `true`, the unit `<select>` is hidden.",name:"disableUnits",required:!1,type:{name:"boolean"}},isResetValueOnUnitChange:{defaultValue:{value:"false"},description:"If `true`, and the selected unit provides a `default` value, this value is set\nwhen changing units.",name:"isResetValueOnUnitChange",required:!1,type:{name:"boolean"}},onUnitChange:{defaultValue:null,description:"Callback when the `unit` changes.",name:"onUnitChange",required:!1,type:{name:"UnitControlOnChangeCallback"}},unit:{defaultValue:null,description:"Current unit. _Note: this prop is deprecated. Instead, provide a unit with a value through the `value` prop._\n@deprecated",name:"unit",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/index.tsx#unitcontrol"]={docgenInfo:unitcontrol.__docgenInfo,name:"unitcontrol",path:"packages/components/src/unit-control/index.tsx#unitcontrol"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/unit-control/styles/unit-control-styles.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ke:function(){return ValueInput},Vh:function(){return UnitLabel},mY:function(){return UnitSelect}});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/colors-values.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/utils/rtl.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/src/utils/config-values.js"),_number_control__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/number-control/index.tsx"),_input_control_styles_input_control_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/input-control/styles/input-control-styles.tsx"),_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/ui/utils/space.ts");const ValueInput=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_number_control__WEBPACK_IMPORTED_MODULE_1__.Z,{target:"e1bagdl32"})("&&&{input{display:block;width:100%;}",_input_control_styles_input_control_styles__WEBPACK_IMPORTED_MODULE_2__.Kg,"{transition:box-shadow 0.1s linear;}}"),baseUnitLabelStyles=_ref=>{let{selectSize:selectSize}=_ref;const sizes={default:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)("box-sizing:border-box;padding:2px 1px;width:20px;color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.gray[800],";font-size:8px;line-height:1;letter-spacing:-0.5px;text-transform:uppercase;text-align-last:center;",""),large:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)("box-sizing:border-box;min-width:24px;max-width:48px;height:24px;margin-inline-end:",(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(2),";padding:",(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(1),";color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.theme,";font-size:13px;line-height:1;text-align-last:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;","")};return"__unstable-large"===selectSize?sizes.large:sizes.default},UnitLabel=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1bagdl31"})("&&&{pointer-events:none;",baseUnitLabelStyles,";color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.gray[900],";}"),UnitSelect=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("select",{target:"e1bagdl30"})("&&&{appearance:none;background:transparent;border-radius:2px;border:none;display:block;outline:none;margin:0;min-height:auto;font-family:inherit;",baseUnitLabelStyles,";",(_ref2=>{let{selectSize:selectSize="default"}=_ref2;const sizes={default:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)("height:100%;border:1px solid transparent;transition:box-shadow 0.1s linear,border 0.1s linear;",(0,_utils__WEBPACK_IMPORTED_MODULE_6__.b)({borderTopLeftRadius:0,borderBottomLeftRadius:0})()," &:not(:disabled):hover{background-color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.gray[100],";}&:focus{border:1px solid ",_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";box-shadow:inset 0 0 0 ",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidth+" "+_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";outline-offset:0;outline:2px solid transparent;z-index:1;}",""),large:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)("display:flex;justify-content:center;align-items:center;&:hover{color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";box-shadow:inset 0 0 0 ",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidth+" "+_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";outline:",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidth," solid transparent;}&:focus{box-shadow:0 0 0 ",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidthFocus+" "+_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";outline:",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidthFocus," solid transparent;}","")};return"__unstable-large"===selectSize?sizes.large:sizes.default}),";&:not( :disabled ){cursor:pointer;}}")},"./packages/components/src/unit-control/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ui:function(){return CSS_UNITS},hy:function(){return getParsedQuantityAndUnit},wW:function(){return hasUnits},YX:function(){return parseQuantityAndUnitFromRawValue},Gl:function(){return getValidParsedQuantityAndUnit},nj:function(){return useCustomUnits},e_:function(){return getUnitsWithCurrentUnit}});var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js");const isWeb="web"===__webpack_require__("./packages/element/build-module/platform.js").Z.OS,allUnits={px:{value:"px",label:isWeb?"px":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pixels (px)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pixels (px)"),step:1},"%":{value:"%",label:isWeb?"%":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Percentage (%)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Percent (%)"),step:.1},em:{value:"em",label:isWeb?"em":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Relative to parent font size (em)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("ems","Relative to parent font size (em)"),step:.01},rem:{value:"rem",label:isWeb?"rem":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Relative to root font size (rem)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("rems","Relative to root font size (rem)"),step:.01},vw:{value:"vw",label:isWeb?"vw":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport width (vw)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport width (vw)"),step:.1},vh:{value:"vh",label:isWeb?"vh":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport height (vh)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport height (vh)"),step:.1},vmin:{value:"vmin",label:isWeb?"vmin":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport smallest dimension (vmin)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport smallest dimension (vmin)"),step:.1},vmax:{value:"vmax",label:isWeb?"vmax":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport largest dimension (vmax)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport largest dimension (vmax)"),step:.1},ch:{value:"ch",label:isWeb?"ch":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width of the zero (0) character (ch)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width of the zero (0) character (ch)"),step:.01},ex:{value:"ex",label:isWeb?"ex":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("x-height of the font (ex)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("x-height of the font (ex)"),step:.01},cm:{value:"cm",label:isWeb?"cm":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Centimeters (cm)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Centimeters (cm)"),step:.001},mm:{value:"mm",label:isWeb?"mm":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Millimeters (mm)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Millimeters (mm)"),step:.1},in:{value:"in",label:isWeb?"in":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inches (in)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inches (in)"),step:.001},pc:{value:"pc",label:isWeb?"pc":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Picas (pc)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Picas (pc)"),step:1},pt:{value:"pt",label:isWeb?"pt":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Points (pt)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Points (pt)"),step:1}},ALL_CSS_UNITS=Object.values(allUnits),CSS_UNITS=[allUnits.px,allUnits["%"],allUnits.em,allUnits.rem,allUnits.vw,allUnits.vh],DEFAULT_UNIT=allUnits.px;function getParsedQuantityAndUnit(rawValue,fallbackUnit,allowedUnits){return parseQuantityAndUnitFromRawValue(fallbackUnit?`${null!=rawValue?rawValue:""}${fallbackUnit}`:rawValue,allowedUnits)}function hasUnits(units){return Array.isArray(units)&&!!units.length}function parseQuantityAndUnitFromRawValue(rawValue){var _trimmedValue,_unitMatch$;let trimmedValue,quantityToReturn,allowedUnits=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ALL_CSS_UNITS;if(void 0!==rawValue||null===rawValue){trimmedValue=`${rawValue}`.trim();const parsedQuantity=parseFloat(trimmedValue);quantityToReturn=isFinite(parsedQuantity)?parsedQuantity:void 0}const unitMatch=null===(_trimmedValue=trimmedValue)||void 0===_trimmedValue?void 0:_trimmedValue.match(/[\d.\-\+]*\s*(.*)/),matchedUnit=null==unitMatch||null===(_unitMatch$=unitMatch[1])||void 0===_unitMatch$?void 0:_unitMatch$.toLowerCase();let unitToReturn;if(hasUnits(allowedUnits)){const match=allowedUnits.find((item=>item.value===matchedUnit));unitToReturn=null==match?void 0:match.value}else unitToReturn=DEFAULT_UNIT.value;return[quantityToReturn,unitToReturn]}function getValidParsedQuantityAndUnit(rawValue,allowedUnits,fallbackQuantity,fallbackUnit){const[parsedQuantity,parsedUnit]=parseQuantityAndUnitFromRawValue(rawValue,allowedUnits),quantityToReturn=null!=parsedQuantity?parsedQuantity:fallbackQuantity;let unitToReturn=parsedUnit||fallbackUnit;return!unitToReturn&&hasUnits(allowedUnits)&&(unitToReturn=allowedUnits[0].value),[quantityToReturn,unitToReturn]}const useCustomUnits=_ref=>{let{units:units=ALL_CSS_UNITS,availableUnits:availableUnits=[],defaultValues:defaultValues}=_ref;const customUnitsToReturn=function filterUnitsWithSettings(){let allowedUnitValues=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],availableUnits=arguments.length>1?arguments[1]:void 0;return Array.isArray(availableUnits)?availableUnits.filter((unit=>allowedUnitValues.includes(unit.value))):[]}(availableUnits,units);return defaultValues&&customUnitsToReturn.forEach(((unit,i)=>{if(defaultValues[unit.value]){const[parsedDefaultValue]=parseQuantityAndUnitFromRawValue(defaultValues[unit.value]);customUnitsToReturn[i].default=parsedDefaultValue}})),customUnitsToReturn};function getUnitsWithCurrentUnit(rawValue,legacyUnit){let units=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ALL_CSS_UNITS;const unitsToReturn=Array.isArray(units)?[...units]:[],[,currentUnit]=getParsedQuantityAndUnit(rawValue,legacyUnit,ALL_CSS_UNITS);return currentUnit&&!unitsToReturn.some((unit=>unit.value===currentUnit))&&allUnits[currentUnit]&&unitsToReturn.unshift(allUnits[currentUnit]),unitsToReturn}},"./packages/element/build-module/platform.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={OS:"web",select:spec=>"web"in spec?spec.web:spec.default,isWeb:!0}}}]);