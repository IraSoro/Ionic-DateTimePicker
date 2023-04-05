/// <reference types="react" />
interface TimeProps {
    time: string;
    setTime: (newValue: string) => void;
    color?: string;
    locale?: string;
    title?: string;
    icon?: string;
    sizeIcon?: string;
    format?: string;
}
declare const TimePicker: (props: TimeProps) => JSX.Element;
export default TimePicker;
