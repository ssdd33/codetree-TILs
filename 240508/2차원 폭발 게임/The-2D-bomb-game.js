const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v=>v.trim().split(" ").map(Number));
const [n,m,k]=input[0];
let g = input.slice(1,1+n);


function getEndIdxOfExpl(col,curIdx){
    for(let endIdx = curIdx+1;endIdx<n;endIdx++){
        if(g[curIdx][col]!=g[endIdx][col])return endIdx-1;
    }
    return n-1;
}

function expl(){
    let didExplode =false;
    for(let c=0;c<n;c++){
       //폭발
       let curIdx=0;
       while(curIdx<n){
        if(g[curIdx][c]==0){ 
            curIdx++;
            continue;}

        const endIdx = getEndIdxOfExpl(c,curIdx);

        if(endIdx-curIdx+1>=m){
            didExplode =true;
            for(let i=curIdx; i<=endIdx; i++){
                g[i][c]=0;
            }
            curIdx = endIdx+1;
        }else{
            curIdx++;
        }
       }
if(didExplode){
  //중력 적용
       for(let i=n-1; i>=0;i--){
        if(g[i][c]==0&&i>0){
            let firstIdxOfRemains = -1;
            for(let j=i-1; j>=0;j--){
            
                if(g[j][c]!=0){
                    firstIdxOfRemains = j;
                    break;
                }
            }
            if(firstIdxOfRemains<0)break;
            g[i][c] = g[firstIdxOfRemains][c];
            g[firstIdxOfRemains][c]=0;
        }
       }
    }
}
     return didExplode;
}


function tilt90(){
    const tmp = Array.from(Array(n),(a)=>Array(n).fill(0));
    for(let i=0;i<n;i++){
        if(g[i].filter(v=>v==0).length==n)continue;
        let tmp_row =n-1;
        for(let j=n-1; j>=0;j--){
            if(g[i][j]==0)continue;
            tmp[tmp_row][Math.abs(i-(n-1))] = g[i][j];
            tmp_row--;
        }
    }
    g =tmp;
}


for(let i=1; i<=k;i++){
    let didExplode =true;
    while(didExplode){
      didExplode = expl();
    }
    
    tilt90();

}

let didExplode =true;
let snapshot;
let tilt_cnt =0;

while(true){

    while(didExplode){
        didExplode = expl();
    }
    tilt90();
    if(!didExplode){
        if(tilt_cnt==0) {
            snapshot = g.reduce((a,c)=>a+c.join(),'');
        }
        tilt_cnt++
    }else{
        tilt_cnt =0;
    }
  
    if(tilt_cnt>1&&snapshot== g.reduce((a,c)=>a+c.join(),''))break;
}

console.log(g.reduce((a,c)=>a+c.filter(v=>v>0).length,0))