const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const str = input[1].trim();

for(let c=1;c<=n;c++){
    
    let isRepeat = false;
  for(let i=0;i<=n-c;i++){
    
const p = str.slice(i,i+c);
if(str.indexOf(p)!=str.lastIndexOf(p)){
    isRepeat = true;
    break;
}
  }
  if(!isRepeat){
    console.log(c);
    break;
  }
}