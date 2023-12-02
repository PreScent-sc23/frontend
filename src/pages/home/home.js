import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import Searchbar from '../../components/search/searchbar';
import BottomTap from '../../components/bottomtap/customerbottomtap';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';


function ImageSlider() {
    const [images, setImages] = useState(['/imgs/banner_1.jpeg', '/imgs/banner_2.jpeg', '/imgs/banner_3.jpeg', '/imgs/banner_4.jpeg']);
    const [currentIndex, setCurrentIndex] = useState(0);
   
    const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(handleNext, 3000);
        return () => clearInterval(timer);
       }, [currentIndex]);
   
    return (
      <div style={{position: 'relative', width: '100%', height: '100%', margin:'2px auto'}}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
    );
   }


function Home(){
  const navigate = useNavigate(); 

    return(
        <div>
            <Statusbar/>
            <Searchbar/>
            <div style={{borderBottom:'solid #E2E2E2 1px', width:'100%', height:'200px', display:'flex', alignContent:'center'}}>
                <div style={{width:'92%', height:'90%', margin:'4px auto',borderRadius:'12px', overflow:'hidden'}}><ImageSlider/></div>
            </div>
            <div style={{display:'flex', gap:'2px', alignItems:'center'}}>
              <img src='/imgs/logo.png' style={{width:'40px', margin:'8px'}}></img>
              <div style={{fontFamily:'inter', fontSize:'28px', fontWeight:'bold',}}>
                PreScent
              </div>
            </div>
            <div className={styles.ButtonContatiner}>
              <div className={styles.ButtonRow}>
                <div className= {styles.ButtonFat} onClick={()=>navigate('/myhistory')}>주문기록 버튼 이미지</div>
                <div className= {styles.ButtonFat} onClick={()=>navigate('/pslens')}>PSlens 버튼 이미지</div>
              </div>
              <div className={styles.ButtonRow}>
                <div className={styles.ButtonSlim} onClick={()=>navigate('/404')}>꽃말 사전 버튼 이미지</div>
              </div>
              <div className={styles.ButtonRow}>
                <div className={styles.ButtonSlim} onClick={()=>navigate('/404')}>아무거나</div>
              </div>
            </div>    
            <CustomerBottomTap/>
           
        </div>
        
            

    );
}
export default Home;