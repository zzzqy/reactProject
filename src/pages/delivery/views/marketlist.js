import React, { Component } from 'react'
 
import './marketStyls.scss'

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
            <div className="marketGrid">
                <Grid 
                    data={this.state.marketlist} 
                    columnNum={3} 
                    itemStyle={{ height: '1.5rem'}} 
                    hasLine={false}
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
                                
export default MarketList;