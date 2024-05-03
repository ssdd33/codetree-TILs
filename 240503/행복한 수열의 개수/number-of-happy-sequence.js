const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const [n,m] =input[0].split(" ").map(Number);
const g =input.slice(1).map(v=>v.split(" ").map(Number));


let cnt =0;


function cnt_arr(arr,idx){
    if(arr[idx]==0){
    arr = arr.map(v=>v>=m?v:0);
    arr[idx] =1;
    }else{
        arr[idx]++;
    }
    return arr;
}

for(let i=0;i<n;i++){
    let row_cnt =Array(101).fill(0);
    let col_cnt =Array(101).fill(0);

    for(let j=0;j<n;j++){
     
      row_cnt =cnt_arr(row_cnt,g[i][j]);
      col_cnt =cnt_arr(col_cnt,g[j][i]);
     
    }

    cnt+=row_cnt.filter(v=>v>=m).length;
    cnt+=col_cnt.filter(v=>v>=m).length;
}

console.log(cnt)