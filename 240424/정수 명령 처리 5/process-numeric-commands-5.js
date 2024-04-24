const fs =require("fs");
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const cmds = input.slice(1,1+n).map(v=>v.split(" ")).map(v=>[v[0],+v[1]]);

const da =[];

function handleDA(cmd){
    const [c,i]=cmd
    switch(c){
        case 'push_back': da.push(i);
        break;
        case 'pop_back': da.pop();
        break;
        case 'size' : console.log(da.length);
        break;
        case 'get':console.log(da[i-1]);
        break;
    }
}

for(let i=0;i<n;i++){
    handleDA(cmds[i])
}