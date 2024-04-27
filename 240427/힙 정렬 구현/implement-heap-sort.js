const fs = require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
let arr =input[1].trim().split(" ").map(Number);
arr = [-1,...arr];
/*
-max-heap
 heapify (n/2 ~ 1)
-heap- 정렬
*/


function heapify(n,i){
    let largest = i;
    let l = i*2;
    let r= i*2 +1;

    if(l<=n&&arr[i]<arr[l]){
        largest = l;
    }
    if(r<=n&&arr[l]<=arr[r]){
        largest = r;
    }

    if(largest!=i){
        const tmp = arr[i];
        arr[i]=arr[largest];
        arr[largest] = tmp;
        heapify(n,largest)
    }
}

for(let i =Math.floor(n/2);i>0;i--){
    heapify(n,i);
}

for(let i=n;i>1;i--){
    const max = arr[1];
    arr[1] = arr[i];
    arr[i]=max;
    
    heapify(i-1,1)

}

console.log(arr.slice(1,n+1).join(" "))