const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        /*console.log(boton.textContent);*/
        const botonOn = boton.textContent;
        
        if(boton.id === "limpiar") {
            pantalla.textContent = "0";
            return;
        }
        if(boton.id === "borrar") {

            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡ERROR!" || pantalla.textContent === "/" ) {
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        if(boton.id === "igual"){
            try{
                const expresion = pantalla.textContent;
                if(expresion.includes("//")){
                    pantalla.textContent = "¡ERROR!";
                }else{
                    pantalla.textContent = eval(expresion);
                }
            }catch{
                pantalla.textContent = "¡ERROR!";
            }
            return;
        }

        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent = "¡ERROR!";
            }

        }

        if(pantalla.textContent === "0" || pantalla.textContent === "¡ERROR!" || pantalla.textContent === "/" ){
            pantalla.textContent = botonOn;
        }else{
            pantalla.textContent += botonOn;
        }
        
    })
})