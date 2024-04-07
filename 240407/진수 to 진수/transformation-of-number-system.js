const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [a,b]= input[0].split(" ").map(v=>+v);
const n = input[1].trim().split("").map(v=>+v);

let num = 0;

for(let i=0;i<n.length;i++){
    num = num*a+n[i];
}

let arr= [];

while(true){
    if(num<b){
        arr.unshift(num);
        break;
    }

    arr.unshift(num%b);
    num= Math.floor(num/b);
}

console.log(arr.join(""))