const fs = require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n=+input[0];
const cmds = input.slice(1,1+n).map(v=>v.split(" ")).map(v=>[v[0],+v[1]]);

const MAX_SIZE =10000;

class Queue {
    constructor(){
        this.q=Array(MAX_SIZE).fill(0);
        this.head=0;
        this.tail=0;
    }

size(){
  return(this.tail-this.head+MAX_SIZE)%MAX_SIZE;
}
full(){
    return (this.tail+1)%MAX_SIZE===this.head;
}
    push(x){
        if(this.full()){
console.log('queue is full')
        }else{
            this.tail = (this.tail+1)%MAX_SIZE;
            this.q[this.tail]=x;
        }
    }

    pop(){
        if(this.size()==0){
            console.log('queue is empty')
        }else{
            this.head = (this.head+1)%MAX_SIZE;
            return this.q[this.head]
        }
    }

front(){
    return this.q[this.head+1]
}

empty(){
    return this.head==this.tail?1:0
}
}

const q= new Queue();
for(let i=0; i<n;i++){
const [c,e] =cmds[i];

switch(c){
    case 'push':q.push(e);
    break;
    case 'pop':console.log(q.pop())
    break;
        case 'front':console.log(q.front())
    break;
        case 'empty':console.log(q.empty())
    break;
        case 'size':console.log(q.size())
    break;

}
}