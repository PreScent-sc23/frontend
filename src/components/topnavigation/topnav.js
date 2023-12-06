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
    const userKey = 1;
    

    useEffect(()=> {
      switch(location.pathname){
        case '/mypage':
          setPageTitle('MyPage');
          setIcon('/assets/setting.svg');
          break;

        case '/pslens':
          setPageTitle('PSLens');
          setIcon('/assets/setting.svg');
          break;


        case '/pslens/results':
          setPageTitle('꽃 분석 결과');
          setIcon('/assets/setting.svg');
          break;


        case `/cart/${userKey}`:
          setPageTitle('장바구니');
          setIcon('/assets/cart.svg');
          break;


        case `/cart/payment/${userKey}`:
          setPageTitle('상품 결제');
          setIcon('/assets/cart.svg');
          break;


        case '/managereserve':
          setPageTitle('예약 관리');
          setIcon('');
          break;

        case '/managestat':
          setPageTitle('통계 관리');
          setIcon('');
          break;

        case '/sellersignup':
          setPageTitle('사업자 회원 가입');
          setIcon('/assets/setting.svg');
          break;


        case '/customersignup':
          setPageTitle('일반 고객 회원 가입');
          setIcon('/assets/setting.svg');
          break;

        case '/addfinished':
          setPageTitle('완제품 등록');
          setIcon('/assets/setting.svg');
          break;


        case '/sellerhome':
          setPageTitle('우리가게 관리');
          setIcon('/assets/setting.svg');
          break;


        case '/myhistory':
          setPageTitle('주문 내역');
          setIcon('/assets/cart.svg');
          break;


        case '/sellerhome/history':
          setPageTitle('예약 관리');
          setIcon('/assets/setting.svg');
          break;
          
        case '/login':
          setPageTitle('로그인');
          setIcon('');
          break;

        // case `/detail/${fpKey}`:
        //   setPageTitle('상품 상세 정보');
        //   setIcon('');
        //   break;
          
        case '/sellersignup':
          setPageTitle('사업자 회원 등록');
          setIcon('');
          break;

        case '/customersignup':
          setPageTitle('일반 고객 회원 등록');
          setIcon('');
          break;

          case '/locationset':
          setPageTitle('위치 설정');
          break;

        case '/addcustom':
          setPageTitle('주문제작 양식 등록');
          setIcon('');
          break;

        case '/manageproduct':
          setPageTitle('내 제품 관리');
          setIcon('');
          break;

          case '/managefinished':
          setPageTitle('완제품 관리');
          setIcon('');
          break;

          case '/dictionary':
          setPageTitle('PS 사전');
          setIcon('/assets/setting.svg');
          break;

          case '/dictionary/':
          setPageTitle('PS 사전');
          setIcon('');
          break;
      }

    },[location]);

    

    // const changePage = (newPage) => {
    //     setCurrentPage(newPage);
    //   };
    
    return (
    <div className={styles.TopNavWrap}>
       {back && <img src='/assets/back.svg' className={styles.image} onClick={()=>navigate(-1)}/>}
       <div className={styles.TopNavTitle}>{pageTitle}</div>
       <img src={icon} className={styles.image} onClick= {()=>navigate(`/cart/${userKey}`)}/>
       {/* <img src={icon} className={styles.image}/> */}
    </div>
    )
}
export default TopNav;
