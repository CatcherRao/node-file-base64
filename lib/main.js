const fs = require('fs');
const path = require('path');
const mineType = require('mime-types');
const dirMethod = require('./util');

const fileBase64 = {
  // file to base64
  fileToBase64: (filePath) => {
    if (!filePath) {
      return console.error('need file path');
    }
    return new Promise((resolve, reject) => {
      try {
        const filePATH = path.resolve(__dirname, filePath);
        const data = fs.readFileSync(filePATH);
        const str = 'data:' + mineType.lookup(filePath) + ';base64,' + Buffer.from(data).toString('base64');
        resolve({code: 1, msg: 'success', str});
      } catch (e) {
        console.error(e);
        reject({code: 0, msg: 'fail', error: e});
      }
    })
  },
  // base64 to file
  base64ToFile: (base64Str, fileDir, fileName = '') => {
    if (!base64Str) {
      return console.error('need base64 string');
    }
    if (!fileDir) {
      return console.error('need file directory');
    }
    if (!dirMethod.isExistsDir(fileDir)) {
      dirMethod.makeDir(fileDir);
    }
    const file_name = fileName || new Date().valueOf();
    return new Promise((resolve, reject) => {
      try {
        const fileType = base64Str.slice(0, base64Str.indexOf(';')).split('/')[1];
        const base64Data = base64Str.slice(base64Str.indexOf(',') + 1);
        const buffer = Buffer.from(base64Data, 'base64');
        const FILE_PATH = fileDir + '/' + file_name + '.' + fileType;
        fs.writeFileSync(FILE_PATH, buffer);
        resolve({code: 1, msg: 'success'});
      } catch (e) {
        console.error(e);
        reject({code: 0, msg: 'fail', error: e});
      }
    })
  }
}
module.exports = fileBase64;
