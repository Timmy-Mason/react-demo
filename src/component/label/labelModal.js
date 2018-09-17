import React, { Component } from 'react';
import { Button } from 'antd';

// 第二个按钮style
const secondButton = {
    marginTop:10,
    color:"red"
};

class Child_1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:this.props.msg + " " + "props"
        }
    }
    changeMsg(){
        // 从子组件传递值到主组件,调用的是主组件里边的方法
        this.props.transferMsg("点击Button之后将子组件的值传递给主组件");
    };
    render() {
        return <div>
            <h2>child_1 component</h2>
            <h2 style={secondButton}>child_1 component</h2>
            <Button onClick={this.changeMsg.bind(this)} type="primary">{this.state.msg}</Button><br/>
        </div>
    }
}
export default Child_1;