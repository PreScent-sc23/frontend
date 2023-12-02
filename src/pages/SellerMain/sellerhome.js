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
                <div style={{fontSize:'18px', width:'10rem', height:'1.8rem', backgroundColor:'#E2E2E2', borderRadius:'8px', lineHeight:'1.8rem'}}>김사업자</div>
            </div>
            <div style={{width:'430px', height:'600px',display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                <div className={styles.selectBox} style={{backgroundImage: `url(/imgs/sellermenu_1.png)`}} onClick={()=>navigate('/shopregister')}>
                    <div className={styles.textBox}>가게 관리</div>
                </div>
                <div className={styles.selectBox} style={{backgroundImage: `url(/imgs/sellermenu_2.png)`}} onClick={()=>navigate('/manageproduct')}>
                    <div className={styles.textBox}>상품 관리</div>
                </div>
                <div className={styles.selectBox} style={{backgroundImage: `url(/imgs/sellermenu_3.png)`}} onClick={()=>navigate('/managereserve')}>
                    <div className={styles.textBox}>예약 관리</div>
                </div>
                <div className={styles.selectBox} style={{backgroundImage: `url(/imgs/sellermenu_4.png)`}} onClick={()=>navigate('/managestat')}>
                    <div className={styles.textBox}>통계 관리</div>
                </div>
            </div>
            <SellerBottomTap/>
        </div>
        
            

    );
}
export default SellerHome;