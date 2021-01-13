import React, { useState } from "react";

import Select from "react-select";
import cityData from "../cityData.json";

const CitySelector = ({ handleSelect, selectedCity }) => {
  const [cityOptions] = useState(cityData.cities);

  return (
    <div>
      <Select
        isMulti
        placeholder="Enter City Name..."
        name="cities"
        onChange={handleSelect}
        options={cityOptions}
        getOptionLabel={(option) => `${option.name}`}
        getOptionValue={(option) => option}
        className="basic-multi-select"
        classNamePrefix="select"
        isSearchable={true}
      />
    </div>
  );
};

export default CitySelector;
