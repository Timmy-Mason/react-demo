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
            msg:this.props.msg
        }
    }
    changeMsg(){
        // 从子组件传递值到主组件,调用的是主组件里边的方法
        this.props.transferMsg("子组件里边的值,传递给父组件");
    };
    render() {
        return <div>
            <h1>子组件:</h1>
            <h2 style={secondButton}>{this.state.msg}</h2>
            <Button onClick={this.changeMsg.bind(this)} type="primary">手动点击,之后将 子组件 里边的值传递给 父组件</Button><br/>
        </div>
    }
}
export default Child_1;