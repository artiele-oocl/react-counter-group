import React from 'react';
import './App.css';
import Page from './Page';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Page/>
        </header>
      </div>
    );
  }
}

export default App;
