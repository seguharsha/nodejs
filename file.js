const fs=require("fs");
//Sync..Blocking
fs.writeFileSync("./test.txt","op bads");
//Async..Non-Blocking    
fs.writeFile("./test.txt","sadas",(err)=>{});
// fs.readFile("contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);

//     }
// })
console.log("1");
const op=fs.readFile("contact.txt","utf-8",(err,result)=>{
console.log(result);
})
console.log("w");
const os=require('os');
console.log(os.cpus().length);  