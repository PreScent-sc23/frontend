import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';

function StartScreen(){
    
    const navigate = useNavigate(); 
    
    return (
        <div>
            <Statusbar/>
            <div className={styles.LogoContainer}>
                <img style={{width:'20rem', height :"auto"}} src='/imgs/logo.png' alt='로고이미지'/>
            </div>
            
            <div className={styles.ButtonContainer}>
                <div className={styles.Button} onClick={()=>navigate('/login')}>로그인</div>
                <div className={styles.Button} onClick={()=>navigate('/customersignup')}>일반 회원 회원가입</div>
                <div className={styles.Button} onClick={()=>navigate('/sellersignup')}>사업자 회원 회원가입</div>
            </div>
        </div>
    )
}
export default StartScreen;