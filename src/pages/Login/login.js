import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

//꽃 팔러 오셨나요? 사러 오셨나요 -> 화면 띄우기 전에 선택지 넣으면 좋을듯!

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = () =>{
        if(email==='flower@gmail.com'){
            navigate('/sellerhome');
        }
        else if(email==='ajou@gmail.com'){
            navigate('/home');
        }
        else{
            alert('등록되지 않은 회원입니다.');
        }
    }

    // const handleLogin = async () => {
    //     console.log("됨?");
    //     try {
    //         const response = await axios.post('http://3.36.175.224:8080/api/v1/auth/seller/login', {
    //             email,
    //             password,
    //         },{
    //             headers: {
    //                 'Content-Type': 'application/json'
    //     },
    // });
    //         console.log("됨2?");
    //         console.log(response.data);
    //         navigate('/home');
    //     } catch (error) {
    //         console.error('로그인 오류');
    //     }
    // };
    // async function handleLogin() {
    //     axios.defaults.withCredentials = true;
    //     try{
    //         const response = await axios.post('http://3.36.175.224:8080/login', {email, password},
    //         {headers: {'Content-Type': 'application/json'},});
    //         console.log(response)
    //         if(response.status === 200){
    //         let accessToken = response.headers.Authorization;
    //         console.log('access token: ', accessToken);
    //         localStorage.setItem("access_token", accessToken);
    //         }
    //     }
    //     catch (error){
    //         console.error('로그인 오류')
    //     }
    // }
    

    return (
        <div>
            <Statusbar/>
            <TopNav/>
             <div className={styles.LogoContainer}>
             <img style={{width:'300px'}} src="/imgs/logo.png" alt="로고이미지"/>   
             </div>

             <div className={styles.LoginContainer}>
                 <form>            
                    <input className={styles.inputBox} type='text' name = "email" size = '50' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                    <input className={styles.inputBox} type='password' name = "pwd" size = '50'  placeholder='Password' value = {password} onChange={(e) => setPassword(e.target.value)}></input>
                 </form>
                 <a href="/home" className={styles.purpleLink}>비밀번호를 잊으셨나요?</a>
             </div>

            <div className={styles.ButtonContainer}>
                <div className={styles.Button} onClick={handleLogin}>로그인</div>
            </div>

         </div>

    );
}export default Login;