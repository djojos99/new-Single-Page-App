function openOnglet(evt,name){
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for(i=0; i<tabcontent.length;i++){
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for(i=0; i<tablinks.length;i++){
        tablinks[i].className = tablinks[i].className.replace
        ('active','');
    }

    let nam = document.getElementById(name);
    nam.style.display = 'block';
    evt.currentTarget.className+= 'active';
}
