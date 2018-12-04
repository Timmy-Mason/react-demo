// 入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App'
import Login from './component/login'
import './index.css'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <div className="public">
        <BrowserRouter>
            <Switch>
                {/* 一、第一次解析到App这个组件，将之前引入的组件Login加载进来，通过exact这个属性，匹配到Login之后停止*/}
                <Route exact path='/' component={Login}/>
                <Route path='/' component={App}/>
            </Switch>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();