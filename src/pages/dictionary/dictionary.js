import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
import {flowers} from './flowers'
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';

function Dictionary(){
    
    const navigate = useNavigate(); 
    const pageinfo = 'PS사전에서 궁금한 꽃에 대한 정보를 찾아서\n꽃에 담긴 진정한 의미를 알아보세요!\n꽃의 정보는 정기적으로 업데이트 됩니다.'
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
                                <img src={flower.imgpath} alt={flower.name} />
                            </div>
                            <div className={styles.Line}></div>
                            <div className={styles.InfoContainer}>
                                <div className={styles.FlowerName}>{flower.name}</div>
                                <div style={{marginTop:'40px', fontSize:'12px', fontWeight:'bold'}} className={styles.TagContainer}>{flower.tag}</div>
                            </div>
                            <div>
                                <img style={{height:'40px', opacity:'45%'}} src='/imgs/dots_column.png'></img>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.PageInfo}>
                {pageinfo}
            </div>
            <CustomerBottomTap/>
        </div>
    )
}
export default Dictionary;