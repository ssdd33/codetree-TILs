const fs =require('fs');
const input =fs.readFileSync('/dev/stdin').toString().split("\n");
const n = +input[0];
const segments = input.slice(1,n+1).map(v=>v.split(" ").map(v=>+v));


let cnt = 0;


for(let i=0; i<n-2;i++){
    for(let j=i+1;j<n-1;j++){
        for(let k=j+1;k<n;k++){
            let arr = Array(101).fill(0);
            for(let l=0;l<n;l++){
                if(l!=i&&l!=j&&l!=k){
                    const [x,y]=segments[l];
                    for(let s=x;s<=y;s++){
                        arr[s]++;
                    }
                }
            }
            if(arr.filter(v=>v>1).length==0)cnt++
        }
    }
}

console.log(cnt)