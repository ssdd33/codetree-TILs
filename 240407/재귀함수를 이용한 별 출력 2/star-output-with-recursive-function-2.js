const fs = require('fs');
const num = +fs.readFileSync('/dev/stdin').toString();


function solution(n,toggle,){

    console.log('* '.repeat(n))

    if(toggle){
if(n>1){
    solution(n-1,toggle);
}else{
    solution(n,!toggle)
}
    }else{
if(n<num){
    solution(n+1,toggle)
}else{
    return;
}
}
}

solution(num,true);