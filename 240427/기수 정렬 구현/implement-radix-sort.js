const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
let nums = input[1].trim().split(" ");
const max_l = Math.max(...nums).toString().length;

nums =nums.map(v=>v.length<max_l?v.padStart(max_l):v)
let from_front = [];
for(let pos =max_l-1;pos>=0;pos-- ){
    let new_arr = Array(10).fill([]);
    for(let i = 0; i<nums.length; i++){
        const idx = nums[i][pos]==" "?0:+nums[i][pos]
        new_arr[idx] = [...new_arr[idx],nums[i]];
    }

let store = [];
    for(let i=0; i<10;i++){
        for(let j=0; j<new_arr[i].length;j++){
            
            if(pos>0&&new_arr[i][j][pos-1]==" "){
           
                from_front.push(new_arr[i][j])
            }else{

            store.push(new_arr[i][j])
            }
        }
    }

    nums = store
}
nums = [...from_front,...nums]

console.log(nums.map(v=>v.trim()).join(" "))