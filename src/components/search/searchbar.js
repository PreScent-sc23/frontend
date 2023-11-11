import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Searchbar() {

    return (
        <div className = {styles.SearchWrap}>
            <div className={styles.SearchBar}>
                <img src='/assets/search.svg' className={styles.image}/>  
                <div className={styles.SeachInput}> 
                </div>
            </div>
        </div>
    )

}
export default Searchbar;
