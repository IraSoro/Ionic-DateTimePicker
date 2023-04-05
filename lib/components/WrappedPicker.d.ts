/// <reference types="react" />
import { DatetimePresentation } from "@ionic/core/components";
import './WrappedPicker.css';
interface WrappedProps {
    value: string;
    setValue: (newValue: string) => void;
    ID: string;
    type: DatetimePresentation;
    color: string;
    locale: string;
    title: string;
    icon: string;
    sizeIcon: string;
    format: string;
}
declare const WrappedPicker: (props: WrappedProps) => JSX.Element;
export default WrappedPicker;
