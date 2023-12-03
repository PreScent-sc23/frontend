import React, { useState, useEffect,useRef } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
import Statusbar from '../../components/statusbar/statusbar';
import TopNav from '../../components/topnavigation/topnav';

function PSLensResults() {
    const [flowers, setFlowers] = useState([
        { name: '데이지', meaning: '희망, 평화, 사랑스러움, 숨겨진 사랑, 겸손한 아름다움' },
        { name: '작약', meaning: '수줍음, 부끄러움' },
        { name: '거베라', meaning: '신비, 풀 수 없는 수수께끼' },
        { name: '하얀 장미', meaning: '순수, 젊음, 새로운 시작' }
    ]);
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
                    <img src='/assets/test.png' alt='Test Image' />
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
                            <img src={`/assets/result${index + 1}.jpeg`} className={styles.FlowerBox} alt={flower.name} />
                            <div className={styles.ResultText}>{flower.name} - {flower.meaning}</div>
                        </div>
                    ))}
                </div>
            </div>
            <CustomerBottomTap/>
        </div>
    );
}

export default PSLensResults;
// import React, { useState, useEffect,useRef } from 'react';
// import styles from './styles.module.scss';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
// import Statusbar from '../../components/statusbar/statusbar';
// import TopNav from '../../components/topnavigation/topnav';

// function PSLensResults() {
//     const [flowers, setFlowers] = useState([
//         { name: '데이지', meaning: '희망, 평화, 사랑스러움, 숨겨진 사랑, 겸손한 아름다움' },
//         { name: '작약', meaning: '수줍음, 부끄러움' },
//         { name: '거베라', meaning: '신비, 풀 수 없는 수수께끼' },
//         { name: '하얀 장미', meaning: '순수, 젊음, 새로운 시작' }
//     ]);
//     const [gptResult, setGptResult] = useState('');

//     const fetchGPT3Response = async () => {
        
//         const prompt = `이 꽃다발에는 ${flowers.map(flower => `${flower.name} (${flower.meaning})`).join(', ')} 등이 포함되어 있습니다. 이 조합의 꽃들이 전달하는 기분이나 분위기를 가장 잘 나타내는 형용사나 짧은 형용사 구는 무엇인가요? 30자 이내로 답변해 주세요.`;
        
//         try {
//             const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//                 model: "gpt-3.5-turbo",
//                 messages: [
//                     { role: 'system', content: 'You are a helpful assistant.' },
//                     { role: 'user', content: prompt }
//                 ],
//                 max_tokens: 400
//             }, {
//                 headers: {
//                     'Authorization': `Bearer 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` // Replace with your actual API key
//                 }
//             });

//             let moodDescription = response.data.choices[0].message.content;
//             moodDescription = moodDescription.length > 20 ? moodDescription.substr(0, 20) : moodDescription;
            
//             setGptResult(`이 꽃다발은 ${flowers.map(flower => `${flower.name}`).join(', ')} 등을 포함하고 있어, ${moodDescription}를 담고 있습니다.`);
//             } catch (error) {
//                 console.error('Error fetching GPT-3.5 response', error);
//             }
//         };
//     useEffect(() => {
//         fetchGPT3Response();
//     }, []);


//     return (
//         <div>
//             <Statusbar/>
//             <TopNav/>
//             <div>
//                 <div className={styles.ImageWrap} style={{height: "20rem", borderRadius:"0rem"}}>
//                     <img src='/assets/test.png' alt='Test Image' />
//                 </div>
//                 <div className={styles.ResultWrap}>
                    
//                     {gptResult && <div className={styles.GPTResultBox}>
//                         <span style={{fontSize: '1.2rem', fontWeight:'700', textAlign:'center', color : '#FF7074'}}>-- GPT 기반 꽃 분위기 추출 --</span>
//                          {gptResult}
//                     </div>}
//                     {/* {gptResult && (
//                         <div style={{fontSize: "1rem", textAlign: "center", marginTop: "1rem", paddingTop: "1rem"}}>
//                             {gptResult}
//                         </div>
//                     )} */}
//                     {flowers.map((flower, index) => (
//                         <div key={index} className={styles.ResultBox}>
//                             <img src={`/assets/result${index + 1}.jpeg`} className={styles.FlowerBox} alt={flower.name} />
//                             <div className={styles.ResultText}>{flower.name} - {flower.meaning}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <CustomerBottomTap/>
//         </div>
//     );
// }

// export default PSLensResults;
// // import React, { useState, useEffect,useRef } from 'react';
// // import styles from './styles.module.scss';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';
// // import Statusbar from '../../components/statusbar/statusbar';
// // import TopNav from '../../components/topnavigation/topnav';

// // function PSLensResults (){
    
// //     return(
// //         <div>
// //             <Statusbar/>
// //             <TopNav/>

// //             <div>
// //                 <div className={styles.ImageWrap} style={{height: "20rem", borderRadius:"0rem"}}>
// //                     <img src='/assets/test.png'></img>
// //                 </div>

// //                 {/* <div style={{fontSize:"1rem", textAlign:"center", marginTop: "1rem", paddingTop:"1rem"}}>--------- 위의 사진에 포함된 꽃입니다 ---------- </div> */}
// //                 <div className={styles.ResultWrap}>

// //                     <div className={styles.ResultBox}>
                        
// //                         <img src='/assets/result1.jpeg' className={styles.FlowerBox}></img>
// //                         <div className={styles.ResultText}>캐모마일 - 역경에 굴하지 않는 강인함</div>
// //                     </div>

// //                     <div className={styles.ResultBox}>
                        
// //                         <img src='/assets/result2.jpeg' className={styles.FlowerBox}></img>
                        
// //                         <div className={styles.ResultText}>작약 - 수줍음, 부끄러움</div>
// //                     </div>

// //                     <div className={styles.ResultBox}>

// //                         <img src='/assets/result3.jpeg'className={styles.FlowerBox}></img>
// //                         <div className={styles.ResultText}>거베라 - 신비, 풀 수 없는 수수께끼</div>
// //                     </div>

// //                     <div className={styles.ResultBox}>
// //                         <img src='/assets/result4.jpeg' className={styles.FlowerBox}></img>
// //                         <div className={styles.ResultText}>하얀 장미 - 순수, 젊음, 새로운 시작</div>
// //                     </div>


// //                 </div>


// //             </div>
// //             <CustomerBottomTap/>
// //         </div>
// //     );

// // }export default PSLensResults;