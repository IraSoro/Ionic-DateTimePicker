import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { timeSharp } from 'ionicons/icons';
import WrappedInput from './WrappedInput';
var id = 0;
var InputTime = function (props) {
    var _a, _b, _c, _d, _e;
    var ident = useState((id++).toString())[0];
    return (_jsx(WrappedInput, { value: props.time, setValue: props.setTime, ID: "InputTime-".concat(ident), type: "time", color: (_a = props.color) !== null && _a !== void 0 ? _a : "primary", locale: (_b = props.locale) !== null && _b !== void 0 ? _b : "en-GB", title: (_c = props.title) !== null && _c !== void 0 ? _c : "The time", icon: (_d = props.icon) !== null && _d !== void 0 ? _d : timeSharp, sizeIcon: (_e = props.sizeIcon) !== null && _e !== void 0 ? _e : "small" }));
};
export default InputTime;
