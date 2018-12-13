// 入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect, BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App'
import Login from './component/login'
import './index.css'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <div className="public">
        {/*basename: 如果你的页面部署在服务器的二级（子）目录，你需要将  basename 设置到此子目录。 正确的 url 格式是前面有一个前导斜杠，但不能有尾部斜杠*/}
        {/*<BrowserRouter basename="/basename">*/}

        <BrowserRouter>
            <Switch>
                {/* 一、第一次解析到App这个组件，将之前引入的组件Login加载进来，通过exact这个属性，匹配到Login之后停止*/}
                <Route exact path='/' component={Login}/>
                <Route path='/react_admin' component={App}/>
            </Switch>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();