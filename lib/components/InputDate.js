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
import { useState, useRef } from 'react';
import { IonButton, IonItem, IonLabel, IonIcon, IonModal, IonButtons, IonDatetime, } from '@ionic/react';
import { calendarClear } from 'ionicons/icons';
import './InputValue.css';
var InputDate = function (props) {
    var dateModal = useRef(null);
    var _a = useState(props.value), date = _a[0], setDate = _a[1];
    var datetime = useRef(null);
    var inputDate = useRef(null);
    var confirmDate = function () {
        var _a, _b, _c;
        (_a = datetime.current) === null || _a === void 0 ? void 0 : _a.confirm();
        (_b = dateModal.current) === null || _b === void 0 ? void 0 : _b.dismiss((_c = inputDate.current) === null || _c === void 0 ? void 0 : _c.value, 'confirm');
    };
    var cancelDate = function () {
        var _a, _b, _c;
        (_a = datetime.current) === null || _a === void 0 ? void 0 : _a.cancel();
        (_b = dateModal.current) === null || _b === void 0 ? void 0 : _b.dismiss((_c = inputDate.current) === null || _c === void 0 ? void 0 : _c.value, 'cancel');
    };
    return (_jsxs(IonItem, __assign({ id: "choose-date" }, { children: [_jsx(IonLabel, __assign({ color: props.color }, { children: "The date" })), _jsx(IonIcon, { slot: "end", color: props.color, size: "small", icon: calendarClear }), _jsx("p", { children: date }), _jsx(IonModal, __assign({ id: "choose-datetime-modal", ref: dateModal, trigger: "choose-date" }, { children: _jsx(IonDatetime, __assign({ ref: datetime, color: props.color, presentation: "date", locale: "en-GB", value: props.value, onIonChange: function (e) {
                        if (e.detail.value) {
                            setDate(e.detail.value.toString().slice(0, 10));
                            props.setValue(e.detail.value.toString().slice(0, 10));
                        }
                    } }, { children: _jsxs(IonButtons, __assign({ slot: "buttons" }, { children: [_jsx(IonButton, __assign({ color: props.color, onClick: cancelDate }, { children: "Cancel" })), _jsx(IonButton, __assign({ color: props.color, onClick: confirmDate }, { children: "Confirm" }))] })) })) }))] })));
};
export default InputDate;