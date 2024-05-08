const fs =require('fs');
let str =fs.readFileSync('/dev/stdin').toString().trim();

const tl = str.length

if(str.split(" ").filter(v=>v==str[0]).length==tl){
    console.log(`${str[0]}${tl}`.trim().length);

}else {

    if(str[0]==str[tl-1]){
        let firstIdxOfCharFromBackWard = tl-1
        for(let i= tl-2; i>=0; i--){
            if(str[i]!=str[0]){
                firstIdxOfCharFromBackWard = i+1;
                break;
             }
        }
    str =str.slice(firstIdxOfCharFromBackWard,tl)+str.slice(0,firstIdxOfCharFromBackWard);

    }

    let cnt =1;
    const lengths =[];
    for(i=1; i<tl; i++){
        if(str[i]!=str[i-1]){
            lengths.push(cnt);
            cnt=1;
        }else{
            cnt++;
        }
    }

    lengths.push(cnt);
    const encode = lengths.reduce((a,c)=>a+c.toString(),'');
    console.log(encode.length+lengths.length)
    
}