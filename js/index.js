let textarea = document.querySelector("textarea");
let imagen = document.getElementById("img-muneco");
let label = document.querySelectorAll("label")
let btn = document.getElementById("btn-copiar")
let div = document.querySelectorAll("div")

btn.hidden = true;
let textoModificado;

function encriptar(){
    imagen.hidden = true;
    label[1].hidden = true;
    
    textoModificado = textarea.value.replaceAll("e","enter")
                                    .replaceAll("i","imes")
                                    .replaceAll("a","ai")
                                    .replaceAll("o","ober")
                                    .replaceAll("u","ufat");
    label[2].innerHTML = textoModificado;
    btn.hidden=false;
    div[3].style.justifyContent = "space-between";
    btn.style.marginBottom = "0.75rem"
    label[2].style.marginTop = "1.5rem"
    
}
function desencriptar(){
    imagen.hidden = true;
    label[1].hidden = true;

    textoModificado = textarea.value.replaceAll("enter","e")
                                    .replaceAll("imes","i")
                                    .replaceAll("ai","a")
                                    .replaceAll("ober","o")
                                    .replaceAll("ufat","u");

    label[2].innerHTML = textoModificado;
}
function validar(){
    textarea.value = textarea.value.split(/[A-Z]/).join("");
}
function copiar(){
    let rango = document.createRange();
    rango.selectNodeContents(label[2]);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(rango);
    document.execCommand("copy")
    
}

    

