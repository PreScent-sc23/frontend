import React, { useState, useEffect } from 'react';
import styles from './bottomtap.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CustomerBottomTap(){

    const navigate = useNavigate(); 
    return (
        <div className={styles.BottomTapWrap}>
            <div className={styles.Button} onClick={()=>navigate('/pslens')}>
                <img src='/assets/camera_pink.svg' style={{width : '1.8rem', heigth : '1.8rem'}}></img>
            </div>

            <div className={styles.Button} onClick={()=>navigate('/home')}>
                <img src='/assets/home_pink.svg' style={{width : '1.6rem', heigth : '1.6rem'}}></img>
                
            </div>

            <div className={styles.Button} onClick={()=>navigate('/mypage')}>
                <img src='/assets/user-02.svg'style={{width : '1.8rem', heigth : '1.8rem'}}></img>
            </div>

        </div>
    )

}
export default CustomerBottomTap;
