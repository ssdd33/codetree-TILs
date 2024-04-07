const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n")
const n = +input[0];
const s = input.slice(1,n+1).map(v=>v.split(" ").map(v=>+v));

const students = [];

class Student{
    constructor(h,w,i){
        this.h = h;
        this.w = w;
        this.i =i;
    }

    print(){
        console.log(`${this.h} ${this.w} ${this.i}`);
    }
}

s.forEach((v,i)=>students.push(new Student(...v,i+1)));

students.sort((a,b)=>{
    if(a.h==b.h){
        return b.w-a.w;
    }else{
        return a.h-b.h;
    }
})

students.forEach((s)=>s.print())