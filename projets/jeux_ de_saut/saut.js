let perso =  document.querySelector('.perso');
let obstacle = document.querySelector('.obstacle');

function sauter(){
    if (perso.classList !="animation"){
        perso.classList.add('animation');
    }
    setTimeout(function(){
        perso.classList.remove('animation');
    },500)
}

let verification = setInterval(function(){
    let persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue('top'));
    let obstacleleft =  parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if(obstacleleft<20 &&obstacleleft>0 && persoTop>=130){
        obstacle.style.animation = "none";
        alert("vous avez perdu !");

    }
},1)