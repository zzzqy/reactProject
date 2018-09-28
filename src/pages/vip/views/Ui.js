import React, { Component ,Fragment} from 'react'
import { Grid } from 'antd-mobile'
import {fetchData} from "../../../utils/commonUtil"
import "./style.scss"
import code from "../../../assets/iconfont/iconfont_1/code.svg"
import vip_f from "../../../assets/iconfont/iconfont_1/vip_f.svg"

import img1 from "../../../assets/images/img/img1.jpg"
import img2 from "../../../assets/images/img/img2.jpg"
import img3 from "../../../assets/images/img/img3.jpg"
import img4 from "../../../assets/images/img/img4.jpg"
import img5 from "../../../assets/images/img/img5.jpg"
import img6 from "../../../assets/images/img/img6.jpg"
import img8 from "../../../assets/images/img/img8.jpg"
import img9 from "../../../assets/images/img/img9.jpg"
import img10 from "../../../assets/images/img/img10.jpg"
import img11 from "../../../assets/images/img/img11.jpg"
import img12 from "../../../assets/images/img/img12.jpg"
import img13 from "../../../assets/images/img/img13.jpg"
import img14 from "../../../assets/images/img/img14.jpg"
import img15 from "../../../assets/images/img/img15.jpg"

                                
class Vip extends Component {
    constructor(props){
        super(props)
        this.state={
            iconfontList:[],
        }
    }
    render() {
        return (
            <Fragment>
                <div className="head">
                    <div className="top">
                        <h3>Hello,普通会员</h3>
                        <div className="vip">
                            <p>
                                <span><img src={vip_f} alt=""/></span>
                                <span>会员中心</span>
                            </p>
                            <p>
                                <span><img src={code} alt=""/></span>
                                <span>会员专属码</span>
                            </p>
                        </div> 
                        <ul>                   
                            <li>
                                <span className="num">￥0.00</span>
                                <span>余额</span>
                            </li>
                            <li>
                                <span className="num">0</span>
                                <span>积分</span>
                            </li>
                            <li>
                                <span className="num">0</span>
                                <span>成长值</span>
                            </li>
                            <li>
                                <span className="num">0</span>
                                <span>优惠券</span>
                            </li>
                        </ul> 
                                             
                    </div>
                    <div className="bottom">
                        <Grid data={this.state.iconfontList} 
                        columnNum={5} 
                        hasLine={false}/>     
                    </div>            
                </div>
                <div className="pic">
                    <img src={img1} alt="img1"/>
                    <img src={img2} alt="img2"/>
                    <img src={img3} alt="img3"/>
                    <img src={img4} alt="img4"/>
                    <img src={img5} alt="img5"/>
                    <img src={img6} alt="img6"/>
                    <img src={img8} alt="img8"/>
                    <img src={img9} alt="img9"/>
                    <img src={img10} alt="img10"/>
                    <img src={img11} alt="img11"/>
                    <img src={img12} alt="img12"/>
                    <img src={img13} alt="img13"/>
                    <img src={img14} alt="img14"/>
                    <img src={img15} alt="img15"/>
                </div>
            </Fragment>
            
        );
    }
    async componentDidMount(){
        // console.log(await fetchData("/api/iconfontList"))
        this.setState({
            iconfontList:(await fetchData("/api/iconfontList")).data.list.map(
                value=>(
                    {
                        icon: value.imgUrl,
                        text: value.title,
                        id:value.id
                    }
                )
            )
        })
    }
}
                                
export default Vip;