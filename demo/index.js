/**
 *  demo
 * **/

const path = require('path');
const fileToBase64 = require('../lib/main');
const filePath = path.resolve(__dirname, './file/1.jpeg');

fileToBase64(filePath)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
