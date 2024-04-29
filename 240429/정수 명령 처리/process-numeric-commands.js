const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const cmds =input.slice(1,1+n).map(v=>v.split(" ")).map(v=>[v[0],+v[1]]);

class Stack{
    constructor(){
        this.items =[];
    }

    push(x){
        this.items.push(x);
    }

    size(){
     console.log(this.items.length);
    }

    pop(){
        if(this.items.length==0){
            console.log('stack is empty');
        }else{
            const last = this.items[this.items.length-1];
            this.items.pop();
           console.log(last)
        }

    }

    top(){
        if(this.items.length==0){
            console.log('stack is empty')
        }else{
            console.log(this.items[0])
        }
    }

    empty(){
      console.log(this.items.length==0?1:0);
    }
}

const s =new Stack();
for(let i =0; i<n; i++){
    const [c,e]=cmds[i]
    switch(c){
        case 'push':s.push(e)
        break;
        case 'pop':s.pop();
        break;
        case 'size':s.size();
        break;
        case 'empty':s.empty();
        break;
        case 'top':s.top();
        break;
    }
}