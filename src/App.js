import React from "react";
import "./App.css";
import CitySelector from "./components/citySelector";
import CityList from "./components/cityList";
import CityActivities from "./components/cityActivities";

function App() {
  const [selectedCity, setSelectedCity] = React.useState([]);

  function handleSelect(val) {
    setSelectedCity(val);
  }
  return (
    <div className="App">
      <div>
        <h1>Rivi-test</h1>
        <div>
          <CitySelector
            handleSelect={handleSelect}
            selectedCity={selectedCity}
          />
        </div>
        <div className="flexContainer">
          <div
            style={{
              width: "30vw",
              height: "50vh",
              margin: "5%",
              boxShadow: "20px 20px 40px 0px rgba(0, 0, 0, 0.5)",
              borderRadius: "10px",
            }}
          >
            <CityList selectedCity={selectedCity} />
          </div>
          <div
            style={{
              width: "30vw",
              height: "50vh",
              margin: "5%",
              boxShadow: "20px 20px 40px 0px rgba(0, 0, 0, 0.5)",
              borderRadius: "10px",
            }}
          >
            <CityActivities />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
