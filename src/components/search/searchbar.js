import React, { useState, useEffect } from 'react';
import styles from './searchbar.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Searchbar() {

    return (
        <div className = {styles.SearchWrap}>
            <div className={styles.SearchBar}>
                <img src='/assets/search.svg' className={styles.image}/>  
                <div className={styles.SeachInput}>
                    {/* Search Input
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                    /> */}
                </div>
            </div>
        </div>
    )

}
export default Searchbar;
