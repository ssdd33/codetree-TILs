const fs =require('fs');
    const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));
    const [n,t]=input[0];
    const c = input.slice(1).reduce((a,c)=>a.concat(c),[]);

const ans =[...c.slice((2*n)-t%(2*n),2*n),...c.slice(0,(2*n)-t%(2*n))]
console.log(ans.slice(0,n).join(" "));
console.log(ans.slice(n,2*n).join(" "))