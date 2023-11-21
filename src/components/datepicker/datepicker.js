import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from './datepicker.module.scss';

function DatePickerComponent () {
    
    const [date,setDate] = useState(new Date());
    const ExampleCustomInput = ({ value, onClick }) => (
        <button className={styles.example-custom-input} onClick={onClick}>
          {value}
        </button>
      )
      
      return (
        <DatePicker
          selected={date}
          onChange={date => setDate(date)}
          customInput={<ExampleCustomInput/>}
        />
      );
}
export default DatePicker;
