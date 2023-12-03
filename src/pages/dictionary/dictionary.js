import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import {flowers} from './flowers'
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';

function Dictionary(){
    
    const navigate = useNavigate(); 
    const [selectedFlower, setSelectedFlower] = useState(null);
    const pageinfo = 'PS사전에서 궁금한 꽃에 대한 정보를 찾아\n꽃에 담긴 진정한 의미를 알아보세요!\n꽃의 정보는 정기적으로 업데이트 됩니다.'
    
    const handleFlowerClick = (flower) => {
        setSelectedFlower(flower);
    }
 
    const handleClosePopup = () => {
        setSelectedFlower(null);
    }
    
    return (
        <div>
            <Statusbar/>
            <TopNav/>
            <div className={styles.LogoContainer}>
                <img src='/imgs/logo.png' style={{width:'60px'}}></img>
            </div>
            <div className={styles.ListContainer}>
                {flowers.map((flower, index) => (
                    <div key = {index} onClick={() => handleFlowerClick(flower)}>
                        <div className={styles.FlowerContainer}>
                            <div className={styles.ImageContainer}>
                                <img src={flower.imgpath} alt={flower.name} />
                            </div>
                            <div className={styles.Line}></div>
                            <div className={styles.InfoContainer}>
                                <div className={styles.FlowerName}>{flower.name}</div>
                                <div style={{marginTop:'40px', fontSize:'12px', fontWeight:'bold'}} className={styles.TagContainer}>{flower.tag}</div>
                            </div>
                            <div>
                                <img style={{height:'40px', opacity:'45%'}} src='/imgs/dots_column.png'></img>
                            </div>
                        </div>
                    </div>
                ))} 
            </div>
            
            {selectedFlower && (
               <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor: 'white', width:'370px', height:'700px',padding: '20px', borderRadius: '12px' }}>
                    <div className={styles.PopImageContainer}>
                        <img src={selectedFlower.imgpath} alt={selectedFlower.name} />
                    </div>
                    <div className={styles.LogoContainer} style={{width:'410px', marginTop:'12px'}}>
                        <img src='/imgs/logo.png' style={{height:'60px'}}></img>
                    </div>
                    <div className={styles.PopDetail}>  
                        <div style={{fontSize:'25px', fontWeight:'bold', borderBottom:'2px solid #FF9494'}}>
                            {selectedFlower.name}
                        </div>
                        <div style={{height:'30px'}}>
                        </div>
                        <div style={{height:'180px', width:'80%' ,border:'2px solid #FED8DF', borderRadius:'12px',padding:'8px', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'14px'}}>
                            {selectedFlower.description}
                        </div>
                    </div>
                    <button className={styles.PopClose} onClick={handleClosePopup}>뒤로 가기</button>
                  </div>
               </div>
           )}

            <div className={styles.PageInfo}>
                {pageinfo}
            </div>
            <CustomerBottomTap/>
        </div>
    )
}
export default Dictionary;