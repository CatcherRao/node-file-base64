# node-file-base64

<u>node-file-base64 requires node v7.6.0 or higher for ES2015。</u>

### **how to use?**

npm install  node-file-base64 --save-dev

const fileBase64 = require(' node-file-base64 ');  

//  file to base64 string

fileBase64.fileToBase64(' your file path ')  
  .then((res) => {  
    console.log(res.str);  
 })  
  .catch((err) => {  
    console.log(err);  
 })

//  base64  string  to  file

fileBase64.base64ToFile(base64Str, 'your file directory', 'your file name')  
  .then((res) => {  
    if (res.code) {
      console.log('success');
    }  
  })  
  .catch((err) => {  
    console.log(err);  
 })

#### if you like it，please give a star，thank you。
