const fs = require('fs');
const input =fs.readFileSync('/dev/stdin').toString().split("\n").map(v=>v.split(" ").map(v=>+v));
const[n,m]=input[0];
const a = input.slice(1,n+1);
const b= input.slice(1+n,1+n+m);

let [
    cnt,
a_cur_distance,
a_timer,
a_velocity,
a_idx,
b_cur_distance,
b_timer,
b_velocity,
b_idx,
hall_of_fame,
]=Array(10).fill(0);

while(true){
    if(a_timer==0){
        if(a_idx==n) break;
        const snapshot = a[a_idx];
        a_velocity = snapshot[0];
        a_timer = snapshot[1];
        a_idx++;
    }
    if(b_timer==0){
        if(b_idx==m)break;
        const snapshot = b[b_idx];
        b_velocity =snapshot[0];
        b_timer = snapshot[1];
        b_idx++;
    }
    a_cur_distance+=a_velocity;
    a_timer--;
    b_cur_distance+=b_velocity;
    b_timer--;
    const front = a_cur_distance>b_cur_distance?1:b_cur_distance>a_cur_distance?2:3;
    if(front!=hall_of_fame){
        hall_of_fame = front;
        cnt++;
    }
}

console.log(cnt)