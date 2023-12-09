import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import Searchbar from '../../components/search/searchbar';
import BottomTap from '../../components/bottomtap/customerbottomtap';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Kakao from '../../components/map/map';

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
      <div style={{position: 'relative', width: '100%', height: '120%', margin:'2px auto'}}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
    );
   }


function Home(){
  const navigate = useNavigate(); 
  const [fpTag, setFpTag] = useState('');
  const query = encodeURIComponent(fpTag); 

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      console.log(fpTag);
      console.log("인코딩 :" ,encodeURIComponent(fpTag));
      console.log("쿼리 :" ,query);
      navigate(`/search/${query}`, { state : {query}});
    }
  };
  const userKey =1;

//   const [userInfo, setUserInfo] = useState([]);
//   const userKey = 909;

//   useEffect(()=> {
//     console.log('사용자 정보 불러오기');
    
//     const fetchInfo = async ()=> {
//       try {
//         const response = await axios.get(`http://3.36.175.224:8080/`, {
//           params: { userKey }
//         });

//         console.log('Response:', response);
//         if (response.status==200){
//             setUserInfo(response.data);
//         }

//         } catch (error) {
//             console.log('사용자 정보 불러오기 실패');
//         }
//     };

//     fetchInfo();
//     setUserInfo({location:null})
// },[userKey]);

// useEffect(() => {
//   if (userInfo.location === null) {
//       navigate('/locationset')
//   }
// }, [userInfo]);


    return(
        <div>
            <div style={{marginTop : '3rem',display:'flex', padding : '0rem 1rem', gap:'1px', justifyContent : 'center',alignItems:'center', textAlign:'center'}}>
              <img src='/assets/svglogo.svg' style={{width:'2rem',height:'auto', justifyContent : 'center',textAlign: 'center',}}></img>
            </div>


            <div className = {styles.SearchWrap}>
            <div className={styles.SearchBar}>
                <img src='/assets/search.svg' alt='돋보기 아이콘' className={styles.image}/>  
                <div className={styles.SeachInput}>
                <input
              type="text"
              name="search"
              placeholder="검색어를 입력하세요. ex) #졸업식 #프로포즈"
              style={{ fontSize: '1rem', outline: 'none', background: 'transparent', lineHeight:'1.6rem', width:'18rem' }}
              value={fpTag}
              onChange={(e) => setFpTag(e.target.value)}
              onKeyDown={handleEnter}
            />
                </div>
            </div>
            </div>

            <div style={{borderBottom:'solid #E2E2E2 1px', width:'100%', height:'11rem', display:'flex', alignContent:'center'}}>
                <div style={{width:'92%', height:'90%', margin:'4px auto',borderRadius:'12px', overflow:'hidden'}}><ImageSlider/></div>
            </div>
            
            <div className={styles.ButtonContatiner}>
              
              <div className={styles.ButtonRow}>
                <div className= {styles.ButtonFat} onClick={()=>navigate(`/cart/${userKey}`)}>
                  <img style={{width:'10rem'}} src='/assets/cartbutton.svg'></img>
                </div>
                 
                <div className= {styles.ButtonFat} onClick={()=>navigate(`/myhistory/${userKey}`)}>
                  <img style={{width:'1orem'}} src='/assets/historybutton.svg'></img>
                </div>
              </div>



              <div className={styles.ButtonRow}>
                <div className= {styles.ButtonFat} onClick={()=>navigate(`/pslens`)}>
                  <img style={{width:'10rem'}} src='/assets/pslensbutton.svg'></img>
                </div>
                 
                <div className= {styles.ButtonFat} onClick={()=>navigate(`/dictionary`)}>
                  <img style={{width:'10rem'}} src='/assets/dictionbuttion.svg'></img>
                </div>
              </div>

            </div>    
            <CustomerBottomTap/>
           
        </div>
        
            

    );
}
export default Home;