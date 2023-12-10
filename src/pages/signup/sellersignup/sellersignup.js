import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../../components/statusbar/statusbar';
import TopNav from '../../../components/topnavigation/topnav';

const Sellersignup = ()=>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [businessKey, setBusinessKey] = useState('');
    const [idEmail, setIdEmail] = useState('');
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [isCodeTrue, setIsCodeTrue] = useState(false);
    const [serverVerificationCode, setServerVerificationCode] = useState('');
    const [isError, setIsError] = useState(false);
    const [code, setCode] = useState('');
    const [phonenum, setPhonenum] = useState('');
    const navigate = useNavigate();

    // const isgrant = 1;
    const requestVerificationCode = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://3.36.175.224:8080/send-verification-email', 
            {
                idEmail,
            }, 
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            setIsCodeSent(true);
            setServerVerificationCode(response.data.verificationCode); // 서버로부터 받은 verification code 저장
        } catch (error) {
            console.error('이메일 인증 코드 전송 오류:', error);
            alert('확인 코드 전송에 실패했습니다. 다시 시도해주세요.');
        }
    };

    const verifyEmailCode = (e) => {
        e.preventDefault();
        if (code === serverVerificationCode) {
            setIsCodeTrue(true);
        } else {
            setIsError(true);
        }
    };
    // const verifyEmailCode = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.get('http://3.36.175.224:8080/verify-email', {
    //             idEmail,
    //             code,
    //         }, {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //         });
    //         console.log(response.data);
    //         setIsCodeSent(true);
    //         // alert('이메일 인증 성공!');
            
    //     } catch (error) {
    //         console.error('이메일 인증 오류:', error);
    //         setIsError(true);
    //         // alert('이메일 인증 실패. 다시 시도해주세요.');
    //     }
    // };


    const handleSignUp = async () => {
        console.log("됨?");
        if (password != confirmPassword){
            alert('비밀번호가 서로 다릅니다! 다시 확인 해주세요.')
            return;
        }
        try {
            const response = await axios.post('http://3.36.175.224:8080/seller/signup', {
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
        },
    });
            console.log("됨2?");
            console.log(response.data);
            navigate('/main');
        } catch (error) {
            console.error('회원가입 오류:', error);
        }
    };

    // const verifyEmailCode = async () => {
    //     try {
    //         const response = await axios.post('http://3.36.175.224:8080/verify-code', {
    //             idEmail,
    //             code,
    //         }, {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //         });
    //         alert('이메일 인증 성공!');
    //         // 다른 로직 수행, 예를 들어 회원가입 버튼을 활성화
    //     } catch (error) {
    //         console.error('이메일 인증 오류:', error);
    //         alert('이메일 인증 실패. 다시 시도해주세요.');
    //     }
    // };

    // const handleSignUp = async () => {
    //     console.log("됨?");
    //     if (password !== confirmPassword){
    //         alert('비밀번호가 서로 다릅니다! 다시 확인 해주세요.')
    //         return;
    //     }
    //     try {
    //         const response = await axios.post('http://3.36.175.224:8080/seller/signup', {
    //             businessKey,
    //             name,
    //             idEmail,
    //             code,
    //             password,
    //             confirmPassword,
    //             phonenum,
    //         },{
    //             headers: {
    //                 'Content-Type': 'application/json'
    //                 // Add any additional headers, such as an API key, if required
    //                 // 'Authorization': 'Bearer YOUR_API_KEY'
    //     },
    // });
    //         console.log("됨2?");
    //         console.log(response.data);
    //         navigate('/main');
    //         // 회원가입 성공 시 리다이렉트 또는 다른 처리를 수행할 수 있습니다.

    //     } catch (error) {
    //         console.error('회원가입 오류:', error);
    //     }
    // };
    
    return(
        <div >

            <TopNav/>

            <div style={{width:'100%', textAlign:'center', marginTop: '1rem'}}>
                <form>            
                <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='이름' value={name} onChange={(e) => setName(e.target.value)}></input>
                <input className={styles.inputBox} type='number' name = "pwd" size = '50'  placeholder='전화번호    예시) 01012341234' value={phonenum} onChange={(e) => setPhonenum(e.target.value)}></input>
                <div className={styles.email} style ={{margin : '0.5rem'}}>
                    <input className={styles.inputBox} style ={{width:'17rem'}}type='email' name = "email" size = '50'  placeholder='Email'value={idEmail} onChange={(e) => setIdEmail(e.target.value)}></input>
                    <button className ={styles.verifyButton} onClick={requestVerificationCode}>인증</button>
                </div>

                {isCodeSent && (
                        <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <span className={styles.close} onClick={() => setIsCodeSent(false)}>
                            &times;
                            </span>
                            <p>이메일 인증 코드가 전송되었습니다.</p>
                        </div>
                        </div>
                    )}

                
                
                <div className={styles.email} style ={{margin : '0.5rem'}}>
                    <input className={styles.inputBox} style ={{width:'17rem'}} type='text' placeholder='Email 인증 번호 입력' value={code} onChange={(e) => setCode(e.target.value)} />
                    <button className ={styles.verifyButton} onClick={verifyEmailCode}>확인</button>
                </div>

                {isCodeTrue && (
                        <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <span className={styles.close} onClick={() => setIsCodeTrue(false)}>
                            &times;
                            </span>
                            <p>인증 코드가 확인되었습니다.</p>
                        </div>
                        </div>
                    )}

                {isError && (
                    <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={() => setIsError(false)}>
                        &times;
                        </span>
                        <p>이메일 인증 코드가 유효하지 않습니다.</p>
                    </div>
                    </div>
                )}
                 
                
                <input className={styles.inputBox} type='password' name = "pwd" size = '50'  placeholder='비밀번호'value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                <input className={styles.inputBox} type='password' name = "validnum" size = '50'  placeholder='비밀번호 확인'value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} ></input>
                <input className={styles.inputBox} type='number' name = "regnum" size = '50'  placeholder='사업자 등록 번호' value={businessKey} onChange={(e) => setBusinessKey(e.target.value)}></input>
                </form>
            </div>
            <div style={{width:'100%', height:'9rem'}}></div>
            <div style={{width:'100%', textAlign:'center'}}>
            <div className={styles.ButtonContainer}>
                <div className={styles.Button} onClick={handleSignUp}>사업자 회원 등록 하기</div>
            </div>
            </div> 
        </div>
        
        

    );
}
export default Sellersignup ;



