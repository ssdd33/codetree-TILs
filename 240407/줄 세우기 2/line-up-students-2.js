const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n")
const n = +input[0];
const s = input.slice(1,n+1).map(v=>v.split(" ").map(v=>+v));

const students = [];

class Student{
    constructor(h,w){
        this.h = h;
        this.w = w;
    }

    print(i){
        console.log(`${this.h} ${this.w} ${i}`);
    }
}

s.forEach(v=>students.push(new Student(...v)));

students.sort((a,b)=>{
    if(a.h==b.h){
        return b.w-a.w;
    }else{
        return a.h-b.h;
    }
})

students.forEach((s,i)=>s.print(i+1))