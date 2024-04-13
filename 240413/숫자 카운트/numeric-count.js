const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const c = input.slice(1,1+n).map(v=>v.split(" ")).map(v=>[v[0].split("").map(v=>+v),+v[1],+v[2]]);
let cnt =0;

let nums =[];

for(let i=1; i<10; i++){
    for(let j=1;j<10;j++){
        for(let k=1; k<10;k++){
            if(i!=j&&j!=k&&k!=i){
                nums.push([i,j,k]);
            }
        }
    }
}


for(let i=0; i<nums.length;i++){
    for(let j=0;j<c.length;j++){
        const num =nums[i]
        let s=0;
        let b=0;
        for(let k=0;k<3; k++){
            const gn = c[j][0][k]
            
            if(gn==num[k]){
                s++;
            }else if( num.includes(gn)){
               b++
            }
        }

        if(c[j][1]!=s||c[j][2]!=b){
            break;
        }
        if(j==c.length-1){
            cnt++
        }
    }
}
console.log(cnt)