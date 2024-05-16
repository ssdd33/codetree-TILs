const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input[0];
let chars = input[1].trim().split(" ");


let cnt = 0;

 for(let i=0; i<n;i++){
        const to_be_char = String.fromCharCode(i+65);
        const to_be_idx = to_be_char.charCodeAt()-65;
        const as_is_idx = chars.indexOf(to_be_char);
        if(as_is_idx!=to_be_idx){
            chars = [...chars.slice(0,to_be_idx),to_be_char,...chars.slice(to_be_idx,as_is_idx),...chars.slice(as_is_idx+1,n)];
            cnt += Math.abs(as_is_idx-to_be_idx)
        }
 
    }

console.log(cnt)