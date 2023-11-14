import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

const Sellersignup = ()=>{
    const [sellerName, setSellerName] = useState('');
    const [sellerPassword, setSellerPassword] = useState('');
    const [sellerKey, setSellerKey] = useState('');
    const [sellerIdEmail, setSellerIdEmail] = useState('');
    const [sellerPhonenum, setSellerPhonenum] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        console.log("됨?");
        try {
            const response = await axios.post('http://3.36.175.224:8080/seller/signup', {
                sellerKey,
                sellerName,
                sellerIdEmail,
                sellerPassword,
                sellerPhonenum,
            },{
                headers: {
                    'Content-Type': 'application/json'
                    // Add any additional headers, such as an API key, if required
                    // 'Authorization': 'Bearer YOUR_API_KEY'
        },
    });
            console.log("됨2?");
            console.log(response.data);
            navigate('/home');
            // 회원가입 성공 시 리다이렉트 또는 다른 처리를 수행할 수 있습니다.

        } catch (error) {
            console.error('회원가입 오류:', error);
        }
    };
    
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
                <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='이름' value={sellerName} onChange={(e) => setSellerName(e.target.value)}></input>
                <input className={styles.inputBox} type='number' name = "pwd" size = '50'  placeholder='전화번호' value={sellerPhonenum} onChange={(e) => setSellerPhonenum(e.target.value)}></input>
                <input className={styles.inputBox} type='email' name = "email" size = '50'  placeholder='Email'value={sellerIdEmail} onChange={(e) => setSellerIdEmail(e.target.value)}></input>
                <input className={styles.inputBox} type='number' name = "validnum" size = '50'  placeholder='인증 번호 입력'></input>
                <input className={styles.inputBox} type='password' name = "pwd" size = '50'  placeholder='비밀번호'value={sellerPassword} onChange={(e) => setSellerPassword(e.target.value)} ></input>
                <input className={styles.inputBox} type='number' name = "regnum" size = '50'  placeholder='사업자 등록 번호' value={sellerKey} onChange={(e) => setSellerKey(e.target.value)}></input>
                </form>
            </div>
            <div style={{width:'100%', height:'10.0em'}}></div>
            <div style={{width:'100%', textAlign:'center'}}>
            <div className={styles.ButtonContainer}>
                <div className={styles.Button} onClick={handleSignUp}>사업자 회원 등록 하기</div>
            </div>
            </div> 
        </div>
        
        

    );
}
export default Sellersignup ;



// function Sellersignup(){
    
//     return(
//         <div >
//             <Statusbar/>
//             {/* <TopNav/> */}
//             <div className={styles.TopNavWrap}>
//                     <img src='/assets/back.svg' className={styles.image}/>
//                     <div className={styles.TopNavTitle}>사업자 회원 가입</div>
//                     {/* <div className={styles.TopNavButtonContainer}> */}
//             </div>

//             <div style={{width:'100%', textAlign:'center',marginTop:'16px'}}>
//                 <form>            
//                 <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='이름'></input>
//                 <input className={styles.inputBox} type='number' name = "pwd" size = '50'  placeholder='전화번호'></input>
//                 <input className={styles.inputBox} type='email' name = "email" size = '50'  placeholder='Email'></input>
//                 <input className={styles.inputBox} type='number' name = "validnum" size = '50'  placeholder='인증 번호 입력'></input>
//                 <input className={styles.inputBox} type='password' name = "pwd" size = '50'  placeholder='Password'></input>
//                 <input className={styles.inputBox} type='number' name = "regnum" size = '50'  placeholder='사업자 등록 번호'></input>
//                 </form>
//             </div>
//             <div style={{width:'100%', height:'10.0em'}}></div>
//             <div style={{width:'100%', textAlign:'center'}}>
//             <div className={styles.ButtonContainer}>
//                 <div className={styles.Button}>사업자 회원 등록 하기</div>
//             </div>
//             {/* <input className = {styles.normalButton} type='button' value="사업자 회원 등록 하기" style={{margin: '8px'}}></input> */}
//             </div> 
//         </div>
        
        

//     );
// }
// export default Sellersignup ;