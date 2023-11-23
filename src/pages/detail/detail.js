import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function ProductDetail(){

    const navigate=useNavigate('');

    return (
        <div>
            <Statusbar/>
            <TopNav/>
            <div className={styles.ImageWrap}>
               <img src='/assets/bearflower.svg'></img>
            </div>
            
            <div className={styles.Line}/>

            <div className={styles.DetailWrap}>
                <div className={styles.FpName}>러블리 꽃다발</div>
                <div className={styles.FpDescription}>곰인형과 화이트로즈로 구성된 화이트데이 꽃다발</div>
                <div className={styles.FpFlowerWrap}>
                    <div className={styles.FpFlower}>화이트로즈</div>
                    <div className={styles.FpFlower}>리시안셔스</div>
                    <div className={styles.FpFlower}>핑크로즈</div>
                </div>
                
                <div className={styles.TagWrap}>
                    <div className={styles.FpTag}>#화이트데이</div>
                </div>
                <div className={styles.FpPrice}>49,000원</div>
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
                <div className={styles.Text}>요청 사항 (선택)</div>
                {/* <img src='/assets/time_check.svg' className={styles.Icon}/> */}
            </div>
            
            {/* <div className={styles.TextWrap}>
                <div className={styles.Text}>픽업 일정</div>
                {/* <div className={styles.Text}>12.07 (목) 13:00</div> */}
            {/* </div> */}


            
            <div className={styles.PurchaseButton} onClick={()=>navigate('/cart')}>
                <img src='/assets/shoppingcart.svg'className={styles.Image}/>
                <div>장바구니에 담기</div>
            </div>
        
        </div>
    )

}
export default ProductDetail;