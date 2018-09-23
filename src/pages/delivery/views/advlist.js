import React, { Component,Fragment } from 'react'

import MarketList from './marketlist'
import LifeList from './lifelist'

import { fetchData } from '../../../utils/commonUtil'

class AdvList extends Component {
    constructor(props){
        super(props);
        this.state = {
            sportlist:[]
        }
    }
    render() {
        return (
            <Fragment>              
                { this.state.sportlist.length ?
                    <div>
                        <ul> 
                            <li>
                                <a><img src={this.state.sportlist[0].imgUrl} alt="" className="goImg" /></a>
                            </li>
                            <li>
                                <a><img src={this.state.sportlist[1].imgUrl} alt="" className="titleImg" /></a>
                            </li>   
                        </ul>
                        <ul className="advStyle">
                            <li className="advLiStyle">
<<<<<<< HEAD
                                <a><img src={this.state.sportlist[2].imgUrl} alt="" className="advLiImg"/></a>
=======
                                <a className="advStyle1"><img src={this.state.sportlist[2].imgUrl} alt="" className="advLiImg"/></a>
>>>>>>> 44573dd3ce1b6dc43218e6e8f93ac3898a102f11
                                <span>
                                    <a><img src={this.state.sportlist[3].imgUrl} alt="" /></a>
                                    <a><img src={this.state.sportlist[4].imgUrl} alt="" /></a>
                                </span>
                            </li>
                        </ul>
                        <ul> 
                            <li>
                                <a><img src={this.state.sportlist[5].imgUrl} alt=""  className="titleImg"/></a>
                            </li> 
                        </ul> 
                        <MarketList></MarketList> 
                        <ul> 
                            <li>
                                <a><img src={this.state.sportlist[6].imgUrl} alt=""  className="titleImg"/></a>
                            </li> 
                        </ul>   
                        <LifeList></LifeList> 
                    </div>                        
                    :null
                } 
                                          
            </Fragment>
        );
    }
    async componentDidMount(){
        this.setState({
            sportlist:(await fetchData("/api/sportlist")).data,
        })  
    }
}
                                
export default AdvList;