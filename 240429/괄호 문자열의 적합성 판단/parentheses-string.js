const fs =require('fs');
const bs =fs.readFileSync("/dev/stdin").toString().trim();

const s = [];
let isValid = true;
for(let i=0; i<bs.length;i++){
    if(bs[i]=='('){
        s.push('(')
    }else{
        if(s.length==0){
            isValid =false;
break;
        }else{
            s.pop();
        }
    }
}

console.log((s.length!=0||!isValid)?'No':'Yes')