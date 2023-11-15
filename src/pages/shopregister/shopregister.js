import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function Shopregister(){
    
    return(
        <div >
            <Statusbar/>
            <TopNav/>

            <div style={{display:'flex', flexDirection: 'column',width: '100%', marginTop:'100px', border:'1px red solid'}}>
                <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='이름'></input>
                <input className={styles.inputBox} type='number' name = "shopnum" size = '50' placeholder='가게 연락처'></input>
                <input className={styles.inputBox} type='text' name = "shopaddress" size = '50' placeholder='가게 주소'></input>

            </div>
        </div>
        
        

    );
}
export default Shopregister ;