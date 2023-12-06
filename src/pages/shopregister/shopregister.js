import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function Shopregister(){
    const navigate = useNavigate();
    const [shopName, setShopName] = useState('');
    const [shopPhoneNum, setShopNumber] = useState('');
    const [shopLocation, setShopLocation] = useState('');
    const [description, setDescription] = useState('');
    const [flowers, setFlowers] = useState('');
    const checkBoxList=['월', '화', '수', '목', '금','토','일']
    const [checkedList, setCheckedList] = useState([]);
    const [openHour, setOpenHour] = useState('');
    const [openMinute, setOpenMinute] = useState('');
    const [closeHour, setCloseHour] = useState('');
    const [closeMinute, setCloseMinute] = useState('');
    const hourOptions = Array.from({length: 24}, (_, i) => i);
    const minuteOptions = Array.from({length: 6}, (_, i) => i * 10)


    const data = {
        'shopName' : shopName,
        'shopPhoneNum' : shopPhoneNum,
        'shopLocation' : shopLocation,
        'description' : description,
        'flowers' : flowers,
        'workday' : checkedList,
        'openHour' : openHour,
        'openMinute' : openMinute,
        'closeHour' : closeHour,
        'closeMinute' : closeMinute,
    }

    async function handleSubmission(){
        console.log("됨?");
        try {
            const token = localStorage.getItem('token');
            console.log(token);
            const response = await axios.post('http://3.36.175.224:8080/flower-shops/add', {
                data
            },{headers: {'Content-Type': 'application/json', 'Authorization' : `Bearer ${token}`}});
            console.log("됨2?");
            console.log(response.data);
            navigate('/sellerhome');

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
            <TopNav/>

            <div style={{overflow:'auto', display:'flex', flexDirection: 'column',width: '100%', height:'500px', marginTop:'8rem'}}>
                <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='이름' value={shopName} onChange={(e) => setShopName(e.target.value)}></input>
                <input className={styles.inputBox} type='number' name = "shopnum" size = '50' placeholder='가게 연락처' value={shopPhoneNum} onChange={(e) => setShopNumber(e.target.value)}></input>
                <input className={styles.inputBox} type='text' name = "shopaddress" size = '50' placeholder='가게 주소' value={shopLocation} onChange={(e) => setShopLocation(e.target.value)}></input>
                <input className={styles.inputBox} type='text' name = "description" size = '200' placeholder='우리 가게를 소개해주세요 (선택 항목)' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <input className={styles.inputBox} type='text' name = "flowers" size = '200' placeholder='가게에 있는 꽃의 종류를 적어주세요' value={flowers} onChange={(e) => setFlowers(e.target.value)}></input>
                <div style={{margin:'4px auto',width:'80%', border:'solid #E3E5E5 1px', borderRadius:'5px', padding:'10px'}}>
                    <div style={{borderBottom:'2px solid #FF9494', textAlign:'center'}}>
                        영업일을 선택해주세요
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:'0.5rem',gap:'0.6rem'}}>
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
                <div style={{margin:'0.5rem auto',width:'80%', border:'solid #E3E5E5 1px', borderRadius:'5px', padding:'10px'}}>
                    <div style={{borderBottom:'2px solid #FF9494', textAlign:'center'}}>
                        영업시간을 선택해주세요
                    </div>
                    <div style={{display:'flex', margin:'0.5rem'}}>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#FF9494', color:'white', width:'3rem', height:'1.5rem', borderRadius:'8px', marginRight:'8px'}}>
                        시작
                        </div>
                        <select value={openHour} onChange={(e) => setOpenHour(e.target.value)}>
                        {hourOptions.map((hour, idx) => (
                            <option key={idx} value={hour}>{hour}</option>
                        ))}
                        </select>
                
                        <select value={openMinute} onChange={(e) => setOpenMinute(e.target.value)}>
                            {minuteOptions.map((minute, idx) => (
                                <option key={idx} value={minute}>{minute}</option>
                        ))}
                        </select>
                    </div>
                    <div style={{display:'flex', margin:'8px'}}>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#FF9494', color:'white', width:'3rem', height:'1.5rem', borderRadius:'8px', marginRight:'8px'}}>
                            종료:
                        </div>
                        <select value={closeHour} onChange={(e) => setCloseHour(e.target.value)}>
                        {hourOptions.map((hour, idx) => (
                            <option key={idx} value={hour}>{hour}</option>
                        ))}
                        </select>
            
                        <select value={closeMinute} onChange={(e) => setCloseMinute(e.target.value)}>
                            {minuteOptions.map((minute, idx) => (
                                <option key={idx} value={minute}>{minute}</option>
                        ))}
                        </select>
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