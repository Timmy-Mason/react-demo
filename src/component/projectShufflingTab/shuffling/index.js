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
            title: '名字',
            dataIndex: 'name',
            render: (text, record, index) => (
                <span>
                    <a href="javascript:void(0);">{text}</a>
                </span>
            )
        },{
            title: 'creator',
            dataIndex: 'creator',
        }, {
            title: '_id',
            dataIndex: '_id'
        }, {
            title: 'modified_time',
            dataIndex: 'modified_time'
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
        let gamesListUrl = "https://uapi.zhiquzs.com/v1d0/rotations?page=" + current + "&page_size=" + pageSize;
        // 游戏列表
        axios.get(gamesListUrl).then(function (res) {
            for (let i = 0; i < res.data.length; i++) {
                // 添加序号
                res.data[i].order = i + 1;
                res.data[i].key = i + 1;
            }
            _this.setState({'dataSource': res.data});
            document.getElementsByClassName("side-bar")[0].style.height = document.getElementById("container").offsetHeight + 100 + 'px';
        });
    };

    render() {
        return (
            <div>shuffling组件
                <Table columns={this.columns} dataSource={this.state.dataSource}/>
            </div>
        );
    }
}
export default project;
