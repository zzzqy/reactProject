import React, { Component } from 'react'

import { connect } from 'react-redux'
import Ui from './Ui'

const mapState = (state) => {
    if(state.Home.goodNum <= 0){
        state.Home.goodNum = 1
    }
    return{
        getGoodNum:{
            goodNum:state.Home.goodNum
        }
    }
}

class Home extends Component {
    render() {
        return (
            <Ui goodNum={this.props.getGoodNum.goodNum}></Ui>
        );
    }
}
                                
export default connect(mapState)(Home)