import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import SellerBottomTap from '../../components/bottomtap/sellerbottomtap';


function SellerHome(){
    const navigate = useNavigate(); 
    const [userDatas, setUserDatas] = useState('');

    useEffect(() => {
        axios.get('정보가 들어있는 주소', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            setUserDatas(response.data);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
    }, []);

    return(
        <div>
            <TopNav/>
            <div className={styles.profileContainer}>
                <img src ='/assets/florist.png' style={{width : '6rem', height:'auto', marginBottom : '0.5rem'}}></img>
                <span style={{textAlign : 'center',fontSize:'1.4rem',borderRadius:'4px', lineHeight:'1.8rem'}}>김사업자</span>
            </div>
            
            <div className={styles.ButtonContatiner}>
              
              <div className={styles.ButtonRow}>
                <div className= {styles.ButtonFat} onClick={()=>navigate(`/shopregister`)}>
                  <img style={{width:'10rem'}} src='/assets/shopmanagebutton.svg'></img>
                </div>
                 
                <div className= {styles.ButtonFat} onClick={()=>navigate(`/manageproduct`)}>
                  <img style={{width:'10rem'}} src='/assets/productmanagebutton.svg'></img>
                </div>
              </div>



              <div className={styles.ButtonRow}>
                <div className= {styles.ButtonFat} onClick={()=>navigate(`/sellerhome/history`)}>
                  <img style={{width:'10rem'}} src='/assets/manageorderbutton.svg'></img>
                </div>
                 
                <div className= {styles.ButtonFat} onClick={()=>navigate(`/managestat`)}>
                  <img style={{width:'10rem'}} src='/assets/xhdrPbutton.svg'></img>
                </div>
              </div>

            </div>    
            <SellerBottomTap/>
        </div>
        
            

    );
}
export default SellerHome;