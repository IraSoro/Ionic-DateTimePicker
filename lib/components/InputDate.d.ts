/// <reference types="react" />
interface InputDateProps {
    value: string;
    setValue: (newValue: string) => void;
    convertFunc?: (date: string) => string;
    color?: string;
    locale?: string;
    title?: string;
    icon?: string;
    sizeIcon?: string;
}
declare const InputDate: (props: InputDateProps) => JSX.Element;
export default InputDate;
