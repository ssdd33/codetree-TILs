const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
let l = input[1].split(" ")

function moveFoward(l,as_is_idx,to_be_idx){
return [...l.slice(0,to_be_idx),l[as_is_idx],...l.slice(to_be_idx,as_is_idx),...l.slice(as_is_idx+1,n)];
}

function moveBackward(l,as_is_idx,to_be_idx){
    return [...l.slice(0,as_is_idx),...l.slice(as_is_idx+1,to_be_idx+1),l[as_is_idx],...l.slice(to_be_idx+1,n)];
}

// let min =Number.MAX_SAFE_INTEGER;

// function check(seq,cnt){
// if(cnt>20)return -1;
//     let isDone=true;
   
//     for(let i=0; i<n; i++){
//         const to_be = seq[i].charCodeAt()-65;
//         if(to_be==i)continue;
//      isDone=false;
// let nl;
//         if(to_be>i){
// //뒤로 
// nl = moveBackward([...seq],i,to_be)

//         }else{
//             nl = moveFoward([...seq],i,to_be)

//         }
        
//   let temp= check(nl,cnt+Math.abs(i-to_be));

//   if(temp>0){
//     min = Math.min(min,temp)
//   }
//     }

//     if(isDone){
 
//  return cnt

//     }
//    return -1;
// }

// check(l,0)
// console.log(min)
let cnt  =n;
let c_cnt = 0;
while(cnt>0){

const as_is = l.indexOf(String.fromCharCode(n-cnt+65))
const to_be = n-cnt;

if(to_be>as_is){
l = moveBackward(l,as_is,to_be)
}else if(to_be <as_is){
l = moveFoward(l,as_is,to_be)
}
c_cnt+=Math.abs(as_is-to_be)
  cnt--;
}

console.log(c_cnt)