const http = require('http');
const fs = require("fs");
const path = require('path');


let components=[];



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
        console.log(`${msg}  成功`);
        fs.appendFile(__dirname+'/log.txt',`${msg}  成功\n`,()=>{})
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
 * 写入组件html
 * @param {*} url 
 * @param {*} version 
 */
const getOtherHtml=(url,version)=>{

    http.get(`http://bee.tinper.org/${url}#${url}`, res=> {
        console.log(`我正在请求 ${url} `)
        let html = '';
        // 获取页面数据
        res.on('data', data=> {
            html += data;
            console.log(`我卡在了 ${url} 不动了~~~`)
        });
        // 数据获取结束
        res.on('end', ()=>{
            console.log(` ${url} 结束，写入文件`)
            html = html.replace(/href="\/(.+?)#.+?"/g,(str,item)=>{
                return `href="/tinper-bee-history/${version}/${item}"`;
            })
            if(url.indexOf('bee-')){
                html = html.replace(/href="\/css/g,`href="/tinper-bee-history/${version}/css`);
                let regCss = new RegExp('href="\/' + url ,"gim");
                html = html.replace(regCss,`href="/tinper-bee-history/${version}/${url}`);
                let regJs = new RegExp('src="\/' + url ,"gim");
                html = html.replace(regJs,`src="/tinper-bee-history/${version}/${url}`);
            }
            fs.writeFile(`./${version}/${url}/index.html`, html, (err)=>{callback(err,`写入${url}下 index.html`)});
        });
    }).on('error', ()=> {
        console.log('获取数据出错！');
    });
}
/**
 * 写入组件demo.js demo.css
 * @param {*} url 
 * @param {*} version 
 */
const getOtherDemo=(url,version,firename)=>{
    http.get(`http://bee.tinper.org/${url}/dist/${firename}`, res=> {
        let html = '';
        // 获取页面数据
        res.on('data', data=> {
            html += data;
        });
        // 数据获取结束
        res.on('end', ()=>{
            fs.writeFile(`./${version}/${url}/dist/${firename}`, html, (err)=>{callback(err,`写入${url} ${firename}`)});
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

    mkdirs(version,(err)=>{callback(err,'创建版本文件')});
    mkdirs(`${version}/css`,(err)=>{callback(err,'创建版本css文件')});

    html = html.replace(/href="\/(.+?)#.+?"/g,(str,item)=>{
        mkdirs(`${version}/${item}`,(err)=>{callback(err,`创建${item}`)});
        mkdirs(`${version}/${item}/dist`,(err)=>{callback(err,`创建${item} dist`)});
        components.push(item);
        return `href="/tinper-bee-history/${version}/${item}"`;
    })
    html = html.replace(/href="\/css/g,`href="/tinper-bee-history/${version}/css`);
    fs.writeFile(`./${version}/index.html`, html,(err)=>{
        if(!err){
             components.map((item)=>{
                getOtherHtml(item,version);
                getOtherDemo(item,version,'demo.js');
                getOtherDemo(item,version,'demo.css');
            })
        }
    });
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






