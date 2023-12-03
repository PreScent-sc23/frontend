function NotFound(){
    return(
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center',width:'100%', height:'100%', position:'absolute', top:'0', left:'0'}}>
            <div style={{backgroundColor: 'white', borderRadius:'50px', overflow:'hidden'}}>
            <img style={{width:'100%', height :"100%"}} src='/imgs/logo.png' alt='로고이미지'/>
            </div>
            <span style={{fontSize:'1.2rem', fontWeight:'bold', color : '#858585', textAlign:'center'}}>
                존재하지 않는 페이지입니다!
            </span>
        </div>
    )
}

export default NotFound;