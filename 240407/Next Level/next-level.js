const fs = require('fs');
const input =fs.readFileSync('/dev/stdin').toString().trim().split(" ");


class User{
    constructor(u='codetree',l='10'){
        this.u=u;
        this.l=l;
        this.print();
    }
    print(){
        console.log(`user ${this.u} lv ${this.l}`)
    }
}

const u = new User();
const u2 = new User(...input);