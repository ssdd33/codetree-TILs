const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n")
const n = +input[0];
const points = input.slice(1,1+n).map(v=>v.split(" ").map(v=>+v));

let minDistance = Number.MAX_SAFE_INTEGER;
for(let i=1; i<n-1;i++){
    let sum =0;
    for(j =0; j<n-1;j++){
        if(j==i)continue;
               let p1 = points[j];
       let p2 = points[j+1]
        if(j== i-1){
p2 = points[j+2];
        }
 
sum+= Math.abs(p1[0]-p2[0])+Math.abs(p1[1]-p2[1]);

    }

    minDistance = Math.min(minDistance,sum);
}


console.log(minDistance)