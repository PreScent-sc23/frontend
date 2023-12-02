import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import Searchbar from '../../components/search/searchbar';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Filter from '../../components/filter/filter';

function Search(){
    
   
    const [fpTag, setFpTag] = useState('');
    const query = encodeURIComponent(fpTag); 
    const [fpImage, setFpImage] =useState('');
    const [flowerquery,setFlowerQuery]=useState(''); 
    const [fpName,setFpName] =useState('');
    const [fpPrice, setFpPrice] = useState('');
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
            const response = await axios.get(`http://3.36.175.224:8080/search`,{
                    params : {query},
            },
            {   headers: {'Content-Type': 'application/json' },}
            );
            if (response.status === 200) {
                setResponseData(response.data);    
            }
    
        } catch (error) {
            console.error('태그 검색 오류:', error);
        }    
    };

    useEffect(() => {
        console.log('Updated responseData:', responseData);
    }, [responseData]);




    return(
        <div>
            <Statusbar/>
            <div className = {styles.SearchWrap}>
            <div className={styles.SearchBar}>
                <img src='/assets/search.svg' alt='돋보기 아이콘' className={styles.image}/>  
                <div className={styles.SeachInput}>
                    <input type="text" name="search" placeholder="검색어를 입력하세요." style={{fontSize:'1rem', outline:'none',background: 'transparent',}} value={fpTag} onChange={(e) => setFpTag(e.target.value)} onKeyDown={(handleEnter)} />
                </div>
            </div>
            </div>
            {responseData.length === 0 ? (
        <div className={styles.NoResult}>검색 결과가 없습니다</div>
      ) : (
        <div className={styles.ProductContainer}>
          {responseData.map((item) => (
            <div className={styles.ProductCard} key={item.key} onClick={() => navigate(`/detail/${item.fpKey}`, { state: { fpKey: item.fpKey } })}>
              <div className={styles.ProductImageContainer}>
                <img src={item.fpImage} className={styles.ProductImage} alt={item.fpName} />
              </div>
              <div className={styles.ProductDetailContainer} key={item.key}>
                <div className={styles.ProudctTitle}>{item.fpName}</div>
                <div className={styles.ProductPrice}>{item.fpPrice}</div>
                <div className={styles.ProductTag}>{item.fpTag}</div>
              </div>
            </div>
            
          ))}
        </div>
      )}



            {/* {responseData.length===0 ?(
                <div className={styles.NoResult}>검색 결과가 없습니다</div>
            ):(
                <div>
                    {responseData && responseData.map(responseData=>(
                        <div className={styles.ProductContainer}>
                            <div className={styles.ProductCard} key={responseData.key} onClick={()=>(navigate(`/detail/${responseData.fpKey}`))}>
                                <div className={styles.ProductImageContainer}>
                                    <img src='' className={styles.ProductImage}>{responseData.fpImage}</img>
                                </div>

                                <div className={styles.ProductDetailContainer} key={responseData.key}>
                                    <div className={styles.ProudctTitle}>{responseData.fpName}</div>
                                    <div className={styles.ProductPrice}>{responseData.fpPrice}</div>
                                    <div className={styles.ProductTag}>{responseData.fpTag}</div>
                                </div>
                            </div>    
                        </div>  
                    ))}
                </div>
            )} */}

            
            <CustomerBottomTap/>
        </div>
        


    );
}
export default Search;