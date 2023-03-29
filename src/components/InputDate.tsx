import { useState } from 'react';
import { calendarClear } from 'ionicons/icons';
import WrappedInput from './WrappedInput';

let id = 0;

interface InputDateProps {
    value: string;
    setValue: (newValue: string) => void;
    convertFunc?: (date: string) => string;
    color?: string;
    locale?: string;
    title?: string;
}

const InputDate = (props: InputDateProps) => {
    const [ident] = useState((id++).toString());
    const color = props.color ?? "primary";
    const locale = props.locale ?? "en-GB";
    const title = props.title ?? "The date";

    return (
        <WrappedInput
            value={props.value}
            setValue={props.setValue}
            ID={`InputDate-${ident}`}
            type={"date"}
            convertFunc={props.convertFunc}
            color={color}
            locale={locale}
            title={title}
            icon={calendarClear}
        />
    );
}

export default InputDate;
