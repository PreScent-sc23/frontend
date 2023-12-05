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
    const userKey=1;


     useEffect(()=> {
        console.log('주문 가져오기 시도');
        const fetchOrder = async ()=> {
          try {
            const response = await axios.get(`http://3.36.175.224:8080/customer/fp-order-list`, {
              params: { userKey }
            });
    
            console.log('Response:', response);
            if (response.status==200){
                setOrderDatas(response.data);
            }
    
            } catch (error) {
                console.log('주문 정보 불러오기 실패');
            }
        };

        fetchOrder();
        setOrderDatas([
            {
              "fpOrderKey": 0,
              "fpOrderState": "string",
              "pickupDate": "string",
              "pickupTime": "string",
              "purchaseInfo": "string",
              "fpKey": 0,
              "fpName": "string",
              "fpTag": "string",
              "fpImage": "string",
              "fpFlowerList": [
                "string"
              ],
              "fpDetail": "string",
              "count": 0,
              "totalPrice": 0
            }]);
    },[userKey]);

            return (
            <div>
                <Statusbar/>
                <TopNav/>
                
                <div>
                    <div className={styles.TapBox}>
                        {/* <div className={`${styles.Tap} ${tap ? styles.ActiveTap :''}`} onClick={()=>setTap(true)}>진행 중인 주문</div>
                        <div className={`${styles.Tap} ${!tap ? styles.ActiveTap :''}`} onClick={()=>setTap(false)}>지난 주문 내역</div> */}
                        {/* <div className={styles.Tap} style={{color: `${!tap?'#6B4EFF': '#6C7072'}`}} onClick={()=>setTap(!tap)}>이전 주문 내역</div> */}
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
                            {/* <span style={{fontSize:"0.8rem",fontWeight:"400",color : "#6B4EFF"}}>주문 상세 보기</span> */}
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
                                        <div className={styles.Flower}>{order.fpFlowerList}</div>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                        {/* <div className={styles.MoreMessage} style={{color : "red" }}>요청 사항 : 포장지는 베이지 색으로 부탁드립니다!</div> */}
                        <div className={styles.Line}></div>

                        <div className={styles.PriceWrap}>
                            <div className={styles.Price}>{`Total Price : ${order.totalPrice}`}</div>
                            <div className={styles.Price}>{order.totalPrice} 원</div>
                        </div>
                        {/* <span style={{fontSize: "0.9rem", padding : "0.3rem 1rem 0.5rem 1rem" }}>(카드 결제 완료 : 2023.12.01 (수) 19:30)</span> */}
                    </div>
                        )):

                    <div className={styles.ProductCard} style={{padding : "1.5rem"}}>이전 주문 내역이 없습니다</div>
                }

                <SellerBottomTap/>
            </div>
            </div>
    );
}
export default SellerHistory;