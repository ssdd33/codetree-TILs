const fs = require('fs');
const [a,b,c,d] = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(v=>+v)

const day=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const days = [0,31,28,31,30,31,30,31,31,30,31,30,31];
let dif = 0;
if(a==c){
 dif = ((d-b))%7+1;
}else if(a>c){
    
 dif = b+ days[c]-d;
for(let m = c+1; m<a; m++){
    dif+=days[m]
}
dif =1- (dif%7);

}else{

dif = days[a]-b +d;
for(let m = a+1;m<c;m++){
    dif+=days[m]
}
dif = ((dif+1)%7)
}
  console.log(day[dif<0?7+dif:dif])