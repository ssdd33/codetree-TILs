const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
const nums = input[1].split(" ").map(Number);

let min = Number.MAX_SAFE_INTEGER;
const temp = [...nums];
temp.sort((a,b)=>a-b);
const to_be = temp.join("")


function check(seq,cnt){
if(seq.join("")==to_be){
    return cnt;
}else if(cnt>n*1.5){
    return -1;
}
    for(let i=Math.ceil(nums.length/2)-1;i<Math.ceil(nums.length/2);i++){
        const num = seq.shift();

const n_seq = [...seq.slice(0,i),num,...seq.slice(i,seq.length)]
const result = check(n_seq,cnt+1);
if(result>0){
    min =Math.min(min,result)
}
    }
}

check(nums,0);
console.log(min)