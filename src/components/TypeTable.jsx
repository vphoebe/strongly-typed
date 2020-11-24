import React from "react";
import Table from "react-bootstrap/Table";

const SelectedPkmnCell = (props) => {
  // return one cell based on current type
  const doubleTypes = props.type.double_damage_to;
  const halfTypes = props.type.half_damage_to;
  const noneTypes = props.type.no_damage_to;

  const defenseTypes =
    props.selectedPkmn.oldTypes &&
    props.currentGen < props.selectedPkmn.typeGenChange
      ? props.selectedPkmn.oldTypes
      : props.selectedPkmn.types;

  let attackValue1 = 1;
  let attackValue2 = 1;
  const isLevitate = props.selectedPkmn.abilities.includes("levitate"); // gen 3
  const isLightningRod = props.selectedPkmn.abilities.includes("lightning-rod"); // gen 5
  const isStormDrain = props.selectedPkmn.abilities.includes("storm-drain"); // gen 5
  const isWonderGuard = props.selectedPkmn.abilities.includes("wonder-guard"); // gen 3

  if (doubleTypes.includes(defenseTypes[0])) {
    attackValue1 = 2;
  }
  if (halfTypes.includes(defenseTypes[0])) {
    attackValue1 = 0.5;
  }
  if (noneTypes.includes(defenseTypes[0])) {
    attackValue1 = 0;
  }

  if (defenseTypes[1]) {
    if (doubleTypes.includes(defenseTypes[1])) {
      attackValue2 = 2;
    }
    if (halfTypes.includes(defenseTypes[1])) {
      attackValue2 = 0.5;
    }
    if (noneTypes.includes(defenseTypes[1])) {
      attackValue2 = 0;
    }
  }

  let finalValue = attackValue1 * attackValue2;
  if (props.typeName === "ground" && props.currentGen >= 3 && isLevitate) {
    finalValue = 0;
  }

  if (
    props.typeName === "electric" &&
    props.currentGen >= 5 &&
    isLightningRod
  ) {
    finalValue = 0;
  }

  if (props.typeName === "water" && props.currentGen >= 5 && isStormDrain) {
    finalValue = 0;
  }

  if (finalValue < 2 && props.currentGen >= 3 && isWonderGuard) {
    finalValue = 0;
  }

  return (
    <td className={valueToClassName(finalValue)}>
      {valueToCellData(finalValue)}
    </td>
  );
};

const AttackRows = (currentTypeset, selectedPkmn, currentGen) => {
  // take currentTypeset, return an array of <tr> with the appropriate data
  const typeNames = Object.keys(currentTypeset);
  return typeNames.map((typeName) => {
    const currentType = currentTypeset[typeName];
    return (
      <tr key={`a-${typeName}`}>
        <td className={`attack header type-${typeName}`}>
          {typeName.toUpperCase().substring(0, 3)}
        </td>
        <SelectedPkmnCell
          selectedPkmn={selectedPkmn}
          currentTypeset={currentTypeset}
          currentGen={currentGen}
          type={currentType}
          typeName={typeName}
        />
        {typeNames.map((secondName) => {
          let value = 1;
          if (currentType["double_damage_to"].includes(secondName)) {
            value = 2;
          } else if (currentType["half_damage_to"].includes(secondName)) {
            value = 0.5;
          } else if (currentType["no_damage_to"].includes(secondName)) {
            value = 0;
          }
          return (
            <td key={typeName + secondName} className={valueToClassName(value)}>
              {valueToCellData(value)}
            </td>
          );
        })}
      </tr>
    );
  });
};

const valueToClassName = (value) => {
  // return className appropriate to value
  if (value === 0) return "zero";
  if (value === 1) return "empty";
  if (value === 2) return "double";
  if (value === 4) return "quad";
  if (value === 0.5) return "half";
  if (value === 0.25) return "quarter";
};

const valueToCellData = (value) => {
  if (value === 1) return "";
  if (value === 0.5) return "½";
  if (value === 0.25) return "¼";
  return value;
};
class TypeTable extends React.Component {
  render() {
    return (
      <Table bordered responsive>
        <thead>
          <tr>
            <th className="corner">
              DEFENSE → <br />
              ATTACK ↴
            </th>
            <th className="pkmn-header-cell">
              <img
                src={this.props.selectedPkmn.sprite}
                alt={"test"}
                className="sprite-header"
              />
            </th>
            {Object.keys(this.props.currentTypeset).map((key) => {
              return (
                <th className={`defense header type-${key}`} key={`d-${key}`}>
                  {key.toUpperCase().substring(0, 3)}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {AttackRows(
            this.props.currentTypeset,
            this.props.selectedPkmn,
            this.props.currentGen
          )}
        </tbody>
      </Table>
    );
  }
}

export default TypeTable;
