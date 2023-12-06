import { useEffect } from 'react';
import styles from './map.module.scss';
function Kakao() {
  
    //스크립트 파일 읽어오기
    const new_script = src => { 
      return new Promise((resolve, reject) => { 
        const script = document.createElement('script'); 
        script.src = src; 
        script.addEventListener('load', () => { 
          resolve(); 
        }); 
        script.addEventListener('error', e => { 
          reject(e); 
        }); 
        document.head.appendChild(script); 
      }); 
    };
    
    useEffect(() => { 
      //카카오맵 스크립트 읽어오기
      const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=b54688f1d1cc82253625be8ef1f489bc');
      
      //스크립트 읽기 완료 후 카카오맵 설정
      my_script.then(() => { 
        console.log('script loaded!!!');  
        const kakao = window['kakao']; 
        kakao.maps.load(() => {
          const mapContainer = document.getElementById('map');
          const options = { 
            center: new kakao.maps.LatLng(37.2844, 127.0445), //좌표설정
            level: 3 
          }; 
          const map = new kakao.maps.Map(mapContainer, options); //맵생성
          //마커설정
          const markerPosition = new kakao.maps.LatLng(37.56000302825312, 126.97540593203321); 
          const marker = new kakao.maps.Marker({ 
            position: markerPosition
          }); 
          marker.setMap(map); 
        });   
      }); 
    }, []);
  
    return (
      <div className={styles.wrapper}>
        <div id="map" className={styles.map}/>
      </div>
    );
  }
  
  export default Kakao;