console.log("¡Hola prueba!");

const opciones = document.querySelectorAll(".item-nav");
console.log("opciones");

opciones.forEach(function (opcion) {
  opcion.addEventListener("click", function (e) {
    const currentopcion = document.querySelector(".bnav");
    currentopcion.classList.remove("bnav");
    e.target.classList.add("bnav");
  });
});

const body = document.querySelector("body");
const btn = document.querySelector("#boton");

btn.addEventListener("click", function (e) {
  body.classList.toggle("Modo_Oscuro");
  btn.classList.toggle("Modo_Oscuro");
});
