import { useEffect } from 'react';
import styles from './map.module.scss';
function Kakao(props) {
  
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
          var marker = new kakao.maps.Marker({ 
            position: map.getCenter()
          }); 
          marker.setMap(map); 


          
          kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
            // 클릭한 위도, 경도 정보를 가져옵니다 
            var latlng = mouseEvent.latLng; 
            var lat = latlng.getLat();
            var lng = latlng.getLng();
            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
            props.updateLocation(lat,lng);
            console.log(latlng)
          });
        });   
        // load 끝
      }); 
    }, []);
  
    return (
      <div className={styles.wrapper}>
        <div id="map" className={styles.map}/>
      </div>
    );
  }
  
  export default Kakao;