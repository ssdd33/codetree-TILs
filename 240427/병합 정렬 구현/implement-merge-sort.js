const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
let arr =input[1].split(" ").map(Number);


function merge_sort(low,high){

if(low<high){
    const mid = Math.floor((low+high)/2)
    merge_sort(low,mid);
    merge_sort(mid+1,high);
    merge(low,mid,high)
}
}

let merged_arr = [];

function merge(low,mid,high){

let k = low;
let i=low;
let j =mid+1;

while(i<=mid&&j<=high){

    if(arr[i]<=arr[j]){
        merged_arr[k] = arr[i];
        i++;
    }else{
        merged_arr[k]=arr[j];
        j++;
    }
       k++;
}

while(i<=mid){
    merged_arr[k]=arr[i];
    i++;
    k++;
}

while(j<=high){
    merged_arr[k]=arr[j];
j++;
k++;
}

for(let p=low; p<=high;p++){
    arr[p]=merged_arr[p]
}
}

merge_sort(0,n-1);

console.log(merged_arr.join(" "))