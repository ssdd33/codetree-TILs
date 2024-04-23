const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const nums = input[1].split(" ").map(Number);

let [o,e]=[0,0];

nums.forEach(v=>{
    if(v%2==0){
        e++;
    }else{
o++;
    }
})
if(e>=o){
console.log(o*2+(e-o>0?1:0))


}else{
    
let cnt = e*2;

o = o-e;
e=0;

for(let i=3;i<=5;i+=2){

    const p_cnt = Math.floor(o/i);
    const left = o%i;
   cnt+=(p_cnt*2)
if(left>1&&left%2!=0)continue;

   if(left>0&&left%2==0){
        cnt++;
    }else if(left==3){
cnt+=2;

    }else if(left==1){
        cnt--;
    }
break;
}

console.log(cnt)

}