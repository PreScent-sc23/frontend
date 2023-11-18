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
    const [sSellerKey, setSellerKey] = useState('');

    async function handleSubmission(){
        console.log("됨?");
        try {
            const response = await axios.post('http://3.36.175.224:8080/flower-shops/add', {
                shopName,
                shopPhoneNum,
                shopLocation,
                description,
            },{ params: {sSellerKey},
                headers: {
                    'Content-Type': 'application/json'
        }
    });
            console.log("됨2?");
            console.log(response.data);
            navigate('/home');

        } catch (error) {
            console.error('정보등록 오류:', error);
        }
    }


    return(
        <div >
            <Statusbar/>
            <div className={styles.TopNavWrap}>
                    <img src='/assets/back.svg' className={styles.image} onClick={()=>navigate('/sellerhome')}/>
                    <div className={styles.TopNavTitle}>가게 정보</div>
                    {/* <div className={styles.TopNavButtonContainer}> */}
            </div>

            <div style={{overflow:'auto', display:'flex', flexDirection: 'column',width: '100%', height:'500px', marginTop:'100px', border:'1px red solid'}}>
                <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='이름' value={shopName} onChange={(e) => setShopName(e.target.value)}></input>
                <input className={styles.inputBox} type='number' name = "shopnum" size = '50' placeholder='가게 연락처' value={shopPhoneNum} onChange={(e) => setShopNumber(e.target.value)}></input>
                <input className={styles.inputBox} type='text' name = "shopaddress" size = '50' placeholder='가게 주소' value={shopLocation} onChange={(e) => setShopLocation(e.target.value)}></input>
                <input className={styles.inputBox} type='text' name = "shopaddress" size = '200' placeholder='우리 가게를 소개해주세요 (선택 항목)' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                
                <input className={styles.inputBox} type='text' name = "sellerKey" size = '50' placeholder='셀러 키' value={sSellerKey} onChange={(e) => setSellerKey(e.target.value)}></input>
                포트폴리오, 시간대 설정 필요
            </div>
            <div className={styles.ButtonContainer}>
                <div className={styles.Button} onClick={handleSubmission}>등록</div>
            </div>
        </div>
        
        

    );
}
export default Shopregister ;