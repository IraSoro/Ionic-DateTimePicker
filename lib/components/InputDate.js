import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { calendarClear } from 'ionicons/icons';
import WrappedInput from './WrappedInput';
var id = 0;
var InputDate = function (props) {
    var _a, _b, _c, _d, _e;
    var ident = useState((id++).toString())[0];
    var color = (_a = props.color) !== null && _a !== void 0 ? _a : "primary";
    var locale = (_b = props.locale) !== null && _b !== void 0 ? _b : "en-GB";
    var title = (_c = props.title) !== null && _c !== void 0 ? _c : "The date";
    var sizeIcon = (_d = props.sizeIcon) !== null && _d !== void 0 ? _d : "small";
    var nameIcon = (_e = props.icon) !== null && _e !== void 0 ? _e : calendarClear;
    return (_jsx(WrappedInput, { value: props.value, setValue: props.setValue, ID: "InputDate-".concat(ident), type: "date", convertFunc: props.convertFunc, color: color, locale: locale, title: title, icon: nameIcon, sizeIcon: sizeIcon }));
};
export default InputDate;
