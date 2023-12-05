import React, { useState, useEffect,useRef } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
function PSLens(){
    
    const navigate=useNavigate();
    const [selectedFile, setSelectedFile] = useState('');
    const [uploadImage, setUploadImage]= useState('');

    const handleFileSelect = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
        event.target.value='';
    }

    const handleImageUpload = async () => {
        if (!selectedFile){
            console.error("이미지를 업로드하세요");
            return ;
        }

        const formData = new FormData();
        formData.append("uploadImage", selectedFile);
        console.log("됨?");
        try {
            const response = await axios.get('http://3.36.175.224:8080/pslens', {
                selectedFile,
            },{
                headers: {
                    'Content-Type': 'multipart/form-data'
        },
    });
            console.log("전송 완료");
            console.log(response.data);
            navigate('/pslens/results', {state : {resultData : response.resultdata}});

        } catch (error) {
            console.error('이미지 업로드 오류:', error);
        }
    };


    
    return(
        <div>
            <Statusbar/>
            <TopNav/>

            <div>
                <div className={styles.NoticeWrap}>
                    <div className={styles.TitleWrap}>
                        <img src ='/assets/cursorclick.svg'></img>
                        <div className={styles.Title}>PS Lens란?</div>
                    </div>

                    <div className={styles.TextWrap}>
                        <div className={styles.Text}>AI 꽃 분석을 통해 사진 속 꽃의 이름을 알려드려요</div>
                        <div className={styles.HighlightText}>Tip! 꽃이 잘 보이는 선명한 사진을 권장합니다</div>
                        {/* <div className={styles.HighlightText} style={{marginLeft:"1.6rem"}}>정확한 결과를 얻을 수 있습니다!</div> */}
                    </div>

                </div>


                <div className={styles.ImageWrap}>
                    {!selectedFile ? (<img src ='/assets/exampleimage.png'/>) 
                    : (<img src={selectedFile}/>) }
                </div>

                {/* <div className={styles.ImageWrap}>
                    <img src='/assets/exampleimage.png'></img>
                </div> */}
                
                
                <div style={{opacity : "0.6", textAlign:"center", textSize:"1.5rem"}}>- 예시 이미지 - </div>


                {/* <div className={styles.ImageWrap}>{selectedFile && <img src={selectedFile} alt = "Product Image"/>}</div> */}
                <input type="file" id="fileInput" style={{display:'none'}} onChange={handleFileSelect}/>
                <label htmlFor="fileInput" className={styles.Button}>이미지 업로드하기</label>
                <div className={styles.Button} onClick={()=>navigate('./results')}>결과 확인</div>




               
                

            </div>
            <CustomerBottomTap/>
            
        </div>
        
            

    );
}
export default PSLens;