import React, { Component,Fragment } from 'react'
       
import { Carousel,Grid } from 'antd-mobile'

import { fetchData } from '../../../utils/commonUtil'

class SuperMarket extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgHeight: 150,
            swiperlist:[],
            gridlist:[],
            sportlist:[]
        }
    }
    render() {
        return (
          
            <Fragment>
                <Carousel
                    autoplay={true}
                    infinite
                    dotActiveStyle={{background:"orange"}}
                >
                    {this.state.swiperlist.map(val => (
                        <a
                            key={val.id}
                            // href="http://www.alipay.com"
                            style={{ display: 'block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={val.imgUrl}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                // window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
                <Grid 
                    data={this.state.gridlist} 
                    activeStyle={false} 
                    hasLine={false}
                    columnNum={5}
                />
                <ul>
                    { this.state.sportlist.length ? 
                        <li>
                            <a><img src={this.state.sportlist[0].imgUrl} alt="" className="goImg" /></a>
                        </li>:null
                    }
                    
                </ul>
            </Fragment>
        );
    }
    async componentDidMount(){
        this.setState({
            swiperlist:(await fetchData("/api/swiperlist")).data,
            sportlist:(await fetchData("/api/sportlist")).data,
            gridlist:(await fetchData("/api/gridlist")).dataList.map((val, i) => ({
                icon: val.imageUrl,
                text: val.data.title,
            }))
        })  
    }
}
                                
export default SuperMarket;