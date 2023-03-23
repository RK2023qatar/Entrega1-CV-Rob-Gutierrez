
let MostrarTexto_btn = document.getElementById('OcultarTexto_btn');

let MostrarTexto = document.getElementById('OcultarTexto')

MostrarTexto_btn.addEventListener('click' , toggleText);

function toogleText () {
    OcultarTexto.classList.toggle('mostrar');
}