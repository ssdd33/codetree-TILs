const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n").map(v=>v.split(" ").map(v=>+v));

const [n,m]=input[0];
const points = input.slice(1).map(v=>v.map(n=>n-1));
const map =[];
for(let r = 0; r<n; r++){
map.push(Array(n).fill(0))
}

for(let i=0; i<points.length;i++){
    const r=points[i][0]
    const c = points[i][1];
    map[r][c]=(r+1)*(1+c)
}

for(let i = 0; i<map.length; i++){
    console.log(map[i].join(" "))
}