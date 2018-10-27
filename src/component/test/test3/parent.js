import React, { Component } from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
import { Button } from 'antd';
import Game from '../../game/index';
import tabs from  '../../projectShufflingTab/index'
class parent extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    handleClick(){
        this.props.history.push({ pathname : '/tabs' ,query : { day: 'Friday'} })
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

                    {/*第而种：js跳转*/}
                    <Button onClick={this.handleClick.bind(this)} type="primary">点击我跳转</Button>

                </ul>
                <Route path={`/parent/child1`} component={Game}/>
                <Route path={`/parent/child2`} component={tabs}/>
            </div>
        );
    }
}
export default parent;