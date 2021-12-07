document.addEventListener('DOMContentLoaded', function(){
    login = document.querySelector("botlog");
    Selecionar = false;

    login.addEventListener("mouseover", function(evento){
        Selecionar = !Selecionar
        if(Selecionar){
            login.style.background.color = "white"
        }
        else{
            login.style.background.color = "#F0842C"
        }
    })
    
    cadastrar = document.querySelector(".botcad")
    Select = false;

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
