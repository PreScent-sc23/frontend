import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import SellerBottomTap from '../../components/bottomtap/sellerbottomtap';


function ManageReserve(){
    const navigate = useNavigate(); 
    return(
        <div>
            <Statusbar/>
            <TopNav/>
            준비중 - 예약관리 페이지
            <SellerBottomTap/>
        </div>
        
            

    );
}
export default ManageReserve;