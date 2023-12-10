import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import Searchbar from '../../components/search/searchbar';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Filter from '../../components/filter/filter';

function Search({props}){
    
    const [fpTag, setFpTag] = useState('');
    // const query = encodeURIComponent(fpTag); 
    const [fpImage, setFpImage] =useState('');
    const [flowerquery,setFlowerQuery]=useState(''); 
    const [fpName,setFpName] =useState('');
    const [fpPrice, setFpPrice] = useState('');
    const [fpFlowerList, setFpFlowerList] =useState([]);
    const [responseData,setResponseData] = useState([]);

    useEffect(() => {
        const query = window.location.pathname.split('/').pop();
        console.log("서치페이지 쿼리 :", query);
        setFpTag((prevFpTag) => {
            const newFpTag = decodeURIComponent(query);
            handleTagSearch(newFpTag);
            return newFpTag;
          });
        }, []);
    
    
    const navigate = useNavigate();
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            console.log("태그 :",fpTag);
            handleTagSearch(fpTag);
            
        }
      };


    const handleTagSearch = async (fpTag) => {
        console.log("성공1?");
        console.log("메인에서 전달한 태그", fpTag);
        const query = (encodeURIComponent(fpTag));
        const token = localStorage.getItem('token');
        const headers = { 'Authorization': `Bearer ${token}` };
        const params = {query};
        console.log("토큰:", token);
        try {
            const response = await axios.get(`http://3.36.175.224:8080/search`,{
                    params, headers
            });

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
                <div className={styles.FpFlowerWra}>
                {item.fpFlowerList.map((flower, index) => (
                  <div key={index} className={styles.FlowerTag}>{flower}</div>))}
                </div>
              </div>
          </div>
            
          ))}
        </div>
      )}            
        <CustomerBottomTap/>
        </div>
        


    );
}
export default Search;