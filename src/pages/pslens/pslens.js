import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
function PSLens(){
    
    return(
        <div>
            <Statusbar/>
            <TopNav/>
            <CustomerBottomTap/>
            PSLens 누르면 이동한 페이지임
        </div>
        
            

    );
}
export default PSLens;