import React, {Component,Fragment} from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import './style.scss'

class Classify extends React.Component{
   constructor(props){
      super(props);
      this.state={
        tabs:[
            { title: '多点超市' },
            { title: '全球精选' },
          ],
        ariaSelected:true
      }
   }
  
   render(){
      return( 
         <Fragment>
           <WhiteSpace />
    <Tabs tabs={this.state.tabs}
        tabBarUnderlineStyle={{border:"none",borderBottom:"2px solid orange",width:"18%",
        left:this.state.ariaSelected?"2%":"24%"
      }}
      onTabClick={
        ()=>{
          this.setState({
            ariaSelected:!this.state.ariaSelected
          }) 
        }
      }
     
     initialPage={1} 
     animated={false}
      useOnPan={false}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
        Content of second tab
      </div>
      
    </Tabs>
    <WhiteSpace />
        </Fragment>
      )
   }
}
export default Classify
