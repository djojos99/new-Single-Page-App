

let addtodoButton= document.querySelector('#addTodo');
let todocontainer= document.querySelector('#todocontainer');
let inputfield= document.querySelector('#inputField');

addtodoButton.onclick = function() {
   
    if(inputfield.value !=""){
        var paragraph =  document.createElement('p');
    }
    paragraph.innerText = inputfield.value;
    paragraph.classList.add('paragraphe_style');
    todocontainer.appendChild(paragraph);
    inputfield.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.classList.add('paragraph_click');
    })

    paragraph.addEventListener('dblclick', function(){
        /*paragraph.classList.add('paragraph_click');*/
        todocontainer.removeChild(paragraph);
    })



}