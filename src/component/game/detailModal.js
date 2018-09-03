import React, { Component } from 'react';
// antDesign
import axios from 'axios';
import publicData from '../../util';
import {Table, Divider, Tag, Pagination,Modal,Icon,Input} from 'antd';

// 定义表格形式
class detailModal extends Component {
    constructor(props) {
        super(props);
        // 点击某一行的事件
        this.state = {
            // modal
            visible: false,
            confirmLoading: false,
            //input框内容
            inputContent:""
        };
    };
    showModal = (record,index) => {
        // 弹窗显示
        this.setState({
            visible: true,
            inputContent: record.name
        });

    };
    // 确定保存弹窗内容
    handleOk = () => {
        let arr = [];
        this.state.dataSource[3].order = 1;
        arr.push(this.state.dataSource[3]);
        this.setState({
            confirmLoading: true,
            dataSource:arr,
            visible: false
        });
    };
    // 取消关闭弹窗
    handleCancel = () => {
        this.setState({
            // 弹窗隐藏
            visible: false,
        });
    };

    componentDidMount(){
        let _this = this;
        _this.setState({'searchStr':'点击事件更新后的数据'});// 正解
        axios.defaults.headers.get['Access-Control-Expose-Headers'] = 'Token';
        axios.defaults.headers.get['Token'] = publicData.token;
        let apkListUrl = "https://dev.zhi-qu.ghzs.com/v1d0/games";
        // 游戏列表
        axios.get(apkListUrl).then(function (res) {
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
                {/*modal弹窗*/}
                <Modal title="弹窗标题" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} cancelText="取消" okText="确定">
                    请输入内容: <br/>
                    {/*直接给Input一个value属性，会报一个错误的警告*/}
                    <Input placeholder="请输入内容" defaultValue={this.state.inputContent} />
                </Modal>
                {/*更新数据按钮*/}
            </div>
        );
    }
}
export default detailModal;