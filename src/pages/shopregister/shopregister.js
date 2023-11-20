import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';

function Shopregister(){
    const navigate = useNavigate();
    const [shopName, setShopName] = useState('');
    const [shopPhoneNum, setShopNumber] = useState('');
    const [shopLocation, setShopLocation] = useState('');
    const [description, setDescription] = useState('');
    const [flowers, setFlowers] = useState('');
    const checkBoxList=['월', '화', '수', '목', '금','토','일']
    const [checkedList, setCheckedList] = useState([]);
    const [startHours, setStartHours] = useState('');
    const [startMinutes, setStartMinutes] = useState('');
    const [finishHours, setFinishHours] = useState('');
    const [finishMinutes, setFinishMinutes] = useState('');
    const hourOptions = Array.from({length: 24}, (_, i) => i);
    const minuteOptions = Array.from({length: 6}, (_, i) => i * 10)


    const data = {
        'shopName' : shopName,
        'shopPhoneNum' : shopPhoneNum,
        'shopLocation' : shopLocation,
        'description' : description,
        'workday' : checkedList,
        'starthour' : startHours,
        'startminute' : startMinutes,
        'finishhour' : finishHours,
        'finishminute' : finishMinutes,
    }

    async function handleSubmission(){
        console.log("됨?");
        try {
            const response = await axios.post('http://3.36.175.224:8080/flower-shops/add', {
                data
            },{headers: {'Content-Type': 'application/json'}});
            console.log("됨2?");
            console.log(response.data);
            navigate('/home');

        } catch (error) {
            console.error('정보등록 오류:', error);
        }
    }



    const checkedItemHandler = (e, value) => {
        if (e.target.checked) {
          setCheckedList((prev) => [...prev, value]);
          console.log(checkedList);
          return;
        }
        if (!e.target.checked && checkedList.includes(value)) {
          setCheckedList(checkedList.filter((item) => item !== value));
          console.log(checkedList);
          return;
        }
        return;
      };

    return(
        <div >
            <Statusbar/>
            <div className={styles.TopNavWrap}>
                    <img src='/assets/back.svg' className={styles.image} onClick={()=>navigate('/sellerhome')}/>
                    <div className={styles.TopNavTitle}>가게 정보</div>
            </div>

            <div style={{overflow:'auto', display:'flex', flexDirection: 'column',width: '100%', height:'500px', marginTop:'70px', border:'1px red solid'}}>
                <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='이름' value={shopName} onChange={(e) => setShopName(e.target.value)}></input>
                <input className={styles.inputBox} type='number' name = "shopnum" size = '50' placeholder='가게 연락처' value={shopPhoneNum} onChange={(e) => setShopNumber(e.target.value)}></input>
                <input className={styles.inputBox} type='text' name = "shopaddress" size = '50' placeholder='가게 주소' value={shopLocation} onChange={(e) => setShopLocation(e.target.value)}></input>
                <input className={styles.inputBox} type='text' name = "description" size = '200' placeholder='우리 가게를 소개해주세요 (선택 항목)' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <input className={styles.inputBox} type='text' name = "flowers" size = '200' placeholder='가게에 있는 꽃의 종류를 적어주세요' value={flowers} onChange={(e) => setFlowers(e.target.value)}></input>
                <div style={{margin:'4px auto',width:'80%', border:'solid #E3E5E5 1px', borderRadius:'5px', padding:'10px'}}>
                    <div style={{borderBottom:'1px solid #7249FF', textAlign:'center'}}>
                        영업일을 선택해주세요
                    </div>
                    <div style={{display:'flex', marginLeft:'8%'}}>
                        {checkBoxList.map((item, idx) => (
                            <div key={idx}>
                                <input 
                                type='checkbox'
                                style={{marginTop:'8px'}}
                                id={item}
                                checked={checkedList.includes(item)}
                                onChange={(e) => checkedItemHandler(e, item)}
                                />
                                <label htmlFor={item}>{item}</label>
                                </div>
                        ))}
                    </div>
                    
                </div>
                <div style={{margin:'4px auto',width:'80%', border:'solid #E3E5E5 1px', borderRadius:'5px', padding:'10px'}}>
                    <div style={{borderBottom:'1px solid #7249FF', textAlign:'center'}}>
                        영업시간을 선택해주세요
                    </div>
                    <div style={{display:'flex',border:'1px solid red'}}>
                        <div style={{display:'flex'}}>
                        시작:
                        <select value={startHours} onChange={(e) => setStartHours(e.target.value)}>
                        {hourOptions.map((hour, idx) => (
                            <option key={idx} value={hour}>{hour}</option>
                        ))}
                        </select>
                
                        <select value={startMinutes} onChange={(e) => setStartMinutes(e.target.value)}>
                            {minuteOptions.map((minute, idx) => (
                                <option key={idx} value={minute}>{minute}</option>
                        ))}
                        </select>
                        </div>

                        <div style={{display:'flex'}}>
                        종료:
                        <select value={finishHours} onChange={(e) => setFinishHours(e.target.value)}>
                        {hourOptions.map((hour, idx) => (
                            <option key={idx} value={hour}>{hour}</option>
                        ))}
                        </select>
            
                        <select value={finishMinutes} onChange={(e) => setFinishMinutes(e.target.value)}>
                            {minuteOptions.map((minute, idx) => (
                                <option key={idx} value={minute}>{minute}</option>
                        ))}
                        </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.ButtonContainer}>
                <div className={styles.Button} onClick={handleSubmission}>등록</div>
            </div>
        </div>
        
        

    );
}
export default Shopregister ;