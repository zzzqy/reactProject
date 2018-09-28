import React, { Component,Fragment } from 'react'
       
import { Carousel,Grid } from 'antd-mobile'

import AdvList from './advlist'
import ActiveFloor from './ActiveFloor'

import { fetchData } from '../../../utils/commonUtil'

class SuperMarket extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgHeight: 150,
            swiperlist:[],
            gridlist:[]
        }
    }
    render() {
        return (        
            <Fragment>
                <Carousel
                    autoplay={true}
                    infinite
                    dotActiveStyle={{background:"orange"}}
                    // onClick={()=>{console.log(1111)}}
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
                <div className="typelist">
                    <Grid 
                        data={this.state.gridlist} 
                        activeStyle={false} 
                        hasLine={false}
                        columnNum={5}
            
                    />
                </div>
                
                <AdvList></AdvList>
                <ActiveFloor></ActiveFloor>
            </Fragment>
        );
    }
    async componentDidMount(){
        this.setState({
            swiperlist:(await fetchData("/api/swiperlist")).data,
            gridlist:(await fetchData("/api/gridlist")).dataList.map((val, i) => ({
                icon: val.imageUrl,
                text: val.data.title,
            }))
        })  
    }
}
                                
export default SuperMarket;