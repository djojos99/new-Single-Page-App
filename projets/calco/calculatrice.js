function clr(){
    document.querySelector('#typed1').value='';
}

function reduce(){
    let x =document.querySelector('#typed1').value;
    let z = x.toString().slice(0,-1);
    document.querySelector('#typed1').value= z;
}

function display(val){
    document.querySelector('#typed1').value+=val;
   
}

function equate(val){
    let x = document.querySelector('#typed1').value;
    let y = eval(x);

document.querySelector('#typed1').value = y;
}