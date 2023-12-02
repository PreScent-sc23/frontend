import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import {flowers} from './flowers'

function Dictionary(){
    
    const navigate = useNavigate(); 
    

    return (
        <div>
            <Statusbar/>
            <TopNav/>
            <div className={styles.LogoContainer}>
                <img src='/imgs/logo.png' style={{width:'60px'}}></img>
            </div>
            <div className={styles.ListContainer}>
                {flowers.map((flower, index) => (
                    <div key = {index}>
                        <div className={styles.FlowerContainer}>
                            <div className={styles.ImageContainer}>
                                꽃사진
                            </div>
                            <div className={styles.Line}></div>
                            <div className={styles.InfoContainer}>
                                <div className={styles.FlowerName}>{flower.name}</div>
                                <div>{flower.description}</div>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Dictionary;