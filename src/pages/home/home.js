import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import Searchbar from '../../components/search/searchbar';
import BottomTap from '../../components/bottomtap/customerbottomtap';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';

function Home(){
    
    return(
        <div>
            <Statusbar/>
            <Searchbar/>
            <CustomerBottomTap/>
            홈버튼 누르면 이동한 페이지임
           
        </div>
        
            

    );
}
export default Home;