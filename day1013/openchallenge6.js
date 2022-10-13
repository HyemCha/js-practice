function printStar(n) {
    let m = parseInt(n)
    if(isNaN(m) ||   m<1){
        console.log("입력 오류입니다.")
        return;
    }
    for(let i=1; i<=m; i++){
        for (let j = 0; j < i; j++) {
            process.stdout.write("*")
        }
        console.log()
    }

}
printStar(5)