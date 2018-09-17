// 每个组件都要引入的
import React, { Component } from 'react';
// 详情组件（具有修改功能的弹窗）
import DetailModal from './detailModal'
// 请求方式
import axios from 'axios';
// 公共部分（包括公共使用的token）
import publicData from '../../util';
// 观察者模式:类似vue里边的$emit和$on事件触发机制
import eventProxy from '../../eventProxy'
// css样式
import '../../assets/css/game.css';
// antDesign
import {Table, Divider, Button} from 'antd';

// 定义表格形式
class Nav extends Component {
    constructor(props) {
        super(props);    // 点击某一行的事件
        this.state = {
            dataSource:[],
            // modal
            modalVisible: {}
    };
    };
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
            key: 'online_time',
            render: (text, item) => {
                return (
                    <div>
                        <Button type="primary" onClick={this.showChildModal.bind(this,item)}>编辑</Button>
                    </div>
                );
            },
        }, {
            title: '操作',
            key: 'operation',
            render: (text, record, index) => (
                // 这里不能同时有多个最顶层标签
                <span>
                    <span>{index}</span>
                    <Divider type="vertical"/>
                    <Button type="primary" onClick={this.DeleteFunc.bind(this,record,index)}>删除</Button>　
                </span>
            )
        }];
    // 删除某一列
    DeleteFunc(record,index){
        console.log(index);
        console.log(record); // 当前列的数据
    }
    //当组件输出到 DOM 后会执行 componentDidMount()
    componentDidMount(){
        let _this = this;
        axios.defaults.headers.get['Access-Control-Expose-Headers'] = 'Token';
        axios.defaults.headers.get['Token'] = publicData.token;
        let apkListUrl = "https://dev.zhi-qu.ghzs.com/v1d0/games";
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
    // 点击打开弹窗
    showChildModal = (item) =>{
        // 一、setState异步，没有效果
        // this.setState({
        //     modalVisible:true,
        //     'searchStr':'点击事件更新后的数据123'
        // });

        // 三、要想能够立即获取this.state.x的值可以采用以下几种方式：(因为this.setState是异步的，为了提高性能)
        // 1. setTimeout(() => { console.log(this.state.x);}, 0);
        // 2. this.setState({}, () => { console.log(this.state.x)};
        // setTimeout(() => {
        //     console.log(this.state.searchStr);
        //     console.log(this.state.modalVisible);
        // },0);

        // 二、点击对应弹窗出现
        this.setState({
            modalVisible: {params:"通过props传递数据"}
        });

        // 四、使用js的观察者模式 ()，将弹窗打开并且传递对应的数据
        eventProxy.trigger('msgData', item);
    };
    render() {
        return (
            <div className="game">
                {/*更新数据按钮*/}
                <Button type="primary">添加</Button>
                <Table columns={this.columns} dataSource={this.state.dataSource}/>
                {/* 在 React 中，父组件可以向子组件通过传 props 的方式，向子组件进行通讯。*/}
                <DetailModal msgElement={this.state.modalVisible} />
            </div>
        );
    }
}
export default Nav;