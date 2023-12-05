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
  const userKey =1;
    return(
        <div>
            <Statusbar/>
            <div style={{display:'flex', padding : '0rem 1rem', gap:'1px', justifyContent : 'center',alignItems:'center', textAlign:'center'}}>
              <img src='/imgs/logo.png' style={{width:'2.8rem', justifyContent : 'center',textAlign: 'center',}}></img>
              {/* <div style={{fontFamily:'inter', fontSize:'1.6rem', fontWeight:'bold',}}>
                PreScent
              </div> */}
            </div>
            <Searchbar/>
            <div style={{borderBottom:'solid #E2E2E2 1px', width:'100%', height:'200px', display:'flex', alignContent:'center'}}>
                <div style={{width:'92%', height:'90%', margin:'4px auto',borderRadius:'12px', overflow:'hidden'}}><ImageSlider/></div>
            </div>
            
            <div className={styles.ButtonContatiner}>
              <div className={styles.ButtonRow}>
                <div className= {styles.ButtonFat} onClick={()=>navigate(`/cart/${userKey}`)}>
                  <div className={styles.ButtonText} style={{margin: '12px',borderBottom:'solid #FF9494 2px'}}>
                    장바구니
                  </div>
                  <div className={styles.ButtonEmoji} style={{marginLeft:'40px', marginBottom:'80px'}}>
                  <img style={{width:'150px'}} src='/imgs/cart.png'></img>
                  </div>
                </div>
                <div className= {styles.ButtonFat} onClick={()=>navigate('/search')}>
                  <div className={styles.ButtonText} style={{margin: '12px',borderBottom:'solid #FF9494 2px'}}>
                    검색
                  </div>
                  <div className={styles.ButtonEmoji} style={{marginLeft:'40px', marginBottom:'80px'}}>
                  <img style={{width:'150px'}} src='/imgs/search.png'></img>
                  </div>
                </div>
              </div>
              <div className={styles.ButtonRow}>
                <div className={styles.ButtonSlim} onClick={()=>navigate('/pslens')}>
                  <div className={styles.ButtonText} style={{borderBottom:'solid #FF9494 2px', margin: '12px', marginBottom:'120px'}}>
                    PS:Lens
                  </div>
                  <div className={styles.SlimButtonEmoji} style={{marginLeft:'230px',marginBottom:'100px'}}>
                  <img style={{width:'150px'}} src='/imgs/pslens.png'></img>
                  </div>
                </div>
              </div>
              <div className={styles.ButtonRow}>
                <div className={styles.ButtonSlim} onClick={()=>navigate('/dictionary')}>
                <div className={styles.ButtonText} style={{borderBottom:'solid #FF9494 2px', margin: '12px', marginBottom:'120px'}}>
                    PS:사전
                  </div>
                  <div className={styles.SlimButtonEmoji} style={{marginLeft:'230px',marginBottom:'100px'}}>
                  <img style={{width:'150px'}} src='/imgs/dictionary.png'></img>
                  </div>
                </div>
              </div>
            </div>    
            <CustomerBottomTap/>
           
        </div>
        
            

    );
}
export default Home;