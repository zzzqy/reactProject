import React from 'react'

export default  (props) => {
    return (
        <section key={props.rowID}>
            <ul>
                <li><a href=""><img src={props.rowData.floorImg} alt="" style={{width:"100%"}}/></a></li>
            </ul>                           
            <ul className="ActiveGrid">
                {props.rowData.detailList.map((val,i) => {
                    return (
                        <li key={i} className="goodList" >
                            <div className="goodListImg">
                                <a href="" style={{position: "relative",width:"100%",display:"block"}}>
                                    <img src={val.icon} alt="" style={{width:"1.05rem"}}/>
                                    <span><img src={val.cornerSign} alt="" style={{width:"1.05rem",position: "absolute",left: 0,top:0}}/></span>
                                </a>                                         
                            </div>
                            <div className="goodInfo">
                                <p className="text" >{val.text}</p>
                                <del >{val.price?"￥"+ val.price :""}</del>
                                <p className="price" >
                                    <span style={{color:"#ff712b",fontSize:"16px"}}>{"￥"+ val.promoPrice}</span>
                                    <b className="add" onClick={() => {
                                        props.handleJoinCart(val.id)
                                    }} >+</b>
                                </p>
                            </div>                                
                        </li>
                    )
                })}
            </ul>                           
        </section>
    )
}