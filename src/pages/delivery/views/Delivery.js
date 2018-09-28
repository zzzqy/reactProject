import React, { Component } from 'react'
import { connect } from 'react-redux'
import Ui from './Ui'
import { getGoodInfo } from '../actionTypes'
import { getGoodInfoById } from '../actionCreator'

                               
class Delivery extends Component {
    render() {
        return (
            <Ui ></Ui>
        );
    }
    // componentDidMount(){
    //     console.log(this.props)
    // }
}

export default Delivery