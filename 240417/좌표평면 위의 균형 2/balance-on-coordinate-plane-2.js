const fs= require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
const p = input.slice(1,1+n).map(v=>v.split(" ").map(v=>+v));


let min = Number.MAX_SAFE_INTEGER;

for(let x =0; x<=100;x+=2){
    for(let y=0;y<=100;y+=2){
        let cnt_1 =0;
        let cnt_2 =0;
        let cnt_3 =0;
        let cnt_4 =0;
        
        for(let k=0;k<n;k++){
            const [px,py]=p[k];

            if(px>x&&py>y){
                cnt_1++;
            }
            if(px<x&&py<y){
                cnt_2++
            }
            if(px<x&&py>y){
                cnt_3++
            }
            if(px>x&&py<y){
                cnt_4++
            }
        }

        let max = Math.max(cnt_1,cnt_2,cnt_3,cnt_4);
        min=Math.min(max,min);

    }
}

console.log(min)