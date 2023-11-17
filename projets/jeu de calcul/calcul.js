let nb1 = document.querySelector('.nb1');
let nb2 = document.querySelector('.nb2');
let op = document.querySelector('.op');
let Message = document.querySelector('.Message');
let score = document.querySelector('.score');
let link = document.querySelector('.link');
let section = document.querySelector('section');
let compteur = 0;


//nombres aléatoires debut du jeu

random1 = Math.random()*11<<0; //pour generer les nombres entre 0 et 11
random2 = Math.random()*11<<0;

//inserer des nombres au hasard dans les variables nb1 et nb2

nb1.innerHTML = random1;
nb2.innerHTML =random2;

//fonction de vérification

function verifier(){
    let res =document.querySelector('.res').value;
    if(random1 + random2 == res){
        Message.style.background = "green";
        Message.innerHTML = "correcte.";
        


            random1 = Math.random()*11<<0; 
            random2 = Math.random()*11<<0;
            console.log(random1);
            console.log(random2);

            nb1.innerHTML = random1;
            nb2.innerHTML = random2;
            compteur = compteur + 1;
            

    } else{
        Message.style.background = 'red';
        Message.innerHTML = 'vous avez perdu !';
        section.innerHTML = "";
        score.innerHTML = `<span>${compteur}</span></br> Score`;
        link.style.display = 'block';
    }
    
}