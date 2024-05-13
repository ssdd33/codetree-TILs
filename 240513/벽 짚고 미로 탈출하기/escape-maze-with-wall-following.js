const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const [x,y] = input[1].split(" ").map(Number);
const maze =input.slice(2,2+n).map(v=>v.trim().split(""));


//탈출이 불가능한 경우 
//1.가장자리에 벽이 없는 경우 (3.가장자리벽과 이어지는 벽이 없는 경우) 

let b_cnt = 0;
for(let i=0; i<n;i++){
    for(let j=0;j<n; j++){
  
            if(maze[i][j]=='#'&&(i==0||i==n-1||j==0||j==n-1)){
            b_cnt++;
            }
        
    }
}

if(b_cnt==0||b_cnt==(n*2)+(n-2)*2){
    console.log(-1)
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
    let solved =true;

    function inRange(x,y){
        return x>=0&&x<n&&y>=0&&y<n;
    }

    function isIsolatedBlock(bx,by){
        const b_dx =[-1,0,1,0];
        const b_dy = [0,1,0,-1];

        for(let i=0;i<4;i++){
            if(!inRange(bx+b_dx[i],by+b_dy[i])|| maze[bx+b_dx[i]][by+b_dy[i]]=='#')return false;
        }

        return true;
    }

    while(true){
        // console.log(curX,curY)
        //현 위치가 격자를 벗어난경우 break;
      //현 위치에서 우측벽이 있는지 확인
      // 있는 경우  : 진행경로에 벽이 있다면 : 반시계 회전 \ 없다면 전진
      //없는 경우 : 시계방향 회전 

      if(!inRange(curX,curY)) break;

      const right = (curD+3)%4;
      const rx = curX+dx[right];
      const ry = curY+dy[right];

      if(inRange(rx,ry)&&maze[rx][ry]=='#'){
        if(isIsolatedBlock(rx,ry)){
            solved =false;
            break;
        }
        const nx = curX +dx[curD];
        const ny = curY + dy[curD];

        if(inRange(nx,ny)&&maze[nx][ny]=='#'){
            // console.log('turn left')
            curD++
        }else{
            // console.log('go foward')
            curX = nx;
            curY = ny;
            cnt++
        }
      }else{
        // console.log('turn right')
        curD = right;
        curX = curX+ dx[curD];
        curY = curY +dy[curD];
        cnt++
      }
    }

    console.log(solved?cnt:-1)

}