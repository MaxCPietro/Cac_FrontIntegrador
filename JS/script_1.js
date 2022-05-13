//VARIABLES
let cant = parseInt(document.getElementById("idCantidad").value);
let desc;
let enviar = document.getElementById("idEnviar");
let totAPagar=document.getElementById("idTotalPagar");

function PorcDesc (categoria){
    switch(categoria) {
        case "Estudiante":
            desc = 0.2
            console.log(desc);
            break;
        case "Trainee":
            desc = 0.5
            console.log(desc);
            break;
        case "Junior":
            desc = 0.85
            console.log(desc);
            break;
        default:
            console.log("Eso no es un dígito romano");
    }
    return desc;
}



function calcular (evt) {
    console.log("Lo logramos!")
    cant = parseInt(document.getElementById("idCantidad").value);
    console.log("La cantidad seleccionada es "+cant);
    desc=PorcDesc(document.getElementById("idCategoria").value);
    console.log("devuelve: "+desc)
    //desc = parseInt(PorcDesc(document.getElementById("idCategoria").value));
    //desc = parseFloat(0.8)
    console.log("El Descuento es: "+desc);
    let tot = parseFloat(200*cant*desc);
    console.log("Total a Pagar: $ "+tot);
    totAPagar.value=tot;
    }


//enviar.onmouseover = calcular;
enviar.onclick=calcular;
//console.log("Los Odio!");
