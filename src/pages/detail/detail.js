import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.scss';
import { useNavigate,useParams,useLocation } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import TimePickerComponent from '../../components/timepicker/timepicker';
import DatePickerComponent from '../../components/datepicker/datepicker';
function ProductDetail({ Component, pageProps }){

    const navigate = useNavigate();
    const location = useLocation();
    const fpKey = location.state ? location.state.fpKey : null;  
    const [pickupDate,setPickupDate] = useState('');
    const [pickupTime,setPickupTime] = useState('');
    const [amount, setAmount]=useState(1);

    const [productDetails, setProductDetails]=useState({
        fpKey:'',
        fpImage:'',
        fpName: '',
        fpDetail: '',
        fpFlowerList: [],
        fpTags: '',
        fpPrice: '',
    });


    const increaseAmount = () => {
        setAmount(amount + 1);
      };
    
      const decreaseAmount = () => {
        if (amount > 1) {
          setAmount(amount - 1);
        }
      };


    useEffect(()=> {
        console.log('fpKey in useEffect:', fpKey);
        const fetchData = async ()=> {
            try {
                const response = await axios.get(`http://3.36.175.224:8080/detail/${fpKey}`);
                console.log('Response:', response);
                if (response.status==200){
                    setProductDetails(response.data);
                }

            } catch (error) {
                console.log('상품 상세 정보 fetch error');
            }
        };

    fetchData();
},[fpKey]);

    const addToCart = async()=>{
        try {
            const token = localStorage.getItem('token');
            console.log("토큰:" , token);
            await axios.post(`http://3.36.175.224:8080/customer/cart/add-to-cart`,
            {
                fpKey: fpKey,
                pickupDate: pickupDate,
                pickupTime: pickupTime,
                amount: amount,
            },
            {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                },
            }
            );
            console.log({addToCart});
            navigate(`/home`)
            // navigate(`/home`, { state: { userKey: userKey } })
            // navigate(`/cart/${userKey}`, { state: { userKey: userKey } })

        }catch(error){
            // console.log(cart);
            console.log('장바구니에 완제품 담기 오류');
        }
    };

   
     const handleDateChange=(date)=>{
        setPickupDate(date);
        console.log(date);
    }

    const handleTimeChange=(time)=>{
        setPickupTime(time);
        console.log(time);
    }

    return (
        <div>
            <TopNav/>
            <div className={styles.ImageWrap}>
                <img src={productDetails.fpImage}/>
            </div>
            
            
            <div className={styles.Line}/>
            
            <div className={styles.DetailWrap} key = {productDetails.fpKey}>
                <div className={styles.FpName}>{productDetails.fpName}</div>
                <div className={styles.FpDescription}>{productDetails.fpDetail}</div>
                <div className={styles.FpFlowerWrap}>        
                    {/* <div className={styles.fpFlowerList}>{productDetails.fpFlowerList}</div> */}
                    {productDetails.fpFlowerList.map((flower,index)=>(
                        <div key = {index} className={styles.FpFlower}>{flower}</div>
                    ))}
                </div>
                
                <div className={styles.TagWrap}>
                    <div className={styles.FpTag}>{productDetails.fpTag}</div>
                </div>
                <div className={styles.FpPrice}>{productDetails.fpPrice}원</div>
            </div>


            <div className={styles.Line}/>
            
            <div className={styles.TextWrap}>
                <div className={styles.Text}>상품 수량</div>
                <div className={styles.smallWrap}>
                    <div className={styles.AmountControls}>
                        <button onClick={decreaseAmount} className={styles.AmountButton}>-</button>
                        <div className={styles.Amount}>{amount}</div>
                        <button onClick={increaseAmount} className={styles.AmountButton}>+</button>
                    </div>
                </div>
            </div>
               
        
            



            <div className={styles.Line}/>

            <div className={styles.TextWrap}>
                <div className={styles.Text}>픽업 날짜 선택</div>
                <div className={styles.smallWrap}>
                    <DatePickerComponent {...pageProps} onDateChange={handleDateChange}/>
                    {/* {isDatePickerOpen && <DatePickerComponent onDateChange={handleDateChange}/>} */}
                    <img src='/assets/calendar_check.svg'className={styles.Icon}/*onClick={toggleDatePicker}*//>
                </div>
               
            </div>
            
            <div className={styles.Line}/>

            <div className={styles.TextWrap}>
                <div className={styles.Text}>픽업 시간 선택</div>
                <div className={styles.smallWrap}>
                   <TimePickerComponent {...pageProps} onTimeChange={handleTimeChange}/>
                    {/* {isTimePickerOpen && <TimePickerComponent onTimeChange={handleTimeChange}/>} */}
                    <img src='/assets/time_check.svg' className={styles.Icon} /*onClick={toggleTimePicker}*//>
                </div>
                
            </div>
            

            <div className={styles.Line}/>

      
            <div className={styles.PurchaseButton} onClick={addToCart}>
                <img src='/assets/shoppingcart.svg'className={styles.Image}/>
                <div>장바구니에 담기</div>
            </div>
        
        </div>

    )

}
export default ProductDetail;