/// <reference types="react" />
import './InputValue.css';
interface PropsInput {
    value: string;
    setValue: (newValue: string) => void;
    inputID: string;
    color?: string;
    locale?: string;
    isConvert?: boolean;
    title?: string;
}
declare const InputTime: (props: PropsInput) => JSX.Element;
export default InputTime;
