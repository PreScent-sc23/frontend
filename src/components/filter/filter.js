import React, { useState, useEffect } from 'react';
import styles from './filter.module.scss'
function Filter(){
    
    // const [distance, setDistance]= useState<number | null>(null);
    
    
    
    
    return (
        <div>
            <div className={styles.FilterBox}>
                <div className={styles.FilterButton}>거리순</div>
                <div className={styles.FilterButton}>판매량순</div>
            </div>
        </div>
    )
}export default Filter;