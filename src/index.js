import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,Route ,Switch } from 'react-router-dom';
import App from './App'
import Newsdetail from './component/nwesDetail/index';
import Newslist from './component/newList/index';
import NewPage from './component/newPage/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <h1>我是公共部分</h1>
        <BrowserRouter>
            <Switch>
                {/*第一次解析到App这个组件*/}
                <Route path='/' component={App} exact />
                {/*下边的两个组件之间进行切换*/}
                <Route path='/newsdetail' component={ Newsdetail }/>
                <Route path='/newslist' component={ Newslist }/>
                <Route path='/newPage/:id' component={ NewPage }/>
            </Switch>
        </BrowserRouter>
    </div>
    , document.getElementById('root'));
registerServiceWorker();