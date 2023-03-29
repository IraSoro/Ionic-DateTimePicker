import { useState, useRef } from 'react';
import {
    IonButton,
    IonItem,
    IonLabel,
    IonIcon,
    IonModal,
    IonButtons,
    IonDatetime,
} from '@ionic/react';
import { DatetimePresentation } from "@ionic/core/components";

import './WrappedInput.css';

// добавить размер иконки
interface WrappedProps {
    value: string;
    setValue: (newValue: string) => void;
    ID: string;
    type: DatetimePresentation;
    color: string;
    locale: string;
    title: string;
    icon: string;
    convertFunc?: (date: string) => string;
}

const WrappedInput = (props: WrappedProps) => {
    const [value, setValue] = useState(props.value);

    const modalRef = useRef<HTMLIonModalElement>(null);
    const datetimeRef = useRef<null | HTMLIonDatetimeElement>(null);
    const inputRef = useRef<HTMLIonInputElement>(null); // непонятно зачем эта ref

    return (
        <IonItem id={props.ID}>
            <IonLabel color={props.color}>{props.title}</IonLabel>
            <IonIcon slot="end" color={props.color} size="small" icon={props.icon}></IonIcon>
            <p>{value}</p>
            <IonModal
                id="choose-datetime-modal"
                ref={modalRef}
                trigger={props.ID}
            >
                <IonDatetime
                    ref={datetimeRef}
                    color={props.color}
                    presentation={props.type}
                    locale={props.locale}
                    value={props.value}
                    onIonChange={(e) => {
                        if (!e.detail.value) {
                            return;
                        }
                        const new_value: string = props.convertFunc?.(e.detail.value.toString())
                            ?? e.detail.value.toString();

                        setValue(new_value);
                        props.setValue(new_value);
                    }}
                >
                    <IonButtons slot="buttons">
                        <IonButton
                            color={props.color}
                            onClick={() => {
                                datetimeRef.current?.cancel();
                                modalRef.current?.dismiss(inputRef.current?.value, 'cancel');
                            }}
                        >Cancel</IonButton>
                        <IonButton
                            color={props.color}
                            onClick={() => {
                                datetimeRef.current?.confirm();
                                modalRef.current?.dismiss(inputRef.current?.value, 'confirm');
                            }}
                        >Confirm</IonButton>
                    </IonButtons>
                </IonDatetime>
            </IonModal>
        </IonItem>
    );
}

export default WrappedInput;
