document.addEventListener('DOMContentLoaded', function() {
    PDF= document.querySelector("li a");
    Selecionado = false;

    PDF.addEventListener("click", function(evento){
    Selecionado = !Selecionado;
    if(Selecionado){
        PDF.style.backgroundColor = "black"
        PDF.style.color = "white"
        PDF.style.border = "white"
    }
    })
})