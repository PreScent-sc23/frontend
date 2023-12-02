function NotFound(){
    return(
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center',width:'100%', height:'100%', backgroundColor:'#e2e2e2', position:'absolute', top:'0', left:'0'}}>
            <div style={{backgroundColor: 'white', borderRadius:'50px', overflow:'hidden'}}>
            <img style={{width:'100%', height :"100%"}} src='/imgs/logo.png' alt='로고이미지'/>
            </div>
            <div style={{fontSize:'20px', fontWeight:'bold'}}>
                존재하지 않는 페이지입니다!
            </div>
        </div>
    )
}

export default NotFound;