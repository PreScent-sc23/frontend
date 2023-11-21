import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';

function Mypage(){
    
    return(
        <div>
            <Statusbar/>
            <TopNav/>
            <div>
               <div className={styles.ProfileTitleWrap}>
                    <div className={styles.ProfileTitle}>내 프로필</div>
                    <div className={styles.EditButton}>수정</div>
               </div>

               <div className={styles.Profile}>
                   
               </div>


               <div className={styles.MypageMenu}>
                    <div className={styles.MenuTitle}>주문내역</div>
                    <img src='/assets/right.svg' onClick ></img>
               </div>


               <div className={styles.MypageMenu}>
                    <div className={styles.MenuTitle}>장바구니</div>
                    <img src='/assets/right.svg' onClick ></img>
               </div>

               <div className={styles.MypageMenu}>
                    <div className={styles.MenuTitle}>꽃말사전</div>
                    <img src='/assets/right.svg' onClick ></img>
               </div>

               <div className={styles.MypageMenu}>
                    <div className={styles.MenuTitle}>고객센터</div>
                    <img src='/assets/right.svg' onClick ></img>
               </div>
            </div>
            <CustomerBottomTap/>

           
        </div>
        
            

    );
}
export default Mypage;