import React, { useState, useEffect } from 'react';
import styles from './topnav.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function TopNav(){
    const navigate = useNavigate(); 
    const [currentPage,setCurrentPage] = useState([]);
    const changePage = (newPage) => {
        setCurrentPage(newPage);
      };

    return (
    <div className={styles.TopNavWrap}>
       <img src='/assets/back.svg' className={styles.image}/>
       <div className={styles.TopNavTitle}>currentPage</div>
       <img src='/assets/setting.svg' className={styles.image}/>
    </div>
    )
}
export default TopNav;
