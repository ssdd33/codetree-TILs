const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n")
const n = +input[0];
const g = input.slice(1).map(v=>v.split(" ").map(Number));

let ans =0;

// const dx =[-1,-1,1,1];
// const dy =[1,-1,-1,1];

// function inRange(rangeE,x,y){
    
//     return x>=(n-1)-rangeE&&x<=rangeE&&y>=(n-1)-rangeE&&y<=rangeE;
// }

// for( let row =n-1; row>n/2;row--){
//     for(let col = n-row; col<row;col++){
//     let [x,y]= [row,col];
//     let cnt = 0;
//     for(let dir =0;dir<4;dir++){
     
//         while(!(dir==3&&x==row&&y==col)){

//             cnt+=g[x][y]

// x = x+dx[dir];
// y = y+dy[dir];
// if(!inRange(row,x+dx[dir],y+dy[dir])){
//  break;
// }
//         }
       
//     }
//     ans = Math.max(ans,cnt)
//     }
// }

// console.log(ans)




// row n-1 ~ 2 
// col 1 ~ n-2
// step : 1~ n-1 * 1~n-1

const dx = [-1,-1,1,1]
const dy = [1,-1,-1,1]

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}

for(let row =n-1; row>=2; row--){
    for(let col = 1; col<n-1; col++){
        for(let step1 = 1; step1<n;step1++){
            for(let step2 = 1; step2<n; step2++){
                let [x,y]=[row,col];
                let cnt = 0;
                let isDone =true;
                const step_to =[step1,step2];
    //    console.log(row,col,step1,step2)
                for(let dir =0; dir<4;dir++){
             
                 for(let step = 0;step<step_to[dir%2];step++){
                    if(inRange(x,y)){
                        cnt+=g[x][y];
                        x += dx[dir];
                        y +=dy[dir];
                    }else{
                        isDone =false;
                        break;
                    }

                 }
                 if(!isDone){
                    break;
                 }
                
                }
                 if(isDone){
                    ans = Math.max(ans,cnt)
                 }
                    // console.log(isDone,ans)
            }
        }
    }
}

console.log(ans)