import React, {Component} from 'react';
import {Button, Input} from 'antd';
let navStyle = {
    "height": "50px",
    "lineHeight": "50px",
    "backgroundColor": "red",
    "textAlign": "center",
    "color": "#fff",
    "fontSize": "26px",
    "marginTop": "50px"
}
class NewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'start',
            inputVal1: "初始值1",
            inputVal2: "初始值2"
        };
    }

    componentDidMount() {

    }

    modifyInputVal1() {
        // console.log(this.refs.inputVal.value); // undefined,拿不到对应的值（这种使用的方法在react里边已经慢慢被淘汰，所以）
        this.setState({
            inputVal1: "激活值1"
        });
    }

    modifyInputVal2() {
        this.myTextInput.focus();
        console.log(this.myTextInput.value);  // undefined
        // input的值是这样获取的
        console.log(this.myTextInput.props.value); // 初始值2
    }

    test() {

    }

    render() {
        return (
            <div>
                {/*一、样式除了下边的这两种写法(都需要采用驼峰命名法)之外,还可以直接从外部引入,从外部引入的不需要采用驼峰命名的方法*/}
                <nav style={navStyle}>基础知识点</nav>
                <div style={{
                    "backgroundColor": "pink",
                    "height": "50px",
                    "lineHeight": "50px",
                    "marginTop": "50px",
                    "textAlign": "center"
                }}>content 内容
                </div>
                {/*二、refs*/}
                <div style={navStyle}>
                    <Button ref="btn" type="primary"
                            onClick={this.modifyInputVal1.bind(this)}>点击修改input1输入框的val</Button>&nbsp;
                    <Button ref="btn" type="primary"
                            onClick={this.modifyInputVal2.bind(this)}>点击修改input2输入框的val</Button>
                </div>
                {/*value 和 onChange必须结合，如果只有value，控制台会给出警告。如果使用defaultValue，控制台不会给出警告，但是不能通过setState的方法改变input的值*/}
                <Input style={{border: "1px solid blue", marginTop: "2px"}} placeholder="Basic usage 1"
                       value={this.state.inputVal1} onChange={(value) => this.onChange(value)}/>

                <Input ref={(ref) => this.myTextInput = ref} style={{border: "1px solid blue", marginTop: "2px"}} placeholder="Basic usage 2"
                       value={this.state.inputVal2} onChange={(value) => this.onChange(value)}/>

                {/*<Input placeholder="请输入游戏名字" style={inputColorTwo} value={this.state.button_content}/>*/}

            </div>
        );
    }
}
export default NewPage;