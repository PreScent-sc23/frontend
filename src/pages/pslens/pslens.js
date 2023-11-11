import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BottomTap from '../../components/bottomtap/bottomtap';
import Statusbar from '../../components/statusbar/statusbar';
function PSLens(){
    
    return(
        <div>
            
           
            {/* <Searchbar/> */}
            <Statusbar/>
            <BottomTap/>
            PSLens 누르면 이동한 페이지임
        </div>
        
            

    );
}
export default PSLens;