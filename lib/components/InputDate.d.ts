/// <reference types="react" />
interface InputDateProps {
    date: string;
    setDate: (newValue: string) => void;
    color?: string;
    locale?: string;
    title?: string;
    icon?: string;
    sizeIcon?: string;
    format?: string;
}
declare const InputDate: (props: InputDateProps) => JSX.Element;
export default InputDate;
