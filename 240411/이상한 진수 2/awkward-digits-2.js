const fs =require('fs');
const str= fs.readFileSync("/dev/stdin").toString().trim();
const n=str.split("").map(v=>+v);

function getDigit(){
     let num=0;
         for(let j=0; j<n.length;j++){
num = num*2+n[j];
        }
        return num;
}

    if(str.indexOf("0")==-1){
n[n.length-1]=0;


}else{
for(let i=0; i<n.length; i++){
    if(n[i]==0){
        n[i]=1;
        break;
    }
}
}
console.log(getDigit())