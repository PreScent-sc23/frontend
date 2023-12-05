import React, { useState, useEffect,useRef } from 'react';
import styles from './styles.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function PSLensResults() {
    const navigate = useNavigate();
    const location = useLocation();
    const [aiResult,setAIResult] =useState([]);

    // const [flowers, setFlowers] = useState([
    //     { cropImage : '', name: '데이지', meaning: '희망, 평화, 사랑스러움, 숨겨진 사랑, 겸손한 아름다움' },
    //     { cropImage : '', name: '작약', meaning: '수줍음, 부끄러움' },
    //     { cropImage : '', name: '거베라', meaning: '신비, 풀 수 없는 수수께끼' },
    //     { cropImage : '', name: '하얀 장미', meaning: '순수, 젊음, 새로운 시작' }
    // ]);
    
    useEffect(()=>{
        if(location.state && location.state.resultData) {
            const resultData = location.state.resultData;
            setAIResult(resultData);
        }
    },[location.state]);
    
    
    
    const [gptResult, setGptResult] = useState('');
    const fetchGPT3Response = async () => {
        
        const prompt = `이 꽃다발에는 ${flowers.map(flower => `${flower.name} (${flower.meaning})`).join(', ')} 등이 포함되어 있습니다. 이 조합의 꽃들이 전달하는 기분이나 분위기를 가장 잘 나타내는 형용사나 짧은 형용사 구는 무엇인가요? 30자 이내로 답변해 주세요.`;
        
        try {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: prompt }
                ],
                max_tokens: 400
            }, {
                headers: {
                    // 'Authorization': `` // Replace with your actual API key
                }
            });

            let moodDescription = response.data.choices[0].message.content;
            moodDescription = moodDescription.length > 20 ? moodDescription.substr(0, 20) : moodDescription;
            
            setGptResult(`이 꽃다발은 ${flowers.map(flower => `${flower.name}`).join(', ')} 등을 포함하고 있어, ${moodDescription}를 담고 있습니다.`);
            } catch (error) {
                console.error('Error fetching GPT-3.5 response', error);
            }
        };
    useEffect(() => {
        fetchGPT3Response();
    }, []);

    return (
        <div>
            <Statusbar/>
            <TopNav/>
            <div>
                <div className={styles.ImageWrap} style={{height: "20rem", borderRadius:"0rem"}}>
                    <img src= {aiResult.}/>
                </div>
                <div className={styles.ResultWrap}>
                    {gptResult && (
                        <div className={styles.GPTResultBox}>
                            <span style={{fontWeight:'600',fontSize:'1.2rem', color :'#FF7074'}}>-- GPT 활용 꽃 분위기 추출 --</span>
                            {gptResult}
                        </div>
                    )}
                    {flowers.map((flower, index) => (
                        <div key={index} className={styles.ResultBox}>
                            <div className={styles.CropImage}>
                                <img src={`/assets/result${index + 1}.jpeg`} className={styles.FlowerBox} alt={flower.name} />
                            </div>
                            {/* <img src={`/assets/result${index + 1}.jpeg`} className={styles.FlowerBox} alt={flower.name} /> */}
                            <div className={styles.ResultTextWrap}>
                                <span className={styles.ResultText} style={{fontSize: '1.2rem', fontWeight : '600' , color : '#FF7074', }}>{flower.name}</span>
                                <span className={styles.ResultText}>{flower.meaning}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <CustomerBottomTap/>
        </div>
    );




    // return (
    //     <div>
    //         <Statusbar/>
    //         <TopNav/>
    //         <div>
    //             <div className={styles.ImageWrap} style={{height: "20rem", borderRadius:"0rem"}}>
    //                 <img src='/assets/test.png' alt='Test Image' />
    //             </div>
    //             <div className={styles.ResultWrap}>
    //                 {gptResult && (
    //                     <div className={styles.GPTResultBox}>
    //                         <span style={{fontWeight:'600',fontSize:'1.2rem', color :'#FF7074'}}>-- GPT 활용 꽃 분위기 추출 --</span>
    //                         {gptResult}
    //                     </div>
    //                 )}
    //                 {flowers.map((flower, index) => (
    //                     <div key={index} className={styles.ResultBox}>
    //                         <div className={styles.CropImage}>
    //                             <img src={`/assets/result${index + 1}.jpeg`} className={styles.FlowerBox} alt={flower.name} />
    //                         </div>
    //                         {/* <img src={`/assets/result${index + 1}.jpeg`} className={styles.FlowerBox} alt={flower.name} /> */}
    //                         <div className={styles.ResultTextWrap}>
    //                             <span className={styles.ResultText} style={{fontSize: '1.2rem', fontWeight : '600' , color : '#FF7074', }}>{flower.name}</span>
    //                             <span className={styles.ResultText}>{flower.meaning}</span>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //         <CustomerBottomTap/>
    //     </div>
    // );
}

export default PSLensResults;
