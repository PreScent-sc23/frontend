import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';

export function AddFinished(){
    
    const navigate = useNavigate(); 
    const [fpName, setProductName] = useState('');
    const [fpPrice, setProductPrice] = useState('');
    const [fpTag, setProductTag] = useState('');
    const [fpDetail, setProductDetail] = useState('');
    const [fpFlowerList, setFlowerList] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const shopKey = 4;

    const handleFileSelect = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
        event.target.value='';
    }

    const handleSubmission = async () => {
        const fpImage = new FormData();
        fpImage.append("fpImage", selectedFile);
        console.log("됨?");
        try {
            const response = await axios.post('http://3.36.175.224:8080/finished-product/add', {
                fpImage,
                fpName,
                fpTag,
                fpPrice,
                fpDetail,
                fpFlowerList,
                shopKey,
            },{
                headers: {
                    'Content-Type': 'multipart/form-data'
        },
    });
            console.log("전송 완료");
            console.log(response.data);
            navigate('/managefinished');
        } catch (error) {
            console.error('등록 오류:', error);
        }
    };
    return(
        <div>
            <Statusbar/>
            <div className={styles.TopNavWrap}>
                <img src='/assets/back.svg' className={styles.image} onClick={()=>navigate('/managefinished')}/>
                <div className={styles.TopNavTitle}>상품추가 - 완제품</div>
            </div>
            <div className={styles.Container}>
                <div className={styles.ProductPhoto}>{selectedFile && <img src={selectedFile} alt = "Product Image"/>}</div>
                <input type="file" id="fileInput" style={{display:'none'}} onChange={handleFileSelect}/>
                <label htmlFor="fileInput" className={styles.ChangePhoto}>이미지 수정</label>
                <form style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='상품명' value={fpName} onChange={(e) => setProductName(e.target.value)}></input>
                    <input className={styles.inputBox} type='number' name = "pwd" size = '50'  placeholder='가격' value={fpPrice} onChange={(e) => setProductPrice(e.target.value)}></input>
                    <input className={styles.inputBox} type='text' name = "email" size = '50'  placeholder='상품과 관련된 키워드를 하나 입력하세요' value={fpTag} onChange={(e) => setProductTag(e.target.value)}></input>
                    <input className={styles.inputBox} type='text' name = "validnum" size = '50'  placeholder='상품에 대한 상세정보를 입력하세요' value={fpDetail} onChange={(e) => setProductDetail(e.target.value)}></input>
                    <input className={styles.inputBox} type='text' name = "flowerlist" size = '50'  placeholder='들어가는 꽃의 종류를 입력하세요' value={fpFlowerList} onChange={(e) => setFlowerList(e.target.value)}></input>
                </form>
            </div>

            <div>
                <div className={styles.Button} onClick={handleSubmission}>등록</div>
            </div>
        </div>
    )
} export default AddFinished;