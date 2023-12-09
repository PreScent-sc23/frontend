function NotFound(){
    return(
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center',width:'100%', height:'100%', position:'absolute', top:'0', left:'0'}}>
            <img style={{width:'3rem', height :"3rem"}} src='/assets/svglogo.svg' alt='로고이미지'/>
            <span style={{marginTop : '1rem',fontSize:'1.5rem', fontWeight:'bold', color : '#858585', textAlign:'center'}}>
                - 개발중 -
            </span>
        </div>
    )
}

export default NotFound;