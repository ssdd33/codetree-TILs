const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n,m] = input[0].split(" ").map(Number);
let bombs = input.slice(1,1+n).map(Number);


// if(m==1){
//     console.log(0)
// }else{
//     while(true){
//         let tmp =[];
//         let cnt = 1;
//         for(let i=1; i<bombs.length;i++){
//             if(bombs[i]!=bombs[i-1]){
//                 if(cnt<m){
//                     tmp = [...tmp,...Array(cnt).fill(bombs[i-1])]
//                 }
//                 cnt =1;
//             }else{
//                 cnt++
//             }
//         }

//         if(cnt<m){
//              tmp = [...tmp,...Array(cnt).fill(bombs[bombs.length-1])]
//         }

//         if(tmp.join()==bombs.join()){
//             break;
//         }
//         bombs = tmp;
//         console.log(bombs)
//     }

//     console.log(bombs.length)
//     bombs.forEach(v=>console.log(v))
// }


function getEndIdxOfExpl(curIdx){
    for(let endIdx =curIdx+1; endIdx<bombs.length;endIdx++){
        if(bombs[endIdx]!=bombs[curIdx]){
            return endIdx-1
        }
    }

    return bombs.length-1;
}



while(true){
    let curIdx = 0;
    let didExplode = false;
    while(curIdx<bombs.length){
        const endIdx = getEndIdxOfExpl(curIdx);
        
        if(endIdx-curIdx+1>=m){
            bombs.splice(curIdx,endIdx-curIdx+1);
            didExplode = true;
            
        }else{
curIdx = endIdx+1;
        }
        
    }

    if(!didExplode){
        break;
    }
}

console.log(bombs.length)
bombs.forEach(v=>console.log(v))