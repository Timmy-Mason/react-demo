import React, { Component } from 'react';
class NewPage extends Component {
    render() {
        return (
            <div>
                {/*注意参数的名称*/}
                newPage:这是参数:{this.props.match.params.id}
            </div>
        );
    }
}
export default NewPage;