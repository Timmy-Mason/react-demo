import React, { Component } from 'react';
class Child_1 extends Component{
    componentDidMount() {
        // 父组件传递的，是作用域为父组件自身的函数，子组件调用该函数，将子组件想要传递的信息，作为参数，传递到父组件的作用域中。
        setTimeout(() => {
            this.props.transferMsg('我是从子组件里边传过来的参数')
        }, 1000);
    }

    render() {
        return <div>
            <p>child_1 component</p>
        </div>
    }
}
export default Child_1;