document.addEventListener('DOMContentLoaded', function(){
    login = document.querySelector(".botlog");
    Selecionar = false;
    Over = false;
    console.log(login)

    
    login.addEventListener("mouseover", function(evento){
        // Over = true;
        Selecionar = !Selecionar
        if(Selecionar){
            this.style.backgroundColor = "white"
        }
        else{
            login.style.backgroundColor = "#F0842C"
    
        }
        evento.preventDefault()
    })
                        
    login.addEventListener("mouseout", function(evento){
        Selecionar = !Selecionar
        if(Selecionar){
            this.style.backgroundColor = "white"

        }
        else{
            login.style.backgroundColor = "#F0842C"
        }
        evento.preventDefault()
    })
    
    
    cadastrar = document.querySelector(".botcad")
    Select = false;

    cadastrar.addEventListener("mouseover", function(evento){
        Select = !Select
        if(Select){
            cadastrar.style.backgroundColor = "white"
        }
        else{
            cadastrar.style.backgroundColor = "#F0842C"
        }
        evento.preventDefault()
    })

    cadastrar.addEventListener("mouseout", function(evento){
        Select = !Select
        if(Select){
            cadastrar.style.backgroundColor = "white"
        }
        else{
            cadastrar.style.backgroundColor = "#F0842C"
        }
        evento.preventDefault()
    })
})
