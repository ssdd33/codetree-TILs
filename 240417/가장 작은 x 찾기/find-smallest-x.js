const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const c = input.slice(1,n+1).map(v=>v.split(" ").map(Number));





for(let i=1;i<10001;i++){
    let isThatNum = true;
    for(let j=1;j<=n;j++){
const powNum = Math.pow(2,j)*i;
const[a,b]=c[j-1];
if(powNum<a||powNum>b){
    isThatNum =false; 
    break;
    }
    }
    if(isThatNum){
        console.log(i);
        break;
    }
}