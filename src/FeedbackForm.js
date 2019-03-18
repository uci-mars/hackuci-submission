import TextBox from './TextBox.js'
import TextField from './TextField.js'
import Form from 'react-bootstrap/Form'
import React, { Component } from 'react'

class FeedbackForm extends Component {
    constructor(props){
        super(props);
        this.state = {first:'', last:'', email:'', message:''};

        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange(fieldId, value) {
        this.setState({[fieldId]: value });
    }

    submit(){
        this.setState({isSubmitted: true});
        console.log(this.state);
    }

    render() {
        if (!this.state.isSubmitted) {

            return(
                <div className="FeedbackForm">
                    <h1 className="title">Feedback</h1>
                    <Form onSubmit={() => this.submit()}>

                        <TextField
                            key='first'
                            id='first'
                            onChange={this.handleFieldChange}
                            value={this.state['first']}
                            placeholder='First Name'
                            type='text'
                        />

                        <TextField
                            key='last'
                            id='last'
                            onChange={this.handleFieldChange}
                            value={this.state['last']}
                            placeholder='Last Name'
                            type='text'
                        />

                        <TextField
                            key='email'
                            id='email'
                            onChange={this.handleFieldChange}
                            value={this.state['email']}
                            placeholder='john@example.com'
                            type='email'
                        />

                        <TextBox key='message'
                                 id='message'
                                 onChange={this.handleFieldChange}
                                 value={this.state.message}
                                 placeholder='Message'
                        />

                        <p>{this.state.message.length}&#47;500</p>

                        <button type="submit" className="submitButton btn btn-primary">Submit</button>
                    </Form>
                </div>
            );
        } else {
            return (
                <div className="FeedbackForm">
                    <h1 className="title">Feedback</h1>
                    <p className='thankyou'>Thank you for your feedback! <span role='img'
                                                                               aria-label="Smiling face">🙂</span></p>
                </div>
            );
        }
    };
}

export default FeedbackForm;