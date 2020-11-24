import React from "react";
import Select from "react-select";

const PkmnSearchbar = (props) => {
  return (
    <div className="pkmn-search-container">
      <Select
        options={props.options}
        value={props.selectedPkmn}
        onChange={(opt) => props.onPkmnChange(opt)}
      />
    </div>
  );
};

export default PkmnSearchbar;
