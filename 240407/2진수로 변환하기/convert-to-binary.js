const fs =require('fs');
let n =+fs.readFileSync('/dev/stdin').toString();

let arr=[];
if(n==0){
    console.log(0)
}else{

while(true){
    if(n<2){
    arr.unshift(n);
    break;
}

arr.unshift(n%2);

n = Math.floor(n/2)

}
console.log(arr.join(''));
}