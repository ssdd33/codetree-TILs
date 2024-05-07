const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.trim().split(" "));
const [n,m,q]=input[0].map(Number);
const b = input.slice(1,1+n).map(v=>v.map(Number));
const w = input.slice(1+n,1+n+q).map(v=>[+v[0],v[1]]);

function shiftFromLeft (arr){
const tmp = arr.pop();
return [tmp,...arr];
}

function shiftFromRight(arr){
const tmp = arr.shift();
return [...arr,tmp]
}

function isMatch(arr1,arr2){
    for(let i=0;i<m;i++){
        if(arr1[i]==arr2[i]){
            return true;
        }
    }
    return false;
}


for(let i=0; i<q;i++){
    const [r,d]=w[i];
    const map ={};
    if(d=='L'){
b[r-1] = shiftFromLeft(b[r-1])
map[true] = shiftFromLeft;
map[false] = shiftFromRight;
    }else{
b[r-1] = shiftFromRight(b[r-1]);
map[false] = shiftFromLeft;
map[true] = shiftFromRight;
    }

for(let j = r-2; j>=0; j--){
    if(!isMatch(b[j+1],b[j]))break;
  b[j]= map[(r-1-j)%2==0](b[j])

}

for(let j=r; j<n; j++){
    if(!isMatch(b[j-1],b[j]))break;
   b[j]= map[(j-r+1)%2==0](b[j])
}

}


for(let i=0;i<n; i++){
    console.log(b[i].join(" "))
}