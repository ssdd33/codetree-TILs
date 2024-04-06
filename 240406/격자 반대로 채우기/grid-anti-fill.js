const fs = require('fs');
const n = +fs.readFileSync('/dev/stdin').toString();

//TODO pattern 구두 설명 연습

let difs =[1];
for(let i=0; i<n-1; i++){
    difs.push(difs[difs.length-1]+2);
}  

for(let r =0; r<n; r++){
    let row =[];
    let sn = n-r;
    for(let c =0;c<n; c++){
if(c!=0){
   let lastnum = row[0];
    if(c%2==0){
        row.unshift(lastnum+difs[n-1-r])
    }else{
        row.unshift(lastnum+difs[r])
    }
}else{
row.push(sn);
}

    }
    console.log(row.join(" "))
}