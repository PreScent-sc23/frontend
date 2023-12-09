import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../../components/statusbar/statusbar';
import CustomerBottomTap from '../../../components/bottomtap/customerbottomtap';
import TopNav from '../../../components/topnavigation/topnav';

function Payment(props) {
    
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Request success?');
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://3.36.175.224:8080/customer/cart/view-in-cart`, {
          headers: {
              'Authorization': `Bearer ${token}`,
            }
        });

        console.log('Response:', response);
        if (response.status === 200) {
          setCartItems(response.data);
          const total = response.data.reduce((acc, item) => acc + item.fpPrice * item.count, 0);
          setTotalPrice(total);
          console.log(response);
        }
      } catch (error) {
        console.log('장바구니 정보 fetch error');
      }
    };

    fetchCart();
  }, []);

  console.log('카트아이템 state에 잘 들어간?', cartItems);

  function onClickPayment() {

    const token = localStorage.getItem('token');
    // 1. 가맹점 식별
    const { IMP } = window;
    IMP.init('imp08177703');

    // 2. 결제 데이터 정의
    const data = {
      pg: 'html5_inicis', // PG사
      pay_method: 'card', // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: cartItems.reduce((acc, item) => acc + item.fpPrice * item.count, 0), // 결제금액
      name: '아임포트 결제 테스트', // 주문명
      buyer_name: `${token}`, // 구매자 이름
      buyer_tel: '01012341234', // 구매자 전화번호
      buyer_email: 'example@example', // 구매자 이메일
      buyer_addr: '신사동 661-16', // 구매자 주소
      buyer_postcode: '06018', // 구매자 우편번호
    };
    // 4. 결제 창 호출
    IMP.request_pay(data, callback);
  }

  async function callback(response) {
    const { success, imp_uid } = response;
    try {
        if (success === true) {
          console.log('결제 성공');
          await sendPaymentSuccessToBackend();
          navigate(`/myhistory`);
          // navigate(`/myhistory/${userKey}`);
        } else {
          console.log('결제 실패');
        }
      } catch (error) {
        console.error('에러 발생:', error);
      }
    }


    async function sendPaymentSuccessToBackend() {
        try {
          const token = localStorage.getItem('token');
          console.log(token);
      
          const backendResponse = await axios.post(
            'http://3.36.175.224:8080/customer/cart/order-in-cart',
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
      
      
          console.log('백엔드에 결제 성공 정보 전송 완료:', backendResponse.data);
        } catch (error) {
          console.error('백엔드에 결제 성공 정보 전송 실패:', error);
        }
      }
  return (
    <div>
      <Statusbar />
      <TopNav />

      <div>
        {cartItems.length === 0 ? (
          <div className={styles.Empty}>장바구니에 담긴 상품이 없습니다.</div>
        ) : (
          <div className={styles.Screen}>
            {cartItems.map((item) => (
              <div className={styles.CartContainer} key={item.cartItemKey}>
                <div className={styles.TitleWrap}>
                  <img src='/assets/pin.svg' alt='pin' />
                  <div className={styles.ShopName}>{item.flowerShopName}</div>
                  {/* <img src='/assets/trash.svg' ></img> */}
                </div>

                <div className={styles.Line} />

                <div className={styles.ContentWrap}>
                  <div className={styles.ProductImage}>
                    <img src={item.fpImage} className={styles.ProductImage} alt='product' />
                  </div>

                  <div className={styles.InfoWrap}>
                    <div className={styles.ProductName}>{item.fpName}</div>
                    <div className={styles.Description}>{item.fpDetail}</div>
                    <div className={styles.TagWrap}>
                      <div className={styles.Tag}>{item.fpTag}</div>
                    </div>
                    <div className={styles.FlowerWrap}>
                      {item.fpFlowerList.map((flower, index) => (
                        <div key={index} className={styles.Flower}>
                          {flower}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.DateTime}>
                  <div className={styles.dtText}>픽업 일시 : </div>
                  <div className={styles.dtText}>{item.pickupDate}{item.pickupTime}</div>
                  {/* <span>{item.pickupDate}{item.pickupTime}</span> */}
                </div>

                <div className={styles.Line}></div>

                <div className={styles.PriceWrap}>
                  <div className={styles.Price}>Total Price (총 수량 : {item.count}) </div>
                  <div className={styles.Price}>{item.fpPrice * item.count}</div>
                </div>
              </div>
            ))}
            <div className={styles.Line}></div>
            
            <div className={styles.Summary}>
                <div>결제 예정 금액 : </div>
                <div>{totalPrice}</div>
            </div>
            
            <div className={styles.Button} onClick={onClickPayment}>
              <img src='/assets/credit-card.svg' alt="credit-card" />
              <span>카드 결제</span>
            </div>
          </div>
        )}
      </div>
      <CustomerBottomTap />
    </div>
  );
}

export default Payment;
