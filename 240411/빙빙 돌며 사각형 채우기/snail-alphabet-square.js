const fs= require('fs');
const [n,m]= fs.readFileSync("/dev/stdin").toString().split(" ").map(v=>+v);
let answer = Array(n).fill(Array(m).fill(''));
const dx=[0,1,0,-1];
const dy=[1,0,-1,0];
let [x,y,d,cnt] =Array(4).fill(0);

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<m;
}

while(cnt<n*m){
    const code = cnt<26? cnt+65: (cnt%26)+65;
    answer[x]=[...answer[x]];
    answer[x][y]=String.fromCharCode(code);

    let nx= x+dx[d];
    let ny=y+dy[d];
    if(!inRange(nx,ny)||answer[nx][ny]!=''){
        d=(d+1)%4;
        nx =x+dx[d];
        ny=y+dy[d];
    }
    x=nx;
    y=ny;
    cnt++;
}


answer.forEach(r=>console.log(r.join(" ")))