const fs =require('fs');
const input= fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const t = +input[0];
const tcs =[];
let tmp = input.slice(1);

const dm = {'U':0,'R':1,'D':2,'L':3,};
class Marble{
    constructor(x,y,w,d,i){
        this.x= x;
        this.y =y;
        this.w =w;
        this.d = (dm[d]+1)%4;
        this.i =i;
    }
}

while(tcs.length<t){
const n = +tmp[0];
const marbles = [];
for(let i=1; i<n+1;i++){
    const [x,y,w,d] = tmp[i].trim().split(" ")
    marbles.push(new Marble(+x,+y,+w,d,i));
}
tcs.push(marbles)
tmp = tmp.slice(1+n)
}

function willCollide(ms){
    
    // opposite : 
    // R,L : x1==x2 && R.y < L.y
    // U,D : y1==y2 && U.x < D.x
    // perpendicular
    // U- R,L   R.L.x < U.x
    //          R.y < U.y
    //          L.y > U.y
    // D -R,L   R.L.x > D.x
    // R -U,D       
    // L -U,D

for(let i=0; i<ms.length-1;i++){
    const m1= ms[i];
    const [x1,y1,d1] = [m1.x,m1.y,m1.d];
    for(let j =i+1; j<ms.length;j++){
        const m2 = ms[j]
        const [x2,y2,d2] = [m2.x,m2.y,m2.d];
        if(d1==d2)continue;
        if((d1+2)%4==d2){
            if(d1>d2){
                if((x1==x2&&y1>y2)||(y1==y2&&x1>x2)){
                    return true;
                }
            }else{
                if((x1==x2&&y1<y2)||(y1==y2&&x1<x2)){
                    return true;
                }
            }
        }else{
            if(d1==0&&x1>x2&&((d2==1&&y1>y2)||(d2==3&&y1<y2))){
                return true;
            }
            if(d1==1&&y1<y2&&((d2==0&&x1<x2)||(d2==2&&x1>x2))){
                return true;
            }
            if(d1==2&&x1<x2&&((d2==1&&y1>y2)||(d2==3&&y1<y2))){
                return true;
            }
            if(d1==3&&y1>y2&&((d2==0&&x1<x2)||(d2==2&&x1>x2))){
                return true;

            }
        }

    }
}
return false;
}

function newPos(x,y,d){
    const dx =[-1,0,1,0];
    const dy =[0,1,0,-1];
    return [x+dx[d]*0.5,y+dy[d]*0.5];
}

const ans =[];
for(let i=0; i<t;i++){
let marbles = tcs[i];
//구슬이 초기 위치에서 어느방면으로 이동할지 모름으로(좌표의 확장) 매초마다 새로운 좌표를 그려 현재위치 확인
//좌표평면은 한칸당 0.5단위로 나뉘어짐 
//1초단위로 simulate
//구슬의 위치 수정후 좌표를 그려 충돌상태 확인, 구슬 제거 : 충돌했다면 현재 시간 기록
//현재 남은 구슬들이 충돌할 가능성이 있는지 확인 있으면 계속, 없다면 종료 

let last_collidsion_t =0;
let time =0;
// console.log(`t${i}`,'********************')
// console.log(marbles)
// console.log(willCollide(marbles))

while(willCollide(marbles)){

    time++;
    let min_p = Number.MAX_SAFE_INTEGER;
    let max_p = Number.MIN_SAFE_INTEGER;

    marbles.forEach(m=>{
        const [nx,ny] = newPos(m.x,m.y,m.d);
        m.x = nx;
        m.y = ny;
        min_p = Math.min(min_p,m.x,m.y);
        max_p = Math.max(max_p,m.x,m.y);
    })
    
    const sizeOfGrid = Math.ceil((max_p-min_p)*2+1)
  
    const grid = Array.from(Array(sizeOfGrid),(a)=>Array(sizeOfGrid).fill([]));
    marbles.forEach(m=>{
                let mx =m.x*2;
                let my =m.y*2;
                if(min_p<0){
                    mx =(m.x+Math.abs(min_p))*2
                    my =(m.y+Math.abs(min_p))*2
                }else if(min_p>0){
                    mx = (m.x-min_p)*2;
                    my = (m.y-min_p)*2
                }
                grid[mx][my] = JSON.parse(JSON.stringify(grid[mx][my])).concat([m])
            })

    //  console.log(time);
    // marbles.forEach(v=>console.log(v.x,v.y))
    // grid.forEach(v=>console.log(v.map(c=>c.length).join("")))
    // console.log("---------------------")
    const new_marbles =[];
    grid.forEach(v=>v.forEach(c=>{
        if(c.length==1){
            new_marbles.push(c[0])
        }else if(c.length>1){
            c.sort((a,b)=>b.w-a.w||b.i-a.i);
            new_marbles.push(c[0])
            last_collidsion_t =time;
        }
    }))
    marbles = new_marbles;
    // console.log(marbles)
    // console.log(willCollide(marbles))
}
ans.push(last_collidsion_t==0?-1:last_collidsion_t);
}

ans.forEach(v=>console.log(v))