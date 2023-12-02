import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate,useParams,useLocation } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import DatePickerComponent from '../../components/datepicker/datepicker';
import TimePickerComponent from '../../components/timepicker/timepicker';

function ProductDetail(props){

    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    // const fpKey = location.state.fpKey;
    const fpKey = location.state ? location.state.fpKey : null;
    const [pickupDate,setPickupDate] = useState('');
    const [pickupTime,setPickupTime] = useState('');
    // const fpKey = props.match.params.fpKey;

    const [productDetails, setProductDetails]=useState({
        fpKey:'',
        fpImage:'',
        fpName: '',
        fpDescription: '',
        fpFlowerList: [],
        fpTags: '',
        fpPrice: 0,
        // pickupDate: '',
        // pickupTime: '',
    });

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
            await axios.post('http://3.36.175.224:8080/endpoint주소/add-to-cart',{
                productId : productDetails.fpKey,
            });
            navigate('/cart');
        }catch(error){
            console.log('장바구니에 완제품 담기 오류');
        }
    };
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const toggleDatePicker = () => {
        setIsDatePickerOpen(!isDatePickerOpen);
      };

    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
    const toggleTimePicker = () => {
        setIsTimePickerOpen(!isTimePickerOpen);
      };
   
    return (
        <div>
            <Statusbar/>
            <TopNav/>
            <div className={styles.ImageWrap}>
                <img src={productDetails.fpImage}/>
            </div>
            
            
            <div className={styles.Line}/>
            
            <div className={styles.DetailWrap} key = {productDetails.fpKey}>
                <div className={styles.FpName}>{productDetails.fpName}</div>
                <div className={styles.FpDescription}>{productDetails.fpDescription}</div>
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
                <div className={styles.Text}>픽업 날짜 선택</div>
                {isDatePickerOpen && <DatePickerComponent />}
                <img src='/assets/calendar_check.svg'className={styles.Icon}onClick={toggleDatePicker}/>
                
            </div>
            
            <div className={styles.Line}/>

            <div className={styles.TextWrap}>
                <div className={styles.Text}>픽업 시간 선택</div>
                {isTimePickerOpen && <TimePickerComponent />}
                <img src='/assets/time_check.svg' className={styles.Icon} onClick={toggleTimePicker}/>
            </div>
            

            <div className={styles.Line}/>

             {/* <div className={styles.TextWrap}>
                <div className={styles.Text}>요청 사항 (선택)</div>
                {/* <img src='/assets/time_check.svg' className={styles.Icon}/> */}
             {/* </div>  */} 
            
            <div className={styles.TextWrap}>
                <div className={styles.Text}>예약 일정</div>
                {/* <div className={styles.Text}>12.07 (목) 13:00</div> */}
            </div>


      
            <div className={styles.PurchaseButton} onClick={addToCart}>
                <img src='/assets/shoppingcart.svg'className={styles.Image}/>
                <div>장바구니에 담기</div>
            </div>
        
        </div>
    )

}
export default ProductDetail;