import { useState } from 'react';
import { calendarClear } from 'ionicons/icons';

import WrappedPicker from './WrappedPicker';

let id = 0;

interface DateProps {
    date: string;
    onChange: (newValue: string) => void;
    color?: string;
    locale?: string;
    title?: string;
    icon?: string;
    sizeIcon?: string;
    format?: string;
}

const DatePicker = (props: DateProps) => {
    const [ident] = useState((id++).toString());

    return (
        <WrappedPicker
            value={props.date}
            setValue={props.onChange}
            ID={`InputDate-${ident}`}
            type={"date"}
            color={props.color ?? "primary"}
            locale={props.locale ?? "en-GB"}
            title={props.title ?? "The date"}
            icon={props.icon ?? calendarClear}
            sizeIcon={props.sizeIcon ?? "small"}
            format={props.format ?? "yyyy-MM-dd"}
        />
    );
}

export default DatePicker;
