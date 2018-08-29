import React, { Component } from 'react';
import '../../assets/css/nav.css'
import Button from 'antd/lib/button';
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: ''
        };
    };
    render() {
        return (
            <div className="Nav">
                <Button type="primary">列表页面</Button>
            </div>
        );
    }
}
export default Nav;