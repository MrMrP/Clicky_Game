import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from './components/Jumbotron';
import Cards from "./components/Cards";

const App = () => (
    <div className="container">
        <Navbar />
        <Jumbotron />
        <Cards />
    </div>
);
export default App;
