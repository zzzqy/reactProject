import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
 
import './marketStyles.scss'

import { fetchData } from '../../../utils/commonUtil'

import { Grid } from 'antd-mobile'

class MarketList extends Component {
    constructor(props){
        super(props);
        this.state = {
            marketlist:[]
        }
    }
    render() {
        return (
            <div id="marketGrid">
                <Grid 
                    data={this.state.marketlist} 
                    columnNum={3} 
                    itemStyle={{ height: '1.5rem'}} 
                    hasLine={false}
                    onClick={(el, index) => {
                        this.props.history.push('/List', { id: el.id })
                       
                    }} 
                />
            </div>
            
        );
    }
    async componentDidMount(){
        this.setState({
            marketlist:(await fetchData("/api/marketlist")).dataList.map((val, i) => ({
                icon: val.imageUrl
            })),
        })  
    }
}
                                
export default withRouter(MarketList);