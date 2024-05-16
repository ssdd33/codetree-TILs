const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v=>v.trim().split(" ").map(Number));
const [n,m] = input[0];
const nums = input[1];
const max = nums.reduce((a,c)=>a+c,0);
const min = Math.max(...nums);

for(let i =min; i <=max; i++){
    let possible = true;
    let section =1;
    let cnt =0;
    for(let j =0; j<n;j++){
        if(nums[j]>i){
            possible =false;
            break;
        }

        if(cnt+nums[j]>i){
            section++;
            cnt = 0;
        }

        cnt+= nums[j];
    }

    if(possible&&section<=m){
        console.log(i);
        break;
    }
}