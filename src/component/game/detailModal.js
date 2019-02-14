import React, { Component } from 'react';
// 请求方式
import axios from 'axios';
// 观察者模式:类似vue里边的$emit和$on事件触发机制
import eventProxy from '../../eventProxy'
import { Modal,Input,message } from 'antd';
// 公共部分（包括公共使用的token）
import publicData from '../../util';

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
        // 监听 msg 事件
        eventProxy.on('msgData', (item) => {
            this.setState({
                  visible: true,
                  name:item.name,
                  brief:item.brief,
                  button_content:item.button_content,
                  game_id:item._id,
            });
        });
    };
    // 可以执行多次
    componentWillReceiveProps(){
        // 二、点击对应弹窗出现，使用setState和props配合将数据传递进来
        // (但是只有通过两次才能把数据传递进来)
        if(this.props.msgElement.params){
            let params = this.props.msgElement.params;
            // console.log(params); 执行两次 ?
            // this.setState({
            //     visible: true,
            //     name:params.name,
            //     brief:params.brief,
            //     button_content:params.button_content,
            // });
        }
    };
    handelChange = (e) =>{this.setState({name:e.target.value})};
    // 弹窗---确定
    onOk = () => {
        // 修改游戏
        let _this = this;
        axios.defaults.headers.put['Access-Control-Expose-Headers'] = 'Token';
        axios.defaults.headers.put['Token'] = publicData.token;
        axios.put("https://dev.zhi-qu.ghzs.com/v1d0/games/" + this.state.game_id,{name:this.state.name}).then(function (res) {
            _this.setState({visible: false});
            message.info('游戏名字修改成功');
            // 通知主界面，刷新数据
            eventProxy.trigger('modifyNameSuccess');
        });
    };
    // 弹窗--取消
    onCancel = () =>{this.setState({visible: false});};
    render() {
        return (
            <div>
                <Modal visible={this.state.visible} title="编辑游戏" onCancel={this.onCancel} onOk={this.onOk}>
                    <p><span style={titleColor}>{this.state.name}</span>:也能通过弹窗的打开做到及时更新</p>
                    <Input onChange={this.handelChange.bind(this)} placeholder="请输入游戏名字" value={this.state.name}/>
                    <Input placeholder="请输入游戏名字" style={inputColorOne} defaultValue={this.state.brief}/>
                    <Input placeholder="请输入游戏名字" style={inputColorTwo} defaultValue={this.state.button_content}/>
                </Modal>
            </div>
        );
    }
}
export default detailModal;