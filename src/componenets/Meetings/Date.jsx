import React,{useState} from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function Date({onAccsept, selectedDateTime}) {
  const [value, setValue] = useState(selectedDateTime||dayjs().add(1, 'day').startOf('day').add(8, 'hour'))
//TODO שעות אפשריות 
const onAccseptff=()=>{
  onAccsept(value)
}
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        <DateTimePicker
          label="בחר תאריך ושעה"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          ampm={false}
          defaultValue={value}
          minutesStep={60}
          onAccept={onAccseptff}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}