let myInput = document.getElementById('psw');
let showBtn = document.querySelector('.container i');
let letter = document.getElementById('letter');
let capital = document.getElementById('capital');
let number = document.getElementById('number');
let lenght = document.getElementById('lenght');

myInput.onfocus = function(){
    document.getElementById('message').style.display = "block";
    showBtn.onclick = function(){
        if (myInput.type === "password"){
            myInput.type = "text";
            showBtn.classList.add('active');
        }else {
            myInput.type = "password";
            showBtn.classList.remove('active');
        }
    }
}


myInput.onblur = function(){
    document.getElementById('message').style.display = "none";
}

myInput.onkeyup = function(){ 
    let lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)){
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else {
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }
    
    let upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)){
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    }else {
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }

    let numbers = /[0-9]/g;
    if (myInput.value.match(numbers)){
        number.classList.remove('invalid');
        number.classList.add('valid');
    }else {
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    let wordLength = myInput.value.length;
    if ( wordLength >= 8){
        lenght.classList.remove('invalid');
        lenght.classList.add('valid');
    }else {
        lenght.classList.remove('valid');
        lenght.classList.add('invalid');
    }

   
}








