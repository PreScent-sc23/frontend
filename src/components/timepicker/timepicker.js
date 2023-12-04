import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import "./timepicker.css"
import { getHours, getMinutes, setHours, setMinutes } from 'date-fns';
import { ko } from 'date-fns/esm/locale';

const TimePickerComponent = ({ onTimeChange }) => {
  const [pickupTime, setPickupTime] = useState(setHours(setMinutes(new Date(), 30), 17));

  const handleTimeChange = (date) => {
    let hours = getHours(date);
    let minutes = getMinutes(date);

    const formattedDate = hours + ':' + minutes +'';

    // const formattedTime = `${Year}.${getMonth(date) + 1}.${getDate(date)}(${ko.localize.day(getDay(date), { width: 'abbreviated' })})`;
    setPickupTime(date);
    onTimeChange(formattedDate);
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <DatePicker
      selected={pickupTime}
      onChange={handleTimeChange}
      showTimeSelect
      showTimeSelectOnly
      // timeFormat="aa HH:mm"
      timeIntervals={30}
      timeCaption="Time"
      dateFormat="aa hh:mm "
      minTime={setHours(setMinutes(new Date(), 30), 9)}
      maxTime={setHours(setMinutes(new Date(), 0), 18)}
      locale={ko}
      placeholderText="예약 시간"
      customInput={<CustomInput/>}
    />
  );
};

export default TimePickerComponent;
