import React, { Component } from 'react';
import './App.css';
import MainPage from './component/main';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <MainPage/>
      </div>
    );
  }
}

export default App;
