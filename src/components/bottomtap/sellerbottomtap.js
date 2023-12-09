import React, { useState, useEffect } from 'react';
import styles from './bottomtap.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SellerBottomTap(){

    const navigate = useNavigate(); 
    //const [activeTap, setActiveTap] = useState(1);
    return (
        <div className={styles.SellerBottomTapWrap}>
            
            <div className={styles.Button} onClick={()=>navigate('/managereserve')}>
                <img src='/assets/calendar_pink.svg' style={{width : '1.8rem', heigth : 'auto'}}></img>
                {/* <div className={styles.ButtonText}>예약</div> */}
            </div>

            <div className={styles.Button} onClick={()=>navigate('/sellerhome')}>
                <img src='/assets/home_pink.svg' style={{width : '1.8rem', heigth : 'auto'}}></img>
                {/* <div className={styles.ButtonText}>홈</div> */}
            </div>

            
            <div className={styles.Button} onClick={()=>navigate('/manageproduct')}>
                <img src='/assets/product_pink.svg' style={{width : '2rem', heigth :'auto'}}></img>
                {/* <div className={styles.ButtonText}>상품</div> */}
            </div>

            <div className={styles.Button} onClick={()=>navigate('/managestat')}>
                <img src='/assets/coin13_pink.svg' style={{width : '2.1rem', heigth : 'auto'}}></img>
                {/* <div className={styles.ButtonText}>통계</div> */}
            </div>


    </div>
    )

}
export default SellerBottomTap;
