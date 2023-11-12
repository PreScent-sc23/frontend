import React, { useState, useEffect } from 'react';
// import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import Searchbar from '../../components/search/searchbar';
import SellerBottomTap from '../../components/bottomtap/sellerbottomtap';


function SellerHome(){
    
    return(
        <div>
            <Statusbar/>
            <Searchbar/>
            <SellerBottomTap/>
            판매자 홈입니다
        </div>
        
            

    );
}
export default SellerHome;