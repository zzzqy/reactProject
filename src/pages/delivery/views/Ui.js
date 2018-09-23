import React, { Component,Fragment } from 'react'

import { NavBar, Icon,Tabs } from 'antd-mobile'; 
import { StickyContainer } from 'react-sticky';

import SuperMarket from './Supermarket'

import './style.scss'

import logo from '../../../assets/images/logo.png'
import position from '../../../assets/iconfont/position.svg'
class DeliveryUi extends Component {
    constructor(props){
        super(props);
        this.state={
            tabs : [
                { title: '多点超市' },
                { title: '全球精选' },
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <NavBar
                    mode="light"
                    leftContent={[
                        <div key="0" style={{color:"#999"}}>
                            <img key="1" src={position} alt="" style={{width:"25px"}}/>
                            送至:昌平站
                        </div>
                    ]}
                    style={{position:"relative"}}
                    icon={<Icon type="right" style={{color:"#ccc",position:"absolute",left: '1.14rem', top:'25%'}}/>}
                    onLeftClick={() => {
                        
                    }} 
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px',color:"#ccc"}} onClick={() => {
                            console.log("aaaa")   
                        }}/>,
                        <img key="1" className="imgSize" src={logo} alt="" />
                    ]}
                />          
                <StickyContainer>
                    <Tabs 
                        tabs={this.state.tabs}
                        tabBarUnderlineStyle={{border:"none",borderBottom:"2px solid orange"}}
                        tabBarInactiveTextColor={{color:"#ccc"}}
                        tabBarActiveTextColor={{color:"orange"}}
                        swipeable={false}
                    >
                        <SuperMarket></SuperMarket>
                    </Tabs>
                </StickyContainer>
            </Fragment>
        );
    }
}
                                
export default DeliveryUi;