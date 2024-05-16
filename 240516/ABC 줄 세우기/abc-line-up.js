const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input[0];
const chars = input[1].trim().split(" ");


let cnt = 0;

while(true){
    let done =true;

    for(let i=0; i<n-1;i++){
        const to_be_idx = chars[i].charCodeAt()-65;
        if(i!=to_be_idx){
            done =false;
            const tmp = chars[i];
            chars[i]=chars[i+1];
            chars[i+1]=tmp;
            cnt++
        }
    }
    if(done){
        break;
    }
}

console.log(cnt)