var formulario = document.querySelector(".formulario") /* Correción de querrySelector a la clase formulario */

formulario.onsubmit = function(e) {

  e.preventDefault();  /*Correción al método preventDefault*/
  
  var name = formulario.elements[0] /* Cambio en nombre de variable */
  var age = formulario.elements[1] /* Cambio en nombre de variable */
  var nacionality = formulario.elements[2] /* Cambio en nombre de variable a nationality */


  var nombre = name.value
  var edad = age.value

  var i = nacionality.selectedIndex
  var nacionalidad = nacionality.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    name.classList.add(window.alert("nombre incorrecto")) /* Agregué una vantana de alert */
  }
  if (edad < 18 || edad > 120) {
    age.classList.add(window.alert ("edad incorrecta")) /* Agregué una vantana de alert */
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {

 agregarInvitado(nombre, edad, nacionalidad)
  }
}

/* var botonBorrar = document.createElement("button")  Repetición de código
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar); */

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")   /* Corrección de la sintáxis del método add */
lista.appendChild(elementoLista)


/* var spanNombre = document.createElement("span") /* Repetición de código 
var inputNombre = document.createElement("input") 
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre
//elementoLista.appendChild(spanNombre)
//elementoLista.appendChild(inputNombre)
//elementoLista.appendChild(espacio)*/

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}