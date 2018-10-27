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
import {Table, Divider,Input,Button,Row,Col,Pagination,LocaleProvider} from 'antd';
// 中文包，在下边使用
import zhCN from 'antd/lib/locale-provider/zh_CN';

// 定义表格形式
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource:[],
            // modal
            modalVisible: {},
            gameAmount:0,
            current:1,
            pageSize:5,
            pageSizeOptions: ['5', '10', '15', '20'],
            copyWriter:"添加文案"
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
    // componentWillMount不能获取到dom元素
    componentWillMount(){
        // console.log(document.getElementById("side-bar")); // null
    }
    //当组件输出到 DOM 后会执行 componentDidMount()
    //componentDidMount能够获取到dom元素
    componentDidMount(){
        // 子界面修改成功，主界面数据更新
        eventProxy.on('modifyNameSuccess', () => {
            this.getGamesAmount();
            this.getGamesList(1,10);
        });
       this.getGamesAmount();
       this.getGamesList(1,10);
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
    // 游戏数目
    getGamesAmount = () => {
        let _this = this;
        axios.defaults.headers.get['Access-Control-Expose-Headers'] = 'Token';
        axios.defaults.headers.get['Token'] = publicData.token;
        let gamesAmountUrl = "https://uapi.zhiquzs.com/v1d0/games:count";
        // 游戏数量
        axios.get(gamesAmountUrl).then(function (res) {
            _this.setState({'gameAmount':res.data});
        });
    };
    // 游戏列表
    getGamesList = (current,pageSize) => {
        let _this = this;
        axios.defaults.headers.get['Access-Control-Expose-Headers'] = 'Token';
        axios.defaults.headers.get['Token'] = publicData.token;
        let gamesListUrl = "https://uapi.zhiquzs.com/v1d0/games?page="+ current +"&page_size=" + pageSize;
        // 游戏列表
        axios.get(gamesListUrl).then(function (res) {
            // componentsDidMount只会在组件加载完后执行一次，之后更新state、props都不会执行，除非重新加载组件。
            // componentWillReceiveProps在组件传进来的props被更改时，将被调用。
            // 所以可以在componentWillReceiveProps函数里改变state来重新获取数据
            // _this.state.dataSource = res.data;
            for (let i = 0; i < res.data.length; i++) {
                // 添加序号
                res.data[i].order = i + 1; // 序号
                res.data[i].key = i + 1; // 每一条数据都必须具有特殊的key，否则会报错
            }
            _this.setState({'dataSource':res.data});// 数据是20条，为什么结果出不来
            // dataSource没有初始化，获取的高度是没有填充数据的，不准确
            // console.log(document.getElementById("container").height); // undefined
            // console.log(document.getElementById("container").offsetHeight); // 980
            document.getElementsByClassName("side-bar")[0].style.height = document.getElementById("container").offsetHeight + 100 + 'px';
        });
    };
    getPages = (current,pageSize) =>{
        console.log("页码: " + current);
        console.log("每页条数: " + pageSize);
        this.setState({
           "current": current,
           "pageSize": pageSize
        });
        this.getGamesList(current,pageSize);
    };
    handelChange = (e) =>{
        this.setState({
            copyWriter:e.target.value
        });
    };
    getPagesSize = (current,pageSize) =>{
        console.log("页码: " + current);
        console.log("每页条数: " + pageSize);

        // 遗留问题：pageSize拿到的不正确，即使传一个固定的值，也回出现问题（可能是UI组件版本分页的问题）。
        this.setState({
            "current": current,
            "pageSize": pageSize
        });
        this.getGamesList(current,pageSize);
    };
    render() {
        return (
            <div className="game">
                {/*更新数据按钮*/}
                <div>
                    <Row gutter={16}>
                        <Col span={6}><Button type="primary">{this.state.copyWriter}</Button></Col>
                        <Col span={6}>
                            <Input placeholder="输入对应的值" onChange={this.handelChange.bind(this)} value={this.state.copyWriter}/>
                        </Col>
                    </Row>
                </div>
                <Table columns={this.columns} dataSource={this.state.dataSource}/>
                <LocaleProvider locale={zhCN}>
                    <Pagination size="medium" pageSizeOptions={this.state.pageSizeOptions} onChange={current => this.getPages(current,this.state.pageSize)} onShowSizeChange={pageSize => this.getPagesSize(this.state.current,pageSize)} total={this.state.gameAmount} showSizeChanger showQuickJumper />
                </LocaleProvider>
                {/* 在 React 中，父组件可以向子组件通过传 props 的方式，向子组件进行通讯。*/}
                <DetailModal msgElement={this.state.modalVisible} />
            </div>
        );
    }
}
export default Nav;