import React, { useState, useEffect } from 'react';
import styles from './topnav.module.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function TopNav(props){
    const navigate = useNavigate(); 
    const params=useParams();
    const [currentPage,setCurrentPage] = useState([]);
    const location = useLocation();
    const [pageTitle, setPageTitle] = useState('');
    const {back=true}=props;
    const [icon, setIcon]=useState('');
    const { fpKey } = useParams();
    

    useEffect(()=> {
      const isDetailPage = location.pathname.startsWith('/detail/');

      
      switch(true){
        case location.pathname === `/sellersignup`:
          // case '/sellersignup':
          setPageTitle('사업자 회원 가입');
          setIcon('/assets/emptyicon.svg');
          break

        case location.pathname === `/customersignup`:
        // case '/customersignup':
          setPageTitle('일반 고객 회원 가입');
          setIcon('/assets/emptyicon.svg');
          break;




          case isDetailPage:
          setPageTitle('상품 상세 정보');
          setIcon('/assets/emptyicon.svg');
          break;

          case location.pathname === '/mypage':
          setPageTitle('마이페이지');
          setIcon('/assets/setting.svg');
          break;

          case location.pathname === '/pslens':
          setPageTitle('PSLens');
          setIcon('/assets/emptyicon.svg');
          break;

          case location.pathname === '/pslens/results':
        // case '/pslens/results':
          setPageTitle('꽃 분석 결과');
          setIcon('/assets/emptyicon.svg');
          break;

          case location.pathname === `/cart`:
        // case `/cart/${userKey}`:
          setPageTitle('장바구니');
          setIcon('/assets/emptyicon.svg');
          break;

          case location.pathname === `/cart/payment`:
        // case `/cart/payment/${userKey}`:
          setPageTitle('상품 결제');
          setIcon('/assets/emptyicon.svg');
          break;

          case location.pathname === `/managereserve`:
        // case '/managereserve':
          setPageTitle('예약 관리');
          setIcon('/assets/setting.svg');
          break;

          case location.pathname === `/managerestat`:
        // case '/managestat':
          setPageTitle('통계 관리');
          setIcon('/assets/setting.svg');
          break;

       
        
          case location.pathname === `/addfinished`:
        // case '/addfinished':
          setPageTitle('완제품 등록');
          setIcon('/assets/setting.svg');
          break;

        case location.pathname === `/sellerhome`:
        // case '/sellerhome':
          setPageTitle('우리가게 관리');
          setIcon('/assets/setting.svg');
          break;
          
        case location.pathname === `/shopregister`:
        // case '/shopregister':
          setPageTitle('가게 등록');
          setIcon('/assets/setting.svg');
          break;
            


        case location.pathname === `/myhistory`:
        // case '/myhistory':
          setPageTitle('주문 내역');
          setIcon('/assets/emptyicon.svg');
          break;

        case location.pathname === `/sellerhome/history`:
        // case '/sellerhome/history':
          setPageTitle('예약 관리');
          setIcon('/assets/emptyicon.svg');
          break;
          
        case location.pathname === `/detail/${fpKey}`:
          setPageTitle('상품 상세 정보');
          setIcon('/assets/emptyicon.svg');
          break;
          
          case location.pathname === `/sellersignup`:
        // case '/sellersignup':
          setPageTitle('사업자 회원 등록');
          setIcon('');
          break;


          case location.pathname === `/locationset`:
          // case '/locationset':
          setPageTitle('위치 설정');
          setIcon('/assets/emptyicon.svg');
          break;

          case location.pathname === `/addcustom`:
          // case '/addcustom':
          setPageTitle('주문제작 양식 등록');
          setIcon('/assets/emptyicon.svg');
          break;

          case location.pathname === `/manageproduct`:
        // case '/manageproduct':
          setPageTitle('내 제품 관리');
          setIcon('/assets/emptyicon.svg');
          break;

          case location.pathname === `/managefinished`:
          // case '/managefinished':
          setPageTitle('완제품 관리');
          setIcon('/assets/emptyicon.svg');
          break;

          case location.pathname === `/dictionary`:
          // case '/dictionary':
          setPageTitle('PS 사전');
          setIcon('/assets/emptyicon.svg');
          break;
          
          case location.pathname === `/managestat`:
          // case '/managefinished':
          setPageTitle('매장 통계');
          setIcon('/assets/setting.svg');
          break;

        
          case location.pathname === `/locationset`:
            // case '/dictionary':
            setPageTitle('위치 설정');
            setIcon('/assets/emptyicon.svg');
            break;

          // case '/dictionary/':
          // setPageTitle('PS 사전');
          // setIcon('');
          // break;
      }

    },[location,fpKey]);

  
    
    return (
    <div className={styles.TopNavWrap}>
       {back && <img src='/assets/back.svg' className={styles.Icons} onClick={()=>navigate(-1)}/>}
       <div className={styles.TopNavTitle}>{pageTitle}</div>
       <img src={icon} className={styles.Icons} /*onClick= {()=>navigate(`/cart/${userKey}`)}*//>
       
    </div>
    )
}
export default TopNav;
