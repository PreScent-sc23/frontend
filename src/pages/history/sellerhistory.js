import React, { useState, useEffect,useRef } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import SellerBottomTap from '../../components/bottomtap/sellerbottomtap';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function SellerHistory(){

    const [tap,setTap]=useState(true);
    const [orderDatas, setOrderDatas] = useState([]);
    const [finishDatas, setFinishDatas] = useState([]);
    
    const handlePickup = async (fpOrderKey) => {
        const token = localStorage.getItem('token');
        const headers = { 'Authorization': `Bearer ${token}` };
        const params = {fpOrderKey};
        try {
          await axios.put('http://3.36.175.224:8080/seller/fp-order-list/set-complete', null,{ params, headers });
        } catch (error) {
          console.log('Failed to update order state:', error);
        }

       };


     useEffect(()=> {
        console.log('주문 가져오기 시도');
        const token = localStorage.getItem('token');
        const headers = { 'Authorization': `Bearer ${token}` };
        const fetchOrder = async ()=> {
          try {
            const response = await axios.get(`http://3.36.175.224:8080/seller/fp-order-list/waiting`, {
                headers
            });
    
            console.log('Response:', response);
            if (response.status===200){
                setOrderDatas(response.data);
            }
    
            } catch (error) {
                console.log('주문 정보 불러오기 실패');
            }
        };
        const fetchFinish = async ()=> {
            try {
              const response = await axios.get(`http://3.36.175.224:8080/seller/fp-order-list/complete`, {
                  headers
              });
      
              console.log('Response:', response);
              if (response.status===200){
                  setFinishDatas(response.data);
              }
      
              } catch (error) {
                  console.log('주문 정보 불러오기 실패');
              }
          };

        fetchOrder();
        fetchFinish();
    },[]);

            return (
            <div>
                <TopNav/>
                
                <div>
                    <div className={styles.TapBox}>
                        <div className={styles.Tap} style={{color: `${tap ? '#FF7074' : '#6C7072'}`}} onClick={()=>setTap(!tap)}>진행 중인 주문</div>
                        <div className={styles.Tap} style={{color: `${!tap?'#FF7074': '#6C7072'}`}} onClick={()=>setTap(!tap)}>이전 주문 내역</div> 
                    </div>
                    
                    <div className={styles.Line}></div>

                    
                    
                    {tap?
                        orderDatas.map((order)=> (
                    <div className={styles.ProductCard}>
                        <div className={styles.OrderStatus}>
                            <img src='/assets/shopping-bag.svg'></img>
                            <div className={styles.Status}>{`${order.fpOrderState} - ${order.pickupDate}  ${order.pickupTime} 픽업`}</div>
                            <button className={styles.StateButton} onClick={()=>handlePickup(order.fpOrderKey)}>변경</button> 
                        </div>
                        
                        <div className={styles.Line}></div>

                        <div className={styles.ContentWrap}>
                            <div className={styles.ProductImage}>
                                <img style={{width:'100%', height:'100%', textAlign:'center'}} src={order.fpImage} alt='제품 사진'></img>
                            </div>

                            <div className={styles.InfoWrap}>
                                <div className={styles.ProductName}>{order.fpName}</div>
                                <div className={styles.Description}>{order.fpDetail}</div>
                                <div className={styles.TagWrap}>
                                    <div className={styles.Tag}>{order.fpTag}</div>
                                </div>
                                <div className={styles.FlowerWrap}>
                                    {order.fpFlowerList.map((flower, index) => (
                                        <div key = {index} className={styles.Flower}>{flower}</div>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                        {/* <div className={styles.MoreMessage} style={{color : "red" }}>요청 사항 : 포장지는 베이지 색으로 부탁드립니다!</div> */}
                        <div className={styles.Line}></div>

                        <div className={styles.PriceWrap}>
                            <div className={styles.Price}>{'Total Price : '}</div>
                            <div className={styles.Price}>{order.totalPrice} 원</div>
                        </div>
                        {/* <span style={{fontSize: "0.9rem", padding : "0.3rem 1rem 0.5rem 1rem" }}>(카드 결제 완료 : 2023.12.01 (수) 19:30)</span> */}
                    </div>
                        )):
                        finishDatas.map((order)=> (
                            <div className={styles.ProductCard}>
                                <div className={styles.OrderStatus}>
                                    <img src='/assets/shopping-bag.svg'></img>
                                    <div className={styles.Status}>{`${order.fpOrderState} - ${order.pickupDate}  ${order.pickupTime} 픽업`}</div>
                                </div>
                                
                                <div className={styles.Line}></div>
        
                                <div className={styles.ContentWrap}>
                                    <div className={styles.ProductImage}>
                                        <img style={{width:'100%', height:'100%', textAlign:'center'}} src={order.fpImage} alt='제품 사진'></img>
                                    </div>
        
                                    <div className={styles.InfoWrap}>
                                        <div className={styles.ProductName}>{order.fpName}</div>
                                        <div className={styles.Description}>{order.fpDetail}</div>
                                        <div className={styles.TagWrap}>
                                            <div className={styles.Tag}>{order.fpTag}</div>
                                        </div>
                                        <div className={styles.FlowerWrap}>
                                            {order.fpFlowerList.map((flower, index) => (
                                                <div key = {index} className={styles.Flower}>{flower}</div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                </div>
                                {/* <div className={styles.MoreMessage} style={{color : "red" }}>요청 사항 : 포장지는 베이지 색으로 부탁드립니다!</div> */}
                                <div className={styles.Line}></div>
        
                                <div className={styles.PriceWrap}>
                                    <div className={styles.Price}>{`Total Price : `}</div>
                                    <div className={styles.Price}>{order.totalPrice} 원</div>
                                </div>
                                {/* <span style={{fontSize: "0.9rem", padding : "0.3rem 1rem 0.5rem 1rem" }}>(카드 결제 완료 : 2023.12.01 (수) 19:30)</span> */}
                            </div>
                                )


                    // <div className={styles.ProductCard} style={{padding : "1.5rem"}}>이전 주문 내역이 없습니다</div>
                )}

                <SellerBottomTap/>
            </div>
            </div>
    );
}
export default SellerHistory;