const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n= +input[0];
const seats = input[1].trim().split("").map(Number);


let max = 0;


for(let i=0; i<n-1; i++){
  
    if(seats[i]==1)continue;
    seats[i]=1;
    for(let j=i+1;j<n;j++){
          
if(seats[j]==1)continue;
seats[j]=1;
const from_to = seats.slice(seats.indexOf(1),seats.lastIndexOf(1)+1);
let cnt =0;
let min = n;

for(let k=0;k<from_to.length; k++){

const seat = from_to[k];
if(seat==1&&k!=0){
    const prevMin = min;
    min = Math.min(min,cnt+1);
  
    cnt=0;
}else if(seat==0){
    cnt++;
}

}

max = Math.max(max,min)
seats[j]=0;
    }
    seats[i]=0;
}

console.log(max)