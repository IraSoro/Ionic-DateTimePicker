/// <reference types="react" />
interface DateProps {
    date: string;
    setDate: (newValue: string) => void;
    color?: string;
    locale?: string;
    title?: string;
    icon?: string;
    sizeIcon?: string;
    format?: string;
}
declare const DatePicker: (props: DateProps) => JSX.Element;
export default DatePicker;
