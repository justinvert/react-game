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
    otherNumbers: numbers,
    score: 0,
    highScore: 0,
    message: "",
Test: false
  };

  clickTest = id => {
    const incorrect = this.state.otherNumbers.find(number => number.id === number.id);
    //  this.setState({
  //   highScore: this.state.score
  //  })

  if(this.state.score >= this.state.highScore){
       this.setState({
    highScore: this.state.score
   })
  }

    if(!incorrect){
      // alert("Test Message")
      this.setState({ numbers,
        score: 0,
        // highScore: this.state.score,
        otherNumbers: numbers,
        message:"Incorrect."
        // Test: false
      });
      shuffle(numbers);
    }
    
    else {
      const correct = this.state.otherNumbers.filter(number => number.id !== id);


      this.setState({ numbers,
        score: this.state.score+= 1,
        // highScore: this.state.score,
        otherNumbers: correct,
        message:"Correct!"
      //  Test: true
      });
      shuffle(numbers);
    }


  };

render() {
  return (
   
    <Page>
  <Navbar>
          <li id="title" className="list-inline-item">{this.state.message}</li>
          &nbsp;
          <li id="guess" className="list-inline-item">High Score: {this.state.highScore}</li>
          &nbsp;
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
