import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopNav from '../../../components/topnavigation/topnav';

function Customersignup(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [idEmail, setIdEmail] = useState('');
    const [code, setCode] = useState('');
    const [phonenum, setPhonenum] = useState('');
    const navigate = useNavigate();


    const verifyEmailCode = async () => {
        try {
            const response = await axios.post('http://3.36.175.224:8080/verify-code', {
                idEmail,
                code,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            alert('이메일 인증 성공!');
            // 다른 로직 수행, 예를 들어 회원가입 버튼을 활성화
        } catch (error) {
            console.error('이메일 인증 오류:', error);
            alert('이메일 인증 실패. 다시 시도해주세요.');
        }
    };


    const handleSignUp = async () => {
        console.log("됨?");
        if (password != confirmPassword){
            alert('비밀번호가 서로 다릅니다! 다시 확인 해주세요.')
            return;
        }
        try {
            const response = await axios.post('http://3.36.175.224:8080/customer/signup', {
                name,
                idEmail,
                password,
                confirmPassword,
                phonenum,
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
            <TopNav/>
            <div style={{width:'100%', textAlign:'center',marginTop:'1rem'}}>
                <form>            
                <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='이름' value={name} onChange={(e) => setName(e.target.value)}></input>
                <input className={styles.inputBox} type='number' name = "pwd" size = '50'  placeholder='전화번호' value={phonenum} onChange={(e) => setPhonenum(e.target.value)}></input>
                {/* <input className={styles.inputBox} type='email' name = "email" size = '50'  placeholder='Email' value={idEmail} onChange={(e) => setIdEmail(e.target.value)}></input> */}
                <div className={styles.email}>
                    <input className={styles.inputBox} style ={{width:'17rem'}}type='email' name = "email" size = '50'  placeholder='Email'value={idEmail} onChange={(e) => setIdEmail(e.target.value)}></input>
                    <button className ={styles.verifyButton}onClick={verifyEmailCode}>인증</button>
                </div>
                <input className={styles.inputBox} type='text' placeholder='Email 인증 번호 입력' value={code} onChange={(e) => setCode(e.target.value)} />
                <input className={styles.inputBox} type='password' name = "pwd" size = '50'  placeholder='비밀번호' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input className={styles.inputBox} type='number' name = "validnum" size = '50'  placeholder='비밀번호 확인' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                
                </form>
                <div style={{width:'100%', height:'3rem'}}></div>
            </div>
            <div style={{width:'100%', height:'10em'}}></div>
            <div style={{width:'100%', textAlign:'center'}}>
            <div className={styles.ButtonContainer}>
                <div className={styles.Button} onClick={handleSignUp}>회원가입 하기</div>
            </div>
            </div> 
        </div>
        
        

    );
}
export default Customersignup;