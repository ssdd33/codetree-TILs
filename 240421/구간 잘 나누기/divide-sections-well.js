const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));
const [n,m]= input[0];
const nums = input[1];

for(let i=1; i<=nums.reduce((a,c)=>a+c);i++){
    let cnt =0;
    let section =0;
for(let j =0 ; j<n;j++){
    if(nums[j]>i)break;
    if(cnt+nums[j]>=i){
        section++;
        cnt=0;
    }
    cnt+=nums[j];
}

if(section==m){
    console.log(i);
    break;
}
}