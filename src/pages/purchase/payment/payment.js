import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../../components/statusbar/statusbar';
import CustomerBottomTap from '../../../components/bottomtap/customerbottomtap';
import TopNav from '../../../components/topnavigation/topnav';

function Payment(props) {
    
  const navigate = useNavigate();
  const userKey = 1;

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    console.log('userKey in useEffect:', userKey);
    console.log('Request success?');
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://3.36.175.224:8080/customer/cart/view-in-cart`, {
          params: { userKey }
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
  }, [userKey]);

  console.log('카트아이템 state에 잘 들어간?', cartItems);

  function onClickPayment() {
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
      buyer_name: userKey, // 구매자 이름
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
          await sendPaymentSuccessToBackend(imp_uid);
          navigate('/myhistory');
        } else {
          console.log('결제 실패');
        }
      } catch (error) {
        console.error('에러 발생:', error);
      }
    }


    async function sendPaymentSuccessToBackend() {
        try {
          // userKey는 여기서 가져오거나 이미 가지고 있어야 합니다.
          const userKey = 1;
          const imp_uid = '';
      
          const backendResponse = await axios.post(
            'http://3.36.175.224:8080/customer/cart/order-in-cart',
            {
                userKey,
                imp_uid :imp_uid, // Include the imp_uid in the request body
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
                  <div className={styles.dtText}>{item.pickupDate}{item.pickupDate}</div>
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




// import React, { useState, useEffect } from 'react';
// import styles from './styles.module.scss';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Statusbar from '../../../components/statusbar/statusbar';
// import CustomerBottomTap from '../../../components/bottomtap/customerbottomtap';
// import TopNav from '../../../components/topnavigation/topnav';

// function Payment(props) {
//   const navigate = useNavigate();
//   const userKey = 1;

//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState('');
//   const [totalCount, setTotalCount] = useState('');

//   useEffect(() => {
//     console.log('userKey in useEffect:', userKey);
//     console.log('Request success?');
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get(`http://3.36.175.224:8080/customer/cart/view-in-cart`, {
//           params: { userKey }
//         },);

//         console.log('Response:', response);
//         if (response.status === 200) {
//           setCartItems(response.data);
//           const total = response.data.reduce((acc, item) => acc + item.fpPrice * item.count, 0);
//           setTotalPrice(total);
//           console.log(response);
//         }

//       } catch (error) {
//         console.log('장바구니 정보 fetch error');
//       }
//     };

//     fetchCart();
//   }, [userKey]);
//   console.log('카트아이템 state에 잘 들어간?', cartItems);

//   function onClickPayment() {
//     // 1. 가맹점 식별
//     const { IMP } = window;
//     IMP.init('imp08177703');

//     // 2. 결제 데이터 정의
//     const data = {
//       pg: 'html5_inicis', // PG사
//       pay_method: 'card', // 결제수단
//       merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
//       amount: cartItems.reduce((acc, item) => acc + item.fpPrice * item.count, 0), // 결제금액
//       name: '아임포트 결제 테스트', // 주문명
//       buyer_name: userKey, // 구매자 이름
//       buyer_tel: '01012341234', // 구매자 전화번호
//       buyer_email: 'example@example', // 구매자 이메일
//       buyer_addr: '신사동 661-16', // 구매자 주소
//       buyer_postcode: '06018', // 구매자 우편번호
//     };
//     // 4. 결제 창 호출
//     IMP.request_pay(data, callback);
//   }

//   async function callback(response) {
//     const { success } = response;

//     try {
//       await sendOrderInfoToBackend({ userKey });

//       if (success === true) {
//         console.log('결제 성공');
//         sendOrderSuccessToBackend(response);
//       } else {
//         console.log('결제 실패');
//       }
//     } catch (error) {
//       console.error('백엔드에 결제 정보 전송 실패:', error);
//     } finally {
//       navigate('/myhistory');
//     }
//   }

// //   async function sendOrderInfoToBackend(orderInfo) {
// //     try {
// //       const backendResponse = await axios.post(
// //         'http://3.36.175.224:8080/customer/cart/order-info',
// //         orderInfo
// //       );

// //       console.log('백엔드에 주문 정보 전송 완료:', backendResponse.data);
// //     } catch (error) {
// //       console.error('백엔드에 주문 정보 전송 실패:', error);
// //     }
//   }

//   async function sendOrderSuccessToBackend(response) {
//     try {
//       const backendResponse = await axios.post('http://3.36.175.224:8080/customer/cart/order-in-cart',
//         {params:{userKey}},
//       );

//       console.log('백엔드에 결제 성공 정보 전송 완료:', backendResponse.data);
//     } catch (error) {
//       console.error('백엔드에 결제 성공 정보 전송 실패:', error);
//     }
//   }

   
// //   // 3. 콜백 함수
// //   function callback(response) {
// //     const {success} = response;
// //     if (success===true) {
// //       console.log('결제 성공');
// //       sendOrderSuccessToBackend(response); // Call the function here
// //       navigate('/myhistory');
    
// //     } else {
// //       alert(`결제 실패`);
// //     }
// //   }

// // //   5. 결제 성공 시 백엔드에 결제 정보 전송
// // async function sendOrderSuccessToBackend(response) {
// //     try {
// //     // Extract necessary data from the response object or use any other data you need
// //     const { imp_uid, merchant_uid, paid_amount, status } = response;
  
// //     // Prepare the data to be sent in the request body
// //     //   const orderData = {
// //     //     userKey: userKey,
// //     //     imp_uid: imp_uid,
// //     //     merchant_uid: merchant_uid,
// //     //     paid_amount: paid_amount,
// //     //     status: status,
// //     //     // Include other necessary data
// //     //   };
  
// //       // Make the POST request with the orderData in the request body
// //       const backendResponse = await axios.post('http://3.36.175.224:8080/customer/cart/order-in-cart',
// //         {param: {userKey},response}
// //       );
// //       console.log('Order success information sent to the backend:', backendResponse.data);
// //     } catch (error) {
// //       console.error('Failed to send order success information to the backend:', error);
// //     }
// //   }
  

//   return (
//     <div>
//       <Statusbar />
//       <TopNav />

//       <div>
//         {cartItems.length === 0 ? (
//           <div className={styles.Empty}>장바구니에 담긴 상품이 없습니다.</div>
//         ) : (
//           <div className={styles.Screen}>
//             {cartItems.map((item) => (
//               <div className={styles.CartContainer} key={item.cartItemKey}>
//                 <div className={styles.TitleWrap}>
//                   <img src='/assets/pin.svg' alt='pin' />
//                   <div className={styles.ShopName}>{item.flowerShopName}</div>
//                   {/* <img src='/assets/trash.svg' ></img> */}
//                 </div>

//                 <div className={styles.Line} />

//                 <div className={styles.ContentWrap}>
//                   <div className={styles.ProductImage}>
//                     <img src={item.fpImage} className={styles.ProductImage} alt='product' />
//                   </div>

//                   <div className={styles.InfoWrap}>
//                     <div className={styles.ProductName}>{item.fpName}</div>
//                     <div className={styles.Description}>{item.fpDetail}</div>
//                     <div className={styles.TagWrap}>
//                       <div className={styles.Tag}>{item.fpTag}</div>
//                     </div>
//                     <div className={styles.FlowerWrap}>
//                       {item.fpFlowerList.map((flower, index) => (
//                         <div key={index} className={styles.Flower}>
//                           {flower}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div className={styles.DateTime}>
//                   <div className={styles.dtText}>픽업 일시 : </div>
//                   <div className={styles.dtText}>{item.pickupDate}{item.pickupDate}</div>
//                   {/* <span>{item.pickupDate}{item.pickupTime}</span> */}
//                 </div>

//                 <div className={styles.Line}></div>

//                 <div className={styles.PriceWrap}>
//                   <div className={styles.Price}>Total Price (총 수량 : {item.count}) </div>
//                   <div className={styles.Price}>{item.fpPrice * item.count}</div>
//                 </div>
//               </div>
//             ))}
//             <div className={styles.Line}></div>
            
//             <div className={styles.Summary}>
//                 <div>결제 예정 금액 : </div>
//                 <div>{totalPrice}</div>
//             </div>

//             <div className={styles.Button} onClick={onClickPayment}>
//               <img src='/assets/credit-card.svg' alt="credit-card" />
//               <span>카드 결제</span>
//             </div>
//           </div>
//         )}
//       </div>
//       <CustomerBottomTap />
//     </div>
//   );


// export default Payment;
