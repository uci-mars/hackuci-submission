import React, { Component } from 'react';

class TextField extends Component {
    render() {
        return (
            <input type="text"
                   className='textField form-control'
                   name={this.props.name}
                   placeholder={this.props.placeholder}
                   required
            />
        );
    }
}

export default TextField;
