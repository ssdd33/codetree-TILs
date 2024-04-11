const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const k = +input[n+1];
const map = input.slice(1,1+n).map(v=>v.split(""));
/*
거울 별 레이저 반사 방향 
'/': 위(x-1,y)<=>왼(x,y-1),
    아래(x+1,y)<=>오(x,y+1)
'\': 위(x-1,y)<=>오(x,y+1)
    아래(x+1,y)<=>왼(x,y-1)

k별 시작 x,y
k<=n : (0,k-1),위
k>n&&k<=2n : (((k%n)+n-1)%n,n-1),오
(k>2n&&k<=3n):(n-1,(n-(k%n))%n),아래
 : ((n-(k%n))%3,0),왼
*/

const dx=[0,-1,0,1];
const dy=[1,0,-1,0];

//각 거울마다 레이저가 들어온 방향별 반사 방향
const mapper = {'/':{'U':2,'D':0,'R':3,'L':1},'\\':{'U':0,'D':2,'R':1,'L':3}};
let x,y,d;
let cnt=0;

if(k<=n){

    x=0;
    y = k-1;
    d= 'U'
}else if(k<=2*n){

    x = ((k%n)+n-1)%n
    y =n-1;
    d='R';
}else if(k<=3*n){

    x=n-1;
    y=(n-(k%n))%n;
    d='D';
}else{
  
    x=(n-(k%n))%n;
    y=0;
    d='L'
}


function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n
}

function getReflectDir(startDir){
    switch(startDir){
        case 0: return 'L';
        case 1: return 'D';
        case 2: return 'R';
        case 3: return 'U';
    }
}



while(inRange(x,y)){
    
cnt++;
const reflectTo = mapper[map[x][y]][d];
x= x+dx[reflectTo];
y =y+dy[reflectTo];
d= getReflectDir(reflectTo);

}

console.log(cnt)