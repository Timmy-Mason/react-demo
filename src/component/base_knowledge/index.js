import React, { Component } from 'react';
let navStyle = {
    "height":"50px",
    "lineHeight":"50px",
    "backgroundColor":"red",
    "textAlign":"center",
    "color":"#fff",
    "fontSize":"26px"
}
class NewPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            msg: 'start'
        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                {/*样式除了下边的这两种写法之外,还可以直接从外部引入,从外部引入的不需要采用驼峰命名的方法*/}
                <nav style={navStyle}>基础知识点</nav>
                <div style={{"backgroundColor":"pink","height":"50px","lineHeight":"50px","marginTop":"50px","textAlign":"center"}}>content 内容</div>
            </div>
        );
    }
}
export default NewPage;