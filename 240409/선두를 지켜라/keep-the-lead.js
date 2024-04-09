const fs= require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n").map(v=>v.split(" ").map(v=>+v));
const [n,m]=input[0];
const a = input.slice(1,1+n);
const b = input.slice(1+n,1+n+m);

let curFront= '';
let cnt=0;

let ad=0;
let acv=0;
let at=0;
let ai =0;

let bd=0;
let bcv=0;
let bt=0;
let bi=0;

while(true){
    
    if(ai==n||bi==m){
        break;
    }
    if(at==0){
const cai = a[ai];
acv = cai[0];
at=cai[1];
ai++;
    }
    if(bt==0){
        const bai = b[bi];
        bcv = bai[0]
    bt= bai[1];
    bi++;
    }
ad +=acv;
at--;
bd+=bcv;
bt--;

var front = ad>bd?'a':'b';
if(curFront!= front){
    cnt++;
    curFront = front;
}

}

console.log(cnt)