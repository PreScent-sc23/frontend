import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import SellerBottomTap from '../../components/bottomtap/sellerbottomtap';


function SellerHome(){
    const navigate = useNavigate(); 
    return(
        <div>
            <Statusbar/>
            <TopNav/>
            <div className={styles.profileContainer}>
                <div className={styles.profilePhoto}></div> 
                <div style={{fontSize:'18px'}}>가나다 플라워</div>
            </div>
            <div style={{width:'100%', display:'flex', flexDirection: 'column', }}>
                <div className={styles.selectBox} onClick={()=>navigate('/shopregister')}>
                    <div className={styles.textBox}>가게 관리</div>
                </div>
                <div className={styles.selectBox} onClick={()=>navigate('/manageproduct')}>
                    <div className={styles.textBox}>상품 관리</div>
                </div>
                <div className={styles.selectBox}>
                    <div className={styles.textBox}>예약 관리</div>
                </div>
                <div className={styles.selectBox}>
                    <div className={styles.textBox}>통계 관리</div>
                </div>
            </div>
            <SellerBottomTap/>
        </div>
        
            

    );
}
export default SellerHome;