/**
 * demande le nom de l'utilisateur pour lui dire bonjour
 * @param {string} nom nom de l'utilisateur
 */
function exercice1 (nom){
    console.log("bienvenue "+nom);
}

/**
 * affiche les nombres de 0 à 100
 */
function exercice2 (){
    for (i=0;i<101;i++){
        console.log(i);
    }
}

/**
 * demande deux nombres à l'utilisateur, les additionnes et affiche le résultat
 * @param {number} a 1er nombre 
 * @param {number} b 2eme nombre
 */
function exercice3 (a, b) {
    a+=b;
    console.log(a);
}

/**
 * demande d'entrer l'âge d'un enfant et affiche dans quelle catégorie il est.
 * @param {number} age age de l'enfant
 */
function exercice4 (age) {
    switch (true){
        case age>=12:
            console.log("cadet");
            break;
        case age >=10:
            console.log("minime");
            break;
        case age >=8:
            console.log("pupille");
            break;
        default:
            console.log("poussin");
    }
        
}

/**
 * demande le prix de fabrication et le prix de vente d'un objet et affiche si il est vendu à perte ou à profit
 * @param {number} fabrication prix de fabrication
 * @param {number} vente prix de vente
 */
function exercice5 (fabrication, vente) {
    if (fabrication>vente){
        console.log("perte");
    }
    else{
        console.log("profit");
    }
}

/**
 * demande un nombre et affiche si il est paire ou impaire
 * @param {number} nombre 
 */
function exercice6 (nombre){
    //test si le reste de la division euclidienne du nombre par 2 est supérieur à 0
    if (nombre%2>0){
        console.log("impaire");
    }
    else{
        console.log("paire");
    }
}

/**
 * demande un nombre à l'utilisateur et affiche si il est positif, négatif ou nul
 * @param {number} nombre 
 */
function exercice7 (nombre) {
    if (nombre>0){
        console.log("positif");
    }
    else if (nombre==0){
        console.log("nul");
    }
    else {
        console.log("négatif");
    }
}

/**
 * demande un nombre et affiche sa table de multiplication de 0 à 10
 * @param {number} nombre 
 */
function exercice8 (nombre){
    for (i=0;i<=10;i++){
        console.log(nombre+" X "+i+" = "+nombre*i);
    }
}

/**
 * demande un tableu de nombre, en fait la somme et l'affiche
 * @param {number} tableau tableau d'entier
 */
function exercice9 (tableau){
    let somme =0;
    for (let entier of tableau){
        somme += entier;
    }
    console.log("la somme des éléments du tableau est "+somme);
}

let tableau =[1, 1, 3]

