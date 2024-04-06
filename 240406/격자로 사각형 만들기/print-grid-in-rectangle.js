const fs =require('fs');
const n = +fs.readFileSync('/dev/stdin').toString();

const map =[Array(n).fill(1)];
console.log(map[0].join(" "));
for(let r =1; r<n; r++){
    map.push([1])
    for(let c=1; c<n; c++){
        map[r].push(map[r][c-1]+map[r-1][c]+map[r-1][c-1])
    }
    console.log(map[r].join(" "));
}