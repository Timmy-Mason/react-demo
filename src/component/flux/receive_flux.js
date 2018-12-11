
import React, {Component} from 'react';
// 修改 View ，让它监听 Store 的 change 事件。
import ListStore from '../stores/ListStores'

class text_flux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "初始化data"
        };
    }
    componentDidMount() {
        // 当ListStore里边的数据发生变化的时候,好像监听不到数据
        ListStore.addChangeListener(this.onChange);
        if(ListStore.getAll()){
            this.setState({
                data:ListStore.getAll()
            });
        }
    }
    componentWillUnmount() {
        // 加上之后change就不会触发了，不知道是什么问题
        // ListStore.removeChangeListener(this.onChange);
    }
    onChange() {
        console.log("flux/receive_flux.js");
        console.log(ListStore.getAll());
    }
    render() {
        return (
            <div>
                <h2>{this.state.data}</h2>
                {/*<h2>我是接收数据的</h2>*/}
            </div>
        );
    }
}
export default text_flux;



