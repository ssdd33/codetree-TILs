const fs =require('fs');
let n =+fs.readFileSync('/dev/stdin').toString();

let arr=[];

while(n>2){
arr.unshift(n%2);
n = Math.floor(n/2)
}
console.log([1,...arr].join(''));