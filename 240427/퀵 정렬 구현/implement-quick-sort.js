const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
let arr = input[1].split(" ").map(Number);


function swap(a,b){
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b]=tmp;
}

function select_pivot(low,high){
    if(high-low>2){
const tmp = [arr[low],arr[high],arr[Math.floor((low+high)/2)]]
tmp.sort((a,b)=>a-b);
const mid = tmp[1];
const tmp_idx = tmp.indexOf(mid);
const mid_idx = tmp_idx==0?low:tmp_idx==1?high:Math.floor((low+high)/2)

if(mid_idx!=high){
    swap(mid_idx,high)
}

    }
        return arr[high]
    
}

function partion(low, high){
    const pivot = select_pivot(low,high);
    let i = low-1;

    for(let j=low; j<high;j++){
        if(arr[j]<=pivot){
            i++;
            swap(i,j)
        }
    }
    swap(i+1,high);
    return i+1;
}

function quick_sort(low,high){
    if(low<high){

    const pos = partion(low,high);
    quick_sort(low,pos-1);
    quick_sort(pos+1,high)
    }
}

quick_sort(0,n-1);
console.log(arr.join(" "))