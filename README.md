# node-file-base64

<u>node-file-base64 requires node v7.6.0 or higher for ES2015。</u>



**how to use?**

demo:

const fileToBase64 = require(' node-file-base64 ');  
const filePath = path.resolve(__dirname, ' your file path ');  

fileToBase64(filePath)  
  .then((res) => {  
    console.log(res);  
 })  
  .catch((err) => {  
    console.log(err);  
 })
