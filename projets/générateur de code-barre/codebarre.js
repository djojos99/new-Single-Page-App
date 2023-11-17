let qr_texte = document.querySelector('.qr_texte');

function generateur(){
    let qrcode = document.querySelector('.qr_code');
    qrcode.style.display ="flex";
    qrcode.innerHTML = ""; //fit-content
    new QRCode(qrcode ,qr_texte.value);
    
    //effacer le contenu après génération du code qr
    qr_texte.value="";
}