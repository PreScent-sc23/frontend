import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../../components/statusbar/statusbar';
import Searchbar from '../../../components/search/searchbar';
import CustomerBottomTap from '../../../components/bottomtap/customerbottomtap';
import TopNav from '../../../components/topnavigation/topnav';

function Payment(){
    const navigate=useNavigate();
    const [cartItems, setCartItems]=useState([]);

    useEffect(()=>{
        const fetchCartItems = async()=> {
            try {
                const response = await axios.get('http://3.36.175.224:8080/cart-items');
                if (response.status ===200){
                    setCartItems(response.data);
                }
            }catch(error){
             console.log('장바구니 상품 에러');
            }
        };
        fetchCartItems();
    },[]);

    const getTotalAmout=()=> {
        return cartItems.reduce((total, item)=> total+item.price,0);
    };



    function onClickPayment(){
        //1.가맹점 식별
        const {IMP}=window;
        IMP.init('imp08177703');

        //2. 결제 데이터 정의
        const data = {
            pg: 'html5_inicis',                           // PG사
            pay_method: 'card',                           // 결제수단
            merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
            amount : getTotalAmout().toString(),                                 // 결제금액
            name: '아임포트 결제 테스트',                  // 주문명
            buyer_name: '홍길동',                           // 구매자 이름
            buyer_tel: '01012341234',                     // 구매자 전화번호
            buyer_email: 'example@example',               // 구매자 이메일
            buyer_addr: '신사동 661-16',                    // 구매자 주소
            buyer_postcode: '06018',                      // 구매자 우편번호
          };
          //4. 결제 창 호출
          IMP.request_pay(data,callback);
    }
    //3, 콜백 함수 
    function callback(response){
        const {success, imp_uid, merchant_uid,pay_method, paid_amount,status,error_msg}=response;
        if (success){
            alert('결제 성공');
        }else{
            alert(`결제 실패 : ${error_msg}`);
        }
    }


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
                            <div className={styles.Price}>{getTotalAmout}</div>
                    </div>
                    
                </div>



                <div className={styles.Line}></div>
                <div className={styles.ExpectedPrice}>
                    <div className={styles.Text}>결제 예정 금액 :</div>
                    <div className={styles.Text} style={{color :"#7E49FF",fontWeight:"500" }}>{getTotalAmout}원</div>
                </div>
                <div className={styles.Line}></div>

                {/* <div className={styles.PolicyTitle}>주문 내용을 확인하였으며, 아래 내용에 동의합니다.</div>
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
                </div> */}

                <div className={styles.Line}></div>

                <div className={styles.Button} onClick={onClickPayment}>
                    <img src='/assets/credit-card.svg'></img>
                    <span>결제 하기</span>
                </div>
                

            </div>

            <CustomerBottomTap/>
        </div>
           
    );

}export default Payment;