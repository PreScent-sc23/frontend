import React, { useState, useEffect,useRef } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function CustomerHistory(){

    const [tap,setTap]=useState(true);
    
            return (
            <div>
                <Statusbar/>
                <TopNav/>
                
                <div>
                    <div className={styles.TapBox}>
                        {/* <div className={`${styles.Tap} ${tap ? styles.ActiveTap :''}`} onClick={()=>setTap(true)}>진행 중인 주문</div>
                        <div className={`${styles.Tap} ${!tap ? styles.ActiveTap :''}`} onClick={()=>setTap(false)}>지난 주문 내역</div> */}
                        {/* <div className={styles.Tap} style={{color: `${!tap?'#6B4EFF': '#6C7072'}`}} onClick={()=>setTap(!tap)}>이전 주문 내역</div> */}
                        <div className={styles.Tap} style={{color: `${tap ? '#6B4EFF' : '#6C7072'}`}} onClick={()=>setTap(!tap)}>진행 중인 주문</div>
                        <div className={styles.Tap} style={{color: `${!tap?'#6B4EFF': '#6C7072'}`}} onClick={()=>setTap(!tap)}>이전 주문 내역</div> 
                    </div>
                    
                    <div className={styles.Line}></div>

                    
                    
                    {tap?

                    <div className={styles.ProductCard}>
                        <div className={styles.OrderStatus}>
                            <img src='/assets/shopping-bag.svg'></img>
                            <div className={styles.Status}>주문 진행 중 - 가나다 플라워</div>
                            {/* <span style={{fontSize:"0.8rem",fontWeight:"400",color : "#6B4EFF"}}>주문 상세 보기</span> */}
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
                        <div className={styles.Date}>픽업 일시 : 2023.12.07 (목) 13:00</div>
                        <div className={styles.MoreMessage}>요청 사항 : 포장지는 베이지 색으로 부탁드립니다!</div>
                        <div className={styles.Line}></div>

                        <div className={styles.PriceWrap}>
                            <div className={styles.Price}>Total Price : </div>
                            <div className={styles.Price}>49,000</div>
                        </div>
                        <span style={{fontSize: "0.9rem", padding : "0.3rem 1rem 0.5rem 1rem" }}>(카드 결제 완료 : 2023.12.01 (수) 19:30)</span>
                    </div>:

                    <div className={styles.ProductCard} style={{padding : "1.5rem"}}>이전 주문 내역이 없습니다</div>
                }

                <CustomerBottomTap/>
            </div>
            </div>
    );
}
export default CustomerHistory;