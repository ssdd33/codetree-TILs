const fs = require('fs');
let len = +fs.readFileSync('/dev/stdin').toString();
let n =len+1;
let c=0;
let toggle = true;

for(let i=1; i<=len;i++){
if(toggle){
    n--;
}else{
    c++;
}
    console.log('* '.repeat(toggle?n:c));
    if(i!=len){

toggle =!toggle
    }
}

for(let i = 0; i<len;i++){
    console.log('* '.repeat(toggle?n:c))
    if(i!=len-1){
        if(toggle){
            n++
        }else{
            c--;
        }
toggle =!toggle
    }}