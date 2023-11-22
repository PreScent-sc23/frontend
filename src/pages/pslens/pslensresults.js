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
                    분석끝난 이미지 결과
                </div>

                <div style={{fontSize:"1rem", textAlign:"center", marginTop: "1.5rem"}}>--------- 위의 사진에 포함된 꽃입니다 --------- </div>
                <div className={styles.ResultWrap}>

                    <div className={styles.ResultBox}>
                        <div className={styles.FlowerBox}>
                            <img scr='/assets/exampleimage.png'></img>
                        </div>
                        <div className={styles.ResultText}>꽃 결과</div>
                    </div>

                    <div className={styles.ResultBox}>
                        <div className={styles.FlowerBox}>
                            <img scr='/assets/exampleimage.png'></img>
                        </div>
                        <div className={styles.ResultText}>꽃 결과</div>
                    </div>
                </div>


            </div>
            <CustomerBottomTap/>
        </div>
    );

}export default PSLensResults;