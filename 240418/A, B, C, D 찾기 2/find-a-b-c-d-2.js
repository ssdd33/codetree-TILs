const fs = require('fs');
const nums = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

nums.sort((a,b)=>a-b);
const n =nums.length;
const total = nums[n-1];
let done =false;

for(let i=0; i<10-3;i++){
    for(let j=i+1;j<10-2;j++){
        for(let k=j+1;k<10-1;k++){
           for(let l=k+1;l<10;l++ ){
            
            const a =nums[i];
            const b= nums[j];
            const c =nums[k];
            const d =nums[l];

            if(a+b+c+d ==total){

    const rest_combs = [a,b,c,d,a+b,a+c,a+d,b+c,b+d,c+d,a+b+c,a+b+d,a+c+d,b+c+d]
    rest_combs.sort((a,b)=>a-b);
       let isAllEqual = true;

    for(let p =0; p<n-1;p++){
if(rest_combs[p]!=nums[p]){
isAllEqual =false;
break;
}
    }
    
    if(isAllEqual){
console.log(`${a} ${b} ${c} ${d}`);
done =true;
break;
    }


            }
           }
           if(done)break;
        }
        if(done)break;
    }
    if(done)break;
}