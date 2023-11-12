import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';

function Login(){
    
    return(
        <div>
            <Statusbar/>
            <div style={{width:'100%', height:'380px'}}>
            </div>
            <div style={{width:'100%', height:'auto', textAlign:'center'}}>
                <form>            
                    <input className={styles.inputBox} type='text' name = "email" size = '50' placeholder='Email Address'></input>
                    <input className={styles.inputBox} type='password' name = "pwd" size = '50'  placeholder='Password'></input>
                </form>
                <div style={{margin:'8px'}}>
                    <a href="/home" className={styles.purpleLink}>비밀번호를 잊으셨나요?</a>
                </div>
                <input className = {styles.normalButton} type='button' value="Login" style={{margin: '8px'}}></input>
            </div>
        </div>
    );
}
export default Login ;