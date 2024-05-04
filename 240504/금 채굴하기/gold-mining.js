const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));
const [n,m]=input[0];
const g = input.slice(1);

const max_coin = g.reduce((a,c)=>a+(c.filter(v=>v==1).length),0)*m;
let k = 0;
let ans = 0;

while(true){
    const nk=k+1;
    
if(Math.pow(nk,2)+Math.pow(nk+1,2)<=max_coin){
    k++;
}else{
    break;
}
}

function new_grid (k){
    
    const ng = Array((2*k)+n).fill(Array(2*k+n).fill(0));

for(let i=0; i<k;i++){
    ng[i]=[...ng[i]]
}

for(let i =k;i<n+k;i++){
    
    ng[i]= [...ng[i]]
    for(let j=k;j<n+k;j++){
        if(g[i-k][j-k]==1){
            ng[i][j]=1
        }
    }
}
for(let i =k+n-1;i<2*k+n;i++){
    ng[i]=[...ng[i]]
}
return ng;
}



function findG(x,y){
    let cnt =0;
    
    for(let i=0; i<=k;i++){
     
        const s = y+(k-i);
        const e = s+i*2;
        for(let j =s; j<=e;j++){
            if(ng[x+i][j]==1)cnt++
        }
    }

    for( let i=k+1;i<=2*k;i++ ){
        const s = y+i-k;
        const e = s+((2*k)-i)*2;
        for(let j=s; j<=e;j++){
            if(ng[x+i][j]==1)cnt++
        }
    }
    return cnt;
}


let ng = new_grid(k);

for(let i =0; i<n;i++){
    for( let j=0; j<n;j++){
        const c = findG(i,j);
        
        ans = Math.max(ans,findG(i,j))
    }
}


while(ans!=0&&Math.pow(k,2)+Math.pow(k+1,2)>ans*m){
    
    k--;
    ans = 0
ng = new_grid(k);
for(let i =0; i<n;i++){
    for( let j=0; j<n;j++){
        const c = findG(i,j);
        
        ans = Math.max(ans,findG(i,j))
    }
}
}

console.log(ans)