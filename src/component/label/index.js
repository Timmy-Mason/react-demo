import React, { Component } from 'react';
import Child_1 from './labelModal'
class Parent extends Component{
    state = {
        msg: 'start'
    };
    //
    transferMsg(msg) {
        this.setState({
            msg
        });
    }

    render() {
        return <div>
            <p>child msg: {this.state.msg}</p>
            <Child_1 transferMsg = {msg => this.transferMsg(msg)} />
        </div>;
    }
}
export default Parent;