import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';

function Mypage(){
    
     const navigate = useNavigate(); 
     const [name, setName] = useState('-');
     const [phonenum, setPhoneNum] = useState('-');
     const [idEmail, setIdEmail] = useState('-');
     const [address, setAddress] = useState('-');
     useEffect(() => {
          const fetchInfo = async () => {
              try {
                  const token = localStorage.getItem('token')
                  const headers = { 'Authorization': `Bearer ${token}`};
                  const response = await axios.get('http://3.36.175.224:8080/customer-my-info', { headers });
                  if (response.status === 200) {
                      setName(response.data.name);
                      setPhoneNum(response.data.phonenum);
                      setIdEmail(response.data.idEmail);
                      setAddress(response.data.address);
                  }
              } catch (error) {
                  console.log('Failed to fetch user info');
              }
          };

          fetchInfo();
       }, []);


    return(
        <div>
            <TopNav/>
            <div>
               <div className={styles.ProfileTitleWrap}>
                    <div className={styles.ProfileTitle}>내 프로필</div>
                    <div className={styles.EditButton}>수정</div>
               </div>

               <div className={styles.ProfileWrap}>
                    <div className={styles.Profile}>
                    
                         <img src='/assets/user_pink.svg' className={styles.Image}></img>
                         <div className={styles.InfoWrap}>
                              <div className={styles.BoldText} style={{fontSize:"1.2rem"}}>{name}</div>
                              <div className={styles.Line}></div>
                              <div className={styles.InfoText}>{phonenum}</div>
                              <div className={styles.Line}></div>
                              <div className={styles.InfoText}>{idEmail}</div>
                         </div>

                    </div>


                    <div className={styles.Location}>
                         <img src='/assets/pin.svg'></img>
                         <div className={styles.LocationText}>
                              <div className={styles.InfoText}>현재 위치</div>
                              <div className={styles.BoldText}>{address}</div>

                         </div>
                         <div className={styles.EditButton} style={{fontSize:"1rem"}}>수정</div>
                    </div>

               </div>

               <div className={styles.MenuWrap}>
                    <div className={styles.MypageMenu} onClick={()=>navigate(`/myhistory`)} >
                         <div className={styles.MenuTitle} >주문내역</div>
                         <img src='/assets/right.svg'></img>
                    </div>


                    <div className={styles.MypageMenu} onClick={()=>navigate(`/cart`)}>
                         <div className={styles.MenuTitle}>장바구니</div>
                         <img src='/assets/right.svg'></img>
                    </div>

                    <div className={styles.MypageMenu} onClick={()=>navigate('/dictionary')}>
                         <div className={styles.MenuTitle}>꽃말사전</div>
                         <img src='/assets/right.svg' ></img>
                    </div>

                    <div className={styles.MypageMenu} onClick={()=>navigate('/404')}>
                         <div className={styles.MenuTitle}>고객센터</div>
                         <img src='/assets/right.svg' ></img>
                    </div>
               </div>
               
            </div>
            <CustomerBottomTap/>

           
        </div>
        
            

    );
}
export default Mypage;