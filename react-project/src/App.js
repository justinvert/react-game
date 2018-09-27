import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Page from "./components/Page";
import numbers from "./images.json";
import './App.css';

class App extends Component {

  state = {
    numbers: numbers,
    score: 0,
    highScore: 0
  };

  clickTest = id => {
    const numbers = this.state.numbers.filter(number => number.id === number.id);
    this.setState({ numbers,
      score: this.state.score+= 1,
    });
 
shuffle(numbers);
  };

render() {
  return (
    <Page>
  <Navbar>
          <li id="title" className="list-inline-item">React Game</li>
          <li id="guess" className="list-inline-item"></li>
          <li id="score" className="list-inline-item">Current Score: {this.state.score}</li>
         </Navbar>
         <div className="container text-center">
         <div className="row">
        {this.state.numbers.map(number => (
       <Card cascade
          
            id={number.id}
            name={number.name}
            clickTest={this.clickTest}
            image={number.image}
        />
      ))}
      </div>
       </div>
     
    </Page>
  );
}
}

const shuffle= (array) =>  {

  let i;
  let j;
  let newNumber;
    for ( i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
         newNumber = array[i];
        array[i] = array[j];
        array[j] = newNumber;
    }
     return array;    
};



export default App;
