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
    const [icon, setIcon]=useState('');

    useEffect(()=> {
      switch(location.pathname){
        case '/mypage':
          setPageTitle('MyPage');
          setIcon('/assets/setting.svg');
          break;

        case '/pslens':
          setPageTitle('PSLens');
          setIcon('');
          break;


        case '/pslens/results':
          setPageTitle('꽃 분석 결과');
          setIcon('');
          break;


        case '/pslens/results':
          setPageTitle('꽃 분석 결과');
          setIcon('');
          break;

        case '/cart':
          setPageTitle('장바구니');
          setIcon('/assets/cart.svg');
          break;

        
        case '/sellerhome':
          setPageTitle('판매자 홈');
          setIcon('');
          break;

        case '/managereserve':
          setPageTitle('예약 관리');
          setIcon('');
          break;

        case '/managestat':
          setPageTitle('통계 관리');
          setIcon('');
          break;

      

        case '/login':
          setPageTitle('로그인');
          setIcon('');
          break;
          
        case '/sellersignup':
          setPageTitle('사업자 회원 등록');
          setIcon('');
          break;

        case '/customersignup':
          setPageTitle('일반 고객 회원 등록');
          setIcon('');
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
       <img src={icon} className={styles.image}/>
    </div>
    )
}
export default TopNav;
