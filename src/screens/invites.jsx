function Invites(props){
    return (
        <div className="invites" style={{display:`${props.display}`}}>
            <div className="invites_div_1">
                <h1>Invite friends !</h1>
                <address>You get a token added to your wallet with every invite you make</address>

                <div className="invites_div_2">
                    <a href="" className="t_invites" style={{cursor:"pointer"}}>Invite a friend</a>
                    <address className="t_invites" style={{cursor:"pointer"}} onClick={()=>{alert("copied referral link")}}>&copy;</address>
                </div>

            </div>

            <div className='invites_div_3'>
                <address>Total invites</address>
                <address>...</address>
            </div>

            <div className='invites_div_3'>
                <address>List of invites</address>
                <address>Reload icon</address>
            </div>
           

        </div>
    )
}

export default Invites;