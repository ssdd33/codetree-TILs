const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));
const [n,m]=input[0];
const g = input.slice(1);

let ans = Number.MIN_SAFE_INTEGER;


function getSumOfArea(x,y,w,h){
    let sum =0;
for(let i =x; i<x+w;i++){
    for(let j=y; j<y+h;j++){
sum+=g[i][j];
    }
}
return sum;
}


for(let i=0; i<n; i++){
    for(let j=0;j<m;j++){
        for(let k =1; k<=n-i;k++){
            for(let l =1;l<=m-j;l++){
                const sumOfArea1 = getSumOfArea(i,j,k,l);
                const [x1,x2,y1,y2]= [i,i+k-1,j,j+l-1];

                for(let i2 =0; i2<n; i2++){
                    for(let j2 =0; j2<m;j2++){
                        for(let k2 =1; k2<=n-i2;k2++){
                            for(let l2 =1; l2<=m-j2;l2++){
                                const [a1,a2,b1,b2] = [i2,i2+k2-1,j2,j2+l2-1];
                                if(((a1<=x2&&a2>=x2)&&((b1<=y2&&b2>=y2)||(y1<=b2&&y2>=b2)))||((x1<=a2&&x2>=a2)&&(b1<=y2&&b2>=y2)||(y1<=b2&&y2>=b2))){
                                    continue;
                                }else{
                                    const sumOfArea2 = getSumOfArea(i2,j2,k2,l2);
                                    // console.log(x1,x2,y1,y2,`sum1: ${sumOfArea1}`,a1,a2,b1,b2,`sum2: ${sumOfArea2}`)
                                    ans = Math.max(ans, sumOfArea1+sumOfArea2);
                                }
                                
                                
                            }
                        }
                    }
                }






            }
        }
    }
}

console.log(ans)