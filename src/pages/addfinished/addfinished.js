import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

export function AddFinished(){
    
    const navigate = useNavigate(); 
    const [fpName, setProductName] = useState('');
    const [fpPrice, setProductPrice] = useState('');
    const [fpTag, setProductTag] = useState('');
    const [fpDetail, setProductDetail] = useState('');
    const [getFpFlowerList, setGetFpFlowerList] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [fileDataURL, setFileDataURL] = useState(null);


    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setFileDataURL(reader.result);
            };
            reader.readAsDataURL(file);
        }
        else{
            console.log("이미지 있긴 하냐?");
        }
    }

    const handleSubmission = async () => {

        const token = localStorage.getItem('token');
        const formData = new FormData();
        if (selectedFile) {
            formData.append("fpImage", selectedFile);
        }
        else
        {
            console.log("formdata비었대");
        }

        const data = {
            fpName : fpName,
            fpTag : fpTag,
            fpPrice : fpPrice,
            fpDetail : fpDetail,
            getFpFlowerList : getFpFlowerList,
        }
        const json = JSON.stringify(data);
        const blob = new Blob([json],{type: "application/json"});
        formData.append('finishedProduct',blob);
        
        for (let pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]); 
        }

        try {
                    const response = await axios.post('http://3.36.175.224:8080/finished-product/add', formData,{
                        headers: {'Content-Type' : 'multipart/form-data', 'Authorization' : `Bearer ${token}`
                },
            });
                    console.log("전송 완료");
                    console.log(response.data);
                    navigate('/managefinished');
                } catch (error) {
                    console.error('등록 오류:', error);
                }
    }
    return(
        <div>
            <Statusbar/>
            <TopNav/>
            <div className={styles.Container}>
                <div className={styles.ProductPhoto}>{fileDataURL && <img src={fileDataURL} alt = "Product Image"/>}</div>
                <input type="file" id="fileInput" style={{display:'none'}} onChange={handleFileSelect}/>
                <label htmlFor="fileInput" className={styles.ChangePhoto}>이미지 수정</label>
                <form style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <input className={styles.inputBox} type='text' name = "name" size = '50' placeholder='상품명' value={fpName} onChange={(e) => setProductName(e.target.value)}></input>
                    <input className={styles.inputBox} type='number' name = "pwd" size = '50'  placeholder='가격' value={fpPrice} onChange={(e) => setProductPrice(e.target.value)}></input>
                    <input className={styles.inputBox} type='text' name = "email" size = '50'  placeholder='상품과 관련된 키워드를 하나 입력하세요' value={fpTag} onChange={(e) => setProductTag(e.target.value)}></input>
                    <input className={styles.inputBox} type='text' name = "validnum" size = '50'  placeholder='상품에 대한 상세정보를 입력하세요' value={fpDetail} onChange={(e) => setProductDetail(e.target.value)}></input>
                    <input className={styles.inputBox} type='text' name = "flowerlist" size = '50'  placeholder='들어가는 꽃의 종류를 입력하세요' value={getFpFlowerList} onChange={(e) => setGetFpFlowerList(e.target.value)}></input>
                </form>
            </div>

            <div>
                <div className={styles.Button} onClick={handleSubmission}>등록</div>
            </div>
        </div>
    )
} export default AddFinished;