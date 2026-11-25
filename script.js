var botonesPestana = document.getElementsByClassName("boton-pestana");
var pestanas = document.getElementsByClassName("pestana");

for (var i = 0; i < botonesPestana.length; i++) {
  botonesPestana[i].onclick = function () {
    for (var j = 0; j < botonesPestana.length; j++) {
      botonesPestana[j].classList.remove("activa");
      pestanas[j].classList.remove("activa");
    }

    this.classList.add("activa");
    document.getElementById(this.getAttribute("data-pestana")).classList.add("activa");
  };
}

var botonesPersonaje = document.getElementsByClassName("boton-personaje");
var descripcion = document.getElementById("descripcion-personaje");

for (var i = 0; i < botonesPersonaje.length; i++) {
  botonesPersonaje[i].onclick = function () {
    descripcion.textContent = this.getAttribute("data-descripcion");
  };
}

var botonRegalo = document.getElementById("agregar-regalo");
var entradaRegalo = document.getElementById("entrada-regalo");
var listaRegalos = document.getElementById("lista-regalos");

botonRegalo.onclick = function () {
  var regalo = entradaRegalo.value;

  if (regalo != "") {
    var nuevoRegalo = document.createElement("li");
    nuevoRegalo.textContent = regalo;
    listaRegalos.appendChild(nuevoRegalo);
    entradaRegalo.value = "";
  }
};

var botonesComida = document.getElementsByClassName("agregar-comida");
var carrito = document.getElementById("carrito");
var total = 0;

for (var i = 0; i < botonesComida.length; i++) {
  botonesComida[i].onclick = function () {
    var nombre = this.getAttribute("data-nombre");
    var precio = Number(this.getAttribute("data-precio"));
    var plato = document.createElement("li");

    plato.textContent = nombre + " - $" + precio;
    carrito.appendChild(plato);
    total = total + precio;
    document.getElementById("total").textContent = "Total: $" + total;
  };
}
