import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function ProductDetail(){

    return (
        <div>
            <Statusbar/>
            <TopNav/>
            <div className={styles.ImageWrap}>
                <div className={styles.Image}>샘플이미지</div>
            </div>
            
            <div className={styles.Line}/>

            <div className={styles.DetailWrap}>
                <div className={styles.FpName}>완제품상품명</div>
                <div className={styles.FpDescription}>상품 상세 설명란</div>
                <div className={styles.FpFlowerWrap}>
                    <div className={styles.FpFlower}>레드로즈</div>
                    <div className={styles.FpFlower}>핑크로즈</div>
                    <div className={styles.FpFlower}>화이트로즈</div>
                    <div className={styles.FpFlower}>꽃이름1</div>
                    <div className={styles.FpFlower}>꽃이름2</div>
                </div>
                
                <div className={styles.TagWrap}>
                    <div className={styles.FpTag}>#발렌타인데이</div>
                </div>
                <div className={styles.FpPrice}>35000₩</div>
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


            
            <div className={styles.PurchaseButton}>
                <img src='/assets/shoppingcart.svg'className={styles.Image}/>
                <div>장바구니에 담기</div>
            </div>
        
        </div>
    )

}
export default ProductDetail;