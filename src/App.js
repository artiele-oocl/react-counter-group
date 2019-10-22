import React from 'react';
import './App.css';
import CounterGroup from './components/CounterGroup/CounterGroup';
import Counter from './components/Counter/Counter'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* <CounterGroup defaultCounts={3}/> */}
        <span>Counter using react-redux</span><br/>
        <Counter/>
        </header>
      </div>
    );
  }
}

export default App;
