import React, { Component,Fragment } from 'react'

import { NavBar,Icon } from 'antd-mobile'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import { fetchData } from '../../utils/commonUtil'
import cart from '../../assets/iconfont/cart.svg'

import "./style.scss"

const mapstate = (state) => {
    return{
        goodNum:state.Home.goodNum
    }
}

class Contain extends Component {
    constructor(props){
        super(props);
        this.state={
            floorlist:[]
        }
    }
    async componentDidMount() {
        let result = (await fetchData("/api/floorlist")).dataList.map((val) => ({
            floorImg:val.imageUrl,
            detailList:val.detailList.map((v) => ({
                icon:v.imageUrl,
                cornerSign:v.cornerSign,
                price:v.price,
                promoPrice:v.promotionPrice,
                text:v.title,
                stock:v.stock,
                id:v.id              
            }))
        }))
        this.setState((prevState) => {
            return{
                floorlist:[
                    ...prevState.floorlist,
                    ...result
                ]
            }
        })
    }
    render() {
        return (
            <Fragment>
                <div className="type">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => {
                            this.props.history.push(this.props.location.state.url)
                        }}
                        rightContent={[
                            <img key="1" className="imgSize" src={cart} alt="" />,
                            
                        ]}
                    >{this.props.location.state.text}</NavBar> 
                    <span className="num">{this.props.goodNum}</span>
                </div>  
                {this.state.floorlist.map((v,i) => {
                    return (
                        <div key={i}>
                        <ul>
                            <li><a href=""><img src={v.floorImg} alt="" style={{width:"100%"}}/></a></li>
                        </ul>
                    <ul className="ActiveGrid" >
                    {v.detailList.map((val,i) => {
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
                                            // this.props.handleJoinCart(val.id)
                                        }} >+</b>
                                    </p>
                                </div>                                
                            </li>
                        )
                    })}
                    </ul> 
                </div>)
                })}
        </Fragment>
        );
    }
}
                                
export default withRouter(connect(mapstate)(Contain));