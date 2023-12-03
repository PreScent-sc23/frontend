import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../../components/statusbar/statusbar';
import TopNav from '../../../components/topnavigation/topnav';
import CustomerBottomTap from '../../../components/bottomtap/customerbottomtap';
function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   axios.get('http://3.36.175.224:8080/cart')
  //     .then(response => {
  //       setCartItems(response.data.cartItems);
  //       setTotalPrice(response.data.totalPrice);
  //     })
  //     .catch(error => {
  //       console.log('cart 상품 불러오기 오류', error);
  //     });
  // }, []);

  // const handleRemoveItem = (itemId) => {
  //   const updatedCart = cartItems.filter(item => item.id !== itemId);
  //   setCartItems(updatedCart);

  //   const updatedTotalPrice = updatedCart.reduce((acc, item) => acc + item.price, 0);
  //   setTotalPrice(updatedTotalPrice);
  // };

  return (
    <div>
      <Statusbar />
      <TopNav />
      <div className={styles.CartContainer}>
          <div>
            <div className={styles.TitleWrap}>
              <img src='/assets/pin.svg' alt='pin'></img>
              <div className={styles.ShopName}>가나다 플라워</div>
              <img src='/assets/trash.svg' alt='trash' /*onClick={() => handleRemoveItem(item.id)}*/></img>
            </div>

            <div className={styles.Line} />

            <div className={styles.ContentWrap}>
              <div className={styles.ProductImage}>
                <img src='/assets/example2.png'></img>
              </div>

              <div className={styles.InfoWrap}>
                <div className={styles.ProductName}>러블리 꽃다발</div>
                <div className={styles.Description}>화이트 로즈와 곰인형으로 이루어진 화이트데이 꽃다발 입니다</div>
                <div className={styles.TagWrap}>
                  <div className={styles.Tag}>#화이트데이</div>
                </div>
                <div className={styles.FlowerWrap}>
                  <div className={styles.Flower}>화이트로즈</div>
                  <div className={styles.Flower}>리시안셔스</div>
                  <div className={styles.Flower}>히아신스</div>
                  {/* {item.flowers.map((flower, index) => (
                    <div key={index} className={styles.Flower}>{flower}</div>
                  ))} */}
                </div>
              </div>
            </div>

            <div className={styles.MoreMessage}>픽업 일시 : 2023.12.07 (목) 13:00</div>
            <div className={styles.Line}></div>

            <div className={styles.PriceWrap}>
              <div className={styles.Price}>Total Price : </div>
              <div className={styles.Price}>49,000원</div>
            </div>
            
          </div>
      
      </div>

      <div className={styles.TotalPriceBox}>
        <div className={styles.Content}>
          <div className={styles.TextBox}>
            <div className={styles.Text} style={{ color: "#72777A", fontSize: "1rem" }}>결제 예정 금액</div>
            <div className={styles.Text}>49,000원</div>
          </div>
          <div className={styles.PurchaseButton} onClick={() => navigate('/cart/payment')}>
            전체 상품 결제 하기
          </div>
        </div>
      </div>

      {/* <div className={styles.CartContainer}>
        {cartItems.map(item => (
          <div key={item.id}>
            <div className={styles.TitleWrap}>
              <img src='/assets/pin.svg' alt='pin'></img>
              <div className={styles.ShopName}>{item.shopName}</div>
              <img src='/assets/trash.svg' alt='trash' onClick={() => handleRemoveItem(item.id)}></img>
            </div>

            <div className={styles.Line} />

            <div className={styles.ContentWrap}>
              <div className={styles.ProductImage}>
                <img src='/assets/example2.png' alt='product'></img>
              </div>

              <div className={styles.InfoWrap}>
                <div className={styles.ProductName}>{item.productName}</div>
                <div className={styles.Description}>{item.description}</div>
                <div className={styles.TagWrap}>
                  <div className={styles.Tag}>#{item.tag}</div>
                </div>
                <div className={styles.FlowerWrap}>
                  {item.flowers.map((flower, index) => (
                    <div key={index} className={styles.Flower}>{flower}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* <div className={styles.MoreMessage}>요청 사항 : 포장지는 베이지 색으로 부탁드립니다!</div>
            <div className={styles.Line}></div> */}
{/* 
            <div className={styles.PriceWrap}>
              <div className={styles.Price}>Total Price : </div>
              <div className={styles.Price}>{item.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.TotalPriceBox}>
        <div className={styles.Content}>
          <div className={styles.TextBox}>
            <div className={styles.Text} style={{ color: "#72777A", fontSize: "1rem" }}>결제 예정 금액</div>
            <div className={styles.Text}>{totalPrice}원</div>
          </div>
          <div className={styles.PurchaseButton} onClick={() => navigate('/cart/payment')}>
            전체 상품 결제 하기
          </div>
        </div>
      </div> */} 

      <CustomerBottomTap />
    </div>
  );
}

export default Cart;

