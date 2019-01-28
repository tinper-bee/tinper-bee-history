let fs = require('fs-extra');
let download = require('download');

let components = [];
let version = '';

let writeCss=(filename)=>{
    download(`http://bee.tinper.org/css/${filename}`).then(data=>{
        fs.writeFileSync(`${version}/css/${filename}`, data);
    })
}
let initComponet = async (components)=>{
    if(components.length==0){
        console.log('恭喜你完成了！');
        return;
    };
    let com = components.shift();
    console.log(`我是 ${com} 还剩 ${components.length} 个`);
    if(com.indexOf('bee-')!=-1){
        await download(`http://bee.tinper.org/${com}/dist/demo.js`).then(data=>{
            fs.writeFileSync(`./${version}/${com}/dist/demo.js`, data);
        });
        await download(`http://bee.tinper.org/${com}/dist/demo.css`).then(data=>{
            fs.writeFileSync(`./${version}/${com}/dist/demo.css`, data);
        });
    }
    await download(`http://bee.tinper.org/${com}#${com}`).then(html=>{
        html = html.toString();
        html = html.replace(/href="\/css/g, `href="/tinper-bee-history/${version}/css`);
        html = html.replace(/href="\/(.+?)#.+?"/g,(str,item)=>{
            return `href="/tinper-bee-history/${version}/${item}"`;
        })
        fs.writeFileSync(`./${version}/${com}/index.html`, html);
        initComponet(components);
    });
}
download('http://bee.tinper.org/').then(async html => {//创建目录生成index.html
    let versionReg = /最新:v(.+)</;
    version = versionReg.exec(html)[1];
    console.log(version)
    await fs.ensureDir(`${version}/css`);
    html = html.toString();
    html = html.replace(/href="\/css/g, `href="/tinper-bee-history/${version}/css`);
    html = html.replace(/href="\/(.+?)#.+?"/g, (str, item) => {
        fs.ensureDir(`${version}/${item}`);
        fs.ensureDir(`${version}/${item}/dist/`);
        components.push(item);
        return `href="/tinper-bee-history/${version}/${item}"`;
    })
    fs.writeFileSync(`${version}/index.html`, html);
}).then(()=>{// 生成css
    writeCss('atom-one-dark.css');
    writeCss('layout.css');
    writeCss('md.css');
}).then(async ()=>{//遍历数组 生成组件index.html，demo.js，demo.css
    console.log(`一共 ${components.length} 个`);
    initComponet(components);
});



