/**
 *  demo
 * **/

const path = require('path');
const fileBase64 = require('../lib/main');
const filePath = path.resolve(__dirname, './file/1.gif');


// file to base64
fileBase64.fileToBase64(filePath)
  .then((res) => {
    base64ToFile(res.str);
  })
  .catch((err) => {
    console.log(err);
  })


// base64 to file demo
const base64ToFile = function (base64Str) {
  const dir = path.resolve(__dirname, './output');
  fileBase64.base64ToFile(base64Str, dir,)
    .then((res) => {
      if (res.code) {
        console.log('success');
      }
    })
    .catch((err) => {
      console.log(err);
    })
}
