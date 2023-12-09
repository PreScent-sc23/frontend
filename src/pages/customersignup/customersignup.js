import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function Customersignup(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [idEmail, setIdEmail] = useState('');
    const [phonenum, setPhonenum] = useState('');
    const navigate = useNavigate();

    const userKey = 123;
    const location = '아주대학교';

    const handleSignUp = async () => {
        console.log("됨?");
        if (password != confirmPassword){
            alert('비밀번호가 서로 다릅니다! 다시 확인 해주세요.')
            return;
        }
        try {
            const response = await axios.post('http://3.36.175.224:8080/customer/signup', {
                userKey,
                name,
                idEmail,
                password,
                confirmPassword,
                phonenum,
                location,
            },{
                headers: {
                    'Content-Type': 'application/json'
        },
    });
            console.log("됨2?");
            console.log(response.data);
            navigate('/main');
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
            <div style={{width:'100%', textAlign:'center',marginTop:'8rem'}}>
                <form>            
                <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='이름' value={name} onChange={(e) => setName(e.target.value)}></input>
                <input className={styles.inputBox} type='number' name = "pwd" size = '50'  placeholder='전화번호' value={phonenum} onChange={(e) => setPhonenum(e.target.value)}></input>
                <input className={styles.inputBox} type='email' name = "email" size = '50'  placeholder='Email' value={idEmail} onChange={(e) => setIdEmail(e.target.value)}></input>
                <input className={styles.inputBox} type='password' name = "pwd" size = '50'  placeholder='비밀번호' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input className={styles.inputBox} type='number' name = "validnum" size = '50'  placeholder='비밀번호 확인' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                
                </form>
                <div style={{width:'100%', height:'3rem'}}></div>
            </div>
            <div style={{width:'100%', height:'15em'}}></div>
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