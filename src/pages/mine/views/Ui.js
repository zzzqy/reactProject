import React, { Component,Fragment } from 'react'
import { Grid } from 'antd-mobile'
import { fetchData } from '../../../utils/commonUtil'
import "./style.scss"
import  buy from "../../../assets/images/icon-want-buy.png"  
import  barcode from "../../../assets/images/offline-barcode.png"                   
class Ui extends Component {
    constructor(props){
        super(props)
        this.state={
            orderList:[],
            serverList:[],
        }
    }
    render() {
        return (
            <Fragment>
                <div className="top">
                    <div className="go">
                        <span>去签到</span>
                    </div>
                    <div className="Info">
                        <div className="left">
                            <img src={buy} alt ="用户头像"/>
                        </div>
                        <div className="middle">
                            <div className="hello">你好</div>  
                            <div className="vipInfo">
                                <span>普通会员 &gt;</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={barcode} alt="会员"/>                   
                        </div>
                       
                    </div>
                </div>
                <div className="order">
                    <div className="allOrder">
                        <p>我的订单</p>
                        <p>全部订单&gt;</p>
                    </div>
                    <Grid data={this.state.orderList} 
                        // onClick={(el, index) => {
                        //     this.props.history.push()
                        // }} 
                        columnNum={3} 
                        hasLine={false}/> 
                       
                </div>
                <div className="assets">
                    <p className="title">我的资产</p>
                    <ul>
                    
                        <li>
                            <span className="num">￥0.00</span>
                            <span>余额</span>
                        </li>
                        <li>
                            <span className="num">0</span>
                            <span>积分</span>
                        </li>
                        <li>
                            <span className="num">￥0.00</span>
                            <span>卡包</span>
                        </li>
                        <li>
                            <span className="num">0</span>
                            <span>优惠券</span>
                        </li>
                    </ul>
                </div>
                <div className="server">
                    <p className="title">我的服务</p>
                    <Grid data={this.state.serverList} 
                    columnNum={4} 
                    hasLine={false}/> 
                </div>
            </Fragment>
        );
    }
    async componentDidMount(){
        this.setState({
            orderList:(await fetchData("/api/orderList")).data.list.map(value=>(
                {
                    icon: value.imgUrl,
                    text: value.title,
                    id:value.id
                }
            ))
        })
        this.setState({
            serverList:(await fetchData("/api/serverList")).data.list.map(value=>(
                {
                    icon: value.imgUrl,
                    text: value.title,
                    id:value.id
                }
            ))
        })    
    }
}
                                
export default Ui;