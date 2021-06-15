/*
document.getElementsByClassName('parrafo')[0].innerHTML = "Hola soy un texto diferente"; //Accediendo al texto con la clase parrafo del HTML en caso de que no funcione el .innerHTML poner el método .textContent, el [0] hace referencia al número del elemento que se toma
*/

/*MODELO ANTIGUI*/
/*
var parrafos = document.getElementsByClassName('parrafo');
console.log(parrafos);
*/
/*
document.getElementsByClassName('parrafo')[0].innerHTML = 'Parrafo nuevo';

document.getElementById('parrafo2').innerHTML = 'Soy el nuevo parrafo';*/

/*FORMA MÁS ACTUAL*/

document.querySelector('.parrafo').textContent = 'El parrafo es nuevo';    //# para el id
/*
document.querySelectorAll('.parrafo')[1].textContent = 'Nuevo parrafo';*/

var parrafo1 = document.querySelector('#parrafo2');   
var parrafo2 = document.querySelectorAll('.parrafo')[0];

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(parrafo1);
console.log(parrafo2);