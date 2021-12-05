document.addEventListener('DOMContentLoaded', function() {

    Prod1 = document.querySelector(".conexao .produto1");
    Prod2 = document.querySelector(".conexao .produto2");
    Prod3 = document.querySelector(".conexao .produto3");
    Prod4 = document.querySelector(".conexao .produto4");
    Pric1 = document.querySelector(".conexao .money1");
    Pric2 = document.querySelector(".conexao .money2");
    Pric3 = document.querySelector(".conexao .money3");
    Pric4 = document.querySelector(".conexao .money4");


    Carne = document.querySelector(".categorias .carnes");
    Select = false

    Carnes.addEventListener("click", function(evento){
        Select = !Select;
        if (Select){
            Carnes.style.background.color = "white"
        }
        else{
            Carnes.style.background.color = "#F0852C"
            Prod1 = "Frango"
            Prod2 = "Alcatra"
            Prod3 = "Picanha"
            Prod4 = "Salsicha"
            Pric1 = "R$ 13,00"
            Pric2 = "R$ 32,00"
            Pric3 = "R$ 70,00"
            Pric4 = "R$ 9,00"
        }
    })

    Bebida = document.querySelector(".categorias .bebidas");
    Select1 = false

    Bebida.addEventListener("click", function(evento){
        Select1 = !Select1;
        if (Select1){
            Bebida.style.background = "#F0852C"
            Prod1 = "Água"
            Prod2 = "Coca-Cola"
            Prod3 = "Suco de Laranja"
            Prod4 = "Suco de Uva"
            Pric1 = "R$ 4,00"
            Pric2 = "R$ 4,59"
            Pric3 = "R$ 7,49"
            Pric4 = "R$ 8,49"
        }  
        else{
            Bebida.style.background = "white"
        }
    })

    Fruta = document.querySelector(".frutas");
    Select2 = false

    Fruta.addEventListener("click", function(evento){
        Select2 = !Select2;
        if (Select2){
            Fruta.style.background = "#F0852C"
            Prod1 = "Laranja"
            Prod2 = "Mamão"
            Prod3 = "Maçã"
            Prod4 = "Banana"
            Pric1 = "R$ 2,99/kg"
            Pric2 = "R$ 9,49/kg"
            Pric3 = "R$ 5,99/kg"
            Pric4 = "R$ 4,79"
        }
        else{
            Fruta.style.background = "#white"
        }
    })
})