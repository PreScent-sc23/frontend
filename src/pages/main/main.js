import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function StartScreen(){
    
    const navigate = useNavigate(); 
    
    return (
        <div>
            <div className={styles.LogoContainer}>
                <img style={{width:'8rem', height :"auto",marginTop: '10rem'}} src='/assets/svglogo.svg' alt='로고이미지'/>
                
                
            </div>
            
            <div className={styles.ButtonContainer}>
                <div className={styles.Button} onClick={()=>navigate('/login')}>로그인</div>
                <div className={styles.Button} onClick={()=>navigate('/customersignup')}>일반 고객 회원가입</div>
                <div className={styles.Button} onClick={()=>navigate('/sellersignup')}>사업자 회원가입</div>
            </div>
        </div>
    )
}
export default StartScreen;