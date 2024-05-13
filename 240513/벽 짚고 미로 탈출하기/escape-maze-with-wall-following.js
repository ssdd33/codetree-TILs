const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const [x,y] = input[1].split(" ").map(Number);
const maze =input.slice(2,2+n).map(v=>v.trim().split(""));


//탈출이 불가능한 경우 
//1.가장자리에 벽이 없는 경우 (3.가장자리벽과 이어지는 벽이 없는 경우) 

let isBoundaryEmpty =true;
for(let i=0; i<n;i++){
    for(let j=0;j<n; j++){
  
            if(maze[i][j]=='#'&&(i==0||i==n-1||j==0||j==n-1)){
                isBoundaryEmpty =false;
                break;
            }
        
    }
}

if(isBoundaryEmpty){
    console.log(-1);
}else{
    const dx = [0,-1,0,1];
    const dy = [1,0,-1,0];
    //진행 방향에 벽이 있을 때 +1
    //벽이 없을 때 -> 우측 벽이 있는경우 : 전진 |없는 경우 : +3%4 
    //우측 벽 +3%4 

    let curX = x-1;
    let curY = y-1;
    let curD = 0;
    let cnt =0;

    function inRange(x,y){
        return x>=0&&x<n&&y>=0&&y<n;
    }

  
    while(true){
        
        //현 위치가 격자를 벗어난경우 break;
      //현 위치에서 우측벽이 있는지 확인
      // 있는 경우  : 진행경로에 벽이 있다면 : 반시계 회전 \ 없다면 전진
      //없는 경우 : 시계방향 회전 

      if(!inRange(curX,curY)) break;

      const right = (curD+3)%4;
      const rx = curX+dx[right];
      const ry = curY+dy[right];

      if(inRange(rx,ry)&&maze[rx][ry]=='#'){
        const nx = curX +dx[curD];
        const ny = curY + dy[curD];

        if(inRange(nx,ny)&&maze[nx][ny]=='#'){
            curD++
        }else{
            curX = nx;
            curY = ny;
            cnt++
        }
      }else{
        curD = right;
      }
    }

    console.log(cnt)

}