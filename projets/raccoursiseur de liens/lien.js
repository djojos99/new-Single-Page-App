let error = document.querySelector ('.error_message');
let longLink = document.querySelector('.long_link');
let short = document.querySelector('.result');


async function shortLinkFunct(){
    //verification des inputs

    if (!longLink.value ==""){
        error.innerHTML="";

        //connection à l'api

        let url = `https://tinyurl.com/api-create.php?url=${encodeURI(longLink.value)}`;
        fetch(url)
        .then(response => response.text())
        .then(data => { short.innerHTML = data})

        /*.then(data => short.innerHTML = data.result.short_link);*/

        short.style.display ="block";

        if(short.innerHTML.length == 0){
            short.innerHTML = "lien non valide";
        }
    }else {
        error.innerHTML = "veuillez remplir le champ !";
        short.style.display="none";
    }
}