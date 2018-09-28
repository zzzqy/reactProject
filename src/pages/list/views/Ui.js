import React, { Component ,Fragment} from 'react'
import { NavBar, Icon } from 'antd-mobile'
import TabList from "./tabList"
import "./style.scss"
                                
class List extends Component {
    render() {
        return (
            <Fragment>
                <NavBar
                mode="light"
                // icon={<Icon type="left" />}
                leftContent={
                    <img src="https://img.dmallcdn.com/common/38a28854-16bf-4946-a5a3-a8eabc5dee78" alt="" style={{width:"30px",marginLeft:"10px"}}/>
                }
                onLeftClick={(el, index) => {
                    this.props.history.push('/', { id: el.id })
                   
                }}
                rightContent={
                    <img src="https://img.dmallcdn.com/common/e9e2dbae-64ae-455a-b55f-317078f032d2" alt="" style={{width:"30px",marginRight:"10px"}}/>
                }
                >中秋团圆饭</NavBar>
                <img src="https://img.dmallcdn.com//dshop/201809/9888020a-4955-4f27-9365-6bc8c0346e24" alt="" style={{width:"100%"}}/>

                <TabList></TabList>
            </Fragment>
        );
    }
}
                                
export default List;              