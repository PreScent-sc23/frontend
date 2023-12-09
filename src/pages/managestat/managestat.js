import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import SellerBottomTap from '../../components/bottomtap/sellerbottomtap';


function ManageStat(){
    const navigate = useNavigate(); 
    return(
        <div>
            <TopNav/>
            <div style ={{fontFamily:'Pretendard', fontSize : '1.4rem', fontWeight : 500, textAlign:'center', marginTop :'1rem'}}>페이지 준비중</div>
            <SellerBottomTap/>
        </div>
        
            

    );
}
export default ManageStat;