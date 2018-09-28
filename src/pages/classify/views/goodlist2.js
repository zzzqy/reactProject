import React, {Component,Fragment} from 'react'
import {Route,Switch,NavLink,WithRouter} from "react-router-dom" 
import {fetchData} from "../../../utils/commonUtil"
import Goods from "./goods.js"
import { Tabs} from 'antd-mobile';

//import "./style.scss"

class GoodList  extends React.Component{
   constructor(props){
      super(props);
      this.state={
          GoodsList:[],
          color:true,
          tabs:[
            { title: '全部' },
            { title: '新鲜水果' },
            { title: '新鲜水果' },
            {title: '蔬菜豆豉'},
            {title: '蔬菜豆豉'},
            { title: '全部' },
            { title: '新鲜水果' },
            { title: '新鲜水果' },
            {title: '蔬菜豆豉'},
            {title: '蔬菜豆豉'}
          ],
      }
   }
   renderContent = tab =>
   (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
     <p>Content of {tab.title}</p>
   </div>);

   render(){
      return(
   <Fragment>
  <div style={{height:"100%"} }>
      <Tabs tabs={this.state.tabs}
        tabBarUnderlineStyle={{border:"none"}}
        initalPage={'t2'}
        tabBarPosition="left"
        destroyInactiveTab="true"
        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={10}/>}>
      {this.renderContent}
      </Tabs>
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
export default GoodList