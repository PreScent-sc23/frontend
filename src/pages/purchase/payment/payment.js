import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../../components/statusbar/statusbar';
import Searchbar from '../../../components/search/searchbar';
import CustomerBottomTap from '../../../components/bottomtap/customerbottomtap';
import TopNav from '../../../components/topnavigation/topnav';

function Payment(){


    return (
        <div>
            <Statusbar/>
            <TopNav/>
            <div>
                <div className={styles.TitleWrap}>
                    <img src='/assets/cart.svg'></img>
                    <div className={styles.TitleText}>주문 상품 / 총 1개</div>
                </div>

                <div className={styles.CartContainer}>
                    <div className={styles.LocationWrap}>
                        <img src='/assets/pin.svg'></img>
                        <div className={styles.ShopName}>가나다 플라워</div>
                    </div>
                    <div className={styles.ContentWrap}>
    
                        <div className={styles.ProductImage}>
                            <img src='/assets/example2.png'></img>
                        </div>

                        <div className={styles.InfoWrap}>
                            <div className={styles.ProductText}>러블리 꽃다발</div>
                            <div className={styles.ProductText} style={{fontWeight: "500"}}>2023.12.07 (목) 13:00</div>
                        </div>
                    </div>

                    <div className={styles.PriceWrap}>
                            <div className={styles.Price}>Total Price : </div>
                            <div className={styles.Price}>49,000</div>
                    </div>
                    
                </div>



                <div className={styles.Line}></div>
                <div className={styles.ExpectedPrice}>
                    <div className={styles.Text}>결제 예정 금액 :</div>
                    <div className={styles.Text} style={{color :"#7E49FF",fontWeight:"500" }}>49,000원</div>
                </div>
                <div className={styles.Line}></div>

                <div className={styles.PolicyTitle}>주문 내용을 확인하였으며, 아래 내용에 동의합니다.</div>
                <div className={styles.Wrap}>
                    <div className={styles.PolicyWrap}>
                        <img src='/assets/circle.svg'></img>
                        <div className={styles.PolicyText}>(필수) 전자금융거래 이용약관</div>

                    </div>

                    <div className={styles.PolicyWrap}>
                        <img src='/assets/circle.svg'></img>
                        <div className={styles.PolicyText}>(필수) 개인정보의 수집 및 이용 안내</div>
                    </div>

                    <div className={styles.PolicyWrap}>
                        <img src='/assets/circle.svg'></img>
                        <div className={styles.PolicyText}>(필수) 개인정보 제공 및 위탁안내</div>
                    </div>
                </div>

                <div className={styles.Line}></div>

                <div className={styles.Button}>
                    <img src='/assets/credit-card.svg'></img>
                    <span>카드 결제</span>
                </div>
                

            </div>

            <CustomerBottomTap/>
        </div>
           
    );

}export default Payment;