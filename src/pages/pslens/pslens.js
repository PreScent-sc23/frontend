import React, { useState, useRef } from 'react';
import styles from './styles.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function PSLens() {
  const params = useParams();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileURL, setFileURL] = useState('');


  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      console.log('선택된 이미지 없음');
    }
  };
  
const handleResult = async () => {
    if (!selectedFile) {
        console.error('이미지를 업로드하세요');
        return;
    }

    try {
        console.log(selectedFile);
        const formData = new FormData();
        formData.append('file', selectedFile);
        console.log(formData);

        const response = await axios.post(`http://3.36.175.224:8080/pslens`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        });

        console.log('전달 완료');
        console.log(response.data);
        navigate('/pslens/results', { state: { resultData: response.data } });
    } catch (error) {
        console.error('이미지 전달 오류:', error);
    }
    };

  return (
    <div>
      <Statusbar />
      <TopNav />

      <div>
        <div className={styles.NoticeWrap}>
          <div className={styles.TextWrap}>
            <div className={styles.Text}>
              <span style={{ color: '#FF7074', fontWeight: '500' }}>AI 꽃 이미지 분석</span>을 통해
            </div>
            <div className={styles.Text}>사진 속 꽃의 이름과 꽃말을 알려드려요.</div>
          </div>
        </div>

        <div className={styles.ImageWrap}>
          {!selectedFile ? (
            <img src="/assets/exampleimage.png" alt="Example" />
          ) : (
            <img src={URL.createObjectURL(selectedFile)} alt="Selected" />
          )}
        </div>

        <div style={{ opacity: '0.6', textAlign: 'center', textSize: '1.5rem' }}>- 예시 이미지 - </div>

        <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileSelect}/>
        <div className={styles.HighlightText}>꽃이 잘 보이는 선명한 사진 업로드를 권장합니다.</div>
        <label htmlFor="fileInput" className={styles.Button} >
          이미지 업로드하기
        </label>
        <div className={styles.Button} onClick={handleResult}>분석 결과 확인</div>
      </div>
      <CustomerBottomTap />
    </div>
  );
}

export default PSLens;
