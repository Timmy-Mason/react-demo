import React, {Component} from 'react';
// 三个都必须要引入
import {Link, HashRouter, Switch, Redirect, Route, BrowserRouter as Router} from 'react-router-dom'
import cookie from 'react-cookies'
import Game from './component/game/index';
import Tabs from  './component/projectShufflingTab/index'
import Parent from  './component/parent_children/parent'
import test1 from './component/pass_data/same_level/index';
import test2 from './component/pass_data/parent_children/index';
import flux from './component/flux/index';
import flux2 from './component/flux/receive_flux';

import './App.css';
import {Button, Layout, Menu, Icon} from 'antd';
const {Header, Footer, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;

const projectNav = {
    backgroundColor: "#F8F8F8",
    color: "#778BBA",
    borderBottom: "1px solid #e7e7e7"
};

class App extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        cookie.remove("react_admin_token");
        this.props.history.push({pathname: '/'})
    }

    render() {
        return (
            <div id="container">
                <HashRouter>
                    {/*<div className="side-bar-content">*/}
                    {/*<ul className="side-bar">*/}
                    {/*<li><Link to="/">游戏</Link></li>*/}
                    {/*<li><Link to="/tabs">tabs</Link></li>*/}
                    {/*/!*通过路由切换传递参数*!/*/}
                    {/*/!*<li><Link to="/test1:canshu和parmas">test1</Link></li>*!/*/}
                    {/*/!*<li><Link to="/test2">test2</Link></li>*!/*/}
                    {/*<li><Link to="/parent">parent组件</Link></li>*/}
                    {/*</ul>*/}
                    {/*<div className="content">*/}
                    {/*<Switch>*/}
                    {/*/!*备注: 如果第一个为"/",那么必须在第一个Route标签上边加上 exact*!/*/}
                    {/*<Route path="/games" component={Game}></Route>*/}
                    {/*<Route path="/tabs" component={Tabs}></Route>*/}
                    {/*/!*<Route path="/test1:id" component={test1}></Route>*!/*/}
                    {/*/!*<Route path="/test2" component={test2} ></Route>*!/*/}
                    {/*/!*嵌套路由*!/*/}
                    {/*<Route path="/parent" component={Parent}></Route>*/}
                    {/*<Redirect to="/games"/>*/}
                    {/*</Switch>*/}
                    {/*</div>*/}
                    {/*</div>*/}

                    <Layout>
                        {/*<Sider>*/}
                        {/*<ul className="side-bar">*/}
                        {/*<span>测试数据后台 v1.0</span>*/}
                        {/*<li><Link to="/">游戏</Link></li>*/}
                        {/*<li><Link to="/tabs">tabs</Link></li>*/}
                        {/*/!*通过路由切换传递参数*!/*/}
                        {/*/!*<li><Link to="/test1:canshu和parmas">test1</Link></li>*!/*/}
                        {/*/!*<li><Link to="/test2">test2</Link></li>*!/*/}
                        {/*<li><Link to="/parent">parent组件</Link></li>*/}
                        {/*</ul>*/}
                        {/*</Sider>*/}

                        <Sider className="side-bar"
                               breakpoint="lg"
                               collapsedWidth="0"
                               onBreakpoint={(broken) => {

                               }}
                               onCollapse={(collapsed, type) => {

                               }}
                        >
                            <Menu mode="inline" defaultSelectedKeys={['1']}>

                                <Menu.Item key="1">
                                    <Link to="/">
                                        <Icon type="user"/>
                                        <span className="nav-text">游戏</span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key="2">
                                    <Link to="/tabs">
                                        <Icon type="video-camera"/>
                                        <span className="nav-text">tabs</span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key="3">
                                    <Link to="/parent">
                                        <Icon type="upload"/>
                                        <span className="nav-text">嵌套组件</span>
                                    </Link>
                                </Menu.Item>

                                <SubMenu key="sub1" title={<span><Icon type="user"/><span>组件之间传值</span></span>}>
                                    <Menu.Item key="4">
                                        <Link to="/test1:id和val">同级组件之间传值</Link>
                                    </Menu.Item>
                                    <Menu.Item key="5">
                                        <Link to="/test2">父子组件之间传值</Link>
                                    </Menu.Item>
                                </SubMenu>

                                <SubMenu key="sub2" title={<span><Icon type="user"/><span>flux数据流传值</span></span>}>
                                    <Menu.Item key="6">
                                        <Link to="/flux">
                                            <Icon type="check-square"/>
                                            <span className="nav-text">flux</span>
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="7">
                                        <Link to="/flux2">
                                            <Icon type="edit"/>
                                            <span className="nav-text">flux2</span>
                                        </Link>
                                    </Menu.Item>
                                </SubMenu>

                                {/*通过路由切换传递参数*/}
                                {/*<li><Link to="/test1:canshu和parmas">test1</Link></li>*/}
                                {/*<li><Link to="/test2">test2</Link></li>*/}
                            </Menu>
                        </Sider>

                        <Layout>
                            <Header><Button type="primary"
                                            onClick={this.handleClick.bind(this)}>点击退出登陆</Button></Header>
                            <Content style={{backgroundColor: '#fff'}}>
                                <Switch>
                                    {/*备注: 如果第一个为"/",那么必须在第一个Route标签上边加上 exact*/}
                                    <Route path="/games" component={Game}></Route>
                                    <Route path="/tabs" component={Tabs}></Route>
                                    {/*嵌套路由*/}
                                    <Route path="/parent" component={Parent}></Route>
                                    {/*通过路由切换传递参数*/}
                                    <Route path="/test1:id" component={test1}></Route>
                                    <Route path="/test2" component={test2}></Route>
                                    <Route path="/flux" component={flux}></Route>
                                    <Route path="/flux2" component={flux2}></Route>
                                    <Redirect to="/games"/>
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </HashRouter>
            </div>
        );
    }
}
export default App;