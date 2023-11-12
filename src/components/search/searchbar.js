import React, { useState, useEffect } from 'react';
import styles from './searchbar.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Searchbar() {

    return (
        <div className = {styles.SearchWrap}>
            <div className={styles.SearchBar}>
                <img src='/assets/search.svg' alt='돋보기 아이콘' className={styles.image}/>  
                <div className={styles.SeachInput}>
                    <input type="text" name="search" placeholder="검색어를 입력하세요."style={{backgroundColor:'#F6F6F6', fontSize:'16px'}}/>
                </div>
            </div>
        </div>
    )

}
export default Searchbar;
