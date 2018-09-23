import React, { Component } from 'react'

import {Delivery} from '../../delivery'
import { Classify }from "../../classify"

import { TabBar } from 'antd-mobile'; 

import home from '../../../assets/iconfont/home.svg'
import homeActive from '../../../assets/iconfont/homeActive.svg'
import classify from '../../../assets/iconfont/classify.svg'
import classifyActive from '../../../assets/iconfont/classifyActive.svg'
import vip from '../../../assets/iconfont/vip.svg'
import vipActive from '../../../assets/iconfont/vipActive.svg'
import cart from '../../../assets/iconfont/cart.svg'
import cartActive from '../../../assets/iconfont/cartActive.svg'
import mine from '../../../assets/iconfont/mine.svg'
import mineActive from '../../../assets/iconfont/mineActive.svg'

class HomeUi extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'delivery',
            hidden: false
        }
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#eb6219"
                barTintColor="white"
                hidden={this.state.hidden}
            >
            <TabBar.Item
                title="配送到家"
                key="delivery"
                icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${home}) center center /  21px 21px no-repeat `}}
                />}
                selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${homeActive}) center center /  21px 21px no-repeat `}}
                />}
                selected={this.state.selectedTab === 'delivery'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'delivery',
                    });
                }}
                data-seed="delivery"
            >
                <Delivery></Delivery>
                {/* {this.renderContent('Life')} */}
            </TabBar.Item>
            <TabBar.Item
                title="分类"
                key="classify"
                icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${classify}) center center /  21px 21px no-repeat `}}
                />}
                selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${classifyActive}) center center /  21px 21px no-repeat `}}
                />}
                selected={this.state.selectedTab === 'classify'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'classify',
                    });
                }}
                data-seed="classify"
            >
                <Classify/>
                {/* {this.renderContent('Life')} */}
            </TabBar.Item>
            <TabBar.Item
                title="会员"
                key="vip"
                icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${vip}) center center /  21px 21px no-repeat `}}
                />}
                selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${vipActive}) center center /  21px 21px no-repeat `}}
                />}
                selected={this.state.selectedTab === 'vip'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'vip',
                    });
                }}
                data-seed="vip"
            >
                <div>vip</div>
                {/* {this.renderContent('Life')} */}
            </TabBar.Item>
            <TabBar.Item
                title="购物车"
                key="cart"
                icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${cart}) center center /  21px 21px no-repeat `}}
                />}
                selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${cartActive}) center center /  21px 21px no-repeat `}}
                />}
                selected={this.state.selectedTab === 'cart'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'cart',
                    });
                }}
                data-seed="cart"
            >
                <div>lala</div>
                {/* {this.renderContent('Life')} */}
            </TabBar.Item>
            <TabBar.Item
                title="我的"
                key="mine"
                icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${mine}) center center /  21px 21px no-repeat `}}
                />}
                selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${mineActive}) center center /  21px 21px no-repeat `}}
                />}
                selected={this.state.selectedTab === 'mine'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'mine',
                    });
                }}
                data-seed="mine"
            >
                <div>mine</div>
                {/* {this.renderContent('Life')} */}
            </TabBar.Item>
        </TabBar>
        );
    }
}
                                
export default HomeUi;