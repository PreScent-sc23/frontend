import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function ProductDetail(){

    const navigate = useNavigate();
    const [productDetails, setProductDetails]=useState({
        fpName: '',
        fpDescription: '',
        fpFlowers: [],
        fpTags: [],
        fpPrice: 0,
        pickupDate: '',
        pickupTime: '',
    });

    useEffect(()=> {
        const fetchData = async ()=> {
            try {
                const response = await axios.get('http://3.36.175.224:8080/endpoint주소/detail');
                if (response.status==200){
                    setProductDetails(response.data);
                }

            }catch (error) {
                console.log('상품 상세 fetch error');
            }
        };

    fetchData();},[]);

    const addToCart = async()=>{
        try {
            await.axios.post('http://3.36.175.224:8080/endpoint주소/add-to-cart',{
                productId : productDetails.fpKey,
            });
            navigate('/cart');
        }catch(error){
            console.log('장바구니에 완제품 담기 오류');
        }
    };

    return (
        <div>
            <Statusbar/>
            <TopNav/>
            <div className={styles.ImageWrap}>
                <div className={styles.Image}>샘플이미지</div>
            </div>
            
            <div className={styles.Line}/>

            <div className={styles.DetailWrap}>
                <div className={styles.FpName}>{productDetails.fpName}</div>
                <div className={styles.FpDescription}>{productDetails.fpDescription}</div>
                <div className={styles.FpFlowerWrap}>
                    {productDetails.fpFlowers.map((flower,index)=>(
                        <div key = {index} className={styles.FpFlower}>{flower}</div>
                    ))}
                </div>
                
                <div className={styles.TagWrap}>
                    <div className={styles.FpTag}>{productDetails.fpTag}</div>
                </div>
                <div className={styles.FpPrice}>{productDetails.fpPrice}원</div>
            </div>


            <div className={styles.Line}/>

            <div className={styles.TextWrap}>
                <div className={styles.Text}>픽업 날짜 선택</div>
                <img src='/assets/calendar_check.svg'className={styles.Icon}/>
            </div>
            
            <div className={styles.Line}/>

            <div className={styles.TextWrap}>
                <div className={styles.Text}>픽업 시간 선택</div>
                <img src='/assets/time_check.svg' className={styles.Icon}/>
            </div>

            <div className={styles.Line}/>
            
            <div className={styles.TextWrap}>
                <div className={styles.Text}>픽업 일정</div>
                <div className={styles.Text}>11.30 (월) 13:00</div>
            </div>


            
            <div className={styles.PurchaseButton} onClick={addToCart}>
                <img src='/assets/shoppingcart.svg'className={styles.Image}/>
                <div>장바구니에 담기</div>
            </div>
        
        </div>
    )

}
export default ProductDetail;