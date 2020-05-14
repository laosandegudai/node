const path = require('path');
const fs = require('fs');


(async () => {
  const file = path.normalize(path.resolve('../test.js'));
  console.log(path.join(file));
  const code = fs.readFileSync(file);
  console.log(code);

})();