import { useEffect,useState } from "react";
import logo from '../logo.svg';
import ImageSlider from "./slider";
import Profile from "./profile";

function Claim(props){

    const startDate = new Date('2024-08-18T16:00:00'); // Change to the specific start date and time
    const targetDate = new Date(startDate.getTime() + 60 * 24 * 60 * 60 * 1000); // 60 days from the start date
  
    const calculateTimeRemaining = ()=> {
      const now = new Date();
      const timeRemaining = targetDate.getTime() - now.getTime(); // Ensure timeRemaining is a number
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      return { days, hours, minutes, seconds, timeRemaining };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const timer = setInterval(() => {
          const remaining = calculateTimeRemaining();
          setTimeRemaining(remaining);
    
          if (remaining.timeRemaining <= 0) {
            clearInterval(timer); // Stop the timer
          }
        }, 1000); // Update every second
    
        return () => clearInterval(timer); // Cleanup timer on component unmount
      }, []);

      useEffect(()=>{
        const storedTime = localStorage.getItem("startTime");
        const currentTime = new Date().getTime();
      
        if(storedTime){
          if(12 * 60 * 60 * 1000 - (currentTime - parseInt(storedTime, 10)) <= 0){
                
          }else{
            const timer = setTimeout(()=>{
                
            },24 * 60 * 60 * 1000 - (currentTime - parseInt(storedTime, 10)));
      
            return clearTimeout(timer);
          }
        }
        },[]);

        const [h1,setH1] = useState("0%");
        const [w1,setW1] = useState("0%");
        const [h2,setH2] = useState("100%");
        const [w2,setW2] = useState("100%");

        const [d1,setD1] = useState("none");

    return (
      <>
        <Profile width={w1} height={1} display={d1}/>

        <div className="claim_page" style={{display:`${props.display}`,overflow:"scroll",width:{w2},height:{h2}}}>

        

          <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
            <div className="launch_countdown">
                    <address><i>Countdown till woods token launch</i></address>
                        <div className="launch_countdown_timer">
                            <div className="launch_countdown_timer_box_day">{timeRemaining.days} days</div>
                            <div className="launch_countdown_timer_box">{timeRemaining.hours}</div><span className="span_count">:</span>
                            <div className="launch_countdown_timer_box">{timeRemaining.minutes}</div><span className="span_count">:</span>
                            <div className="launch_countdown_timer_box">{timeRemaining.seconds}</div>
                        </div>
            </div>
            </div>
            <ImageSlider/>
            <div className="pro_bal">
                <div className="pro_bal_item pro_bal_item1" onClick={()=>{
                  setH1("0%");
                  setW1("0%");
                  setH2("0%");
                  setW2("0%");
                  setD1("flex");
                }}>
                    <img className='icon1' src={logo} alt=""/>
                    <span>Profile</span>
                </div>
                
                <div className="pro_bal_item pro_bal_item2">
                    <img className='icon1' src={logo} alt=""/>
                    <span>1000</span>
                </div>
            </div>
            <div className="claim_tab">

            <img className='icon2' src={logo} alt=""/>
            <div className="claim_text">
                 <span>Next harvest at</span>
                    <div className="claim_countdown_timer_box">{timeRemaining.hours}</div><span className="span_count">:</span>
                    <div className="claim_countdown_timer_box">{timeRemaining.minutes}</div><span className="span_count">:</span>
                    <div className="claim_countdown_timer_box">{timeRemaining.seconds}</div>
            </div>
           
            

            </div>

        </div>
        
        </>
    );
}

export default Claim;