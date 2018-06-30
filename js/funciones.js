var num_naipes = Math.floor(Math.random() * 4);
var naipes = ["img/1.png", "img/2.png" , "img/3.png", "img/4.png"];
var colores = ["color: black", "color: red", "color: red", "color: black"];
var num_valores = Math.floor(Math.random() * 13);
var valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
var naipe_s = document.getElementById("icono_superior");
document.getElementById("icono_superior").setAttribute("src", naipes[num_naipes]);
document.getElementById("icono_inferior").setAttribute("src", naipes[num_naipes]);
document.getElementById("carta_valor").setAttribute("style", colores[num_naipes]);
document.getElementById("carta_valor").innerHTML = valores[num_valores];


