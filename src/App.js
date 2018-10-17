import React, { Component } from "react";
import Cards from "./components/Cards";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import Navbar from "./components/Navbar/Navbar.js";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    clickedArray: [],
    topScore: 0,
    score: 0
  };
  cardPress = id => {
    // Arrange the cards in a random manner
    const shuffledArray = this.shuffleArray(cards);
    this.setState({cards: shuffledArray});
    // if clicked a card already clicked set this.state.score = 0; empty clickedArray, end of if block
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [] 
      });
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,  
      });
    }
    // set topscore = score if score>topscore.
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  }
  shuffleArray = (cardsArray) => {
      for (let i = cardsArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
      }
      return cardsArray;
  }
  // Map over this.state.friends and render a Card component for each friend object
  render() {
    return (
      <div className="master-container">
      <Navbar />
        <div className="Jumbotron">
          <Jumbotron/>
        </div>
        <div className="instructions">
          <p>Click on an image to earn points, but don't click on any image more than once. If you do it's game over and your score will reset. Lets find out how high you can score!!!!!</p>
          <h6 className="score">Score: {this.state.score} | Top Score: {this.state.topScore}</h6> 
        </div>
      <div className="card-container">
      {this.state.cards.map(cards => (
          <Cards
            cardPress={this.cardPress}
            id={cards.id}
            key={cards.id}
            name={cards.name}
            image={cards.image}
          />
        ))}
      </div>
      </div>
    );
  }
}

export default App;
