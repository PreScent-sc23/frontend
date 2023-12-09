import React, { useState, useEffect } from 'react';
import styles from './bottomtap.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SellerBottomTap(){

    const navigate = useNavigate(); 
    
    return (
        <div className={styles.SellerBottomTapWrap}>
            
            <div className={styles.Button} onClick={()=>navigate('/sellerhome/history')}>
                <img src='/assets/calendar_pink.svg' style={{width : '1.6rem', heigth : 'auto'}}></img>
                
            </div>

            <div className={styles.Button} onClick={()=>navigate('/sellerhome')}>
                <img src='/assets/home_pink.svg' style={{width : '1.6rem', heigth : 'auto'}}></img>
                
            </div>

            
            <div className={styles.Button} onClick={()=>navigate('/manageproduct')}>
                <img src='/assets/product_pink.svg' style={{width : '1.8rem', heigth :'auto'}}></img>
               
            </div>

            <div className={styles.Button} onClick={()=>navigate('/managestat')}>
                <img src='/assets/coin13_pink.svg' style={{width : '1.9rem', heigth : 'auto'}}></img>
                
            </div>


    </div>
    )

}
export default SellerBottomTap;
