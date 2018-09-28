import React, { Component } from 'react'
   
import selectedImg from '../../../assets/iconfont/selected.svg'
import leftArrow from '../../../assets/iconfont/left.svg'
import './style.scss'

class Ui extends Component {
    render() {
        return (
            <section >
                <h4>
                    <i className="select"></i>
                    <span>多点超市(昌平西关店)</span>
                    <b style={{float:"right"}}><img src={leftArrow} alt="" width="22px"/></b>
                </h4>
                <ul className="cartlist">
                    <li>
                        <i className="select"></i>
                        <div className="goodInfo">
                            <div>白心火龙果【精】1粒</div>
                            <span>
                                <strong>￥8.5</strong>
                                <b>仅剩3件</b> 
                            </span>
                        </div>
                        <div style={{paddingLeft:"20px"}}>
                            <i className="add" onClick={() => {
                                this.props.decGoodNum() 
                                this.props.handleDecGoodNum() 
                            }}>-</i>  
                            <span className="stnum"> {this.props.goodNum<=0 ? "1" : this.props.goodNum} </span>  
                            <i className="add" onClick={() => {
                                this.props.addGoodNum() 
                                this.props.handleAddGoodNum() 
                            }}>+</i>  
                        </div>
                    </li>
                </ul>
                <div className="countAll">
					<div>
						<div className="sumPrice">
                            合计:<strong>{"￥"+this.props.goodNum*8.5}</strong>（不含运费）
                        </div>
					</div>  
                    <span className="selOk">选好了</span>  
                </div>
            </section>
        );
    }
}
                                
export default Ui;