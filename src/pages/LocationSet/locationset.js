import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import Searchbar from '../../components/search/searchbar';
import Kakao from '../../components/map/map';

function LocationSet(){
    const [location, setLocation] = useState({ lat: null, lng: null });
    const navigate = useNavigate(); 

    const updateLocation = (lat, lng) => {
        setLocation({ lat, lng });
      };


      const handleSubmission = async () => {
        console.log("됨?");
        console.log(location);
        try {
            const response = await axios.post('http://3.36.175.224:8080/customer/signup', {
                location,
            },{
                headers: {
                    'Content-Type': 'application/json'
        },
    });
            console.log("됨2?");
            navigate(-1);
        } catch (error) {
            console.error('오류');
        }
    };

        return(
            <div>
                <Statusbar/>
                <TopNav/>
                <div style={{width:'100%', height:'100%',display:'flex', justifyContent:'center', alignContent:'center', flexDirection:'column'}}>
                <Kakao updateLocation={updateLocation}/>
                <button className={styles.PopClose} onClick={handleSubmission}>위치 설정하기</button>
                </div>

                
                
            </div>
        )
}export default LocationSet;