//création de la classe personne 
class Personne{
    constructor(n,a){//on appelle la fonction constructor(non imposé par js) avec 2 param:n et a
        this.nom=n;//on déclare une variable nom qui prend la valeur de n
        this.age=a;//on declare une variable age qui prend la valeur de a
    }
    saluer(){// la méthode saluer permet d'afficher la phrase; bonjour je m'appelle "nom de l'objet "et j'ai "age de l'objet"ans.
        console.log("Bonjour, je m'appelle"+this.nom+"et j'ai"+this.nom.age+"ans.")
    }
}
//Création des objets pa et p2
// pour recuperer l'age ou le nom de p1 faire la syntaxe :p1.age ;p1.npm
let p1= new Personne("toto",10);// il s'appelle toto et a 10 ans
// pour recuperer l'age ou le nom de p1 faire la syntaxe :p2.age ;p2.npm
let p2= new Personne("titi",9);// il s'appelle titi et a 9 ans

console.log( p1.nom);//affiche toto
p1.age//affiche 10
p2.nom//affiche titi
p2.age//affiche 9
//pour appeller la methode saluer sur un des objets faire:p1.saluer();
p1.saluer()//affiche bonjour je m'appelle toto et j'ai 10ans.
p2.saluer()//affiche bonjour je m'appelle titi et j'ai 9 ans.


// EXO1:
//  Supposons que vous deviez modéliser une classe Cercle qui représente un cercle avec le propriété rayon et les méthodes calculerSurface() qui calcule et retourne la surface du cercle et afficherInfo() qui affiche les informations du cercle dans la console.
//  Votre tâche consiste à créer la classe Cercle, instancier un objet Cercle et appeler les méthodes calculerSurface() et afficherInfo() pour l'objet instancié.
//  formule pour claculer la surface d'un cercle : PI multiplié par le rayon au caré PI * (rayon * rayon)

// creer la classe Cercle
class Cercle{
    // on declare le constructeur de la classe qui prend un parametre qui est le rayon
    constructor(r) { 
        this.rayon = r;
  }
    // declarer les methodes calculerSurface et afficherInfo
    calculerSurface() {
        // calculer la suface
        let surface = Math.PI * Math.pow(this.rayon, 2);
        return surface;
    }
    afficherInfo() {
        // afficher les informations du cercle
        console.log("le cercle a un rayon de " + this.rayon + " est une surface de " + this.calculerSurface());
        // this.calculerSurface() retourne la valeur surface

 

        // console.log("le cercle a un rayon de " + this.rayon + " est une surface de " + Math.ceil(this.calculerSurface()));
    }
}
let c = new Cercle(2); // instancier un objet cercle = Creer un objet Cercle
c.afficherInfo();

//  EXO2:
//   Supposons que vous deviez modéliser une classe CompteBancaire qui représente un compte bancaire avec les propriétés suivantes : titulaire, solde et les méthodes deposer(montant) qui permet de déposer de l'argent sur le compte, retirer(montant) qui permet de retirer de l'argent du compte et afficherSolde() qui affiche le solde actuel du compte.
//   Votre tâche consiste à créer la classe CompteBancaire,
//   creer le constructeur avec les parametres : titulaire et solde
//   creer les methodes:  
//     deposer qui prend un parametre pour ajouter de l'argent dans le compte
//     retirer qui prend un parametre pour retirer de l'argent du compte
//     afficherSolde qui afficher le solde du compte dans la console
//   instancier un objet CompteBancaire avec comme titulaire : Abraham et solde 5
//   appeller la methode ajouter en lui passant la valeur 10
//   appeller la methode retirer en lui passant la valeur 7
//   appeller la methode afficherSolde

// class CompteBancaire
class CompteBancaire{
    // le constructeur prend 2 params: le titulaire => t et le solde => s
    constructor(t, s) { 
        this.titulaire = t;
        this.solde = s;
    }
    // declarer les methode deposer, retirer et afficherSolde
    deposer(montant) { // deposer prend un param : montant
        this.solde += montant;
        // this.solde = this.solde + montant;
    }
    retirer(montant) {
        this.solde -= montant;
        // this.solde = this.solde - montant;
    }
    afficherSolde() {
        console.log("le solde de votre compte est de: "+this.solde+ " €");
    }
}
// instancier un objet CompteBancaire
let compte = new CompteBancaire("Wassila", 80000);
compte.deposer(100000);
compte.retirer(50000);
compte.afficherSolde();



//====> Fonctions Anonymes:
//ici une fonction traditionnelle
function rappel(){
    console.log("Ceci est une fonction de rappel")
}
setTimeout(rappel(),2000);

//Fonction anonyme
setTimeout(function(){
    console.log("Ceci est une fonction de rappel")
},2000)