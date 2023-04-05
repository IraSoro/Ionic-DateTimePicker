# DateTimePicker Component for Ionic

A simple and reusable component for Ionic (React). Developed on the basis of the [IonDateTime](https://ionicframework.com/docs/api/datetime).

## Demo

<https://irasoro.github.io/DateTimePicker-example/>

## Installation

```shell
npm install @IraSoro/ionic-datetime-picker
```

## API

For DatePicker:
| Name     | Type     | Description                                                               | Required | Default         |
| -------- | -------- | ------------------------------------------------------------------------- | -------- | --------------- |
| date     | string   | The value of the date.                                                    | true     |                 |
| onChange | function | function of the form `(newDate: string) => void`. Updates the date value. | true     |                 |
| color    | string   | The color to use from your application's color palette.                   |          | "primary"       |
| title    | string   | The text to display to the left of the date.                              |          | "The date"      |
| locale   | string   | Locale impacts month and day name formatting.                             |          | "en-GB"         |
| icon     | string   | Specifies which icon to use.                                              |          | calendarOutline |
| iconSize | string   | Icon size can be "large" or "small".                                      |          | "small"         |
| format*  | string   | Date formats                                                              |          | "yyyy-MM-dd"    |

For TimePicker:
| Name     | Type     | Description                                                               | Required | Default    |
| -------- | -------- | ------------------------------------------------------------------------- | -------- | ---------- |
| time     | string   | The value of the time.                                                    | true     |            |
| onChange | function | function of the form `(newTime: string) => void`. Updates the time value. | true     |            |
| color    | string   | The color to use from your application's color palette.                   |          | "primary"  |
| title    | string   | The text to display to the left of the time.                              |          | "The time" |
| locale   | string   | Locale impacts month and day name formatting.                             |          | "en-GB"    |
| icon     | string   | Specifies which icon to use.                                              |          | timeSharp  |
| iconSize | string   | Icon size can be "large" or "small".                                      |          | "small"    |
| format*  | string   | Time formats                                                              |          | "HH:mm"    |

*Follow [here](https://date-fns-interactive.netlify.app/) to set your format.

## Usage

Simple basic example:

```js
import { DatePicker, TimePicker } from '@IraSoro/ionic-datetime-picker';

const BasicExample = () => {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");


  return (
    <>
        <DatePicker date={date} onChange={setDate} />
        <TimePicker time={time} onChange={setTime} />
    </>
  )
}
```

Custom style example:

```js
import { DatePicker, TimePicker } from '@IraSoro/ionic-datetime-picker';
import { calendarOutline, contrastOutline } from 'ionicons/icons';

const CustomExample = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <>
        <DatePicker
          date={date}
          onChange={setDate}
          color="danger"
          title="Russian date"
          locale="ru"
          icon={calendarOutline}
          sizeIcon="large"
          format="dd/MM/yyyy"
        />
        <TimePicker
          time={time}
          onChange={setTime}
          color="danger"
          title="My time"
          icon={contrastOutline}
          sizeIcon="large"
          format="HH.mm"
        />
    </>
  );
}
```
