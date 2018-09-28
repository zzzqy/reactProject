import Ui from './Ui'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddGoodNum,DecGoodNum} from '../../home'

// const mapState = (state) => {
//     return{
//         goodNum:state.home.goodNum
//     }
// }
const mapDispatch = (dispatch) => {
    return {
        addGoodNum:() => {
            dispatch({
                type:AddGoodNum,
                payload:1
            })
        },
        decGoodNum:() => {
            dispatch({
                type:DecGoodNum,
                payload:1
            })
        }
    }
} 

class CartUi extends Component {
    constructor(props){
        super(props);
        this.state={
            goodNum:1
        }
    }
    addGoodNum(){
        this.setState((prevState) => {
            return{
                goodNum:prevState.goodNum+1
            }
        })
    }
    decGoodNum(){
        if(this.state.goodNum <= 0){
            this.setState({
                goodNum:1
            })
        }else{     
            this.setState((prevState) => {
                return{
                    goodNum:prevState.goodNum-1
                }
            })
        }
    }
    render() {
        return (
            <Ui
              handleAddGoodNum={this.addGoodNum.bind(this)} 
              handleDecGoodNum={this.decGoodNum.bind(this)}
              goodNum={this.state.goodNum}
              addGoodNum={this.props.addGoodNum}
              decGoodNum={this.props.decGoodNum}
              >
            </Ui>  
        );
    }

}
                                
export default connect(null,mapDispatch)(CartUi)