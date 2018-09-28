import React, { Component,Fragment } from 'react'
      
import { fetchData } from '../../../utils/commonUtil'

class LifeList extends Component {
    constructor(props){
        super(props);
        this.state={
            lifelist:[]
        }
    }
    render() {
        return (
            <Fragment>
                <ul className="life_01">
                    {this.state.lifelist.slice(0,2).map((v,i) => {
                        return (
                            <li key={i}><a href=""><img src={v.imageUrl} alt="" className="lifeImg" /></a></li>
                        )
                    })}
                </ul>
                <ul className="life_02">
                    {this.state.lifelist.slice(2).map((v,i) => {
                        return (
                            <li key={i}><a href=""><img src={v.imageUrl} alt="" className="lifeImg" /></a></li>
                        )
                    })}
                </ul>
            </Fragment>
        );
    }
    async componentDidMount(){
        this.setState({
            lifelist:(await fetchData("/api/lifelist")).dataList
        })
    }
}
                                
export default LifeList;