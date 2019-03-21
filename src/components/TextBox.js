import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'

class TextBox extends Component {
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
            <Form.Control as="textarea" className='textBox' rows="3"
                          placeholder={this.props.placeholder}
                          maxLength={500}
                          onChange={this.handleChange}
                          value={this.props.value}
                          required/>
        );
    }
}

export default TextBox;
