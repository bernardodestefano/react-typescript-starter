import React from 'react';
import logo from '../assets/images/react_logo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <img src={logo} />
        <h1>A simple webpack react boilerplate</h1>
      </div>
    );
  }
}

export default App;
