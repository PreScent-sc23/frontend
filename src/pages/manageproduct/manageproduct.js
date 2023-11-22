import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import SellerBottomTap from '../../components/bottomtap/sellerbottomtap';


export function ManageProduct(){
    const navigate = useNavigate(); 
    return(
        <div>
            <Statusbar/>
            <div className={styles.TopNavWrap}>
                <img src='/assets/back.svg' className={styles.image} onClick={()=>navigate('/sellerhome')}/>
                <div className={styles.TopNavTitle}>상품 관리</div>
            </div>
            <div style={{width:'100%', display:'flex', flexDirection:'column'}}>
                <div className={styles.selectBox} onClick={()=>navigate('/managefinished')}>
                    <div className={styles.textBox}>완제품 관리</div>
                </div>
                <div className={styles.selectBox} onClick={()=>navigate('/productmanage')}>
                    <div className={styles.textBox}>주문제작 관리</div>
                </div>
            </div>
        </div>
    )
} export default ManageProduct;