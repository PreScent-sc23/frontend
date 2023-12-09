import React, { useState, useEffect,useRef } from 'react';
import styles from './styles.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';
// import { REACT_APP_APIKEY } from '../../.env';

function PSLensResults() {
    const API_KEY = process.env.REACT_APP_APIKEY;
    const navigate = useNavigate();
    const location = useLocation();
    const [aiResult, setAIResult] = useState({
        
        boundingImage: '', 
        resultImage: [
          {
            meaning :'',
            name : '',
            cropImage: '',
          },

        ],
      });

    useEffect(() => {
        if (location.state && location.state.resultData) {
            const resultData = location.state.resultData;
            setAIResult(resultData);
        }
    }, [location.state]);
    
    
    const [gptResult, setGptResult] = useState('');
    const [loading, setLoading] = useState(true);
    const fetchGPT3Response = async () => {
        console.log(aiResult);
        
        const prompt = `이 꽃다발에는 ${aiResult.resultImage.map((resultImage) => `${resultImage.name} (${resultImage.meaning})`).join(', ')} 등이 포함되어 있습니다. 이 조합의 꽃들이 전달하는 기분이나 분위기를 가장 잘 나타내는 형용사나 짧은 형용사 구는 무엇인가요?20자 이내로 대답해주세요. 그리고 졸업식, 프로포즈, 생일, 기념일, 크리스마스 중에 가장 어울리는 단어을 골라 10자 이내로 대답해주세요`;
        try {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: "gpt-4-1106-preview",
                // model: "gpt-3.5-turbo",
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: prompt }
                ],
                max_tokens: 400
            }, {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`
                }
            });

            let moodDescription = response.data.choices[0].message.content;

            let similarFlower = response.data.choices[0].message.content
            moodDescription = moodDescription.length > 20 ? moodDescription.substr(0, 20) : moodDescription;
            similarFlower = moodDescription.length >50 ? moodDescription.substr(40,50) : similarFlower;
;
            // similarFlower = similarFlower.length > 20  ? similarFlower.substr(0,20) : similarFlower;
            
            setGptResult(`이 꽃다발은 ${aiResult.resultImage.map(resultImage => `${resultImage.name}`)} 등을 포함하고 있어, ${moodDescription}를 담고 있습니다. 이와 유사한 상황별 태그 검색어는 ${similarFlower} 입니다. 이 태그를 검색해보신다면 비슷한 상품을 추천받을 수 있습니다. 아래는 위의 사진에 포함된 꽃의 이름과 꽃말입니다.`);

            // setGptResult(`이 꽃다발은 ${aiResult.resultImage.map(resultImage => `${resultImage.cropImage.name}`).join(', ')} 등을 포함하고 있어, ${moodDescription}를 담고 있습니다.`);
            // } catch (error) {
            //     console.error('Error fetching GPT-3.5 response', error);
            // }
        } catch (error) {
            console.error('Error fetching GPT-3.5 response', error);
        } finally {
            setLoading(false); // Set loading to false after the request completes
        }
    };
    useEffect(() => {
        fetchGPT3Response();
    }, [aiResult.resultImage]);

    return (
        <div>

            <TopNav/>
            <div>
                <div className={styles.ImageWrap} style={{height: '20rem', borderRadius:'0rem', marginTop: '6rem'}}>
                    <img src= {aiResult.boundingImage} />
                </div>
                <div className={styles.ResultWrap}>
                    {gptResult && (
                        <div className={styles.GPTResultBox}>
                            <span style={{fontWeight:'600',fontSize:'1.2rem', color :'#FF7074', fontFamily:'Pretendard'}}>-- GPT 활용 꽃 분위기 추출 --</span>
                            {gptResult}
                        </div>
                    )}

                    {aiResult.resultImage.map((flower, index) => (
                        <div key={index} className={styles.ResultBox}>
                            <div className={styles.CropImage}>
                                <img src={flower.cropImage} className={styles.FlowerBox} alt={flower.name} />
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
