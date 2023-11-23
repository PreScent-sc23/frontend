import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function Customersignup(){
    const [customerName, setCustomerName] = useState('');
    const [customerPassword, setCustomerPassword] = useState('');
    const [customerIdEmail, setCustomerIdEmail] = useState('');
    const [customerPhonenum, setCustomerPhonenum] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        console.log("됨?");
        try {
            const response = await axios.post('http://3.36.175.224:8080/customer/signup', {
                customerName,
                customerIdEmail,
                customerPassword,
                customerPhonenum,
            },{
                headers: {
                    'Content-Type': 'application/json'
        },
    });
            console.log("됨2?");
            console.log(response.data);
            navigate('/home');
        } catch (error) {
            console.error('회원가입 오류:', error);
        }
    };
    
    return(
        <div >
            <Statusbar/>
            <TopNav/>
            {/* <div className={styles.TopNavWrap}>
                    <img src='/assets/back.svg' className={styles.image}/>
                    <div className={styles.TopNavTitle}>일반 고객 회원 가입</div>
                    {/* <div className={styles.TopNavButtonContainer}> */}
            {/* </div> */} 
            <div style={{width:'100%', textAlign:'center',marginTop:'1rem'}}>
                <form>            
                <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='이름' value={customerName} onChange={(e) => setCustomerName(e.target.value)}></input>
                <input className={styles.inputBox} type='number' name = "pwd" size = '50'  placeholder='전화번호' value={customerPhonenum} onChange={(e) => setCustomerPhonenum(e.target.value)}></input>
                <input className={styles.inputBox} type='email' name = "email" size = '50'  placeholder='Email' value={customerIdEmail} onChange={(e) => setCustomerIdEmail(e.target.value)}></input>
                <input className={styles.inputBox} type='number' name = "validnum" size = '50'  placeholder='인증 번호 입력'></input>
                <input className={styles.inputBox} type='password' name = "pwd" size = '50'  placeholder='비밀번호' value={customerPassword} onChange={(e) => setCustomerPassword(e.target.value)}></input>
                </form>
                <div style={{width:'100%', height:'3rem'}}></div>
            </div>
            <div style={{width:'100%', height:'10.0em'}}></div>
            <div style={{width:'100%', textAlign:'center'}}>
            <div className={styles.ButtonContainer}>
                <div className={styles.Button} onClick={handleSignUp}>일반 고객 회원 등록 하기</div>
            </div>
            {/* <input className = {styles.normalButton} type='button' value="일반 고객 회원가입" style={{margin: '8px'}}></input> */}
            </div> 
        </div>
        
        

    );
}
export default Customersignup;