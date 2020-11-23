import React from "react";
import SelectSearch from "react-select-search";

const PkmnSearchbar = (props) => {
  const pkmnOptions = props.pokeList.map((name) => {
    return {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value: name,
    };
  });
  return (
    <SelectSearch
      options={pkmnOptions}
      search
      value={props.currentPkmnName}
      onChange={(opt) => props.onPkmnChange(opt)}
    />
  );
};

export default PkmnSearchbar;
