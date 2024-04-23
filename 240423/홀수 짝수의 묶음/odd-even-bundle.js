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
if(e==1&&o==1){
    console.log(2)

}else if(e==0&&o==2){
    console.log(1)

}else if(e>=o){
console.log(o*2+(e-o>0?1:0))


}else{
console.log(e,o)
for(let i=3;i<=5;i+=2){
    
    const min_odd_cnt =e>0?e-1:0;
    const p_cnt = Math.floor(o/i);
    const left = o%i;

let total_o = 0;
let total_e = 0;

if(left==0){

total_o = p_cnt;
total_e = e+p_cnt;
}else if(left%2==0){

total_o = p_cnt;
total_e = e+p_cnt+(left/2)
}else{
    if(left/(i-2)>min_odd_cnt)continue;
total_o = p_cnt+(left/(i-2))
total_e = e+p_cnt;
}

if(total_e-total_o<=1){
console.log(i,min_odd_cnt,p_cnt,left,total_e,total_o)
    console.log(total_e+total_o);
    break;
}
}
}