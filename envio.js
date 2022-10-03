

let costo=800;
let envio= document.getElementById("boton");

boton.addEventListener("click",calcular);

function calcular(){

	let localidad=document.getElementById('ver')
	

	if(localidad.value==0 || localidad.value==""){

		alert("Elige una opcion.");
	}

	else if(localidad.value==1){
		alert("Envio gratis.")
	}

	else if(localidad.value==2){
		alert("Envio gratis.")
	}
	else if(localidad.value==3){
		alert("Envio gratis.")
	}
	else if(localidad.value==4) {
		alert("El envio es de $ "+ costo);
	}
}
