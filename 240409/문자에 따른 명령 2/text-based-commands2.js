const fs = require('fs');
const move = fs.readFileSync("/dev/stdin").toString().trim();

let [x,y,cur_direction]=Array(3).fill(0);
const dx = [0,1,0,-1];
const dy = [1,0,-1,0];

for(let i = 0;i<move.length; i++){
    const cur_move = move[i];
    if(cur_move =='R'){
        cur_direction = (cur_direction+1)%4
    }
    if(cur_move =='L'){
        cur_direction =(cur_direction+3)%4
    }
    if(cur_move=='F'){
  x+=dx[cur_direction];
        y+=dy[cur_direction];
    }
      
}

console.log(`${x} ${y}`);