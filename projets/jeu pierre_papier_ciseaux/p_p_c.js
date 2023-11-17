const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');


const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur;
let resultat;
let choixOrdinateur;


choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click',(e) => {

    choixUtilisateur = e.target.id;

    contenantChoixUtilisateur.innerHTML = `<img src="jeu pierre_papier_ciseaux/${choixUtilisateur}.png">`

    generer_choix_ordinateur();
    verification()
}))

function generer_choix_ordinateur(){
    random = Math.floor(Math.random() * 3) + 1
    if(random ===1){
        choixOrdinateur = 'pierre';
    }
    if (random === 2){
        choixOrdinateur = 'papier';
    }
    if(random ===3){
        choixOrdinateur = 'ciseaux';
    }

    contenantChoixOrdinateur.innerHTML = `<img src="jeu pierre_papier_ciseaux/${choixOrdinateur}.png">`
}


function verification (){
    if(choixUtilisateur == choixOrdinateur){
        resultat = "egalité !";
    }
    if (choixUtilisateur == "pierre" && choixOrdinateur == "papier"){
        resultat = "perdu !";
    }
    if(choixUtilisateur== "papier" && choixOrdinateur == "ciseaux"){
        resultat = "perdu !";
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre"){
        resultat = "perdu !";
    }

    if (choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux"){
        resultat = "gagné !";
    }
    if (choixUtilisateur == "papier" && choixOrdinateur == "pierre"){
        resultat = "gagné !";
    }
    if (choixUtilisateur == "ciseaux" && choixOrdinateur == "papier"){
        resultat = "gagné !";
    }

    contenantResultat.innerHTML = resultat;


}