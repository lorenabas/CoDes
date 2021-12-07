document.addEventListener('DOMContentLoaded', function() {

    Prod1 = document.querySelector(".produto1").innerHTML;
    Prod2 = document.querySelector(".produto2").innerHTML;
    Prod3 = document.querySelector(".produto3").innerHTML;
    Prod4 = document.querySelector(".produto4").innerHTML;
    Pric1 = document.querySelector(".money1").innerHTML;
    Pric2 = document.querySelector(".money2").innerHTML;
    Pric3 = document.querySelector(".money3").innerHTML;
    Pric4 = document.querySelector(".money4").innerHTML;

    console.log(Prod1)
    Carnes = document.querySelector(".carnes");
    Select = false
    Bebida = document.querySelector(".bebidas");
    Select1 = false
    
    Fruta = document.querySelector(".frutas");
    Select2 = false


    Carnes.addEventListener("click", function(evento){
        
        Carnes.style.backgroundColor = "#F0852C"
        Bebida.style.backgroundColor = 'white'
        Fruta.style.background = "white"
        document.querySelector(".produto1").innerHTML = "Frango"
        document.querySelector(".produto2").innerHTML = "Alcatra"
        document.querySelector(".produto3").innerHTML = "Picanha"
        document.querySelector(".produto4").innerHTML = "Salsicha"
        document.querySelector(".money1").innerHTML = "R$ 13,00"
        document.querySelector(".money2").innerHTML = "R$ 32,00"
        document.querySelector(".money3").innerHTML = "R$ 70,00"
        document.querySelector(".money4").innerHTML = "R$ 9,00" 
    })



    Bebida.addEventListener("click", function(evento){

        console.log(Prod1)
        Carnes.style.backgroundColor = "white"
        Bebida.style.backgroundColor = '#F0852C'
        Fruta.style.background = "white"    
        document.querySelector(".produto1").innerHTML = "Água"
        document.querySelector(".produto2").innerHTML = "Coca-Cola"
        document.querySelector(".produto3").innerHTML = "Suco de Laranja"
        document.querySelector(".produto4").innerHTML = "Suco de Uva"
        document.querySelector(".money1").innerHTML = "R$ 4,00"
        document.querySelector(".money2").innerHTML = "R$ 4,59"
        document.querySelector(".money3").innerHTML = "R$ 7,49"
        document.querySelector(".money4").innerHTML = "R$ 8,49" 
    })

    Fruta.addEventListener("click", function(evento){

        Carnes.style.backgroundColor = "white"
        Bebida.style.backgroundColor = 'white'
        Fruta.style.background = "#F0852C"
        document.querySelector(".produto1").innerHTML = "Laranja"
        document.querySelector(".produto2").innerHTML = "Mamão"
        document.querySelector(".produto3").innerHTML = "Maçã"
        document.querySelector(".produto4").innerHTML = "Banana"
        document.querySelector(".money1").innerHTML = "R$ 2,99/kg"
        document.querySelector(".money2").innerHTML = "R$ 9,49/kg"
        document.querySelector(".money3").innerHTML = "R$ 5,99/kg"
        document.querySelector(".money4").innerHTML = "R$ 4,79/kg"   
    })
})