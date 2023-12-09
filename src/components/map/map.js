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
      const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?libraries=services&autoload=false&appkey=b54688f1d1cc82253625be8ef1f489bc');
      
      //스크립트 읽기 완료 후 카카오맵 설정
      my_script.then(() => {  
        const kakao = window['kakao']; 
        
        kakao.maps.load(() => {
          var mapContainer = document.getElementById('map');
          var options = { 
            center: new kakao.maps.LatLng(37.284375, 127.0444214), //좌표설정
            level: 3 
          }; 
          var map = new kakao.maps.Map(mapContainer, options); //맵생성
          var geocoder = new kakao.maps.services.Geocoder();
          //마커설정
          var marker = new kakao.maps.Marker({ 
            position: map.getCenter()
          }); 
          var infowindow = new kakao.maps.InfoWindow({zindex:1});

          searchAddrFromCoords(map.getCenter(), displayCenterInfo);

          marker.setMap(map); 

          // 클릭 이벤트 시작
          kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
                    detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
                    
                    var content = '<div class="bAddr">' +
                                    '<span class="title">주소정보</span>' + 
                                    detailAddr + 
                                '</div>';
                    var latlng = mouseEvent.latLng;
                    var lat = latlng.getLat();
                    var lng = latlng.getLng();
                    var location = result[0].address.address_name
                    props.updateLocation(lat, lng, location);
        
                    // 마커를 클릭한 위치에 표시합니다 
                    marker.setPosition(mouseEvent.latLng);
                    marker.setMap(map);
        
                    // 인포윈도우에 클릭한 위치에 대한 주소정보를 표시합니다
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                }   
            });
        });
          // 클릭 이벤트 종료

          kakao.maps.event.addListener(map, 'idle', function() {
            searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        });


        function searchAddrFromCoords(coords, callback) {
            // 좌표로 주소 정보를 요청합니다
            geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
         }
        
        function searchDetailAddrFromCoords(coords, callback) {
            // 좌표로 상세 주소 정보를 요청합니다
            geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }
        
        // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
        function displayCenterInfo(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var infoDiv = document.getElementById('centerAddr');
        
                for(var i = 0; i < result.length; i++) {
                    // 행정동의 region_type 값은 'H' 이므로
                    if (result[i].region_type === 'H') {
                        infoDiv.innerHTML = result[i].address_name;
                        break;
                    }
                }
              }
          }

        });   
        // load 끝
      }); 
    }, []);
  
    return (
      <div className={styles.wrapper}>
        <div className={styles.centerAddr} id='centerAddr'></div>
        <div id="map" className={styles.map}/>
      </div>
    );
  }
  
  export default Kakao;