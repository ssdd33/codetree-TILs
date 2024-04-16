const fs= require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
let from = input[1].trim().split("");
const to =input[2].trim().split("");

let cnt = 0;
let noMoreSwitch = from.filter(v=>v!=from[0]).length==0;

for(let i=0; i<n;i++){
    const f =from[i];
    const t = to[i];
    if(f!=t){
        if(noMoreSwitch){
     from[i]=t;
            cnt++;
            
        }else{
          for(let j=i+1;j<n; j++){
            if(from[j]==t&&to[j]==f){
                from[i]=t;
                from[j]=f;
                cnt++
            }else{
                if(j==n-1){
                    noMoreSwitch = true;
                }
            }
          }

        }
    }
}

console.log(cnt)