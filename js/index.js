// Variables de los componentes 
let textarea = document.querySelector("textarea");
let imagen = document.getElementById("img-muneco");
let label = document.querySelectorAll("label")
let btn = document.getElementById("btn-copiar")
let div = document.querySelectorAll("div")
let textoModificado;

// Ocultamos el boton de copiar
btn.hidden = true;

/* Funcion que nos permite encriptar*/
function encriptar(){
    //  Quitamos la imagen y el primer label
    imagen.hidden = true;
    label[1].hidden = true;
    //Remplazamos todas las vocales
    textoModificado = textarea.value.replaceAll("e","enter")
                                    .replaceAll("i","imes")
                                    .replaceAll("a","ai")
                                    .replaceAll("o","ober")
                                    .replaceAll("u","ufat");
    //Mostramos el resultado
    label[2].innerHTML = textoModificado;
    //Mostramos el boton de copiar
    btn.hidden=false;
    //Modificaciones al diseño de la página
    div[3].style.justifyContent = "space-between";
    btn.style.marginBottom = "0.75rem"
    label[2].style.marginTop = "1.5rem"
}

/* Función para desencriptar */
function desencriptar(){
    //  Quitamos la imagen y el primer label
    imagen.hidden = true;
    label[1].hidden = true;
    //Remplazamos todas las incidencias por las vocales
    textoModificado = textarea.value.replaceAll("enter","e")
                                    .replaceAll("imes","i")
                                    .replaceAll("ai","a")
                                    .replaceAll("ober","o")
                                    .replaceAll("ufat","u");
    // Mostramos el resultado
    label[2].innerHTML = textoModificado;
}

// Función para validar la entrada del teclado: Solo minúsculas
function validar(){
    /* Convierte la candena a minusculas, posteriormente busca algún valor que no 
     sea un número o espacio y lo quita de la cadena */
    textarea.value = textarea.value.toLowerCase().replace(/[^a-z\s]/g, '');
}

/*Función para copiar el texto al clipboard */
function copiar(){
    // Creamos un rango
    let rango = document.createRange();
    // Obtiene el contenido del label
    rango.selectNodeContents(label[2]);
    // Creamos un objeto para la selección
    let selection = window.getSelection();
    //Quita los rangos de seleccion que se tengan
    selection.removeAllRanges();
    //Añade el contenido a la selección
    selection.addRange(rango);
    //Copiamos el contenido
    document.execCommand("copy")
    
}

/*Realizado por Eduardo Cuevas Solorza. Desafio 1 de alura */

