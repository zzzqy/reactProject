import React, {Component,Fragment} from 'react'
import {Route,Switch,NavLink,WithRouter} from "react-router-dom" 
import {fetchData} from "../../../utils/commonUtil"
import Goods from "./goods.js"

//import "./style.scss"

class GoodsList  extends React.Component{
   constructor(props){
      super(props);
      this.state={
          GoodsList:[],
          color:true,

      }
   }

changeStyle(){
  this.setState({
    color:!this.state.color
  })
}

   render(){
      const style1={
         fontSize: "0.14rem",
         height:"0.56rem",
         textAlign: "center",
         lineHeight: "0.56rem",
         background:this.state.color ? "#f6f6f6":"#fff",
         color:this.state.color?"":"#999"
      }
      
 
      return(
        
   <Fragment>
     <ul className="goodtype">
           {this.state.GoodsList.map((v,i)=>{
             //console.log(i)
             return (
               <li key={v.categoryId} style={style1} onClick={(i)=>{this.changeStyle()}}>{v.categoryName}</li>
             )
           })} 
      </ul>
          <div className="goods">
          <Goods></Goods>
          </div>
  </Fragment>
      )
   }

   async componentDidMount(){    
       this.setState({
        GoodsList:(await fetchData('/api/goodstypeList')).data.wareCategory[0].categoryList
   })
   console.log(this.state.GoodsList)
  
}
}
export default GoodsList