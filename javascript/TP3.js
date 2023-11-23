var promptSync=require("prompt-sync")();

/**
 * affiche tout les nombre entre 0 et le nombre entré en replaçant les multiples de 3 par fizz, 
 * les multiple de 5 par buzz et les multiple de 3 et 5 par fizzbuzz
 * @param {number} nombre 
 */
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

/**
 * choisis un nombre aléatoirement entre 0 et N et demande au joueur de la trouver. affiche "c'est plus" ou "c'est moins"
 * selon la réponse du joueur pour l'aider à trouver la bonne réponse
 * @param {number} tentatives nombres d'essaie maximum pour le joueur 
 * @param {number} N nombre maximum trouvable 
 */
function exercice2 (tentatives, N){
    solution =Math.random()*N+1; 
    solution=Math.round(solution);

    while (tentatives>0){

        var x = promptSync("entrée une valeur ")

        switch (true){
            case x<solution:
                console.log("c'est plus");
                tentatives--;
                break;
            case x>solution:
                console.log("c'est moins");
                tentatives--;
                break;
            default:
                tentatives=-1;
        }
    }
    if (tentatives==-1){
        console.log("gagné, la réponse été "+solution+" !");
    } 
    else{
        console.log("perdu, la réponse été "+solution+" !");
    }
}


/**
 * transforme un nombre décimal en nombre de la base voulue.
 * @param {number} base base dans laquelle le décimal doit être transformer.
 * @param {number} decimal nombre en décimal à transformer.
 */
function exercice3 (base, decimal){
    let exposant =0;
    let resultat=""
    //verifier que la base ne dépasse pas 36 pour ne pas dépasser les caractères disponibles.
    if (base <37){
        //cherche l'exposant plus grand que décimal.
        while ( base**exposant<= decimal){
            exposant++;
        }
        exposant--; //retire 1 à l'exposant pour ne pas dépasser la décimal
        while (exposant>=0){
            let addition=0;
            /*soustrait autant de fois que possible au nombre décimal la valeur de base^exposant
            et compte combien de fois cela à été fait */
            while (decimal-(base**exposant)>=0){
                decimal-=base**exposant;
                addition+=1;
            }
            //transforme les valeurs dépassant 9 en lettre majuscule de l'alphabet
            if (addition>9){
                addition= String.fromCharCode(55+addition)
            }
            resultat+=addition;
            exposant--;
        }
        console.log(resultat);
    }
    else{
        console.log("base invalide");
    }
}

/**
 * transforme un nombre décimal en chiffres romains.
 * @param {number} decimal nombre en décimale à transformer 
 */
function exercice4 (decimal) {
    let resultat="";
    if (decimal<5000) {
        while (decimal>0){
            switch (true){
                case decimal>=1000 :
                    decimal-=1000;
                    resultat+="M";
                    break;
                case decimal >=900 :
                    decimal-=900;
                    resultat+="CM"
                    break;
                case decimal>=500 :
                    decimal-=500;
                    resultat+="D"
                    break;
                case decimal>=400 :
                    decimal-=400;
                    resultat+="CD";
                    break;
                case decimal>=100 :
                    decimal-=100;
                    resultat+="C";
                    break;
                case decimal>=90 :
                    decimal-=90;
                    resultat+="XC";
                    break;
                case decimal>=50 :
                    decimal-=50;
                    resultat+="L";
                    break;
                case decimal>=40 :
                    decimal-=40;
                    resultat+="XL";
                    break;
                case decimal>=10 :
                    decimal-=10;
                    resultat+="X";
                    break;
                case decimal>=9 :
                    decimal-=9;
                    resultat+="IX";
                    break;
                case decimal>=5 :
                    decimal-=5;
                    resultat+="V";
                    break;
                case decimal>=4 :
                    decimal-=4;
                    resultat+="IV";
                    break;
                case decimal>=1 :
                    decimal-=1;
                    resultat+="I";
                    break;
            }
        }
        console.log(resultat);
    }
    else{
        console.log("valeur incorrect");
    }
}

function exercice5 () {
    let tableau= []
    for (i=0; i<10; i++){
        var x = Number(promptSync("entrée le nombre de quille tombé au 1er tir"));
        if (x>=0 && x<11){
            tableau [i]=x;
            if (x<10){
                var y = Number(promptSync("entrée le nombre de quille tombé au 2nd tir"));
                do{
                    tableau[i]+=y;
                }while(y<0 || y>10-x)
            }
        }
        else{
            console.log("valeur invalide");
            i--;
        }
    }
    console.log(tableau);

}

exercice5()