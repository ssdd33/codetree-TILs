const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n,m]=input[0].split(" ").map(Number);
const g = input.slice(1,1+n).map(v=>v.trim().split(" ").map(Number));
const cs = input.slice(1+n,1+n+m).map(v=>+v-1);

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}


// 시작 row 탐색 
// y-(s-1) ~y-1, y+1~ y+(s-1) : x-1~0을 x~1로 옮긴다 
// y : x+(s-1)~x ->0


for(let i=0; i<m;i++){
    const c = cs[i];
    let r= 0;
    for(let j=0; j<n; j++){
        if(g[j][c]!=0){
            r= j;
            break;
        }
    }
    const s = g[r][c];
//왼쪽
    for(let j= c-(s-1); j<c;j++){
        if(inRange(r,j)){
            if(r!=0){
                for(let k= r-1; k>=0;k--){
                    g[k+1][j] =g[k][j];
                    g[k][j]=0;
                }
            }else{
                g[r][j]=0
            }
            
        }
    }

//가운데

for(let j=r-(s-1);j<=r+(s-1);j++){
    if(inRange(j,c)){
       g[j][c] =0;
    }
}

//오른쪽
for(let j=c+1;j<=c+(s-1);j++){
    if(inRange(r,j)){
         if(r!=0){
                for(let k= r-1; k>=0;k--){
                    g[k+1][j] =g[k][j];
                    g[k][j]=0;
                }
            }else{
                g[r][j]=0
            }
    }
}

}

g.forEach(v=>console.log(v.join(" ")))