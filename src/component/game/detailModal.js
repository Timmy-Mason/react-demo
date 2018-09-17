import React, { Component } from 'react';
// 观察者模式:类似vue里边的$emit和$on事件触发机制
import eventProxy from '../../eventProxy'
import { Modal,Input} from 'antd';

const inputColorOne = {
    marginTop:10,
    color:"red"
};
const inputColorTwo = {
    marginTop:10
};
const titleColor = {
    color:"red"
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
            msg:"",
        };
    };
    // 有且只执行一次
    componentDidMount(){
        console.log(0);
        // 监听 msg 事件
        eventProxy.on('msgData', (item) => {
            this.setState({
                  visible: true,
                  name:item.name,
                  brief:item.brief,
                  button_content:item.button_content
            });
        });
    };
    // 可以执行多次
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps加载");
        // 二、点击对应弹窗出现，使用setState和props配合将数据传递进来
        // (但是只有通过两次才能把数据传递进来)
        if(this.props.msgElement.params){
            let params = this.props.msgElement.params;
            console.log("params: " + params);
            // console.log(params); 执行两次 ?
            // this.setState({
            //     visible: true,
            //     name:params.name,
            //     brief:params.brief,
            //     button_content:params.button_content,
            // });
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
                <Modal visible={this.state.visible} title="编辑游戏" onCancel={this.onCancel} onOk={this.onOk}>
                    <p><span style={titleColor}>{this.state.name}</span>:也能通过弹窗的打开做到及时更新</p>
                    <Input placeholder="游戏名字" value={this.state.name} readOnly />
                    <Input style={inputColorOne} placeholder="游戏名字" value={this.state.brief} readOnly />
                    <Input style={inputColorTwo} placeholder="游戏名字" value={this.state.button_content} readOnly />
                </Modal>
            </div>
        );
    }
}
export default detailModal;