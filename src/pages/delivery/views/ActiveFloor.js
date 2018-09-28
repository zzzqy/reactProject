import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { ListView } from 'antd-mobile';
import { fetchData } from '../../../utils/commonUtil'
import ActiveList from '../../components/activeList'

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
            floorlist:[],
            goodId:""
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
        // console.log((await genData("/api/floorlist")).dataList)
        let result = (await genData("/api/floorlist")).dataList.map((val) => ({
            floorImg:val.imageUrl,
            detailList:val.detailList.map((v) => ({
                icon:v.imageUrl,
                cornerSign:v.cornerSign,
                price:v.price,
                promoPrice:v.promotionPrice,
                text:v.title,
                stock:v.stock,
                id:v.id              
            }))
        }))
        this.rData = result;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(result),
            height: hei,
            isLoading: false,
        });
    }

    onEndReached = async () => {
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
            isLoading: false
        });
    };
    getGoodId(id){
        this.setState({
            goodId:id
        },async () => {
            let goodInfo = (await this.getGoodInfoById(this.state.goodId))
        //    console.log(this.state.goodId,goodInfo)
        })
    }
    getGoodInfoById(id){
        return fetch("/api/floorlist?id="+id)
                .then(response => response.json())
                .then((result) => {
                    return result
                })
    }
    render() {
        const row = (rowData, sectionID, rowID) => {
        //   console.log(rowData)
        return (
            <ActiveList key={rowID} rowID={rowID} rowData={rowData} handleJoinCart={this.getGoodId.bind(this)}></ActiveList>  
        )};
        return (
            <div>
                <ListView
                    key={this.state.useBodyScroll ? '0' : '1'}
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderFooter={() => (
                        <div style={{ padding: 30, textAlign: 'center' }}>
                            {this.state.isLoading ? <img src={LoadImg} alt=""/> : 'Loaded'}
                        </div>
                    )}
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
            </div>
        );
    }
}
                                
export default ActiveFloor;
