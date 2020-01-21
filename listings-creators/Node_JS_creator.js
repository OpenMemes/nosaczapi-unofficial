//Wymaga zainstalowania Node. Paczki dodatkowe nie są wymagane.
const fs = require('fs');
let fileContent = []
fs.unlinkSync("../listings/listing.js") //Usuwa stary listing.
fs.readdirSync("../images/").forEach(file => {
    fileContent.push(`"` + file + `"`);
  });
fs.writeFileSync("../listings/listing.js", "const images = [" + fileContent.toString() + "]\nmodule.exports = images")
//Z jakiegoś kurwa powodu kasują się [] w .js, dodaję jeszcze raz.
//Eksportuję jako stałą images.