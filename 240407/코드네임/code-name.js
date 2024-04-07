const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n").map(v=>v.split(" ")).map(v=>[v[0],+v[1]])

let agents = [];

class Agent{
    static lowest;
    constructor(c,s){
        this.c=c;
        this.s=s;
        
if(Agent.lowest != undefined){
if(Agent.lowest.s>this.s){
    Agent.lowest = this;
}
}else{


Agent.lowest = this;

    }
}

static printLowest(){
    console.log(`${Agent.lowest.c} ${Agent.lowest.s}`);
}
}

for(let i=0; i<input.length;i++){
    agents.push(new Agent(...input[i]));
    
}

Agent.printLowest()