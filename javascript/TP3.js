function exercice1 (nombre){
    for (i=0; i<=nombre; i++){
        let a=""
        if (i%3==0){
            a+="fizz";
        }
        if (i%5==0){
            a+="buzz";
        }
        if (i%3>0 && i%5>0){
            a=i;
        }
        console.log(a);
    }
}

function exercice2 (tentatives, N){
    solution =Math.random()*N+1; 
    console.log(Math.round(solution));
}

exercice2 (5, 10)