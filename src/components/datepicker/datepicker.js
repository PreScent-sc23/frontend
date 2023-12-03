// import React, { forwardRef } from 'react';
// import { useState } from 'react';
// import styles from './datepicker.module.scss';
// import {getMonth,getDate, getDay} from "date-fns"
// import { ko } from "date-fns/esm/locale";
// import DatePicker from 'react-datepicker';




// function DatePickerComponent({type}){

//   // function seletTime() {
//   //   let Days = ['일', '월', '화', '수', '목', '금', '토'];
//   //   let Month = getMonth(pickupDate) + 1;
//   //   let Date = getDate(pickupDate);
//   //   let Day = Days[getDay(pickupDate)];
//   //   // 오브젝트는 전달 안돼서 string으로 변환
//   //   props.setClubTime(String(Month + "." + Date + " (" + Day + ")"))
//   // }

//     const [pickupDate,setPickupDate] = useState(new Date());
    
      
//       // const [startDate, setStartDate] = useState(new Date());
//       const CustomInput = forwardRef(({ value, onClick,inputType }, ref) => (
//         <button className="custom-input" onClick={onClick} ref={ref}>
//           <pickupDate>{value}</pickupDate>
//         </button>
//       ));

      
//       return (
//         <DatePicker
//           className={styles.datePicker}
//           selected={pickupDate}
//           onChange={pickupDate => setPickupDate(pickupDate)}
//           locale={ko}
//           dateFormat="yyyy.MM.dd (eee)"
//           showPopperArrow={false}
//           minDate={new Date()}
//           closeOnScroll={true}    // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
//           placeholderText="픽업 날짜 선택"
//           popperPlacement="bottom"    // placeholder
//           customInput={<CustomInput inputType={type}/>} // Use a custom input component
          
//             dayClassName={(d)=>
//               // d.getDate() === date.getDate()
//               // ? 'custom-day selected-day'
//               // : d.getMonth() === month
//               // ? 'custom-day'
//               // : 'custom-day gray-day'
//             getDate(d)===getDate(pickupDate) && getMonth(d) ===getMonth(pickupDate)
//               ? 'normal-day selected-day'
//               : 'normal-day'
//             } 
//         />
//       );
// }
// export default DatePickerComponent;
