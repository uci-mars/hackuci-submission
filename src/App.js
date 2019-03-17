import React, { Component } from 'react';
import './App.css';
import TextField from './TextField.js'
import TextBox from './TextBox.js'

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="Feedback">
              <h1 className="title">Feedback</h1>
              <form>
                <TextField placeholder='First Name' name='fname'/>
                <TextField placeholder='Last Name' name='lname'/>
                <TextField placeholder='john@example.com' name='email'/>
                <TextBox placeholder='Message' name='message'/>
                <button type="submit" class="submitButton btn btn-primary">Submit</button>
              </form>
              </div>
        </div>





    );
  }
}

export default App;
