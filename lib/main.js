const fs = require('fs');
const path = require('path');
const mineType = require('mime-types');

const fileToBase64 = function (filePath) {
  if (!filePath) {
    return console.error('need file path');
  }
  return new Promise((resolve, reject) => {
    try {
      const filePATH = path.resolve(__dirname, filePath);
      const data = fs.readFileSync(filePATH);
      resolve('data:' + mineType.lookup(filePath) + ';base64,' + Buffer.from(data).toString('base64'));
    } catch (e) {
      console.error(e);
      reject(e);
    }
  })
}
module.exports = fileToBase64;
