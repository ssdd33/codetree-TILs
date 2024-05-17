const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input[0];
const seats = input[1].trim().split("").map(Number);


let start = seats[0];
let max_seat =0;
let min_seat =n;
let cnt=0;

for(let i=0; i<n; i++){

    if(i!=0&&seats[i]==1){
        if(start!=0){
            min_seat = Math.min(min_seat,cnt+1)
            max_seat = Math.max(max_seat,Math.floor((cnt-1)/2)+1)
        }else{
            max_seat = Math.max(max_seat,cnt);
            start =1;
        }
        cnt=0;
        // console.log(i,max_seat,min_seat)
    }else if(seats[i]==0){
     cnt++;
     if(i==n-1){
        max_seat = Math.max(max_seat,cnt)
     }
    }
}

console.log(Math.min(min_seat,max_seat))