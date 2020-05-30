import { h, render, Component, Fragment } from 'preact';

class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleIncreaseClick() {
    this.setState({
        count: this.state.count + 1
    });
  }

  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncreaseClick.bind(this)}>Increase!</button>
      </>
    );
  }
}

export default App;
