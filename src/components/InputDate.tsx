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
    icon?: string;
    sizeIcon?: string;
}

const InputDate = (props: InputDateProps) => {
    const [ident] = useState((id++).toString());

    const color = props.color ?? "primary";
    const locale = props.locale ?? "en-GB";
    const title = props.title ?? "The date";
    const sizeIcon = props.sizeIcon ?? "small";
    const nameIcon = props.icon ?? calendarClear;

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
            icon={nameIcon}
            sizeIcon={sizeIcon}
        />
    );
}

export default InputDate;
