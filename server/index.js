
const http=require('http');
const fs=require('fs');
const url=require('url');   
//below creates a webserver 
const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()} ${req.url}:New Request received\n`;
    fs.appendFile("log.txt",log,(err,result)=>{
        if(req.url==="/favicon.ico")return res.end();
       const leti=url.parse(req.url,true);
       console.log(leti);
       
        switch(leti.pathname){

     case '/': res.end(`${result}new onde`);
        break;
        case '/about':res.end("jai sr ram");
        break;
        case '/contact':const opp=leti.query.myName;
        console.log(opp);
            res.end(`hi ${opp}`);
        break;
        default: res.end("404 Not Found");
        }
    })
console.log("New request received");
});
myServer.listen(8000,()=>console.log("server started   "))