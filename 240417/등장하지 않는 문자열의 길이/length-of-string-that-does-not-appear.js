const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const str = input[1].trim();

for(let i=0;i<n;i++){
    let p = str.slice(0,i+1);
    if(str.indexOf(p)==str.lastIndexOf(p)){
        console.log(i+1)
        break;
    }

}