import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import SellerBottomTap from '../../components/bottomtap/sellerbottomtap';


function ManageReserve(){
    const navigate = useNavigate(); 
    const [showPopup, setShowPopup] = useState(false);
 
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const order = {name: '제품명', type: '완제품', date: '1234/56/78'}
    const customer = {name: '윤정환'}
 
    return(
        <div>
            <Statusbar/>
            <TopNav/>
            <div className={styles.Container}>
                <div className={styles.ProductContainer} onClick={togglePopup}>
                  <div className={styles.ProductPhoto}></div>
                  <div className={styles.ProductInfo}>
                    <div style={{fontFamily:'Inter', margin: '4px',fontSize:'18px', fontWeight:'bold', borderBottom:'1px solid #7E49FF'}}>
                        주문명 : {order.name} 
                    </div>
                    <div style={{fontFamily:'Inter', margin: '4px',marginTop:'10px',fontSize:'15px',}}>
                        주문 픽업 : {order.date} 
                    </div>
                    <div style={{fontFamily:'Inter', margin: '4px',fontSize:'15px',}}>
                        주문 종류 : {order.type} 
                    </div>
                    <div style={{fontFamily:'Inter', margin: '4px',fontSize:'15px',}}>
                        주문자 : {customer.name} 
                    </div>
                  </div>
                </div>
            </div>
            {showPopup && (
                <div className={styles.Overlay} onClick={togglePopup}>
                   <div className={styles.Popup_Container}>
                    <div className={styles.Popup_Top}>
                        <div className={styles.Popup_Image}>
                        
                        </div>
                        <div className={styles.Popup_Info_Top}>
                            
                        </div>
                    </div>

                    <div className={styles.Popup_Info_Bottom}>
                        
                    </div>
                   </div>
                </div>
            )}
            <SellerBottomTap/>
        </div>
    );
 }
 export default ManageReserve;