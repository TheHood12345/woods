function SplashScreen(props){
    
    return (
        <div className="splash_screen" style={{display:`${props.display}`}}>
            <div style={{width:"80%",opacity:"0.7",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:"20px",paddingLeft:"20px",paddingRight:"20px",borderRadius:"10px",backgroundColor: "black"}}>
                <h1 className="woods_des">SAVE THE TREES WITH <span className="woods_des">WOODS</span></h1>
            </div>
            

            <div style={{width:"80%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingBottom:"20px"}}>
            <div className="splash_loading">
                <div className={`${props.loaded1 == false? "splash_load_dot": "splash_load_dot_no_anim"}`}></div>
                <div className={`${props.loaded2 == false? "splash_load_dot": "splash_load_dot_no_anim"}`}></div>
                <div className={`${props.loaded3 == false? "splash_load_dot": "splash_load_dot_no_anim"}`}></div>
                <div className={`${props.loaded4 == false? "splash_load_dot": "splash_load_dot_no_anim"}`}></div>
                <div className={`${props.loaded5 == false? "splash_load_dot": "splash_load_dot_no_anim"}`}></div>
            </div>
            
            <h2 className="woods_des">TON blockchain</h2>
            <div style={{color:"gray",width:"80%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>In partnership with Telegram</div>
            </div>
            
        </div>
    )
}

export default SplashScreen;