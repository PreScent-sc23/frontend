import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function Sellersignup(){
    
    return(
        <div >
            <Statusbar/>
            {/* <TopNav/> */}
            <div className={styles.TopNavWrap}>
                    <img src='/assets/back.svg' className={styles.image}/>
                    <div className={styles.TopNavTitle}>사업자 회원 가입</div>
                    {/* <div className={styles.TopNavButtonContainer}> */}
            </div>

            <div style={{width:'100%', textAlign:'center',marginTop:'16px'}}>
                <form>            
                <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='이름'></input>
                <input className={styles.inputBox} type='number' name = "pwd" size = '50'  placeholder='전화번호'></input>
                <input className={styles.inputBox} type='email' name = "email" size = '50'  placeholder='Email'></input>
                <input className={styles.inputBox} type='number' name = "validnum" size = '50'  placeholder='인증 번호 입력'></input>
                <input className={styles.inputBox} type='password' name = "pwd" size = '50'  placeholder='Password'></input>
                <input className={styles.inputBox} type='number' name = "regnum" size = '50'  placeholder='사업자 등록 번호'></input>
                </form>
            </div>
            <div style={{width:'100%', height:'10.0em'}}></div>
            <div style={{width:'100%', textAlign:'center'}}>
            <div className={styles.ButtonContainer}>
                <div className={styles.Button}>사업자 회원 등록 하기</div>
            </div>
            {/* <input className = {styles.normalButton} type='button' value="사업자 회원 등록 하기" style={{margin: '8px'}}></input> */}
            </div> 
        </div>
        
        

    );
}
export default Sellersignup ;