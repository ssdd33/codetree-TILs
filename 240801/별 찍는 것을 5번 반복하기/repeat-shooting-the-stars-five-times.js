function print10Stars (){
    // let result = "";
    for(let i=1; i<=10;i++){
        // result+="*";
        process.stdout.write("*");
    }
    //console.log(result);
    process.stdout.write("\n");
}

for(let i=1; i<=5;i++){
    print10Stars();
}