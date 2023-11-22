import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';

function Mypage(){
    
     const navigate = useNavigate(); 

    return(
        <div>
            <Statusbar/>
            <TopNav/>
            <div>
               <div className={styles.ProfileTitleWrap}>
                    <div className={styles.ProfileTitle}>내 프로필</div>
                    <div className={styles.EditButton}>수정</div>
               </div>

               <div className={styles.ProfileWrap}>
                    <div className={styles.Profile}>
                    
                         <img src='/assets/profile_ex.svg' className={styles.Image}></img>
                         {/* <div className={styles.Image}>프로필이미지</div> */}
     
                         <div className={styles.InfoWrap}>
                              <div className={styles.BoldText} style={{fontSize:"1.2rem"}}>김도윤</div>
                              <div className={styles.Line}></div>
                              <div className={styles.InfoText}>010-3333-4444</div>
                              <div className={styles.Line}></div>
                              <div className={styles.InfoText}>ajou@gmail.com</div>
                         </div>

                    </div>


                    <div className={styles.Location}>
                         <img src='/assets/pin.svg'></img>
                         <div className={styles.LocationText}>
                              <div className={styles.InfoText}>현재 위치</div>
                              <div className={styles.BoldText}>경기도 수원시 영통구 월드컵로</div>

                         </div>
                         <div className={styles.EditButton} style={{fontSize:"1rem"}}>수정</div>
                    </div>

               </div>

               <div className={styles.MenuWrap}>
                    <div className={styles.MypageMenu}>
                         <div className={styles.MenuTitle}>주문내역</div>
                         <img src='/assets/right.svg' onClick={()=>navigate('/myhistory')} ></img>
                    </div>


                    <div className={styles.MypageMenu}>
                         <div className={styles.MenuTitle}>장바구니</div>
                         <img src='/assets/right.svg' onClick={()=>navigate('/cart')} ></img>
                    </div>

                    <div className={styles.MypageMenu}>
                         <div className={styles.MenuTitle}>꽃말사전</div>
                         <img src='/assets/right.svg' ></img>
                    </div>

                    <div className={styles.MypageMenu}>
                         <div className={styles.MenuTitle}>고객센터</div>
                         <img src='/assets/right.svg' ></img>
                    </div>
               </div>
               
            </div>
            <CustomerBottomTap/>

           
        </div>
        
            

    );
}
export default Mypage;