import React, { useState, useEffect } from 'react';
import styles from './statusbar.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Statusbar (){

    return (
        <div className={styles.iosStatusBar}>
            <div className={styles.iosStatusBarTime}>9:41</div>
            <div className={styles.iosStatusBarWrap}>
                <div className={styles.CellularConnection}>
                    <img src='/assets/Cellular Connection.svg'></img>
                </div>
                   
                <div className={styles.Wifi}>
                    <img src='/assets/Wifi.svg'></img>
                </div>    

                <div className={styles.Battery}>
                    <img src='/assets/Battery.svg'></img>
                </div>    
            </div>
    </div>
    
    )
    
}
export default Statusbar;
