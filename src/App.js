import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [{ value: 0 }, { value: 2 }, { value: 3 }, { value: 0 }],
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <Navbar totalCount={this.state.counters.length} />
        </header>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
        <footer></footer>
      </React.Fragment>
    );
  }

  handleDelete = (event) => {
    this.setState((state) => {
      const counters = [...state.counters];
      counters.splice(event.target.dataset.index, 1);
      return { counters };
    });
  };

  handleIncrement = (event) => {
    this.setState((state) => {
      const { index } = event.target.dataset;
      const counters = [...state.counters];
      const counter = { ...state.counters[index] };
      counter.value++;
      counters.splice(index, 1, counter);
      return { counters };
    });
  };

  handleDecrement = (event) => {
    this.setState((state) => {
      const { index } = event.target.dataset;
      const counters = [...state.counters];
      const counter = { ...state.counters[index] };
      counter.value--;
      counters.splice(index, 1, counter);
      return { counters };
    });
  };

  handleReset = () => {
    this.setState((state) => {
      const counters = state.counters.map((counter) => {
        counter.value = 0;
        return counter;
      });
      return { counters };
    });
  };
}

export default App;
