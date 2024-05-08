const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input[0];
const g = input.slice(1,1+n).map(v=>v.split(" ").map(Number));
const [r,c] = input[1+n].split(" ").map(v=>+v-1);

const dx =[-1,0,1,0]
const dy = [0,1,0,-1]

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}

const sizeOfExpl = g[r][c];
g[r][c] = 0;
if(sizeOfExpl>1){

    for(let i=0; i<4;i++){
            let [x,y]=[r,c];
        for(let j=1; j<sizeOfExpl;j++){
           [x,y] = [x+dx[i],y+dy[i]]
           if(inRange(x,y)){
            g[x][y] = 0
           }else{
            break;
           }

        }
    }
}

for(let i=0; i<n;i++){
    const tmp = [];
    for(let j = n-1; j>=0;j--){
        if(g[j][i]>0){
            tmp.push(g[j][i])
        }
    }
    const lastIdx = tmp.length-1;
    for(let j = n-1; j>=0;j--){
       const idx= n-1 -j;
       const nv = idx<=lastIdx?tmp[idx]:0;
       g[j][i] = nv;
    }
}

g.forEach(v=>console.log(v.join(" ")))