import TypeTable from "./components/TypeTable";
import GenSelector from "./components/GenSelector";
import PkmnSearchbar from "./components/PkmnSearchbar";
import React from "react";
import { FaGithub } from "react-icons/fa";
import "./App.css";

import gen6 from "./data/gen6.json";
import gen2 from "./data/gen2.json";
import gen1 from "./data/gen1.json";

import pokeList from "./data/pokeList.json";

const capitalizeStr = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const addOldTypes = (name) => {
  if (pokeList[name].oldTypes) return `[${pokeList[name].oldTypes.join("/")}]`;
  return "";
};

const pkmnOptions = Object.keys(pokeList).map((name) => {
  return {
    value: name,
    label: `${capitalizeStr(name)} (${pokeList[name].types.join(
      "/"
    )}) ${addOldTypes(name)}`,
  };
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTypeset: gen6,
      currentGen: 6,
      selectedPkmn: pkmnOptions[0],
    };
  }

  handleGenChange = (newTypeset, newGen) => {
    this.setState({ currentTypeset: newTypeset, currentGen: newGen });
  };

  handlePkmnChange = (newPkmn) => {
    this.setState({
      selectedPkmn: newPkmn,
    });
  };

  render() {
    return (
      <>
        <div className="toolbar-container">
          <GenSelector
            currentTypeset={this.state.currentTypeset}
            gen6={gen6}
            gen2={gen2}
            gen1={gen1}
            currentGen={this.state.currentGen}
            onGenChange={this.handleGenChange}
          />
          <PkmnSearchbar
            options={pkmnOptions}
            selectedPkmn={this.state.selectedPkmn}
            onPkmnChange={this.handlePkmnChange}
          />
        </div>
        <div className="table-container">
          <TypeTable
            currentTypeset={this.state.currentTypeset}
            currentGen={this.state.currentGen}
            selectedPkmn={pokeList[this.state.selectedPkmn.value]}
          />
        </div>
        <div className="footer">
          <a
            href="https://github.com/vphoebe/strongly-typed"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            &nbsp;strongly-typed, by vphoebe
          </a>
        </div>
      </>
    );
  }
}

export default App;
