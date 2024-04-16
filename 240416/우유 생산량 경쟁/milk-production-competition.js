const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n= +input[0];
const cows = input.slice(1,n+1).map(v=>v.split(" ")).map(v=>[+v[0],v[1],+v[2]]); 
cows.sort((a,b)=>a[0]-b[0]);

const produce = {'Bessie':7,'Elsie':7,'Mildred':7,};
let max =7;
let display='';
let cnt =0;
for(let i=0;i<n;i++){
    const [d,c,p]=cows[i];
    let np = produce[c]+p;
    produce[c]=np;
    max = Math.max(max,...Object.values(produce))
let temp =[];
for(cow in produce){
    if(max==produce[cow]){
        temp.push(cow)
    }
}
temp.sort();
const nd = temp.join("");
if(display!=nd){
    display =nd;
    cnt++
}

}

console.log(cnt)