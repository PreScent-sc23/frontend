import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import Searchbar from '../../components/search/searchbar';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Filter from '../../components/filter/filter';

function Search(){
   
    const [fpTag, setFpTag] =useState('');
    const query = encodeURIComponent(fpTag); // query는 encodedTag임 "%23졸업식"
    const [flowerquery,setFlowerQuery]=useState(''); 
    const [fpName,setFpName] =useState([]);
    const [fpPrice, setFpPrice] = useState([]);
    const [responseData,setResponseData] = useState([0])
 

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
            {   headers: {'Content-Type': 'application/json' },}
            )
            if (response.status === 200) {
                setResponseData(response.data[0]);
                // setResponseData(response.data.fpName="러블리 꽃다발")
                console.log("set리스폰스");
                
            }
            console.log("성공2?");
            console.log("리스폰스 출력됨?");
            console.log(responseData);
            console.log(responseData.fpName);
            console.log(responseData.fpPrice);
            console.log(responseData.fpTag);

        } catch (error) {
            console.error('태그 검색 오류:', error);
        }

    };



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
                <div className={styles.ProductCard} onClick={()=>(navigate('/detail'))}>
                    <div className={styles.ProductImageContainer}>
                        <img src='/assets/bearflower.svg' className={styles.ProductImage}></img>
                    </div>
                    <div className={styles.ProductDetailContainer}>
                        <div className={styles.ProudctTitle}>러블리 꽃다발</div>
                        <div className={styles.ProductPrice}>49,000</div>
                        <div className={styles.ProductTag}>#화이트데이</div>
                    </div>
                </div>

                <div className={styles.ProductCard} onClick={()=>(navigate('/detail'))}>
                    <div className={styles.ProductImageContainer}>
                        <img src='/assets/bearflower.svg' className={styles.ProductImage}></img>
                    </div>
                    <div className={styles.ProductDetailContainer}>
                        <div className={styles.ProudctTitle}>러블리 꽃다발2</div>
                        <div className={styles.ProductPrice}>49,000</div>
                        <div className={styles.ProductTag}>#화이트데이</div>
                    </div>
                </div>

                <div className={styles.ProductCard} onClick={()=>(navigate('/detail'))}>
                    <div className={styles.ProductImageContainer}>
                        <img src='/assets/bearflower.svg' className={styles.ProductImage}></img>
                    </div>
                    <div className={styles.ProductDetailContainer}>
                        <div className={styles.ProudctTitle}>러블리 꽃다발3</div>
                        <div className={styles.ProductPrice}>49,000</div>
                        <div className={styles.ProductTag}>#화이트데이</div>
                    </div>
                </div>

                <div className={styles.ProductCard} onClick={()=>(navigate('/detail'))}>
                    <div className={styles.ProductImageContainer}>
                        <img src='/assets/bearflower.svg' className={styles.ProductImage}></img>
                    </div>
                    <div className={styles.ProductDetailContainer}>
                        <div className={styles.ProudctTitle}>러블리 꽃다발4</div>
                        <div className={styles.ProductPrice}>49,000</div>
                        <div className={styles.ProductTag}>#화이트데이</div>
                    </div>
                </div>


                {/* <div className={styles.ProductCard} onClick={()=>(navigate('/detail'))}>
                    <div className={styles.ProductImageContainer}>
                        <img src='/assets/bearflower.svg' className={styles.ProductImage}></img>
                    </div>
                    <div className={styles.ProductDetailContainer}>
                        <div className={styles.ProudctTitle}>{responseData.fpName}</div>
                        <div className={styles.ProductPrice}>{responseData.fpPrice}</div>
                        <div className={styles.ProductTag}>{responseData.fpTag}</div>
                    </div>
                </div> */}


        
            
            </div>


            <CustomerBottomTap/>
        </div>
        


    );
}
export default Search;