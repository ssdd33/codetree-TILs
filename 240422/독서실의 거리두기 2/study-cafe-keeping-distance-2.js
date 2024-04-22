const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
let seats = input[1].trim().split("").map(Number);

let maxDist =0;
let [max_i,max_j] = [-1,-1];
let d_cnt= 0;
let cur_s_idx =-1;

function cal_max_d(){

  if(max_i<0){
    return maxDist*2
  }
  return maxDist
}

for(let i=0; i<n;i++){
  
    if(seats[i]==1){

        if(d_cnt> cal_max_d()){
            maxDist=d_cnt;
            max_i=cur_s_idx;
            max_j=i;
         
        }
        cur_s_idx =i;
           d_cnt=0;
    }else{
  d_cnt++;
  if(i==n-1&&d_cnt*2>=maxDist){
maxDist = d_cnt;
[max_i,max_j]=[max_j,-1]
  }
    }


}

if(max_i<0){
seats[0] =1;
}else if(max_j<0){
seats[n-1]=1;
}else{
seats[max_i+ Math.ceil((max_j-max_i)/2)] =1;
}
seats = seats.slice(seats.indexOf(1),seats.lastIndexOf(1)+1)
let min = n;
let cnt =0;
for( let i=0; i<n;i++){

if(seats[i]==1&&i!=0){
  min = Math.min(min,cnt+1)
  cnt=0;
}else{
cnt++;

} 

}

console.log(min)