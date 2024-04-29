const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
const cmds = input.slice(1,1+n).map(v=>v.split(" ")).map(v=>[v[0],+v[1]]);
const MAX_SIZE =10000;
class Deque{
    constructor(){
        this.d =[];
        this.head =0;
        this.tail =0;
    }

    full(){
        return (this.tail+1)%MAX_SIZE ==this.head
    }

    empty(){
        return this.tail===this.head?1:0;
    }

pushFront(x){
    if(this.full()){

    }else{
        this.head= (this.head-1+MAX_SIZE)%MAX_SIZE;
        d[this.head]=x;
    }
}
popFront(){
    if(this.empty()==0){
        const value= d[this.head]
        this.head = (this.head+1)%MAX_SIZE;
return value;
    }
}
pushBack(x){
    if(this.full()){

    }else{
        d[this.tail] = x;
        this.tail = (this.tail+1)%MAX_SIZE;
    }
}
popBack(){
    if(this.empty()==0){
        this.tail = (this.tail-1+MAX_SIZE)%MAX_SIZE;
        return d[this.tail]
    }
}
    size(){
        return (this.tail-this.head+MAX_SIZE)%MAX_SIZE;
    }


front(){
    return d[this.head]
}

back(){
    return d[(this.tail-1+MAX_SIZE)%MAX_SIZE]
}
}


const d =new Deque();
for(let i=0; i<n; i++){
    const [c,e]=cmds[i];

    switch(c){
        case 'push_front': d.pushFront(e)
        break;
                case 'push_back':d.pushBack(e)
        break;
                case 'pop_front':console.log(d.popFront())
        break;
                case 'pop_back':console.log(d.popBack())
        break;
                case 'size':console.log(d.size())
        break;
                case 'empty':console.log(d.empty());
        break;
                case 'front':{console.log(d.front())}
        break;
                case 'back':console.log(d.back())
        break;
    }
}