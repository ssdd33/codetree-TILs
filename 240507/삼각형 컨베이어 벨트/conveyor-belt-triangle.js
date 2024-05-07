const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.trim().split(" ").map(Number));
const [n,t]=input[0];
const c = input.slice(1).reduce((a,c)=>a.concat(c),[]);
const ans = [...c.slice((3*n)-t%(3*n),3*n),...c.slice(0,(3*n)-t%(3*n))];

for(let i = 0; i<3; i++){
    console.log(ans.slice(n*i,(i+1)*n).join(" "))
}