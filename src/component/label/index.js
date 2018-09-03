import React, {Component} from 'react';
import axios from 'axios';
import '../../assets/css/label.css'
import {Table, Divider, Tag, Pagination } from 'antd';
const columns = [
    {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
        <span>
            {tags.map(tag => <Tag color="red" key={tag}>{tag}</Tag>)}
        </span>
    ),
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical"/>
      <a href="javascript:;">Delete</a>
    </span>
    ),
}];
const data = [
    {
    key: '1',
    name: 'John Brown',
    age: 3222,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
},{
    key: '4',
    name: 'John Brown',
    age: 3222,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
}, {
    key: '5',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
}, {
    key: '6',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
}];
class Nav extends Component {
    render() {
        return (
            <div id="detail">
                <Table columns={columns} dataSource={data}/>
                <div className="pagination">
                    <Pagination showQuickJumper defaultCurrent={2} total={500}/>
                </div>
            </div>
        );
    }
}
export default Nav;