import React, { useState, useEffect } from 'react';
import styles from './searchbar.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Searchbar() {
   const navigate = useNavigate();
   const [inputText, setInputText] = useState('');

   const handleEnter = (e) => {
       if (e.key === "Enter") {
           navigate('/search', { state: { inputText } });
       }
   };

//    useEffect(() => {
//        navigate('/search', { state: { inputText } });
//    }, [inputText]);

   return (
       <div className={styles.SearchWrap}>
           <div className={styles.SearchBar}>
               <img src='/assets/search.svg' alt='돋보기 아이콘' className={styles.image} onClick={handleEnter}/> 
               <div className={styles.SeachInput}>
                  <input type="text" name="search" placeholder="검색어를 입력하세요." style={{fontSize:'16px', outline:'none',background:'transparent'}} onChange={(e) => setInputText(e.target.value)} onKeyDown={handleEnter}/>
               </div>
           </div>
       </div>
   )
}

export default Searchbar;