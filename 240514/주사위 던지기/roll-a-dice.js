const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v=>v.trim().split(" "));
const [n,m,r,c]=input[0].map(Number);
const moves = input[1];
const grid = Array.from(Array(n),(a)=>Array(n).fill(0));


class Dice {
    constructor(top,front,side,){
        this.top = top;
        this.front = front;
        this.side = side;
    }
    bottom(){
        return Math.abs(this.top-7);
    }
    ml(){
        const tmp =this.top;
        this.top = this.side;
        this.side = Math.abs(7-tmp);
    }

    mr(){
        const tmp = this.top;
        this.top = Math.abs(7-this.side);
        this.side = tmp;
    }

    mu(){
        
        const tmp = this.top;
        this.top = this.front;
        this.front = Math.abs(7-tmp);
    }
    md(){
        const tmp = this.top;
        this.top = Math.abs(7-this.front);
        this.front = tmp;
    }
}

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}

const d = new Dice(1,2,3);
let [x,y]= [r-1,c-1];
grid[x][y] = d.bottom();

for(let i=0; i<m;i++){
    switch(moves[i]){
        case 'L':{
            if(inRange(x,y-1)){
                [x,y] = [x,y-1];
                d.ml();
            }
        }break;
        case 'R':{
            if(inRange(x,y+1)){
                [x,y]=[x,y+1]
                d.mr();
            }
        }break;
        case 'U':{
            if(inRange(x-1,y)){
                [x,y] = [x-1,y];
                d.mu();
            }
        }break;
        case 'D':{
            if(inRange(x+1,y)){
                [x,y]=[x+1,y];
                d.md();
            }
        }break;
    }

    grid[x][y] = d.bottom();
}

console.log(grid.reduce((a,c)=>a+c.reduce((a1,c1)=>a1+c1,0),0))