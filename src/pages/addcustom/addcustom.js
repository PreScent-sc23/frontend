import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

export function AddCustom(){
 const [surveys, setSurveys] = useState(["원하는 가격대를 작성해주세요.", "원하는 꽃의 종류를 1-3가지 입력해주세요."]);
 const [surveyCount, setSurveyCount] = useState(surveys.length);


 const handleChange = (e, index) => {
     const newSurveys = [...surveys];
     newSurveys[index] = e.target.value;
     setSurveys(newSurveys);
 };

 const handleSubmit = async() => {
    console.log("전송");
    if(surveys.length < 11) {
        try {
            const response = await axios.post('http://3.36.175.224:8080/customize-product-form/add', {
                surveys,
            },{
                headers: {
                    'Content-Type': 'formdata'
        },
    });
            console.log("전송 완료");
            navigate('/home');
        } catch (error) {
            console.error('전송 오류');
        }
    }
    else {
        alert('최대 설문 수를 초과했습니다.')
    }
 };

 const addSurvey = () => {
     setSurveys(prevSurveys => [...prevSurveys, ""]);
     setSurveyCount(prevCount => prevCount + 1);
 };

 const deleteSurvey = (index) => {
    if (index<2) {
        alert('기본 제공 설문에 대한 삭제는 허용되지 않습니다.')
        return;
    }
    setSurveys(prevSurveys => {
        const newSurveys = prevSurveys.filter((_, i) => i !== index);
        setSurveyCount(newSurveys.length);
        return newSurveys;
       });
 };

 const navigate = useNavigate(); 

 return(
     <div>
        <Statusbar/>
        <TopNav/>
        <div style={{color: surveyCount > 10 ? 'red' : 'black', backgroundColor: '#e2e2e2',width:'4rem', height:'1.5rem',textAlign:'center', borderRadius:'4px', margin:'8px auto', marginTop:'40px'}}>{`${surveyCount} / 10`}</div>
        <div style={{width:'410px', height:'590px',  margin:'4px auto',border:'solid #e2e2e2 2px', borderRadius:'8px',overflow:'auto'}}>
         {surveys.map((survey, index) => (
             <div style={{display:'flex',justifyItems: 'center', alignItems:'center'}} key={index}>
               <input type='text' className={styles.TextField} value={survey} onChange={(e) => handleChange(e, index)} />
               <button className={styles.DeleteButton} onClick={() => deleteSurvey(index)}>Delete</button>
             </div>
         ))}
        </div>
         <button className={styles.AddButton} onClick={addSurvey}>양식 추가하기</button>
         <button className={styles.SubmitButton} onClick={handleSubmit}>주문제작 양식 등록</button>

     </div>
 )
} 

export default AddCustom;