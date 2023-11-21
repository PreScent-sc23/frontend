import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import Searchbar from '../../components/search/searchbar';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import TopNav from '../../components/topnavigation/topnav';

function Cart(){    
    const navigate=useNavigate('');
    return (
        <div>
            <Statusbar/>
            <TopNav/>

            <div className={styles.CartContainer}>
                <div className={styles.TitleWrap}>
                    <img src='/assets/pin.svg'></img>
                    <div className={styles.ShopName}>가나다 플라워</div>
                    <img src='/assets/trash.svg'></img>
                </div>

                <div className={styles.Line}></div>

                <div className={styles.ContentWrap}>
                    <div className={styles.ProductImage}>
                        <img src='/assets/example2.png'></img>
                    </div>

                    <div className={styles.InfoWrap}>
                        <div className={styles.ProductName}>러블리 꽃다발</div>
                        <div className={styles.Description}>곰인형과 화이트로즈로 구성된 화이트데이 꽃다발</div>
                        <div className={styles.TagWrap}>
                            <div className={styles.Tag}>#화이트데이</div>
                        </div>
                        <div className={styles.FlowerWrap}>
                            <div className={styles.Flower}>화이트로즈</div>
                            <div className={styles.Flower}>리시안셔스</div>
                            <div className={styles.Flower}>핑크로즈</div>
                        </div>
                    </div>
                    
                </div>

                <div className={styles.MoreMessage}>요청 사항 : 포장지는 베이지 색으로 부탁드립니다!</div>
                <div className={styles.Line}></div>

                <div className={styles.PriceWrap}>
                    <div className={styles.Price}>Total Price : </div>
                    <div className={styles.Price}>49,000</div>

                </div>
            </div>

            <div className={styles.TotalPriceBox}>
                <div className={styles.Content}>
                    <div className={styles.TextBox}>
                        <div className={styles.Text} style={{color:"#72777A",fontSize:"1rem"}}>결제 예정 금액</div>
                        <div className={styles.Text}>49,000원</div>
                    </div>

                    <div className={styles.PurchaseButton} onClick={()=>(navigate('/payment'))}>전체 상품 결제 하기</div>
                </div>
             
                {/* <Button className={styles.PurchaseButton}>전체 상품 결제 하기</Button> */}
            </div>

            <CustomerBottomTap/>
        </div>
        
    );

}export default Cart;