# DateTimePicker Component for Ionic

A simple and reusable component for Ionic (React). Developed on the basis of the [IonDateTime](https://ionicframework.com/docs/api/datetime).

## Demo

https://irasoro.github.io/DateTimePicker-example/

## Installation

```shell
npm install @IraSoro/ionic-datetime-picker
```

## API
For InputDate:
| Name        | Type     | Description                                                               | Required | Default         |
| ----------- | -------- | ------------------------------------------------------------------------- | -------- | --------------- |
| date        | string   | The value of the date.                                                    | true     |                 |
| onChange    | function | function of the form `(newDate: string) => void`. Updates the date value. | true     |                 |
| color       | string   | The color to use from your application's color palette.                   |          | "primary"       |
| title       | string   | The text to display to the left of the date.                              |          | "The date"      |
| locale      | string   | Locale impacts month and day name formatting.                             |          | "en-GB"         |
| icon        | string   | Specifies which icon to use.                                              |          | calendarOutline |
| iconSize    | string   | Icon size can be "large" or "small".                                      |          | "small"         |

For InputTime:
| Name        | Type     | Description                                                               | Required | Default    |
| ----------- | -------- | ------------------------------------------------------------------------- | -------- | -----------|
| time        | string   | The value of the time.                                                    | true     |            |
| onChange    | function | function of the form `(newTime: string) => void`. Updates the time value. | true     |            |
| color       | string   | The color to use from your application's color palette.                   |          | "primary"  |
| title       | string   | The text to display to the left of the time.                              |          | "The time" |
| icon        | string   | Specifies which icon to use.                                              |          | timeSharp  |
| iconSize    | string   | Icon size can be "large" or "small".                                      |          | "small"    |

## Usage

```js
import { InputDate, InputTime } from '@IraSoro/ionic-datetime-picker';

const ExampleComponent = () => {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");


  return (
    <>
        <InputDate date={date} onChange={setDate} />
        <InputTime time={time} onChange={setTime} />
    </>
  )
}
```
