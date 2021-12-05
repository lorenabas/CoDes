document.addEventListener('DOMContentLoaded', function(){
    login = document.querySelector("botlog");
    cadastrar = document.querySelector(".botcad")
    Selecionar = false;
    Select = false;

    login.addEventListener("mouseover", function(evento){
        Selecionar = !Selecionar
        if(Selecionar){
            login.style.background.color = "white"
        }
        else{
            login.style.background.color = "#F0842C"
        }
    })

    cadastrar.addEventListener("mouseover", function(evento){
        Select = !Select
        if(Select){
            cadastrar.style.background.color = "white"
        }
        else{
            cadastrar.style.background.color = "#F0842C"
        }
    })

})
