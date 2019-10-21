import React from 'react';
import './App.css';
import CounterGroup from './components/CounterGroup/CounterGroup';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterGroup defaultCounts={3}/>
      </div>
    );
  }
}

export default App;
