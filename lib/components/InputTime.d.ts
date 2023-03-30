/// <reference types="react" />
interface InputTimeProps {
    value: string;
    setValue: (newValue: string) => void;
    convertFunc?: (date: string) => string;
    color?: string;
    locale?: string;
    title?: string;
    icon?: string;
    sizeIcon?: string;
}
declare const InputTime: (props: InputTimeProps) => JSX.Element;
export default InputTime;
