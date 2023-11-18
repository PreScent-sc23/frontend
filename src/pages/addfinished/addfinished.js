import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import SellerBottomTap from '../../components/bottomtap/sellerbottomtap';

export function AddFinished(){
    
    const navigate = useNavigate(); 
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productTag, setProductTag] = useState('');
    const [productDetail, setProductDetail] = useState('');
    const handleSubmission = async () => {
        console.log("됨?");
        try {
            const response = await axios.post('http://3.36.175.224:8080/customer/signup', {
                productName,
                productPrice,
                productTag,
                productDetail,
            },{
                headers: {
                    'Content-Type': 'application/json'
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
                <div className={styles.ProductPhoto}></div>
                <div className={styles.ChangePhoto}>이미지 수정</div>
                <form>
                    <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='상품명' value={productName} onChange={(e) => setProductName(e.target.value)}></input>
                    <input className={styles.inputBox} type='number' name = "pwd" size = '50'  placeholder='가격' value={productPrice} onChange={(e) => setProductPrice(e.target.value)}></input>
                    <input className={styles.inputBox} type='email' name = "email" size = '50'  placeholder='상품과 관련된 키워드를 하나 입력하세요' value={productTag} onChange={(e) => setProductTag(e.target.value)}></input>
                    <input className={styles.inputBox} type='number' name = "validnum" size = '50'  placeholder='상품에 대한 상세정보를 입력하세요' value={productDetail} onChange={(e) => setProductDetail(e.target.value)}></input>
                </form>
            </div>

            <div>
                <div className={styles.Button} onClick={handleSubmission}>등록</div>
            </div>
        </div>
    )
} export default AddFinished;