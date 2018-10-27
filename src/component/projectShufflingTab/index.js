import React, { Component } from 'react';
import { Tabs,Table,Button,Divider  } from 'antd';
import Project from './project/index'
import Shuffling from './shuffling/index'
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
class tabs extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    };
    // 获取数据
    componentDidMount(){
        // 由parent组件跳转进来，带的参数,手动获取
        // console.log(this.props.location.query.day);
    };
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Tab 1" key="1">
                        <Project></Project>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <Shuffling></Shuffling>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
export default tabs;