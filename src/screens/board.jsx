function Board(props){
    return (
        <div className="board" style={{display:`${props.display}`}}>

            <div className="board_div1">
                <h1>LEADER BOARD</h1>
            </div>
            <>
                {
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item,index)=>(
                    <div className="board_div2">
                        <address>{index+1}</address>
                        <div className="board_div3">
                            <address>John Doe</address>
                            <strong>3000</strong>
                        </div>
                        <address>{item} Refs</address>
                    </div>
                ))
                
                }
            </>

        </div>
    )
}

export default Board;