import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../../components/statusbar/statusbar';
import TopNav from '../../../components/topnavigation/topnav';
import CustomerBottomTap from '../../../components/bottomtap/customerbottomtap';
function Cart() {
  const navigate = useNavigate();

  const [cartItems,setCartItems]=useState([]);
  const [totalPrice, setTotalPrice] = useState('');
  const [totalCount, setTotalCount] =useState('');
  

  useEffect(()=> {
    const token = localStorage.getItem('token');
    console.log("토큰 :", token);
    console.log('Reqeust success?');
    const fetchCart = async ()=> {
      try {
        const response = await axios.get(`http://3.36.175.224:8080/customer/cart/view-in-cart`, {
          headers: {
            Authorization: `Bearer ${token}`
        }
        });

        console.log('Response:', response);
        if (response.status==200){
            setCartItems(response.data);
            console.log(response)
        }

        } catch (error) {

            console.log('장바구니 정보 fetch error');
        }
    };

fetchCart();
},[]);

console.log('카트아이템state에 잘 들어간?',cartItems);


useEffect(() => {
  const updatedTotalPrice = cartItems.reduce((acc, item) => acc + item.fpPrice * item.count, 0);
  const updatedTotalCount = cartItems.reduce((acc, item) => acc + item.count, 0);

  setTotalPrice(updatedTotalPrice);
  setTotalCount(updatedTotalCount);
}, [cartItems]);


const handleRemoveItem = async (cartItemKey) => {
  const token = localStorage.getItem('token');
  try {
    await axios.delete(`http://3.36.175.224:8080/customer/cart/delete-cart-item/`, {
      params: {cartItemKey},
      headers: {
        'Authorization': `Bearer ${token}`
    }
      
  });
    console.log(cartItemKey);
    const updatedCart = cartItems.filter(item => item.cartItemKey !== cartItemKey);
    setCartItems(prevCartItems => updatedCart);

  } catch (error) {
    console.log('장바구니 상품 삭제 요청 실패:', error);
  }
};

  return (
    <div>

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
                    <img src='/assets/trash.svg' onClick={() => handleRemoveItem(item.cartItemKey)}></img>
                  </div>

                  <div className={styles.Line} />

                  <div className={styles.ContentWrap}>
                    <div className={styles.ProductImage}>
                      <img src={item.fpImage} className={styles.ProductImage}/>
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
                </div>

                <div className={styles.Line}></div>

                <div className={styles.PriceWrap}>
                  <div className={styles.Price}>Total Price (총 수량 : {item.count}) </div>
                  <div className={styles.Price}>{item.fpPrice*item.count}</div>
                </div>
              </div>
            ))}



            <div className={styles.TotalPriceBox}>
              <div className={styles.Content}>
                <div className={styles.TextBox}>
                  <div className={styles.Text} style={{ color: '#72777A', fontSize: '1rem' }}>결제 예정 금액 </div>
                  <div className={styles.Text}>{totalPrice}원</div>
                </div>
              <div className={styles.PurchaseButton} onClick={() => navigate(`/cart/payment`)}>
                전체 상품 결제 하기
              </div>
          </div>
      </div>

          </div>
        )}
      </div>

      <CustomerBottomTap />
      </div>

  );
}export default Cart;

