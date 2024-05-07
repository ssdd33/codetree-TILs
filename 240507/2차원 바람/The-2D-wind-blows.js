const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.trim().split(" ").map(Number));
const [n,m,q]=input[0];
let g = input.slice(1,1+n);
const w = input.slice(1+n,1+n+q).map(v=>v.map(c=>c-1));

const dx=[-1,0,1,0]
const dy=[0,1,0,-1]

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<m;
}

function getAvgOfArea(x,y){
    let sum = g[x][y];
    let area_cnt = 1;
    for(let i=0;i<4;i++){
        const nx =x+dx[i];
        const ny =y+dy[i];
        if(inRange(nx,ny)){
            sum+=g[nx][ny];
            area_cnt++;
        }
    }
return Math.floor(sum/area_cnt);
}

function rotate_Boundary(r1,c1,r2,c2){
    
    let boundary = [...g[r1].slice(c1,c2+1)];
    for(let i=r1+1; i<r2;i++){
         boundary.push(g[i][c2])
    }
    
   boundary = boundary.concat(...g[r2].slice(c1,c2+1).reverse());

     for(let i=r2-1; i>r1;i--){
         boundary.push(g[i][c1])
    }
    
    const tmp = boundary.pop();
    const nb = [tmp,...boundary];
// 0~ c2-c1 : 
// c2-c1+1 ~ (c2-c1+1 )+ (r2-r1-1) last
//c2-c1+1 + r2-r1 ~ (c2-c1+1 + r2-r1)+ c2-c1 : reverse
//(c2-c1+1 + r2-r1)+ c2-c1 first : reverse

    for(let i=c1;i<=c2;i++){
        g[r1][i] = nb[i-c1];
        g[r2][i] = nb[c2-c1+r2-r1+(c2-i)]

    }
    for(let i=r1+1; i<r2;i++){
        
        g[i][c1]= nb[nb.length-(r2-i)]
        g[i][c2]=nb[c2-c1-r1+i] 
    }
}

for(let i=0;i<q;i++){
    const [r1,c1,r2,c2] = w[i]

    rotate_Boundary(...w[i]);

    const nm = Array.from(Array(n),(arr)=>Array(m).fill(-1));
    for(let r =r1; r<=r2;r++ ){
        for(let c= c1;c<=c2;c++){
            nm[r][c] = getAvgOfArea(r,c)
        }
    }

g = nm.map((v,i)=>v.map((c,j)=>c<0?g[i][j]:c));
}


g.forEach(v=>console.log(v.join(" ")))