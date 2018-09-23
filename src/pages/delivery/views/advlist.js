import React, { Component,Fragment } from 'react'
 
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
                                <a><img src={this.state.sportlist[2].imgUrl} alt="" className="advLiImg"/></a>
                                <span>
                                    <a><img src={this.state.sportlist[3].imgUrl} alt="" /></a>
                                    <a><img src={this.state.sportlist[4].imgUrl} alt="" /></a>
                                </span>
                            </li>
                        </ul>
                    </div>
                         
                    :null
                }                                 
            </Fragment>
        );
    }
    async componentDidMount(){
        this.setState({
            sportlist:(await fetchData("/api/sportlist")).data
        })  
    }
}
                                
export default AdvList;