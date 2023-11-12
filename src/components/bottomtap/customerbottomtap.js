import React, { useState, useEffect } from 'react';
import styles from './bottomtap.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CustomerBottomTap(){

    const navigate = useNavigate(); 
    //const [activeTap, setActiveTap] = useState(1);
    return (
        <div className={styles.BottomTapWrap}>
            <div className={styles.Button} onClick={()=>navigate('/pslens')}>
                <img src='/assets/camera.svg'></img>
                <div className={styles.ButtonText}>P렌즈</div>
            </div>

            <div className={styles.Button} onClick={()=>navigate('/home')}>
                <img src='/assets/home.svg'></img>
                <div className={styles.ButtonText}>홈</div>
                
            </div>

            <div className={styles.Button} onClick={()=>navigate('/mypage')}>
                <img src='/assets/user.svg'></img>
                <div className={styles.ButtonText}>마이페이지</div>
            </div>

        </div>
    )

}
export default CustomerBottomTap;

<div className={styles.Button}></div>