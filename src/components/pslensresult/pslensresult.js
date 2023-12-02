import React, { useState, useEffect,useRef } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

const PSLensResults() {
    
    return(
        <div>
            <Statusbar/>
            <TopNav/>

            <div>
                <div className={styles.ImageWrap} style={{height: "20rem", borderRadius:"0rem"}}>
                    <img src={"http://3.36.175.224:8080/image?image=" +post.imageName}
                        alt = "AI 분석 결과 입니다"
                    />
                </div>

                {/* <div style={{fontSize:"1rem", textAlign:"center", marginTop: "1rem", paddingTop:"1rem"}}>--------- 위의 사진에 포함된 꽃입니다 ---------- </div> */}
                <div className={styles.ResultWrap}>

                    <div className={styles.ResultBox}>
                        <img src='/assets/result1.jpeg' className={styles.FlowerBox}></img>
                        <div className={styles.ResultText}>캐모마일 - 역경에 굴하지 않는 강인함</div>
                    </div>

                </div>


            </div>
            <CustomerBottomTap/>
        </div>
    );

}export default PSLensResults;