let copyBtn= document.getElementById('copy');

function getPassword(){
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 16;
    let password = "";


    for(let i = 0; i<passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);

        password+= chars.substring(randomNumber, randomNumber + 1)

        document.getElementById('password').value = password;

        copyBtn.style.background = '#6c757d';
        copyBtn.style.color = '#fff';

    }
}

function copyMdp(){
    let inputPassword= document.getElementById('password');

    if(inputPassword.value.length == 16){
        inputPassword.select();
        document.execCommand('copy');


        copyBtn.style.background = 'transparent';
        copyBtn.style.color = '#000';

        alert('mot de passe copié !')
    }else {
        alert('veuillez générer un mot de passe');
    }
}
