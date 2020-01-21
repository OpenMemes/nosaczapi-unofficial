//Wymaga zainstalowania Node. Paczki dodatkowe nie są wymagane.
const fs = require('fs');
let fileContent = []
fs.unlinkSync("../listings/listing.json") //Usuwa stary listing.
fs.readdirSync("../images/").forEach(file => {
    fileContent.push(`"` + file + `"`);
  });
fs.writeFileSync("../listings/listing.json", "[" + fileContent.toString() + "]")
//Z jakiegoś kurwa powodu kasują się [] w .json, dodaję jeszcze raz.