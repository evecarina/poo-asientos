
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
 var pintar;
 function redirect(event){
    document.getElementById("mostrar").innerHTML=(event.target.textContent);
    pintar=event.target;
    nasiento=parseInt(event.target.textContent);
   }

function Pasajeros(dni,nombre,apellido){
	
	this.dni=dni
	this.nombre=nombre;
	this.apellido=apellido;
	
	}

function Bus(){
	this.pasajero=[];
	this.reservar=function(ps){
		this.pasajero.push (ps);
 	}
 
 }

var bus=new Bus();
var reservar= document.getElementById ("reservar");
reservar.onclick = function () {
	bus.reservar(new Pasajeros(document.getElementById("dni").value,document.getElementById("nombre").value,document.getElementById("apellido").value));
   pintar.style.color="red";
   
};
