let textarea = document.querySelector("textarea");
let imagen = document.getElementById("img-muneco");
let label = document.querySelectorAll("label")

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