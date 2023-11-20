import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import SellerBottomTap from '../../components/bottomtap/sellerbottomtap';


export function ManageFinished(){
    const navigate = useNavigate(); 
    return(
        <div>
            <Statusbar/>
            <div className={styles.TopNavWrap}>
                <img src='/assets/back.svg' className={styles.image} onClick={()=>navigate('/sellerhome')}/>
                <div className={styles.TopNavTitle}>상품관리 - 완제품</div>
            </div>
            <div className={styles.Container}>
                <div className={styles.ProductContainer}>
                    <div className={styles.ProductPicture}></div>
                    <div className={styles.ProductText}>이름</div>
                    <div className={styles.ProductTag}>#태그</div>
                </div>
                <div className={styles.ProductContainer}></div>
                <div className={styles.ProductContainer}></div>
                <div className={styles.ProductContainer}></div>
                <div className={styles.ProductContainer}></div>
                <div className={styles.ProductContainer}></div>
                <div className={styles.ProductContainer}></div>
                <div className={styles.ProductContainer}></div>
            </div>
            <div>
                <div className={styles.Button} onClick={()=>navigate('/addfinished')}>상품 추가하기</div>
            </div>
        </div>
    )
} export default ManageFinished;