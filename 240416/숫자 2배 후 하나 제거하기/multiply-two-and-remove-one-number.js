const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
const nums =input[1].split(" ").map(v=>+v);

let minDiff = Number.MAX_SAFE_INTEGER;


for(let i=0; i<n;i++){
    nums[i] = nums[i]*2;
    for(let j=0;j<n;j++){
        let remain =[];
        for(let k=0; k<n; k++){
            if(k==j)continue;
            remain.push(nums[k])
        }
        let sumDiff =0;
        for(let l=0;l<n-2; l++){
            sumDiff +=Math.abs(remain[l]-remain[l+1])
        }
        minDiff = Math.min(minDiff,sumDiff);
    }
    nums[i]=nums[i]/2
}

console.log(minDiff)