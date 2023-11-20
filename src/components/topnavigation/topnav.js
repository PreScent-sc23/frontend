import React, { useState, useEffect } from 'react';
import styles from './topnav.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TopNav(props){
    const navigate = useNavigate(); 
    const [currentPage,setCurrentPage] = useState([]);
    const location = useLocation();
    const [pageTitle, setPageTitle] = useState('');
    const {back=true}=props;

    useEffect(()=> {
      switch(location.pathname){
        case '/mypage':
          setPageTitle('MyPage');
          break;

        case '/pslens':
          setPageTitle('PSLens');
          break;

        // case '/locationset':
        //   setPageTitle('');
        //   break;


      }

    },[location]);

    

    // const changePage = (newPage) => {
    //     setCurrentPage(newPage);
    //   };
    
    return (
    <div className={styles.TopNavWrap}>
       {back && <img src='/assets/back.svg' className={styles.image} onClick={()=>navigate(-1)}/>}
       <div className={styles.TopNavTitle}>{pageTitle}</div>
       <img src='/assets/setting.svg' className={styles.image}/>
    </div>
    )
}
export default TopNav;
