import React, { Component } from 'react';
import {Link,Switch,Redirect,Route,BrowserRouter as Router} from 'react-router-dom'
import { Button } from 'antd';
// 子组件为 Game 和 tabs
import Game from '../game/index';
import tabs from  '../projectShufflingTab/index'

class parent extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    handleClick(item){
        console.log(item);
        this.props.history.push({ pathname : '/Tabs' ,query : { day: 'Friday'} })
    }
    render() {
        return (
            <div>
                <h2>parent组件:主题列表</h2>
                <ul>
                    <li>
                        <Link to="/parent/child1">
                            点击跳转到 game 组件
                        </Link>
                    </li>
                    <li>
                        <Link to="/parent/child2">
                            点击跳转到 tab 组件
                        </Link>
                    </li>

                    {/*第一种：html跳转*/}
                    {/*<Link to="/tabs">*/}
                        {/*<Button type="primary">点击我跳转</Button>*/}
                    {/*</Link>*/}

                    {/*第二种：js跳转*/}
                    {/*<Button onClick={this.handleClick.bind(this,"我是参数")} type="primary">点击我跳转</Button>*/}
                    <Button onClick={() => this.handleClick("我是参数")} type="primary">点击我跳转</Button>
                </ul>
                <Switch>
                    <Route path={`/parent/child1`} component={Game}/>
                    <Route path={`/parent/child2`} component={tabs}/>
                    <Redirect to="/parent/child1" />
                </Switch>
            </div>
        );
    }
}
export default parent;
