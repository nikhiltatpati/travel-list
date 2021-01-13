import React from "react";

const style = {
  height: 30,
  border: "1px solid black",
  margin: 10,
  padding: 10,
  textAlign: "left",
  borderRadius: "5px",
  cursor: "pointer",
};

export const CityList = ({ selectedCity = [] }) => {
  return (
    <div style={{ overflow: "auto", height: "100%" }}>
      {selectedCity.map((city) => {
        return (
          <div className="card" style={style}>
            {city.name}
          </div>
        );
      })}
    </div>
  );
};

export default CityList;
