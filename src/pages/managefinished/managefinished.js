import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import SellerBottomTap from '../../components/bottomtap/sellerbottomtap';


export function ManageFinished(){
    const navigate = useNavigate(); 
    const [productDatas, setProductDatas] = useState([]);
    const userKey=1;


     useEffect(()=> {
        console.log('상품 가져오기 시도');
        const fetchProduct = async ()=> {
          try {
            const response = await axios.get(`http://3.36.175.224:8080/customer/fp-order-list`, {
              params: { userKey }
            });
    
            console.log('Response:', response);
            if (response.status==200){
                setProductDatas(response.data);
            }
    
            } catch (error) {
                console.log('상품 정보 불러오기 실패');
            }
        };

        fetchProduct();
        setProductDatas([{
            fpProductKey: 0,
            fpProductName:'테스트1',
            fpProductTag:'테스트2'
        }, {
            fpProductKey: 1,
            fpProductName:'테스트3',
            fpProductTag:'테스트4'
        }, {
            fpProductKey: 2,
            fpProductName:'테스트3',
            fpProductTag:'테스트4'
        }])
    },[userKey]);

    return(
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
            <Statusbar/>
            <TopNav/>
            
            <div className={styles.Container}>
                {productDatas.map((product)=> (
                <div className={styles.ProductContainer} key={product.fpProductKey}>
                    <div className={styles.ProductPicture}></div>
                    <div className={styles.ProductText}>{product.fpProductName}</div>
                    <div className={styles.ProductTag}>{product.fpProductTag}</div>
                </div>
                ))}
            </div>

            <div>
                <div className={styles.Button} onClick={()=>navigate('/addfinished')}>상품 추가하기</div>
            </div>
        </div>
    )
} export default ManageFinished;