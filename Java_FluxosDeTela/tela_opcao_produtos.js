document.addEventListener('DOMContentLoaded', function() {
    Carne = document.querySelector(".categorias .carnes");
    Select = false

    Carnes.addEventListener("click", function(evento){
    Select = !Select;
    if (Select){
        Carnes.style.background.color = "white"
    }
    else{
        Carnes.style.background.color = "white"
    }
    })

    Bebida = document.querySelector(".categorias .bebidas");
    Select1 = false

    Bebida.addEventListener("click", function(evento){
    Select1 = !Select1;
    if (Select1){
        Bebida.style.background = "#F0852C"
    }
    else{
        Bebida.style.background = "#F0852C"
    }
    })

    Fruta = document.querySelector(".frutas");
    Select2 = false

    Fruta.addEventListener("click", function(evento){
    Select2 = !Select2;
    if (Select2){
        Bebida.style.background = "#F0852C"
    }
    else{
        Bebida.style.background = "#white"
    }
    })
})