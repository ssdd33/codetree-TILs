const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
let l = input[1].split(" ")

// let cnt =0;

// function c2i(char){
//     return char.charCodeAt()-65;
// }

// function moveFoward(as_is_idx,to_be_idx){
// return [...l.slice(0,to_be_idx),l[as_is_idx],...l.slice(to_be_idx,as_is_idx),...l.slice(as_is_idx+1,n)];
// }

// function moveBackward(as_is_idx,to_be_idx){
//     return [...l.slice(0,as_is_idx),...l.slice(as_is_idx+1,to_be_idx),l[as_is_idx],...l.slice(to_be_idx,n)];
// }
//  let non_seq_cnt = 0;

// while(true){
//     let prev_is_seq = false;
   
// if(non_seq_cnt==0){
//     for(let i=0;i<n-1;i++){
//         if((c2i(l[i+1])-c2i(l[i]))==1){
//            prev_is_seq =true
//         }else {
//             non_seq_cnt++;
//             if(prev_is_seq){
// const to_be_idx = c2i(l[i+1]);
// const as_is_idx =i+1;
// cnt+=Math.abs(to_be_idx-as_is_idx);

// if(as_is_idx>to_be_idx){
//     // 앞으로 옮겨져야함
//     l = moveFoward(as_is_idx,to_be_idx);
// }else if(as_is_idx<to_be_idx){
//     //뒤로 
//     l = moveBackward(as_is_idx,to_be_idx)
// }else{
//     continue;
// }
// break;
//             }
//         }
//     }
// }
    
//     if(non_seq_cnt==0){
//         break;
//     }else{
// for(let i=0;i<n-1;i++){
// if((c2i(l[i+1])-c2i(l[i]))!=1){
//     prev_is_seq=false;
// }else if(!prev_is_seq){

// break;
// }

// }
//     }
// }

// console.log(cnt);



let min = Number.MAX_SAFE_INTEGER;

function check(seq,cnt){
    let isDone=true;
    for(let i=0; i<n; i++){
        const to_be = seq[i].charCodeAt()-65;
        if(to_be==i)continue;
isDone=false;
const nl = [...seq]
        if(to_be>i){
//뒤로 한칸 
const [a,b]=[nl[i+1],nl[i]]
nl[i]=a;
nl[i+1]=b
        }else{
const[a,b]=[nl[i-1],nl[i]]
nl[i]=a;
nl[i-1]=b;
        }
        return check(nl,cnt+1)
    }

    if(isDone){
        min = Math.min(min,cnt)
    }
    return;
}

check(l,0)
console.log(min)