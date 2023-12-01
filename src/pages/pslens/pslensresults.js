import React, { useState, useEffect,useRef } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function PSLensResults (){
    
    return(
        <div>
            <Statusbar/>
            <TopNav/>

            <div>
                <div className={styles.ImageWrap} style={{height: "20rem", borderRadius:"0rem"}}>
                    <img src='/assets/test.png'></img>
                </div>

                {/* <div style={{fontSize:"1rem", textAlign:"center", marginTop: "1rem", paddingTop:"1rem"}}>--------- 위의 사진에 포함된 꽃입니다 ---------- </div> */}
                <div className={styles.ResultWrap}>

                    <div className={styles.ResultBox}>
                        
                        <img src='/assets/result1.jpeg' className={styles.FlowerBox}></img>
                        <div className={styles.ResultText}>캐모마일 - 역경에 굴하지 않는 강인함</div>
                    </div>

                    <div className={styles.ResultBox}>
                        
                        <img src='/assets/result2.jpeg' className={styles.FlowerBox}></img>
                        
                        <div className={styles.ResultText}>작약 - 수줍음, 부끄러움</div>
                    </div>

                    <div className={styles.ResultBox}>
                        
                        <img src='/assets/result3.jpeg'className={styles.FlowerBox}></img>
                        <div className={styles.ResultText}>거베라 - 신비, 풀 수 없는 수수께끼</div>
                    </div>

                    <div className={styles.ResultBox}>
                        <img src='/assets/result4.jpeg' className={styles.FlowerBox}></img>
                        <div className={styles.ResultText}>하얀 장미 - 순수, 젊음, 새로운 시작</div>
                    </div>


                </div>


            </div>
            <CustomerBottomTap/>
        </div>
    );

}export default PSLensResults;