import React, { Component } from 'react';
import { Modal,Input} from 'antd';

const inputColorOne = {
    marginTop:10,
    color:"red"
};
const inputColorTwo = {
    marginTop:10
};
// 定义表格形式
class detailModal extends Component {
    constructor(props) {
        super(props);
        // 点击某一行的事件
        this.state = {
            visible: false,
            name:"",
            brief:"",
            button_content:"",
        };
    };
    // 有且只执行一次
    componentDidMount(){

    };
    // 可以执行多次
    componentWillReceiveProps(){

        if(this.props.msg.params){
            let params = this.props.msg.params;
            this.setState({
                visible: true,
                name:params.name,
                brief:params.brief,
                button_content:params.button_content,
            });
        }
    };
    componentWillUpdate(){

    };

    // 弹窗---确定
    onOk = () => {
        this.setState({
            visible: false
        });
    };
    // 弹窗--取消
    onCancel = () =>{
        this.setState({
            visible: false
        });
    };
    render() {
        return (
            <div>
                <p>测试数据123</p>
                <Modal visible={this.state.visible} title="编辑游戏" onCancel={this.onCancel} onOk={this.onOk}>
                    <Input placeholder="游戏名字" value={this.state.name} readOnly />
                    <Input style={inputColorOne} placeholder="游戏名字" value={this.state.brief} readOnly />
                    <Input style={inputColorTwo} placeholder="游戏名字" value={this.state.button_content} readOnly />
                </Modal>
            </div>
        );
    }
}
export default detailModal;