/// <reference types="react" />
import './InputValue.css';
interface InputTimeProps {
    value: string;
    setValue: (newValue: string) => void;
    inputID: string;
    color?: string;
    locale?: string;
    isConvert?: boolean;
    title?: string;
}
declare const InputTime: (props: InputTimeProps) => JSX.Element;
export default InputTime;
