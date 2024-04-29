const fs =require('fs');
const [n,k]=fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const q = [];
for(let i=1; i<=n; i++){
    q.push(i);
}
const ans =[];
while(q.length!=0){
for(let i=1; i<k;i++){
q.push(q.shift())
}
ans.push(q.shift())
}

console.log(ans.join(" "))