import React, {Component} from 'react'

import { TabBar } from 'antd-mobile';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'redTab',
          hidden: false,
          fullScreen: false,
        };
      }  
    render(){
        return( 
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                    <TabBar.Item
                    title="Wiki"
                    key="Life"
                    icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selected={this.state.selectedTab === 'Life'}
                    badge={1}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'Life',
                    });
                    }}
                    data-seed="logId"
                >
                    {/* {this.renderContent('Life')} */}
                </TabBar.Item>
                <TabBar.Item
                    title="Hot"
                    key="Hot"
                    icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selected={this.state.selectedTab === 'Hot'}
                    badge={1}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'Hot',
                    });
                    }}
                    data-seed="logId"
                >
                    {/* {this.renderContent('Life')} */}
                </TabBar.Item>
                <TabBar.Item
                    title="Search"
                    key="Search"
                    icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selected={this.state.selectedTab === 'Search'}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'Search',
                    });
                    }}
                    data-seed="logId"
                >
                    {/* {this.renderContent('Life')} */}
                </TabBar.Item>
                <TabBar.Item
                    title="Mine"
                    key="Mine"
                    icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selected={this.state.selectedTab === 'Mine'}
                    badge={1}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'Mine',
                    });
                    }}
                    data-seed="logId"
                >
                {/* {this.renderContent('Life')} */}
                </TabBar.Item>    
            </TabBar>
        )
    }
}
<<<<<<< HEAD

=======
>>>>>>> zzz
export default Home