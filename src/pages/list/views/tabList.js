import React, { Component } from 'react'
import { Tabs } from 'antd-mobile' 
import {fetchData} from "../../../utils/commonUtil"

                                
class TabList extends Component {
    constructor(props){
        super(props);
        this.state={
            tabs : [],
            goodList:[]
        }
    }
    render() {
        return ( 
            <Tabs tabs={this.state.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                <ul className="ActiveGrid">
                    {this.state.goodList.map((val,i) => {
                        return (
                            <li key={i} className="goodList" >
                                <div className="goodListImg">
                                    <a href="" style={{position: "relative",width:"100%",display:"block"}}>
                                        <img src={val.wareImgUrl} alt="" style={{width:"1.05rem"}}/>
                                        {/* <span><img src={val.cornerSign} alt="" style={{width:"1.05rem",position: "absolute",left: 0,top:0}}/></span> */}
                                    </a>                                         
                                </div>
                                <div className="goodInfo">
                                    <p className="text" >{val.wareName}</p>
                                    {/* <del >{val.price?"￥"+ val.price :""}</del> */}
                                    <p className="price" >
                                        <span style={{color:"#ff712b",fontSize:"16px"}}>{"￥"+ val.warePrice}</span>
                                        <b className="add" >+</b>
                                    </p>
                                </div>                                
                            </li>
                        )
                    })}
                </ul>         
            </Tabs>
        );
    }
    async componentDidMount(){
        // console.log((await fetchData('/api/navList')).data.list)
        this.setState({
            tabs:(await fetchData('/api/navList')).data.list.map(value => (
                {
                    title:value.text
                }
              )
            )  
        })
        // console.log(await fetchData('/api/vegetables'))
        this.setState({
            goodList:(await fetchData('/api/vegetables')).data.wareRcmds.normal.map(value => (
                {
                    customPrice: value.customPrice,
                    iconId: value.iconId,
                    offPrice: value.offPrice,
                    originalPrice: value.originalPrice,
                    promotionTag: "",
                    skuCount: value.skuCount,
                    skuId: value.skuId,
                    stock: value.stock,
                    videoMark: value.videoMark,
                    wareId: value.wareId,
                    wareImgUri: value.wareImgUri,
                    wareImgUrl: value.wareImgUrl,
                    wareName: value.wareName,
                    warePrice: value.warePrice,
                }
              )
            )  
        })
        // console.log(this.state.goodList)
    }
}
                                
export default TabList;