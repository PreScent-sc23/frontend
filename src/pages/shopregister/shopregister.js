import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function Shopregister(){
    const navigate = useNavigate();
    const [shopName, setShopName] = useState('');
    const [shopNumber, setShopNumber] = useState('');
    const [shopAddress, setShopAddress] = useState('');

    async function handleSubmission(){
        console.log("됨?");
        try {
            const response = await axios.post('http://3.36.175.224:8080/shop/register', {
                shopName,
                shopNumber,
                shopAddress,
            },{
                headers: {
                    'Content-Type': 'application/json'
        },
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
                    <img src='/assets/back.svg' className={styles.image}/>
                    <div className={styles.TopNavTitle}>가게 정보</div>
                    {/* <div className={styles.TopNavButtonContainer}> */}
            </div>

            <div style={{display:'flex', flexDirection: 'column',width: '100%', marginTop:'100px', border:'1px red solid'}}>
                <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='이름' value={shopName} onChange={(e) => setShopName(e.target.value)}></input>
                <input className={styles.inputBox} type='number' name = "shopnum" size = '50' placeholder='가게 연락처' value={shopNumber} onChange={(e) => setShopNumber(e.target.value)}></input>
                <input className={styles.inputBox} type='text' name = "shopaddress" size = '50' placeholder='가게 주소' value={shopAddress} onChange={(e) => setShopAddress(e.target.value)}></input>
            </div>
            <div className={styles.ButtonContainer}>
                <div className={styles.Button} onClick={handleSubmission}>등록</div>
            </div>
        </div>
        
        

    );
}
export default Shopregister ;