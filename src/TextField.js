import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class TextField extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const text = event.target.value;
        this.props.onChange(this.props.id, text);
    }

    render() {
        return (
            <Form.Control type={this.props.type}
                          className='textField'
                          onChange={this.handleChange}
                          value={this.props.value}
                          placeholder={this.props.placeholder}
                          required
            />
        );
    }
}

export default TextField;
