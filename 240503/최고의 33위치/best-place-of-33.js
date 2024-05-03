const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split('\n');
const n = +input[0];
const g = input.slice(1,1+n).map(v=>v.split(" ").map(Number));

let ans =0;
for(let i=0; i<n-2;i++ ){
    for(let j=0; j<n-2;j++){
        let cnt =0;

        for(let k =i; k<i+3;k++){
            for(let l=j; l<j+3;l++){
                cnt+=g[k][l];
            }
        }
        ans =Math.max(ans,cnt)
    }
}

console.log(ans)