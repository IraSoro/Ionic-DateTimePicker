/// <reference types="react" />
interface InputTimeProps {
    time: string;
    setTime: (newValue: string) => void;
    color?: string;
    locale?: string;
    title?: string;
    icon?: string;
    sizeIcon?: string;
    format?: string;
}
declare const InputTime: (props: InputTimeProps) => JSX.Element;
export default InputTime;
