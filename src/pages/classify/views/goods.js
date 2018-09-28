import React, {Component,Fragment} from 'react'
import { Tabs} from 'antd-mobile';
import GoodNewsList from "./goodsnews"
class Goods extends React.Component{
   constructor(props){
      super(props);
      this.state={
        tabs:[
            { title: '全部' },
            { title: '新鲜水果' },
            { title: '新鲜水果' },
            {title: '蔬菜豆豉'},
            {title: '蔬菜豆豉'}
          ],
        ariaSelected:false
      }
   }
   renderContent = tab =>
   (<div style={{ display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: '#fff' }}>
     <GoodNewsList></GoodNewsList>
   </div>);

   render(){
      return( 
         <Fragment>
    <div style={{ height: "100%"}}>
      <Tabs tabs={this.state.tabs}
        destroyInactiveTab="true"
        tabBarUnderlineStyle={{border:"none"}}
        initalPage={'t2'}
        distanceToChangeTab="0.3"
        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4}/>}>
      {this.renderContent}
      </Tabs>
    </div>
         </Fragment>
      )
   }
}
export default Goods