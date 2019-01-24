const http = require('http');
const fs = require("fs");
const path = require('path');


let version = '';

/**
 * 统一处理callback
 * @param {*} err 错误信息
 * @param {*} msg 提示
 */
const callback = (err,msg)=>{
    if(err){
        console.log(`${msg}  失败`);
        console.log(err)
    }else{
        console.log(`${msg}  成功`)
    }
}

/**
 * 创建多层文件
 * @param {*} dirpath 文件路径
 * @param {*} callback 回调
 */
const mkdirs = (dirpath, callback)=> {
    fs.exists(dirpath, function(exists) {
        if(exists) {
            callback();
        } else {
            //尝试创建父目录，然后再创建当前目录
            mkdirs(path.dirname(dirpath), function(){
                fs.mkdir(dirpath,callback);
            });
        }
    })
};

/**
 * 写入其它html
 * @param {*} url 
 * @param {*} version 
 */
const getOtherHtml=(url,version)=>{
    http.get(`http://bee.tinper.org/${url}#${url}`, res=> {
        let html = '';
        // 获取页面数据
        res.on('data', data=> {
            html += data;
        });
        // 数据获取结束
        res.on('end', ()=>{
            mkdirs(`${version}/${url}`,(err)=>{callback(err,`创建${url}`)});
            html = html.replace(/href="\/(.+?)#.+?"/g,(str,item)=>{
                return `href="/tinper-bee-history/${version}/${item}"`;
            })
            html = html.replace(/href="\/css/g,`href="/tinper-bee-history/${version}/css`);
            fs.writeFile(`./${version}/${url}/index.html`, html, (err)=>{callback(err,`写入${url}.html`)});
        });
    }).on('error', ()=> {
        console.log('获取数据出错！');
    });
}

/**
 * 处理html，写html文件
 * @param {*} html 
 */
const formatHtml = (html)=>{
    let versionReg = /最新:v(.+)</;
    version = versionReg.exec(html)[1];//版本号

    mkdirs(version,(err)=>{callback(err,'写入css')});
    mkdirs(`${version}/css`,(err)=>{callback(err,'写入css')});

    html = html.replace(/href="\/(.+?)#.+?"/g,(str,item)=>{
        getOtherHtml(item,version)
        return `href="/tinper-bee-history/${version}/ac-drawer"`;
    })

    html = html.replace(/href="\/css/g,`href="/tinper-bee-history/${version}/css`);
    fs.writeFile(`./${version}/index.html`, html, (err)=>{callback(err,'写入html')});

    //写入css
    wirteCss('atom-one-dark.css',version);
    wirteCss('layout.css',version);
    wirteCss('md.css',version);




}

/**
 * 写css文件
 * @param {*} firename 
 * @param {*} version 
 */
const wirteCss = (firename,version)=>{
    let baseUrl = 'http://bee.tinper.org/css/';
    // css:atom-one-dark.css
    http.get(baseUrl+firename, function(res) {
        let css = '';
        // 获取页面数据
        res.on('data', function(data) {
            css += data;
        });
        // 数据获取结束
        res.on('end', function() {
            fs.writeFile(`./${version}/css/${firename}`, css, (err)=>{
                callback(err,`写入${firename}`)
            })
            
        });
    }).on('error', function() {
        console.log('获取数据出错！');
    });
}


// 发送首页html请求
http.get('http://bee.tinper.org/', res=> {
    let html = '';
    // 获取页面数据
    res.on('data', data=> {
        html += data;
    });
    // 数据获取结束
    res.on('end', ()=>{
        formatHtml(html);
    });
}).on('error', ()=> {
    console.log('获取数据出错！');
});






