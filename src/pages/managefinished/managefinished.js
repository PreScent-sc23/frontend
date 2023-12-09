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
    const [selectedProduct, setSelectedProduct] = useState(null);
    const userKey=2;


    const handleProductClick = (product) => {
        setSelectedProduct(product);
    }
 
    const handleClosePopup = () => {
        setSelectedProduct(null);
    }

    const handleDelete = () => {
        //삭제하는 API 추가해야함
        handleClosePopup();
        alert('삭제성공')
    }

     useEffect(()=> {
        console.log('상품 가져오기 시도');
        const fetchProduct = async ()=> {
          try {
            const response = await axios.get(`http://3.36.175.224:8080/flower-shops/fplist`, {
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
            fpName:'테스트1',
            fpTag:'테스트2'
        }, {
            fpKey: 1,
            fpName:'테스트3',
            fpTag:'테스트4'
        }, {
            fpKey: 2,
            fpName:'테스트5',
            fpTag:'테스트6'
        }])
    },[userKey]);

    return(
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
            <Statusbar/>
            <TopNav/>
            
            <div className={styles.Container}>
                {productDatas.map((product)=> (
                <div className={styles.ProductContainer} key={product.fpKey} onClick={() => handleProductClick(product)}>
                    <div className={styles.ProductPicture}>
                        <img src={product.fpImage} className={styles.ProductPicture}/>
                        </div>
                    <div className={styles.ProductText}>{product.fpName}</div>
                    <div className={styles.ProductTag}>{product.fpTag}</div>
                </div>
                ))}
            </div>

            <div>
                <div className={styles.Button} onClick={()=>navigate(`/addfinished`)}>상품 추가하기</div>
            </div>

            {selectedProduct && (
               <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor: 'white', width:'370px', height:'700px',padding: '20px', borderRadius: '12px' }}>
                    <div className={styles.ProductContainer}>
                        <div className={styles.ProductPicture}>
                            <img src={selectedProduct.fpImage} className={styles.ProductPicture}/>
                            </div>
                        <div className={styles.ProductText}>{selectedProduct.fpName}</div>
                        <div className={styles.ProductTag}>{selectedProduct.fpTag}</div>
                    </div>
                    <div className= {styles.Line}></div>
                    <button className={styles.Delete} onClick={handleDelete}>삭제 하기</button>
                    <button className={styles.PopClose} onClick={handleClosePopup}>뒤로 가기</button>
                  </div>
               </div>
           )}
        </div>

        
    )
} export default ManageFinished;