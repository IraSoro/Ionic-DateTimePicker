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
import { timeSharp } from 'ionicons/icons';
import './InputValue.css';
var InputTime = function (props) {
    var timeModal = useRef(null);
    var _a = useState(props.value), time = _a[0], setTime = _a[1];
    var onlyTime = useRef(null);
    var inputTime = useRef(null);
    var confirmTime = function () {
        var _a, _b, _c;
        (_a = onlyTime.current) === null || _a === void 0 ? void 0 : _a.confirm();
        (_b = timeModal.current) === null || _b === void 0 ? void 0 : _b.dismiss((_c = inputTime.current) === null || _c === void 0 ? void 0 : _c.value, 'confirm');
    };
    var cancelTime = function () {
        var _a, _b, _c;
        (_a = onlyTime.current) === null || _a === void 0 ? void 0 : _a.cancel();
        (_b = timeModal.current) === null || _b === void 0 ? void 0 : _b.dismiss((_c = inputTime.current) === null || _c === void 0 ? void 0 : _c.value, 'cancel');
    };
    function getColor() {
        if (props.color) {
            return props.color;
        }
        return "primary";
    }
    function getLocale() {
        if (props.locale) {
            return props.locale;
        }
        return "en-GB";
    }
    function getTitle() {
        if (props.title) {
            return props.title;
        }
        return "The time";
    }
    return (_jsxs(IonItem, __assign({ id: "choose-time-" + props.inputID }, { children: [_jsx(IonLabel, __assign({ color: getColor() }, { children: getTitle() })), _jsx(IonIcon, { slot: "end", color: getColor(), size: "small", icon: timeSharp }), _jsx("p", { children: time }), _jsx(IonModal, __assign({ id: "choose-datetime-modal", ref: timeModal, trigger: "choose-time-" + props.inputID }, { children: _jsx(IonDatetime, __assign({ ref: onlyTime, color: getColor(), presentation: "time", locale: getLocale(), onIonChange: function (e) {
                        if (e.detail.value) {
                            if (props.funConvert) {
                                var value = props.funConvert(e.detail.value.toString());
                                setTime(value);
                                props.setValue(value);
                            }
                            else {
                                setTime(e.detail.value.toString());
                                props.setValue(e.detail.value.toString());
                            }
                        }
                    } }, { children: _jsxs(IonButtons, __assign({ slot: "buttons" }, { children: [_jsx(IonButton, __assign({ color: getColor(), onClick: cancelTime }, { children: "Cancel" })), _jsx(IonButton, __assign({ color: getColor(), onClick: confirmTime }, { children: "Confirm" }))] })) })) }))] })));
};
export default InputTime;
