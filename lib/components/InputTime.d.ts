/// <reference types="react" />
import './InputValue.css';
interface InputTimeProps {
    value: string;
    setValue: (newValue: string) => void;
    inputID: string;
    funConvert?: (date: string) => string;
    color?: string;
    locale?: string;
    title?: string;
}
declare const InputTime: (props: InputTimeProps) => JSX.Element;
export default InputTime;
