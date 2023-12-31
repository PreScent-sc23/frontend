import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import Kakao from '../../components/map/map';



function Login(){
    const [idEmail, setIdEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = async () => {
        console.log("됨?");
        try {
            const response = await axios.post('http://3.36.175.224:8080/login', {
                idEmail,
                password,
            },{
                headers: {
                    'Content-Type': 'application/json'
        },
        });
            console.log("됨2?");
            console.log(response.data);
            localStorage.setItem('token',response.data.token);
            switch(response.data.role)
            {
                case 0:
                    navigate('/home')
                    break;
                case 1:
                    navigate('/sellerhome')
                    break;
                // default:
                //     navigate('/404')
            }
        } catch (error) {
            alert('로그인 실패! 계정과 비밀번호를 확인하세요.')
            console.error('로그인 오류');
        }
    };

    return (
        <div>
             <div className={styles.LogoContainer}>
             <img  src="/assets/svglogo.svg" style={{width : '8rem', height :'auto', justifyContent:'center'}} alt="로고이미지"/>   
             </div>

             <div className={styles.LoginContainer}>
                 <form>            
                    <input className={styles.inputBox} type='text' name = "email" size = '50' placeholder='Email Address' value={idEmail} onChange={(e) => setIdEmail(e.target.value)} ></input>
                    <input className={styles.inputBox} type='password' name = "pwd" size = '50'  placeholder='Password' value = {password} onChange={(e) => setPassword(e.target.value)}></input>
                 </form>
                 {/* <a href="/main" className={styles.PinkLink}>비밀번호를 잊으셨나요?</a> */}
             </div>

            <div className={styles.ButtonContainer}>
                <div className={styles.Button} onClick={handleLogin}>로그인</div>
            </div>

         </div>

    );
}export default Login;