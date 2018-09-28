import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { ListView } from 'antd-mobile';
import { fetchData } from '../../../utils/commonUtil'

import LoadImg from '../../../assets/images/endLoading.gif'

function genData(url) {
  return fetchData(url)
}

class ActiveFloor extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            dataSource,
            isLoading: false,
            height: document.documentElement.clientHeight,
            useBodyScroll: false,
            floorlist:[]
        };
    }
    componentDidUpdate() {
        if (this.state.useBodyScroll) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    async componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        let result = (await genData("/api/floorlist")).dataList.map((val) => ({
            floorImg:val.imageUrl,
            detailList:val.detailList.map((v) => ({
                icon:v.imageUrl,
                cornerSign:v.cornerSign,
                price:v.price,
                promoPrice:v.promotionPrice,
                text:v.title,
                stock:v.stock                
            }))
        }))
        this.rData = result;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(result),
            height: hei,
            isLoading: false,
        });
    }

    onEndReached = async (event) => {
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({ isLoading: true });
        let result = (await genData("/api/floorlist_refresh")).dataList.map((val) => ({
            floorImg:val.imageUrl,
            detailList:val.detailList.map((v) => ({
                icon:v.imageUrl,
                cornerSign:v.cornerSign,
                price:v.price,
                promoPrice:v.promotionPrice,
                text:v.title,
                stock:v.stock                
            }))
        }));
        this.rData = [...this.rData, ...result];
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
        });
    };

    render() {
        const row = (rowData, sectionID, rowID) => {
        //   console.log(rowData)
        return (
            <section key={rowID}>
                <ul>
                    <li><a href=""><img src={rowData.floorImg} alt="" style={{width:"100%"}}/></a></li>
                </ul>                           
                <ul className="ActiveGrid">
                    {rowData.detailList.map((val,i) => {
                        return (
                            <li key={i} className="goodList" >
                                <div className="goodListImg">
                                    <a href="" style={{position: "relative",width:"100%",display:"block"}}>
                                        <img src={val.icon} alt="" style={{width:"1.05rem"}}/>
                                        <span><img src={val.cornerSign} alt="" style={{width:"1.05rem",position: "absolute",left: 0,top:0}}/></span>
                                    </a>                                         
                                </div>
                                <div className="goodInfo">
                                    <p className="text" >{val.text}</p>
                                    <del >{val.price?"￥"+ val.price :""}</del>
                                    <p className="price" >
                                        <span style={{color:"#ff712b",fontSize:"16px"}}>{"￥"+ val.promoPrice}</span>
                                        <b className="add" >+</b>
                                    </p>
                                </div>                                
                            </li>
                        )
                    })}
                </ul>                           
            </section>
        );
        };
        return (
        <div>
        <ListView
            key={this.state.useBodyScroll ? '0' : '1'}
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? <img src={LoadImg} alt=""/> : 'Loaded'}
            
            </div>)}
            renderRow={row}
            useBodyScroll={this.state.useBodyScroll}
            style={this.state.useBodyScroll ? {} : {
                height: this.state.height,
                border: '1px solid #ddd',
                margin: '5px 0',
            }}            
            onEndReached={this.onEndReached}
            pageSize={5}
        />
        </div>);
    }
}
                                
export default ActiveFloor;
