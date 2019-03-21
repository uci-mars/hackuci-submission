import React, { Component } from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm.js'

class App extends Component {

  render() {
      return (
          <div className="App">
            <FeedbackForm />
          </div>
      )
  }

}

export default App;
