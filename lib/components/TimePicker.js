import { jsx as _jsx } from "react/jsx-runtime";
import { timeSharp } from 'ionicons/icons';
import WrappedPicker from './WrappedPicker';
var TimePicker = function (props) {
    var _a, _b, _c, _d, _e, _f;
    return (_jsx(WrappedPicker, { value: props.time, onChange: props.onChange, type: "time", color: (_a = props.color) !== null && _a !== void 0 ? _a : "primary", locale: (_b = props.locale) !== null && _b !== void 0 ? _b : "en-GB", title: (_c = props.title) !== null && _c !== void 0 ? _c : "The time", icon: (_d = props.icon) !== null && _d !== void 0 ? _d : timeSharp, sizeIcon: (_e = props.sizeIcon) !== null && _e !== void 0 ? _e : "small", format: (_f = props.format) !== null && _f !== void 0 ? _f : "HH:mm" }));
};
export default TimePicker;
