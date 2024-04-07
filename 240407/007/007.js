const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");


class Msg{
    constructor(c,l,t){
        this.c = c;
        this.l =l;
        this.t = t;

    }

    print(){
        console.log(`secret code : ${this.c}
meeting point : ${this.l}
time : ${this.t}`)
    }
}

const m = new Msg(...input);
m.print();