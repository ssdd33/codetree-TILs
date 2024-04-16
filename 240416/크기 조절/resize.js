const fs = require('fs');
let [a,b] =fs.readFileSync("/dev/stdin").toString().split(" ").map(v=>+v);


if(a==b){
    console.log(0);
}else{
    a++;
    let cnt=1;
    let inc =1;


    while(a<b){
let pos_inc = [inc+1,inc,inc-1];

for(let i=0; i<3; i++){
    const temp_inc =pos_inc[i];
    const cur_dif = b-a;
    const next_dif = cur_dif-temp_inc;
    if(next_dif>=temp_inc||(temp_inc-1<=1&&next_dif==1)||(temp_inc==1&&cur_dif==1)){
        inc= temp_inc;
        a+=inc;
        cnt++;
        
        break;
    }
    
}
    }

    console.log(cnt)

}