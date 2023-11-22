import React, { useState, useEffect,useRef } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function SellerHistory(){
    return (
        <>
            <Statusbar/>
            <TopNav/>
            <CustomerBottomTap/>
        </>
    );
}
export default SellerHistory;