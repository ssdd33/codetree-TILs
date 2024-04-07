const fs =require('fs');
const [a,b,c,d]=fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(v=>+v);

const daysOfmonth = [0,31,28,31,30,31,30,31,31,30,31,30,31];

if(a==c){
    console.log(d-b+1);
}else{
    let sum = daysOfmonth[a]-b+1+d;
    
    for(let m=a+1; m<c;m++){
        
        sum+=daysOfmonth[m]
    }
    console.log(sum)
}