import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class App extends Component {
    constructor(props) {
        super(props);
        // 第一种方式：this.props.history.push
        // this.handleClick = this.handleClick.bind(this);
        // this.handleClick1 = this.handleClick1.bind(this);
    }
    // 第一种方式：this.props.history.push
    // handleClick(){
    //     this.props.history.push("/newsdetail")
    // }
    // handleClick1(){
    //     this.props.history.push("/newslist")
    // }

    render() {
        return (
            <div className="App">
                {/*第一种方式：this.props.history.push*/}
                {/*<button onClick={this.handleClick}>点击到newsDetail</button>*/}
                {/*<button onClick={this.handleClick1}>点击到newslist</button>*/}

                {/*第二种方式:相当于a跳转*/}
                <Link to='/newsdetail'>点击到newsDetail</Link> <br/>
                <Link to='/newslist'>点击到newslist</Link> <br/>
                <Link to='/newPage/传递过去的参数'>点击到newslist</Link>
            </div>
        );
    }
}
export default App;