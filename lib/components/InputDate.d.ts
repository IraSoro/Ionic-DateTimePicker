/// <reference types="react" />
import './InputValue.css';
interface InputDateProps {
    value: string;
    setValue: (newValue: string) => void;
    inputID: string;
    funConvert?: (date: string) => string;
    color?: string;
    locale?: string;
    title?: string;
}
declare const InputDate: (props: InputDateProps) => JSX.Element;
export default InputDate;
