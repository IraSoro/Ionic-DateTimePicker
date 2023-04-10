var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { IonButton, IonItem, IonLabel, IonIcon, IonModal, IonButtons, IonDatetime, } from '@ionic/react';
import { format, parseISO } from 'date-fns';
import './WrappedPicker.css';
var id = 0;
var WrappedPicker = function (props) {
    var ident = useState((id++).toString())[0];
    var _a = useState(props.value), value = _a[0], setValue = _a[1];
    var modalRef = useRef(null);
    var datetimeRef = useRef(null);
    var inputRef = useRef(null);
    return (_jsxs(IonItem, __assign({ id: props.type + ident }, { children: [_jsx(IonLabel, __assign({ color: props.color }, { children: props.title })), _jsx(IonIcon, { slot: "end", color: props.color, size: props.sizeIcon, icon: props.icon }), _jsx("p", { children: value }), _jsx(IonModal, __assign({ id: "choose-datetime-modal", ref: modalRef, trigger: props.type + ident, onWillDismiss: function (ev) {
                    var _a;
                    var formattedValue = format(parseISO((_a = ev.detail.data) === null || _a === void 0 ? void 0 : _a.toString()), props.format);
                    setValue(formattedValue);
                    props.onChange(formattedValue);
                } }, { children: _jsx(IonDatetime, __assign({ ref: datetimeRef, color: props.color, presentation: props.type, locale: props.locale }, { children: _jsxs(IonButtons, __assign({ slot: "buttons" }, { children: [_jsx(IonButton, __assign({ color: props.color, onClick: function () {
                                    var _a, _b, _c;
                                    (_a = datetimeRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
                                    (_b = modalRef.current) === null || _b === void 0 ? void 0 : _b.dismiss((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.value, 'cancel');
                                } }, { children: "Cancel" })), _jsx(IonButton, __assign({ color: props.color, onClick: function () {
                                    var _a, _b, _c;
                                    (_a = datetimeRef.current) === null || _a === void 0 ? void 0 : _a.confirm();
                                    (_b = modalRef.current) === null || _b === void 0 ? void 0 : _b.dismiss((_c = datetimeRef.current) === null || _c === void 0 ? void 0 : _c.value, 'confirm');
                                } }, { children: "Confirm" }))] })) })) }))] })));
};
export default WrappedPicker;
