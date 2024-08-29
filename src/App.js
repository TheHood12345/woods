import logo from './logo.svg';
import './App.css';
import SplashScreen from './screens/splash';
import { useEffect, useState } from 'react';
import Footer from './screens/footer';
import Claim from './screens/claim';
import ConnectWallet from './screens/connect_wallet';
import Board from './screens/board';
import Invites from './screens/invites';
import Tasks from './screens/tasks';

function App() {
  const [splash_l_1,set_splash_l_1] = useState(false);
  const [splash_l_2,set_splash_l_2] = useState(false);
  const [splash_l_3,set_splash_l_3] = useState(false);
  const [splash_l_4,set_splash_l_4] = useState(false);
  const [splash_l_5,set_splash_l_5] = useState(false);

  const [splash_display,set_splash_display] = useState("flex");
  const [the_body_display,set_the_body_display] = useState("none");
  const [claim_display,set_claim_display] = useState("flex");
  const [invites_display,set_invites_display] = useState("none");
  const [tasks_display,set_tasks_display] = useState("none");
  const [board_display,set_board_display] = useState("none");
  const [wallet_display,set_wallet_display] = useState("none");

  useEffect(()=>{
    setTimeout(()=>{
      set_splash_l_1(true);
    },2000);
    setTimeout(()=>{
      set_splash_l_2(true);
    },3000);
    setTimeout(()=>{
      set_splash_l_3(true);
    },4000);
    setTimeout(()=>{
      set_splash_l_4(true);
    },5000);
    setTimeout(()=>{
      set_splash_l_5(true);
    },6000);

    if(splash_l_1 === true && splash_l_2 === true && splash_l_3 === true && splash_l_4 === true && splash_l_5 === true){
      
      setTimeout(()=>{
        set_splash_display("none");
        set_the_body_display("flex");
      },2000);
    }
  },[splash_l_1,splash_l_2,splash_l_3,splash_l_4,splash_l_5]);

  const handle_navWallet = (data)=>{
    alert(data);
  }



  return (
    <div className="App">
      {/* This is the splash screen */}
      <SplashScreen display={splash_display} loaded1={splash_l_1} loaded2={splash_l_2} loaded3={splash_l_3} loaded4={splash_l_4} loaded5={splash_l_5}/>
      
      {/* This is the entire loaded screen */}
      <div className="the_body" style={{display:`${the_body_display}`}}>

        {/* This is for each page */}
        <div className='workbook'>

          <Claim display={claim_display}/>
          <ConnectWallet display={wallet_display}/>
          <Invites display={invites_display}/>
          <Board display={board_display}/>
          <Tasks display={tasks_display}/>

        </div>
        
        {/* This is the bottom nav bar */}
        <div style={{width:"100%",height:"10%"}}>
          <Footer navWallet={handle_navWallet} inv={()=>{
            set_wallet_display("none");
            set_claim_display("none");
            set_board_display("none");
            set_tasks_display("none");
            set_invites_display("flex");
          }} wal={()=>{
            set_wallet_display("flex");
            set_claim_display("none");
            set_board_display("none");
            set_tasks_display("none");
            set_invites_display("none");
          }} cla={()=>{
            set_wallet_display("none");
            set_claim_display("flex");
            set_tasks_display("none");
            set_board_display("none");
            set_invites_display("none");
          }} tas={()=>{
            set_wallet_display("none");
            set_tasks_display("flex");
            set_invites_display("none");
            set_board_display("none");
            set_claim_display("none");
          }} boa={()=>{
            set_wallet_display("none");
            set_board_display("flex");
            set_tasks_display("none");
            set_invites_display("none");
            set_claim_display("none");
          }} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
