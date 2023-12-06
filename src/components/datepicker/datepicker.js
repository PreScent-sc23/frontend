import React, { forwardRef } from 'react';
import { useState } from 'react';
import "./datepicker.css"
import {getYear, getMonth,getDate, getDay} from "date-fns"
import { ko } from "date-fns/esm/locale";
import DatePicker from 'react-datepicker';


const DatePickerComponent=({onDateChange})=>{

    const [pickupDate,setPickupDate] = useState(new Date());
    
    const handleDateChange=(date)=>{
      let Days = ['일', '월', '화', '수', '목', '금', '토'];
      let Year = getYear(pickupDate);
      let Month = getMonth(pickupDate) + 1;
      let Date = getDate(pickupDate);
      let Day = Days[getDay(pickupDate)];
      // 오브젝트는 전달 안돼서 string으로 변환
      const formattedDate = `${Year}.${getMonth(date) + 1}.${getDate(date)}(${ko.localize.day(getDay(date), { width: 'abbreviated' })})`;
    
      // date.setPickupDate(String(Month + "." + Date + " (" + Day + ")"))
      setPickupDate(date);
      onDateChange(formattedDate);
    }

    // const seletTime=(props)=> {
    //   let Days = ['일', '월', '화', '수', '목', '금', '토'];
    //   let Month = getMonth(pickupDate) + 1;
    //   let Date = getDate(pickupDate);
    //   let Day = Days[getDay(pickupDate)];
    //   // 오브젝트는 전달 안돼서 string으로 변환
    //   date.setPickupDate(String(Month + "." + Date + " (" + Day + ")"))
    // }
  
    
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
      <button className="custom-input" onClick={onClick} ref={ref}>
        {value}
      </button>
    ));

      
      return (
        <DatePicker
          selected={pickupDate}
          onSelect={handleDateChange}
          // onChange={handleDateChange}
          locale={ko}
          dateFormat="yyyy.MM.dd(eee)"
          showPopperArrow={false}
          minDate={new Date()}
          closeOnScroll={true}    // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
          placeholderText="픽업 날짜 선택"
          popperPlacement="bottom"    // placeholder
          customInput={<CustomInput/>} // Use a custom input component
        
          dayClassName={(d)=>
          getDate(d)===getDate(pickupDate) && getMonth(d) ===getMonth(pickupDate)
            ? 'normal-day selected-day'
            : 'normal-day'
            } 
        />
      );
}
export default DatePickerComponent;

