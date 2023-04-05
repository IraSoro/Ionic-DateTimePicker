import { useState } from 'react';
import { timeSharp } from 'ionicons/icons';

import WrappedPicker from './WrappedPicker';

let id = 0;

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

const TimePicker = (props: TimeProps) => {
    const [ident] = useState((id++).toString());

    return (
        <WrappedPicker
            value={props.time}
            setValue={props.setTime}
            ID={`InputTime-${ident}`}
            type={"time"}
            color={props.color ?? "primary"}
            locale={props.locale ?? "en-GB"}
            title={props.title ?? "The time"}
            icon={props.icon ?? timeSharp}
            sizeIcon={props.sizeIcon ?? "small"}
            format={props.format ?? "HH:mm"}
        />
    );
}

export default TimePicker;

