import React, { Component } from 'react';
import '../../assets/css/nav.css'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: ''
        };
    };
    render() {
        return (
            <div className="Nav">详情</div>
        );
    }
}
export default Nav;