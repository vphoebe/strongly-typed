import TypeTable from "./components/TypeTable";
import GenSelector from "./components/GenSelector";
import PkmnSearchbar from "./components/PkmnSearchbar";
import React from "react";
import "./App.css";

import gen6 from "./data/gen6.json";
import gen2 from "./data/gen2.json";
import gen1 from "./data/gen1.json";

import pokeList from "./data/pokeList.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTypeset: gen6,
      currentGen: 6,
      currentPkmn: pokeList["gyarados"],
      currentPkmnName: "gyarados",
      pokeList: Object.keys(pokeList),
    };
  }

  handleGenChange = (newTypeset, newGen) => {
    this.setState({ currentTypeset: newTypeset, currentGen: newGen });
  };

  handlePkmnChange = (newPkmnName) => {
    this.setState({
      currentPkmn: pokeList[newPkmnName],
      currentPkmnName: newPkmnName,
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
            pokeList={this.state.pokeList}
            currentPkmnName={this.state.currentPkmnName}
            onPkmnChange={this.handlePkmnChange}
          />
        </div>
        <div className="table-container">
          <TypeTable
            currentTypeset={this.state.currentTypeset}
            currentGen={this.state.currentGen}
            currentPkmn={this.state.currentPkmn}
          />
        </div>
      </>
    );
  }
}

export default App;
