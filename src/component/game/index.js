import React, { Component } from 'react';
import Button from 'antd/lib/button';
import axios from 'axios';
import publicData from '../../util'
import '../../assets/css/game.css'
// antDesign
import {Table, Divider, Tag, Pagination,Modal } from 'antd';

// 定义表格形式
class Nav extends Component {
    constructor(props) {
        super(props);
        // 点击某一行的事件
        this.state = {
            searchStr: '789',
            dataSource:[],
            // modal
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false
        };
    };
    // this.setState({ModalText:"这是最新的内容"});

    // 组件内的方法或者是变量都要使用this指针去访问
    columns = [
        {
            title: '序号',
            dataIndex: 'order',
            key: 'order'
        },{
            title: '游戏名',
            dataIndex: 'name',
            key: 'name',
            render: (text, record, index) => (
                <span>
                    <a href="">{text}</a>
                </span>
            )
        },
        {
            title: 'icon',
            dataIndex: 'icon',
            key: 'icon',
            render:text => (<img src={text}/>)
        }, {
            title: '游戏id',
            dataIndex: '_id',
            key: '_id'
        }, {
            title: '下载状态',
            dataIndex: 'status',
            key: 'status'
        },{
            title: '上线时间',
            dataIndex: 'online_time',
            key: 'online_time'
        }, {
            title: '操作',
            key: 'operation',
            render: (text, record, index) => (
                // 这里不能同时有多个最顶层标签
                <span>
                    <span>{index}</span>
                    <Divider type="vertical" />
                    <Button type="primary" onClick={this.DetailFunc.bind(this,record,index)}>详情</Button>　
                    <Divider type="vertical" />
                    <Button type="primary" onClick={this.DeleteFunc.bind(this,record,index)}>删除</Button>　
                </span>
            )
        }];
    // modal
    // 将弹窗打开
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    // 确定保存弹窗内容
    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };
    // 取消关闭弹窗
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };
    // 主界面按钮
    btnClick(){
        console.log(this.state.searchStr);
        console.log(this.state.dataSource);
    }
    // 某一列详情
    DetailFunc(record,index){
        console.log(index);
        console.log(record);
    }
    // 删除某一列
    DeleteFunc(record,index){
        console.log(index);
        console.log(record);
    }
    //当组件输出到 DOM 后会执行 componentDidMount()
    componentDidMount(){
        let _this = this;
        // _this.state.searchStr = "更新后的数据";// 在componentDidMount生命周期函数里边直接setState是没有效果的
        _this.setState({'searchStr':'点击事件更新后的数据'});// 正解
        axios.defaults.headers.get['Access-Control-Expose-Headers'] = 'Token';
        axios.defaults.headers.get['Token'] = publicData.token;
        let apkListUrl = "https://dev.zhi-qu.ghzs.com/v1d0/games";
        // 游戏数量

        // 游戏列表
        axios.get(apkListUrl).then(function (res) {
            // componentsDidMount只会在组件加载完后执行一次，之后更新state、props都不会执行，除非重新加载组件。
            // componentWillReceiveProps在组件传进来的props被更改时，将被调用。
            // 所以可以在componentWillReceiveProps函数里改变state来重新获取数据
            // _this.state.dataSource = res.data;
            for (let i = 0; i < res.data.length; i++) {
                // 添加序号
                res.data[i].order = i + 1; // 序号
                res.data[i].key = i + 1; // 每一条数据都必须具有特殊的key，否则会报错
            }
            _this.setState({'dataSource':res.data});
        });
    }
    render() {
        return (
            <div className="game">
                {/*modal按钮*/}
                <div className="nav-modal">
                    <Button type="primary" onClick={this.showModal}>异步操作弹窗</Button>
                    <Modal title="Title"
                           visible={this.state.visible}
                           onOk={this.handleOk}
                           confirmLoading={this.state.confirmLoading}
                           onCancel={this.handleCancel}
                    >
                        <p>{this.state.ModalText}</p>
                    </Modal>
                </div>

                {/*更新数据按钮*/}
                <Button onClick={()=>{this.btnClick()}} type="primary">{this.state.searchStr}</Button>

                <Table columns={this.columns} dataSource={this.state.dataSource}/>
            </div>
        );
    }
}
export default Nav;