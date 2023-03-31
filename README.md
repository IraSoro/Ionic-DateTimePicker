# React DateTimeInput Components

The DateTime input component is ...

## Demo

https://irasoro.github.io/example/

## Installation
Using npm:

```shell
npm install ionic-datetime-input
```

## Usage

```js
import  {InputDate, InputTime} from 'ionic-datetime-input';

const ExampleComponent = () => {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");


  return (
    <>
        <InputDate value={date} setValue={setDate} color="primary" />
        <InputTime value={time} setValue={setTime} color="primary" />
    </>
  )
}
```
