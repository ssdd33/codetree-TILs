const fs = require('fs');
const [Y,M,D] = fs.readFileSync('/dev/stdin').toString().split(" ").map(v=>+v)
const lastDayOfMonth = [0,31,28,31,30,31,30,31,31,30,31,30,31]

function printSeason(m){
    if(m>2&&m<6){
        console.log('Spring');
    }else if(m>5&&m<9){
console.log('Summer');
    }else if(m>8&&m<12){
console.log('Fall')
    }else{
        console.log('Winter')
    }
}

function isLeapYear(y){
    if(y%4==0&&(y%100!=0||(y%100==0&&y%400==0))){
return true;
    }
    return false;
}

function solution(y,m,d){
    if(m==2&&d==29){
if(isLeapYear(y)){
    printSeason(m);
    return;
}
    }else{
        if(d>0&&lastDayOfMonth[m]>=d){
            printSeason(m);
            return;
        }
    }
    console.log(-1);
}

solution(Y,M,D)