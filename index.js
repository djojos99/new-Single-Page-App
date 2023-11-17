/*function openOnglet(evt,name){
    evt.preventDefault();
    let i, box, content;
    box = document.getElementsByClassName('box');
    for(i=0; i<box.length;i++){
        box[i].style.display = 'none';
    }

    content = document.getElementsByClassName('content');
    for(i=0; i<content.length;i++){
        content[i].className = content[i].className.replace
        ('active','');
    }

    let nam = document.getElementById(name);
    nam.style.display = 'flex';
    evt.currentTarget.className+= 'active';
}*/




let grab = document.querySelector(".box").innerHTML;
let deposit = document.querySelector(".element");

function onglet(){
    deposit.innerHTML=grab;
}


function openOnglet(){
    if(deposit.innerHTML!== grab){
        deposit.innerHTML = grab;
    }else{
        console.log("already there !");
    }
    
}

const choixPossibles = document.querySelectorAll('a');
let userSelection;

choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click',(e) => {

    userSelection = e.target.id;

    deposit.innerHTML = `<iframe src="projets/${userSelection}.html">`;
    grab.setStyle = "display : none";

}))