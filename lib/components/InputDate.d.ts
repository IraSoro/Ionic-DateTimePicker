/// <reference types="react" />
import './InputValue.css';
interface PropsInput {
    value: string;
    setValue: (newValue: string) => void;
    color?: string;
    locale?: string;
    isConvert?: boolean;
    title?: string;
}
declare const InputDate: (props: PropsInput) => JSX.Element;
export default InputDate;
