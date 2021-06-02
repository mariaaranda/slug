'use strict'

let nodoTexto     = document.querySelector ("#texto");
let nodoSlug      = document.querySelector ("#slug");
let nodoComent    = document.querySelector ("#coment");
let btnMayus      = document.querySelector ("#mayus");
let btnMinus      = document.querySelector ("#minus");

function convertir () {
    
    let valor  = nodoTexto.value;
    let patron = valor.replace(/ /g, '-');
    patron     = patron.replace (/[\,*]/g,'')
    patron     = patron.toLowerCase ();
    
    nodoSlug.value = patron;
}
nodoTexto.addEventListener ("keydown", convertir);


function mayuscula () {

    let comentario   = nodoComent.value;
    let mayus        = comentario.toUpperCase ();
    nodoComent.value = mayus;
}
btnMayus.addEventListener ("click", mayuscula);


function minuscula () {

    let comentario   = nodoComent.value;
    let minus        = comentario.toLowerCase ();
    nodoComent.value = minus;
}
btnMinus.addEventListener ("click", minuscula);


