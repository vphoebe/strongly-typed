import React from "react";
import Table from "react-bootstrap/Table";

const generateAttackRows = (currentGen) => {
  // take currentGen, return an array of <tr> with the appropriate data
  const typeNames = Object.keys(currentGen);
  return typeNames.map((name) => {
    const currentType = currentGen[name];
    return (
      <tr key={`a-${name}`}>
        <td className={`attack header type-${name}`}>{name}</td>
        {typeNames.map((secondName) => {
          if (currentType["double_damage_to"].includes(secondName)) {
            return (
              <td key={name + secondName} className="double">
                2
              </td>
            );
          } else if (currentType["half_damage_to"].includes(secondName)) {
            return (
              <td key={name + secondName} className="half">
                ½
              </td>
            );
          } else if (currentType["no_damage_to"].includes(secondName)) {
            return (
              <td key={name + secondName} className="zero">
                0
              </td>
            );
          } else {
            return <td key={name + secondName} className="empty"></td>;
          }
        })}
      </tr>
    );
  });
};

class TypeTable extends React.Component {
  render() {
    return (
      <Table bordered>
        <thead>
          <tr>
            <th className="corner">
              DEFENSE → <br />
              ATTACK ↴
            </th>
            {Object.keys(this.props.currentGen).map((key) => {
              return (
                <th className={`defense header type-${key}`} key={`d-${key}`}>
                  {key.toUpperCase().substring(0, 3)}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{generateAttackRows(this.props.currentGen)}</tbody>
      </Table>
    );
  }
}

export default TypeTable;
