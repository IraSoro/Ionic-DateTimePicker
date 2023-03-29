import { useState } from 'react';
import { timeSharp } from 'ionicons/icons';

import WrappedInput from './WrappedInput';

let id = 0;

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

const InputTime = (props: InputTimeProps) => {
    const [ident] = useState((id++).toString());

    const color = props.color ?? "primary";
    const locale = props.locale ?? "en-GB";
    const title = props.title ?? "The time";
    const sizeIcon = props.sizeIcon ?? "small";
    const nameIcon = props.icon ?? timeSharp;

    return (
        <WrappedInput
            value={props.value}
            setValue={props.setValue}
            ID={`InputTime-${ident}`}
            type={"time"}
            convertFunc={props.convertFunc}
            color={color}
            locale={locale}
            title={title}
            icon={nameIcon}
            sizeIcon={sizeIcon}
        />
    );
}

export default InputTime;
