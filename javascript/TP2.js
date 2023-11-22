/**
 * afiiche lélémnent le plus grande de la liste rentré en parametre 
 * @param {number} nombres liste de nombres
 */
function exercice1 (nombres){
    //prend la 1er valeur de la liste
    let max=nombres[0];
    for (let i of nombres){
        //compare avec chaque nombre de la liste si il est plus grand, si oui prend sa valeur 
        if (i >max){
            max=i;
        }
    }
    console.log(max);
}

let nombre = [-5, -10, -8];

/**
 * affiche un commentaire selon la note de l'élève
 * @param {number} note note rentré par le professeur comprise entre 0 et 20
 */
function exercice2 (note){
    switch (true){
        case note<0 || note >20:
            console.log("note invalide");
            break;
        case note>=18:
            console.log("Excellent, bon travail");
            break;
        case note>=15:
            console.log("Bien");
            break;
        case note>=11:
            console.log("Peut mieux faire");
            break;
        case note>=5:
            console.log("Insuffisant");
            break;
        case note>=0:
            console.log("Catastrophique, il faut tout revoir");
            break;
    }
}

/**
 * demande un nombre et addition tout les nombre entre 0 et le nombre et affiche le calcul et le résultat
 * @param {number} N un nombre 
 */
function exercice3 (N) {
    let a = N;
    let b = ""
    for (i=1; i<N; i++){
        a+=i
        b += i+"+"
    }
    b += N+"="+a
    console.log(b);
}

/**
 * demande un nombre et affiche un escalier d'autant de marche
 * @param {number} nombre nombre de marche de l'escalier
 */
function exercice4 (nombre){
    let marche="*"
    for (i=0; i<nombre; i++){
        console.log(marche);
        marche += "*"
    }
    
}

/**
 * affiche une pyramide sur le coté
 * @param {number} nombre nombre d'étage de la pyramide
 */
function exercice5 (nombre) {
    let marche=""
    for (i=0; i<nombre; i++){
        marche += "*"
        console.log(marche);

    }

    for (i=0; i<nombre; i++){
        console.log(marche);
        marche = marche.slice(0, -1)
    }
}

/**
 * affiche une pyramide
 * @param {*} nombre nombre d'étage de la piramide
 */
function exercice6 (nombre) {
    let espace = "";
    let brique ="*";
    for (i=0; i<nombre-1; i++){
        espace +=" ";
    }
    for (i=0; i<nombre; i++){
        console.log(espace+brique);
        //retire le dernier caractere de la variable espace
        espace = espace.slice(0, -1);
        brique += "**";
    }
}