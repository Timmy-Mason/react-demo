// 入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,Route ,Switch } from 'react-router-dom';
import App from './App'
import Login from './component/login'
import './index.css'
import registerServiceWorker from './registerServiceWorker';
const projectNav = {
    backgroundColor:"#F8F8F8",
    color:"#778BBA",
    borderBottom:"1px solid #e7e7e7"
};
ReactDOM.render(
    <div className="public">
        <h1 style={projectNav}>游戏管理后台</h1>
        <BrowserRouter>
            <Switch>
                {/* 一、第一次解析到App这个组件，将之前引入的组件App加载进来，
                 通过exact这个属性，匹配到App之后停止*/}
                <Route path='/' component={App}/>
            </Switch>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();