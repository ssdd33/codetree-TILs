const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" "));
const [n,m]=input[0].map(v=>+v);
const a = input.slice(1,1+n).map(v=>[v[0],+v[1]]);
const b = input.slice(n+1,n+m+1).map(v=>[v[0],+v[1]]);

let atl = [0];
let btl = [0];
let atlLen = 0;


a.forEach((snapshot)=>{
     const q = snapshot[0]=='R'?1:-1;
     const d=Math.abs(snapshot[1]);
    for(let i=0;i<d;i++){
        atl.push(atl[atl.length-1]+q);
    }
    atlLen +=d;
})
b.forEach((snapshot)=>{
     const q = snapshot[0]=='R'?1:-1;
     const d=Math.abs(snapshot[1]);
    for(let i=0;i<d;i++){
        btl.push(btl[btl.length-1]+q);
    }  
})


for(let i=1; i<atlLen;i++){
    
    if(btl[i]==undefined||(i==atlLen-1&&btl[i]!=atl[i])) {
        console.log(-1);
        break;}
    if(btl[i]==atl[i]){
        console.log(i);
        break;
    }

    
}


//attempt 1 : timeover
// let atl = [];
// let btl = [];

// function makeTimeLine(snapshot,i,id){
// const d = snapshot[0]=='R'?1:-1;

// return new Array(snapshot[1]).fill(d)

// }

// a.forEach((snapshot,i)=>atl=[...atl,...makeTimeLine(snapshot,i,'a')]);
// b.forEach((snapshot,i)=>btl=[...btl,...makeTimeLine(snapshot,i,'b')]);

// const longgerLength = atl.length>btl.length?atl.length:btl.length;
// let ad = 0;
// let bd = 0;

// for(let i = 0; i<longgerLength;i++){
// ad+=atl[i]==undefined?0:atl[i];
// bd+=btl[i]==undefined?0:btl[i];

// if(ad==bd){
//     console.log(i+1);
//     break;
// }
// }
// if(ad!=bd){
//     console.log(-1)
// }