import React, {Component} from 'react';
import {Tabs, Table, Button, Divider} from 'antd';
// 请求方式
import axios from 'axios';
// 公共部分（包括公共使用的token）
import publicData from '../../../util';
class project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    }

    columns = [
        {
            title: '序号',
            dataIndex: 'order'
        }, {
            title: '专题',
            dataIndex: 'name',
            render: (text, record, index) => (
                <span>
                    <a href="javascript:void(0);">{text}</a>
                </span>
            )
        }, {
            title: '游戏数量',
            dataIndex: 'topic_game_count',
        }, {
            title: 'creator',
            dataIndex: 'creator',
        }, {
            title: '_id',
            dataIndex: '_id',
        }, {
            title: 'modified_time',
            dataIndex: 'modified_time',
        }, {
            title: '修改时间',
            dataIndex: 'online_time',
            render: () => {
                return (
                    <div>
                        <Button type="primary">编辑</Button>
                    </div>
                );
            },
        }];

    componentDidMount() {
        this.getProjectsList(1, 10);
    }

    // 游戏列表
    getProjectsList = (current, pageSize) => {
        let _this = this;
        axios.defaults.headers.get['Access-Control-Expose-Headers'] = 'Token';
        axios.defaults.headers.get['Token'] = publicData.token;
        let gamesListUrl = "https://uapi.zhiquzs.com/v1d0/topics?page=" + current + "&page_size=" + pageSize;
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
            _this.setState({'dataSource': res.data});// 数据是20条，为什么结果出不来
            // dataSource没有初始化，获取的高度是没有填充数据的，不准确
            // console.log(document.getElementById("container").height); // undefined
            // console.log(document.getElementById("container").offsetHeight); // 980
            document.getElementsByClassName("side-bar")[0].style.height = document.getElementById("container").offsetHeight + 100 + 'px';
        });
    };

    render() {
        return (
            <div>project组件
                <Table columns={this.columns} dataSource={this.state.dataSource}/>
            </div>
        );
    }
}
export default project;
