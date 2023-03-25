/// <reference types="react" />
import './InputValue.css';
interface InputDateProps {
    value: string;
    setValue: (newValue: string) => void;
    inputID: string;
    color?: string;
    locale?: string;
    isConvert?: boolean;
    title?: string;
}
declare const InputDate: (props: InputDateProps) => JSX.Element;
export default InputDate;
