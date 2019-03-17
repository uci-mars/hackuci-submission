import React, { Component } from 'react';

class TextBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            maxCount: 500,
        };
    }
    render() {
        return (
            <div>
                <textarea
                       className='textBox form-control'
                       name={this.props.name}
                       placeholder={this.props.placeholder}
                       rows="3"
                       required
                />
                <p>{this.state.count}&#47;{this.state.maxCount}</p>
            </div>

        );
    }
}

export default TextBox;
