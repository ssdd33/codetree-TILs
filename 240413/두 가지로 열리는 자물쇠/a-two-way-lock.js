const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const s1 = input[1].split(" ").map(v=>+v);
const s2 = input[2].split(" ").map(v=>+v);

let cnt = 0;
function isValidComb(s1,s2){
    const tail_head_n = [n,n-1,1,2]
    
for(let i=0;i<3; i++){
    const dif = Math.abs(s1[i]-s2[i])

if(dif<=2||(tail_head_n.includes(s1[i])&&dif>=n-2))continue;

return false;
}

return true;
}

for(let i=1; i<n+1;i++){
    for(let j =1; j<n+1; j++){
        for(let k=1; k<n+1;k++){
            if(isValidComb([i,j,k],s1)||isValidComb([i,j,k],s2)){
cnt++
            }
        }
    }
}

console.log(cnt)