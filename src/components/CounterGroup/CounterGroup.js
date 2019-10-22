import React from 'react';
import Counter from '../Counter/Counter'

class CounterGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterCounts: this.props.defaultCounts,
      inputValue: this.props.defaultCounts,
      sum: 0
    };
  }
  handleInputchange = (e) => {
    this.setState({inputValue: e.target.value})
  }
  regeneratecounters = () => {
    this.setState({counterCounts: this.state.inputValue})
  }
  counterUpdateCallback = (changeNumber) => {
    this.setState({sum: this.state.sum + changeNumber})
  }
  renderCounters = () => {
    let counters = [];
    for (let index = 0; index < this.state.counterCounts; index++) {
      counters.push(<Counter
        key={index}
        onCounterValueChange={this.counterUpdateCallback}
      />)
    }
    return counters;
  }
  render() {
    let counters = this.renderCounters();
    console.log(this.state.counterCounts)
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleInputchange}/>
        <button onClick={this.regeneratecounters}>Regenerate Counters</button>
        <div><span>Sum: {this.state.sum}</span></div>
        {counters}
      </div>
    );
  }
}

export default CounterGroup;
