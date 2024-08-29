import logo from '../logo.svg';
import { useEffect,useState } from "react";

function Tasks(props){

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



    return (
        <div className="task" style={{display:`${props.display}`}}>
            <div className="claim_tab">

            <img className='icon2' src={logo} alt=""/>
            <div className="claim_text">
                 <span>Next claim at</span>
                    <div className="claim_countdown_timer_box">{timeRemaining.hours}</div><span className="span_count">:</span>
                    <div className="claim_countdown_timer_box">{timeRemaining.minutes}</div><span className="span_count">:</span>
                    <div className="claim_countdown_timer_box">{timeRemaining.seconds}</div>
            </div>
        </div>
        <div>
            <strong>Tasks list</strong>
            <>
                {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item,index)=>(
                    <div className="board_div2" style={{width:"90%"}}>
                        <strong>{index+1}</strong>
                        <div className="board_div3">
                            <address>Join our channel</address>
                            <strong>+100,000</strong>
                        </div>
                        <address style={{cursor:"pointer"}}>completed</address>
                    </div>
                ))
                
                }
            </>
        </div>
        </div>
    )
}

export default Tasks;