import React, {Component} from 'react'
import {fetchData} from "../../../utils/commonUtil"
class GoodNewsList extends React.Component{
   constructor(props){
      super(props);
      this.state={
        Goodnews:[]
      }
   }
   render(){
      return( 
          this.state.Goodnews.map((v,i)=>{
              return(
            <div key={i} className="goodinfo">
             <img src={v.imgurl} alt=""/>
             <div className="info">
             <p>{v.wareName}</p>
             <span><a style={{color:"black"}}>￥</a>{v.customPrice}</span>
             <button >加入购物车</button>
             </div>
         </div>
              )
          })
         
      )
   }
   async componentDidMount(){    
    this.setState({
     Goodnews:(await fetchData('/api/goodNews')).data.wareRcmds.normal.map((v,i)=>{
         return(
             {
                 imgurl:v.wareImgUrl,
                 wareName:v.wareName,
                 customPrice:v.customPrice
             }
         )
     })
})
//console.log(this.state.Goodnews)

}
}
export default GoodNewsList