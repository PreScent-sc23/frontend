import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import SellerBottomTap from '../../components/bottomtap/sellerbottomtap';


function SellerHome(){
    
    return(
        <div>
            <Statusbar/>
            <TopNav/>
            <div className={styles.profileContainer}>
                칸
            </div>
            <SellerBottomTap/>
        </div>
        
            

    );
}
export default SellerHome;