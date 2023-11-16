import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import apartment1 from "./assets/apartment1.png";
import apartment2 from "./assets/apartment2.png";
import apartment3 from "./assets/apartment3.png";
import apartment4 from "./assets/apartment4.png";
import apartment5 from "./assets/apartment5.png";
import apartment6 from "./assets/apartment6.png";
import Header from "./components/Header/Header";
import HeaderHidden from "./components/HeaderHidden/HeaderHidden";

function App() {
  return (
    <div className="App">
      <HeaderHidden />
      <div className="App-container">
        <div className="App-wrapper">
          <Header />
          <div className="stays">
            <span className="stays-location">Stays in Findland</span>
            <span className="stays-number">12+ stays</span>
          </div>
          <div className="App-grid-container">
            <div className="grid-item">
              <Card
                type={"Entire apartment . 2 beds"}
                rate={"4.40"}
                picture={apartment1}
                title={"Stylist apartment in center of the city"}
                superhost
              />
            </div>
            <div className="grid-item">
              <Card
                type={"Private room"}
                rate={"4.25"}
                picture={apartment2}
                title={"Cozy, peaceful and private room with..."}
              />
            </div>
            <div className="grid-item">
              <Card
                type={"Entire house"}
                rate={"4.96"}
                picture={apartment3}
                title={"Mordern House in a remote area"}
              />
            </div>
            <div className="grid-item">
              <Card
                type={"Entire apartment . 2 beds"}
                rate={"4.85"}
                picture={apartment4}
                title={"Stylist room in design district"}
                superhost
              />
            </div>
            <div className="grid-item">
              <Card
                type={"Private room"}
                rate={"4.54"}
                picture={apartment5}
                title={"Modern apartment close to nature"}
              />
            </div>
            <div className="grid-item">
              <Card
                type={"Entire house"}
                rate={"4.64"}
                picture={apartment6}
                title={"House in a remote area"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
