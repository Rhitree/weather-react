import React from 'react';
import './App.css';
import Weather from './Weather';


export default function App() {
  return (
    <div className="App">
    <div className="outerContainer">
          <div className="container">
            <div className="appContainerHeader">
                          <span className="dot1"></span>
                          <span className="dot2"></span>
                          <span className="dot3"></span>React Weather App</div>
            <div className="appContainerContent">
            <Weather defaultCity="Cardiff"/>
            </div>
              </div>
          <footer>
            This project was coded by Rhian Jenkins and is open-sourced on 
            <a href= "https://github.com/Rhitree/react-final-weather-app" target="_blank" rel="noreferrer"> Github </a>
            and hosted on 
            <a href="https://app.netlify.com/projects/silver-eclair-98aa41/overview" target="_blank" rel="noreferrer"> Netlify </a>
          </footer>
          </div>
    </div>
  );
}