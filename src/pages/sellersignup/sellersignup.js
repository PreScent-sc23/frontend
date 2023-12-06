import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

const Sellersignup = ()=>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [businessKey, setBusinessKey] = useState('');
    const [idEmail, setIdEmail] = useState('');
    const [code, setCode] = useState('');
    const [phonenum, setPhonenum] = useState('');
    const navigate = useNavigate();

    const userKey = 100;
    const isgrant = 1;

    // const handleSignUp = () => {
    //     navigate('/main')
    // }

    const verifyEmailCode = async () => {
        try {
            const response = await axios.post('http://3.36.175.224:8080/verify-code', {
                idEmail,
                code,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            alert('이메일 인증 성공!');
            // 다른 로직 수행, 예를 들어 회원가입 버튼을 활성화
        } catch (error) {
            console.error('이메일 인증 오류:', error);
            alert('이메일 인증 실패. 다시 시도해주세요.');
        }
    };

    const handleSignUp = async () => {
        console.log("됨?");
        if (password !== confirmPassword){
            alert('비밀번호가 서로 다릅니다! 다시 확인 해주세요.')
            return;
        }
        try {
            const response = await axios.post('http://3.36.175.224:8080/seller/signup', {
                userKey,
                businessKey,
                name,
                idEmail,
                code,
                password,
                confirmPassword,
                phonenum,
            },{
                headers: {
                    'Content-Type': 'application/json'
                    // Add any additional headers, such as an API key, if required
                    // 'Authorization': 'Bearer YOUR_API_KEY'
        },
    });
            console.log("됨2?");
            console.log(response.data);
            navigate('/main');
            // 회원가입 성공 시 리다이렉트 또는 다른 처리를 수행할 수 있습니다.

        } catch (error) {
            console.error('회원가입 오류:', error);
        }
    };
    
    return(
        <div >
            <Statusbar/>
            <TopNav/>

            <div style={{width:'100%', textAlign:'center',marginTop:'8rem'}}>
                <form>            
                <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='이름' value={name} onChange={(e) => setName(e.target.value)}></input>
                <input className={styles.inputBox} type='number' name = "pwd" size = '50'  placeholder='전화번호' value={phonenum} onChange={(e) => setPhonenum(e.target.value)}></input>
                <input className={styles.inputBox} type='email' name = "email" size = '50'  placeholder='Email'value={idEmail} onChange={(e) => setIdEmail(e.target.value)}></input>
                {/* <input className={styles.inputBox} type='text' placeholder='이메일 인증 번호 입력' value={code} onChange={(e) => setCode(e.target.value)} /> */}
                    {/* <button onClick={verifyEmailCode}>인증</button> */}
                <input className={styles.inputBox} type='password' name = "pwd" size = '50'  placeholder='비밀번호'value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                <input className={styles.inputBox} type='number' name = "validnum" size = '50'  placeholder='비밀번호 확인'value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} ></input>
                <input className={styles.inputBox} type='number' name = "regnum" size = '50'  placeholder='사업자 등록 번호' value={businessKey} onChange={(e) => setBusinessKey(e.target.value)}></input>
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