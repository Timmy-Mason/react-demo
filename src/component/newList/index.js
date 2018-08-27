import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
            <div className="Nav">列表</div>
        );
    }
}
export default Nav;