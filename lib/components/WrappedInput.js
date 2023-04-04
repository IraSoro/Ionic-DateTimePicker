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
import { useRef } from 'react';
import { IonButton, IonItem, IonLabel, IonIcon, IonModal, IonButtons, IonDatetime, } from '@ionic/react';
import { format, parseISO } from 'date-fns';
import './WrappedInput.css';
var WrappedInput = function (props) {
    var modalRef = useRef(null);
    var datetimeRef = useRef(null);
    var inputRef = useRef(null);
    return (_jsxs(IonItem, __assign({ id: props.ID }, { children: [_jsx(IonLabel, __assign({ color: props.color }, { children: props.title })), _jsx(IonIcon, { slot: "end", color: props.color, size: props.sizeIcon, icon: props.icon }), _jsx("p", { children: props.value }), _jsx(IonModal, __assign({ id: "choose-datetime-modal", ref: modalRef, trigger: props.ID }, { children: _jsx(IonDatetime, __assign({ ref: datetimeRef, color: props.color, presentation: props.type, locale: props.locale, onIonChange: function (e) {
                        if (!e.detail.value) {
                            return;
                        }
                        props.setValue(format(parseISO(e.detail.value.toString()), props.format));
                    } }, { children: _jsxs(IonButtons, __assign({ slot: "buttons" }, { children: [_jsx(IonButton, __assign({ color: props.color, onClick: function () {
                                    var _a, _b, _c;
                                    (_a = datetimeRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
                                    (_b = modalRef.current) === null || _b === void 0 ? void 0 : _b.dismiss((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.value, 'cancel');
                                } }, { children: "Cancel" })), _jsx(IonButton, __assign({ color: props.color, onClick: function () {
                                    var _a, _b, _c;
                                    (_a = datetimeRef.current) === null || _a === void 0 ? void 0 : _a.confirm();
                                    (_b = modalRef.current) === null || _b === void 0 ? void 0 : _b.dismiss((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.value, 'confirm');
                                } }, { children: "Confirm" }))] })) })) }))] })));
};
export default WrappedInput;
