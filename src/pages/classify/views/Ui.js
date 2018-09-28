import React, {Component,Fragment} from 'react'
import { Tabs } from 'antd-mobile';
import GoodsList from "./goodsList"
//import GoodList from "./goodlist2"
import './style.scss'

class Classify extends React.Component{
   constructor(props){
      super(props);
      this.state={
        tabs:[
            { title: '多点超市' },
            { title: '全球精选' },
          ],
        ariaSelected:false
      }
   }
  
   render(){
      return( 
         <Fragment>
    <div style={{ height: "100%"}}>
      <Tabs tabs={this.state.tabs}
        tabBarUnderlineStyle={{border:"none",borderBottom:"2px solid orange"
      }}
        initalPage={'t2'}
        swipeable={false}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
         <GoodsList></GoodsList>
        </div>
      </Tabs>
    </div>
        </Fragment>
      )
   }
}
export default Classify
