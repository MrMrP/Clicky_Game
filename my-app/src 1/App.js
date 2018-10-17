import React from "react";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import Navbar from "./components/Navbar/Navbar.js";
import Card from "./components/Cards/Card.js"
import cards from "./cards.json"


const App = () => (
<div className="container"> 
    <Wrapper>
    <Navbar />
    <Jumbotron />
    <div className="card-container">
    <Card 
    name={cards[0].name}
    image={cards[0].image}
    />
    <Card 
    name={cards[1].name}
    image={cards[1].image}
    />
    <Card 
    name={cards[2].name}
    image={cards[2].image}
    />
    <Card 
    name={cards[3].name}
    image={cards[3].image}
    />
    </div>
    
</Wrapper>
    </div>
    

)
export default App;
