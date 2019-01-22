import * as React from "react";
const logo = require('./../assets/images/react_logo.svg');

export interface AppProps {
}

class App extends React.Component<AppProps, undefined> {
  render() {
    return (
      <div className="app">
        <img src={logo} />
        <h1>A minimal react typescript starter</h1>
      </div>
    );
  }
}

export default App;
