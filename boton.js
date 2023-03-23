
let OcultarTexto_btn = document.getElementById('OcultarTexto_btn');

let OcultarTexto = document.getElementById('OcultarTexto');

OcultarTexto_btn.addEventListener('click', toggleText);

function toggleText(){
    OcultarTexto.classList.toggle('mostrar');
    if(OcultarTexto.classList.contains ('mostrar')) {
        OcultarTexto_btn.innerHTML = 'Leer Menos';
    }
    else{
        OcultarTexto_btn.innerHTML = 'Leer Más';
    }
}


let OcultarTexto_btnES = document.getElementById('OcultarTexto_btnES');

let OcultarTextoES = document.getElementById('OcultarTextoES');

OcultarTexto_btnES.addEventListener('click', toggleTextES);

function toggleTextES(){
    OcultarTextoES.classList.toggle('mostrarES');
    if(OcultarTextoES.classList.contains ('mostrarES')) {
        OcultarTexto_btnES.innerHTML = 'Leer Menos';
    }
    else{
        OcultarTexto_btnES.innerHTML = 'Leer Más';
    }
}

let OcultarTexto_btnEL = document.getElementById('OcultarTexto_btnEL');

let OcultarTextoEL = document.getElementById('OcultarTextoEL');

OcultarTexto_btnEL.addEventListener('click', toggleTextEL);

function toggleTextEL(){
    OcultarTextoEL.classList.toggle('mostrarEL');
    if(OcultarTextoEL.classList.contains ('mostrarEL')) {
        OcultarTexto_btnEL.innerHTML = 'Leer Menos';
    }
    else{
        OcultarTexto_btnEL.innerHTML = 'Leer Más';
    }
}

let OcultarTexto_btnV = document.getElementById('OcultarTexto_btnV');

let OcultarTextoV = document.getElementById('OcultarTextoV');

OcultarTexto_btnV.addEventListener('click', toggleTextV);

function toggleTextV(){
    OcultarTextoV.classList.toggle('mostrarV');
    if(OcultarTextoV.classList.contains ('mostrarV')) {
        OcultarTexto_btnV.innerHTML = 'Leer Menos';
    }
    else{
        OcultarTexto_btnV.innerHTML = 'Leer Más';
    }
}