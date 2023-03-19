/// <reference types="react" />
import './InputValue.css';
interface PropsInput {
    value: string;
    setValue: (newValue: string) => void;
    color: string;
}
declare const InputDate: (props: PropsInput) => JSX.Element;
export default InputDate;
