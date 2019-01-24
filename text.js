const http = require('http');
const fs = require("fs");
const path = require('path');
const version = '1.6.9';


const callback = (err,msg)=>{
    if(err){
        console.log(`${msg}  失败`)
    }else{
        console.log(`${msg}  成功`)
    }
}


const formatHtml = (html)=>{
    let versionReg = /最新:v(.+)</;
    let v = versionReg.exec(html)[1];
    console.log("-----  "+v)
}

http.get('http://bee.tinper.org/', res=> {
    let html = '';
    // 获取页面数据
    res.on('data', data=> {
        html += data;
    });
    // 数据获取结束
    res.on('end', ()=>{
        formatHtml(html)
        
    });
}).on('error', ()=> {
    console.log('获取数据出错！');
});