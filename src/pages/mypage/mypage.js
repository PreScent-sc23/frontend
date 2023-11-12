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
            <CustomerBottomTap/>
            마이페이지 누르면 이동한 페이지임
        </div>
        
            

    );
}
export default Mypage;