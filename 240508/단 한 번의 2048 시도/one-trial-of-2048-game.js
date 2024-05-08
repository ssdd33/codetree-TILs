const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const grid = input.slice(0,4).map(v=>v.split(" ").map(Number));
const d = input[4];
const ans = Array.from(Array(4),(a)=>Array(4).fill(0));


for(let i=0; i<4;i++){
    if(d=='L'){   
        let curIdx = 0;
        let nextIdx = 1;
        let ansIdx =0;

        while(curIdx<=3){
            const curNum = grid[i][curIdx];

            if(curNum!=0){
                if(curIdx!=3&&nextIdx>=3&&(curNum == grid[i][nextIdx])){
                    ans[i][ansIdx] = curNum*2;
                    curIdx = nextIdx+1;
                    nextIdx++;
                    ansIdx++;
                }else if(nextIdx>3||grid[i][nextIdx]!=0){
                        ans[i][ansIdx] = curNum;
                        curIdx++;
                        ansIdx++;
                    }
                }else{
                    curIdx++;
                }
            
            nextIdx++;
        }
    }
    if(d=='R'){
        let curIdx =3;
        let nextIdx =2;
        let ansIdx = 3;

        while(curIdx>=0){
             const curNum = grid[i][curIdx];
   
              if(curNum!=0){
                if(curIdx!=0&&nextIdx>=0&&(curNum == grid[i][nextIdx])){
                    ans[i][ansIdx] = curNum*2;
                    curIdx = nextIdx-1;
                    nextIdx--;
                    ansIdx--;
                }else if(nextIdx<0||grid[i][nextIdx]!=0){
                        ans[i][ansIdx] = curNum;
                        curIdx--;
                        ansIdx--;
                    }
                }else{
                    curIdx--;
                }
                
            
            nextIdx--;

        }
    
    }
    if(d=='U'){
        let curIdx = 0;
        let nextIdx = 1;
        let ansIdx = 0;

        while(curIdx<=3){
            const curNum = grid[curIdx][i];

            if(curNum!=0){
                if(curIdx!=3&&nextIdx<=3&&(curNum == grid[nextIdx][i])){
                    ans[ansIdx][i] = curNum*2;
                    curIdx = nextIdx+1;
                    nextIdx++;
                    ansIdx++;
                }else if(nextIdx >3 || grid[nextIdx][i]!=0){
                        ans[ansIdx][i] = curNum;
                        curIdx++;
                        ansIdx++;
                    }
                }else{
                    curIdx++;
                }   
            
            nextIdx++;
        }
    }

    if(d=='D'){
        let curIdx =3;
        let nextIdx =2;
        let ansIdx =3;

        while(curIdx >= 0){    
            const curNum = grid[curIdx][i];
        
            if(curNum!=0){
                if(curIdx!=0&&nextIdx>=0&&(curNum==grid[nextIdx][i])){
                    ans[ansIdx][i]=curNum*2;
                    curIdx =nextIdx-1;
                    nextIdx--;
                    ansIdx--;
                }else if(nextIdx<0||grid[nextIdx][i]!=0){
                        ans[ansIdx][i] =curNum;
                        curIdx = nextIdx;
                        ansIdx--;
                    }
                }else{
                    curIdx--;
                }
            
            nextIdx--;
        }
    }
}


ans.forEach(v=>console.log(v.join(" ")))