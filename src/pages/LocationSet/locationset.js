import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import Searchbar from '../../components/search/searchbar';

function LocationSet(){

        return(
            <div>
                <Statusbar/>
                {/* <TopNav/> */}
                <div className={styles.TopNavWrap}>
                    <img src='/assets/back.svg' className={styles.image}/>
                    <div className={styles.TopNavTitle} style={{marginLeft:"3rem"}}>위치를 설정하세요</div>
                    {/* <div className={styles.TopNavButtonContainer}> */}
                    <div className={styles.TopNavButton}>저장</div>
                    
                    
                </div>
                <Searchbar/>
            </div>
        )
}export default LocationSet;