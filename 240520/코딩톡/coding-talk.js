const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n,m,p] =input[0].trim().split(" ").map(Number);
const msgs =input.slice(1,1+m).map(v=>v.trim().split(" ")).map(v=>[v[0],+v[1]]);

if(msgs[p-1][1]!=0){


let members = [];
for(let i=0 ;i<n;i++){
    members.push(String.fromCharCode(65+i));
}

for(let i=p-1; i<m;i++){
    const [m,u] =msgs[i]

    members = members.filter(v=>v!=m)
}

let msg_idx = p-1;
while(msg_idx>1){
if(msgs[msg_idx][1]==msgs[msg_idx-1][1]){
    members = members.filter(v=>v!=msgs[msg_idx-1][0])
    msg_idx--;
}else{
    break;
}
}
console.log(members.join(" "))
}