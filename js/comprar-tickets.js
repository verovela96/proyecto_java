const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;


let nombre           = document.getElementById("NombreFormularioTickets");
let apellido         = document.getElementById("ApellidoFormularioTickets");
let mail             = document.getElementById("mail");
let cantidadTickets  = document.getElementById("cantidadTickets");
let categoria        = document.getElementById("categoriaSelect");


function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}


function ResetTotalAPagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}



const emailValido = mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}



function TotalAPpagar() {

    quitarClaseError();

    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        nombre.focus();
        alert("Por favor, escribí tu nombre.");
        return;
    }

    if (apellido.value === "" ) {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor, escribí tu email.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    if (!emailValido(mail.value)) {
        alert("Por favor, escribí un correo electrónico válido.");
        mail.classList.add("is-invalid");
        mail.focus()
        return;
    }

    

    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        return;
    }

    if (categoria.value == "") {
        categoria.classList.add("is-invalid");
        categoria.focus();
        alert("Por favor, seleccioná una categoría.");
        return;
    }


let totalValorTickets = (cantidadTickets.value) * valorTicket;

switch (categoria.value) 
{ 
    case "n":
    totalPago.innerHTML = (totalValorTickets = totalValorTickets);
    break;
      
    case"e":
    totalPago.innerHTML = (totalValorTickets= (totalValorTickets - (descuentoEstudiante/100*totalValorTickets)))
    break

    case"t":
    totalPago.innerHTML = (totalValorTickets = (totalValorTickets-(descuentoTrainee/100*totalValorTickets)))
    break;
    
    case"j":
    totalPago.innerHTML = (totalValorTickets =(totalValorTickets-(descuentoJunior/100*totalValorTickets)))
    break;
    default:
    break;
 }    
}

btnResumen.addEventListener('click', TotalAPpagar);
btnBorrar.addEventListener('click', ResetTotalAPagar);