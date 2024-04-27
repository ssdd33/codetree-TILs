const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
let nums = input[1].trim().split(" ");
const max_l = Math.max(...nums).toString().length;
nums.map(v=>v.length<max_l?v.padStart(max_l-v," "):v)
for(let pos =max_l-1;pos>=0;pos-- ){
    let new_arr = Array(10).fill([]);
    for(let i = 0; i<n; i++){
        const idx = nums[i][pos]==undefined?0:+nums[i][pos]
        new_arr[idx] = [...new_arr[idx],nums[i]];
    }
let store = [];
    for(let i=0; i<10;i++){
        for(let j=0; j<new_arr[i].length;j++){
            store.push(new_arr[i][j])
        }
    }

    nums = store
}

console.log(nums.map(v=>v.trim()).join(" "))