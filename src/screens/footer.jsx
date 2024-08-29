import logo from '../logo.svg';
import { useState } from "react";
import taskz from "../wood3.png"

function Footer(props){

    const [invites, setInvites] = useState("white");
    const [wallet, setWallet] = useState("white");
    const [claim, setClaim] = useState("white");
    const [tasks, setTasks] = useState("white");
    const [board, setBoard] = useState("white");

    const [anim_invites,setAnim_invites] = useState("");
    const [anim_wallet,setAnim_wallet] = useState("");
    const [anim_claim,setAnim_claim] = useState("footer_item_add");
    const [anim_tasks,setAnim_tasks] = useState("");
    const [anim_board,setAnim_board] = useState("");

    const handleNav = ()=>{
        props.navWallet("flex");
        props.navInvites("none");
        props.navClaim("none");
        props.navTasks("none");
        props.navBoard("none");
    }


    return (
        <div className="footer1">
            <div className= {`footer_item ${anim_invites}`} onClick={()=>{
                setBoard("white");
                setClaim("white");
                setInvites("white");
                setTasks("white");
                setWallet("white");

                setAnim_invites("footer_item_add");
                setAnim_wallet("");
                setAnim_claim("");
                setAnim_board("");
                setAnim_tasks("");

                props.inv();
            }}>
                <img className='icon1' src={logo} alt=""/>
                <address className="icon_text1" style={{color: `${invites}`}}>Invites</address>
            </div>
            <div className={`footer_item ${anim_wallet}`} onClick={()=>{
                setBoard("white");
                setClaim("white");
                setInvites("white");
                setTasks("white");
                setWallet("white");

                setAnim_wallet("footer_item_add");
                setAnim_invites("");
                setAnim_claim("");
                setAnim_board("");
                setAnim_tasks("");

                props.wal();
            }}>
                <img className='icon1' src={logo} alt=""/>
                <address className="icon_text1" style={{color: `${wallet}`}}>Wallet</address>
            </div>
            <div className={`footer_item ${anim_claim}`} onClick={()=>{
                setBoard("white");
                setClaim("white");
                setInvites("white");
                setTasks("white");
                setWallet("white");

                setAnim_claim("footer_item_add");
                setAnim_invites("");
                setAnim_wallet("");
                setAnim_board("");
                setAnim_tasks("");

                props.cla();
            }}>
                <img className='icon1' src={logo} alt=""/>
                <address className="icon_text1" style={{color: `${claim}`}}>Harvest</address>
            </div>
            <div className={`footer_item ${anim_tasks}`} onClick={()=>{
                setBoard("white");
                setClaim("white");
                setInvites("white");
                setTasks("white");
                setWallet("white");

                setAnim_tasks("footer_item_add");
                setAnim_invites("");
                setAnim_claim("");
                setAnim_board("");
                setAnim_wallet("");

                props.tas();
            }}>
                <img className='icon1' src={logo} alt=""/>
                <address className="icon_text1" style={{color: `${tasks}`}}>Tasks</address>
            </div>
            <div className={`footer_item ${anim_board}`} onClick={()=>{
                setBoard("white");
                setClaim("white");
                setInvites("white");
                setTasks("white");
                setWallet("white");

                setAnim_board("footer_item_add");
                setAnim_invites("");
                setAnim_claim("");
                setAnim_wallet("");
                setAnim_tasks("");

                props.boa();
            }}>
                <img className='icon1' src={logo} alt=""/>
                <address className="icon_text1"  style={{color: `${board}`}}>Board</address>
            </div>
        </div>
    )
}

export default Footer;