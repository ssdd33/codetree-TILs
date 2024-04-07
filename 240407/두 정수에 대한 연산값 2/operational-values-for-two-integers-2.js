const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().split(" ").map(v=>+v)

function solution(a,b){
 return a>b? `${a*2} ${b+10}`:`${a+10} ${b*2}`

}
console.log(solution(a,b))