let str = 'href="/ac-drawer#ac-drawer" href="/ac-toast#ac-toast" href="/ac-attachment#ac-attachment"';


let array = [];

let a = str.replace(/href="\/(.+?)#.+?"/g,(a,b,c,d,e)=>{
    array.push(b);
    return 'href="tinper-bee-history/1.6.9/ac-drawer"'
})


console.log(array);

