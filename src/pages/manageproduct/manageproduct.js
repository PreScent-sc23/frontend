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
            <TopNav/>
            <div style={{ padding  : '1rem',display:'flex', flexDirection:'column', justifyContent:'center', gap:'2rem', marginTop:'1rem'}}>
                <div className={styles.selectBox} onClick={()=>navigate('/managefinished')}>
                    <div className={styles.textBox}>완제품 관리</div>
                </div>
                <div className={styles.selectBox} onClick={()=>navigate('/addcustom')}>
                    <div className={styles.textBox}>주문제작 관리</div>
                </div>
            </div>
            <SellerBottomTap/>
        </div>
    )
} export default ManageProduct;