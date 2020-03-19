import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';
import './App.css';

class App extends Component{
  state = { 
    counters : [
        {id:1, value: 0},
        {id:2, value: 0},
        {id:3, value: 4},
        {id:4, value: 0},

    ]
 };

 handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id != counterId);
    // making a new array that holds the first array excluding the counter
    //with the id we are sending
   // this.setState({counters : counters})
   this.setState({counters})
 };

 handleReset = () => {
     const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
     });
     this.setState({counters});
 };
 handleIncrements = counter => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter};
     counters[index].value++;
     this.setState({counters});

};

render(){
  return (
    <React.Fragment>
      <Navbar totalCounters = {this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters 
              counters = {this.state.counters}
              onDelete = {this.handleDelete}
              onIncrement = {this.handleIncrements}
              onReset = {this.handleReset}
          />
        </main>
    </React.Fragment>
  );
}
}

export default App;
