const axios = require("axios");
const fs = require("fs");
const typeIds = [...Array(19).keys()];

const obj = {};

(async () => {
  for (let i = 0; i < typeIds.length; i++) {
    const id = typeIds[i];
    if (id !== 0) {
      const url = `https://pokeapi.co/api/v2/type/${id}`;
      const result = await axios.get(url);
      const data = result.data.damage_relations;
      const name = result.data.name;
      obj[name] = {};
      Object.keys(data).map((key) => {
        const selectedKey = data[key];
        const stuff = selectedKey.map((stuff) => stuff.name);
        return (obj[name][key] = stuff);
      });
    }
  }
  const jsonString = JSON.stringify(obj);
  fs.writeFileSync("pokeTypes.json", jsonString);
})();
