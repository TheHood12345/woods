import logo from '../logo.svg';
import { useEffect,useState } from 'react';

function ConnectWallet(props){

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
        <div className="connect_wallet" style={{display:`${props.display}`}}>
        
        
          <div className="claim_tab">
            <img className='icon2' src={logo} alt=""/>
            <div className="launch_countdown">
                    <address>Countdown till launch</address>
                        <div className="launch_countdown_timer">
                            <div className="launch_countdown_timer_box_day">{timeRemaining.days} days</div>
                            <div className="launch_countdown_timer_box">{timeRemaining.hours}</div><span className="span_count">:</span>
                            <div className="launch_countdown_timer_box">{timeRemaining.minutes}</div><span className="span_count">:</span>
                            <div className="launch_countdown_timer_box">{timeRemaining.seconds}</div>
                        </div>
            </div>
          </div>
          
          <div className='wall_div_1'>
            <address>Connect your wallet address and participate in tasks to increase your earnings while waiting for the launch date on the <strong>22nd of December</strong> this year !!</address>
            <button className='wall_div_but'>Connect Ton wallet</button>
          </div>
          
        </div>
    )
}

export default ConnectWallet;