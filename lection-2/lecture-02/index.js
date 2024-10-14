import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter() {
    // merge {counter: 0}, {counter: this.state.counter + 1}, {counter: this.state.counter + 1}
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
    console.log(this.state.counter);
  }

  render() {
    return (
      <>
        <button onClick={() => this.incrementCounter()}>Increment</button>
        {this.state.counter}
      </>
    );
  }
}

let counter = 0;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App counter={counter++} />);
