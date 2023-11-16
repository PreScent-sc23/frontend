import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import Searchbar from '../../components/search/searchbar';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Filter from '../../components/filter/filter';

function TagSearch(){
   
    const [fpTag, setFpTag] =useState('');
    const query = encodeURIComponent(fpTag); // query는 encodedTag임 "%23졸업식"
    const [fpName,setFpName] =useState([]);
    const [fpPrice, setFpPrice] = useState([]);
    const [responseData,setResponseData] = useState([]);

    const navigate = useNavigate();
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleTagSearch(fpTag);
        }
      };

    const handleTagSearch = async () => {
        console.log("성공1?");
       
        try {
            const response = await axios.get('http://3.36.175.224:8080/search',{
                    params : {query},
            },
            {
                headers: {'Content-Type': 'application/json' },
            }
    )
            if (response.status === 200) {
                setResponseData(response.data[0]);
                // const responseData = response.data;
                console.log("성공2?");
                // setData(response.data[0]);
            }
            // const responseData = response.data;
            console.log("성공3?");
            // const responseData = response.data;
            console.log("리스폰스 출력됨?")
            // const responseData = response.data;

            // console.log(responseData[0].fpName);
            // console.log(responseData[0].fpPrice);
            // console.log(responseData[0].fpTag);
            // navigate('/home');
            // 회원가입 성공 시 리다이렉트 또는 다른 처리를 수행할 수 있습니다.

        } catch (error) {
            console.error('태그 검색 오류:', error);
        }

        console.log("도대체 어디서 멈추는겅")
        console.log(responseData.fpName);
        console.log(responseData.fpPrice);
        console.log(responseData.fpTag);
        console.log("이거 정상적으로 출력됨?");

    };
    
    // useEffect(()=>{handleTagSearch()});

    return(
        <div>
            <Statusbar/>
            <div className = {styles.SearchWrap}>
            <div className={styles.SearchBar}>
                <img src='/assets/search.svg' alt='돋보기 아이콘' className={styles.image}/>  
                <div className={styles.SeachInput}>
                    <input type="text" name="search" placeholder="검색어를 입력하세요." style={{fontSize:'16px', outline:'none',background:'transparent'}} value={fpTag} onChange={(e) => setFpTag(e.target.value)} onKeyDown={(handleEnter)} />
                </div>
            </div>
            </div>

            <Filter/>
            <div className={styles.ProductContainer}>
                <div className={styles.ProductCard}>
                    <div className={styles.ProductImageContainer}>
                        <div className={styles.ProductImage}>상품1이미지</div>
                    </div>
                    <div className={styles.ProductDetailContainer}>
                        <div className={styles.ProudctTitle}>상품명목업</div>
                        <div className={styles.ProductPrice}>가격목업</div>
                        <div className={styles.ProductTag}>태그목업</div>
                    </div>
                </div>


                <div className={styles.ProductCard}>
                    <div className={styles.ProductImageContainer}>
                        <div className={styles.ProductImage}>상품1이미지</div>
                    </div>
                    <div className={styles.ProductDetailContainer}>
                        <div className={styles.ProudctTitle}>{responseData.fpName}</div>
                        <div className={styles.ProductPrice}>{responseData.fpPrice}</div>
                        <div className={styles.ProductTag}>{responseData.fpTag}</div>
                    </div>
                </div>

                <div className={styles.ProductCard}>
                    <div className={styles.ProductImageContainer}>
                        <div className={styles.ProductImage}>상품1이미지</div>
                    </div>
                    <div className={styles.ProductDetailContainer}>
                        <div className={styles.ProudctTitle}>{responseData.fpName}</div>
                        <div className={styles.ProductPrice}>{responseData.fpPrice}</div>
                        <div className={styles.ProductTag}>{responseData.fpTag}</div>
                    </div>
                </div>

                <div className={styles.ProductCard}>
                    <div className={styles.ProductImageContainer}>
                        <div className={styles.ProductImage}>상품1이미지</div>
                    </div>
                    <div className={styles.ProductDetailContainer}>
                        <div className={styles.ProudctTitle}>{responseData.fpName}</div>
                        <div className={styles.ProductPrice}>{responseData.fpPrice}</div>
                        <div className={styles.ProductTag}>{responseData.fpTag}</div>
                    </div>
                </div>

                <div className={styles.ProductCard}>
                    <div className={styles.ProductImageContainer}>
                        <div className={styles.ProductImage}>상품1이미지</div>
                    </div>
                    <div className={styles.ProductDetailContainer}>
                        <div className={styles.ProudctTitle}>{responseData.fpName}</div>
                        <div className={styles.ProductPrice}>{responseData.fpPrice}</div>
                        <div className={styles.ProductTag}>{responseData.fpTag}</div>
                    </div>
                </div>


                <div className={styles.ProductCard}>
                    <div className={styles.ProductImageContainer}>
                        <div className={styles.ProductImage}>상품1이미지</div>
                    </div>
                    <div className={styles.ProductDetailContainer}>
                        <div className={styles.ProudctTitle}>{responseData.fpName}</div>
                        <div className={styles.ProductPrice}>{responseData.fpPrice}</div>
                        <div className={styles.ProductTag}>{responseData.fpTag}</div>
                    </div>
                </div>

                <div className={styles.ProductCard}>
                    <div className={styles.ProductImageContainer}>
                        <div className={styles.ProductImage}>상품1이미지</div>
                    </div>
                    <div className={styles.ProductDetailContainer}>
                        <div className={styles.ProudctTitle}>{responseData.fpName}</div>
                        <div className={styles.ProductPrice}>{responseData.fpPrice}</div>
                        <div className={styles.ProductTag}>{responseData.fpTag}</div>
                    </div>
                </div>



               

                

                


                

                
               
            
            </div>


            <CustomerBottomTap/>
        </div>
        


    );
}
export default TagSearch;