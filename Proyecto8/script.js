function obtenerTiempoFaltante(fechaLimite) {
    
    let ahora = new Date ();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)). slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))). slice(-2);


    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};

console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00: GMT-0500'));

function cuentaRegresiva(tiempoFaltante, reloj, mensaje) {

    const e = document.querySelector(".texto")

    const d = document.querySelector(".dias");
    const h = document.querySelector(".horas");
    const m = document.querySelector(".minutos");
    const s = document.querySelector(".segundos");
    
    const tiempoActual = setInterval (() =>{
        let t = obtenerTiempoFaltante(tiempoFaltante);

        let inicio = document.querySelector("#inicio");
        let pause = document.querySelector("#detener");

        let sonido = new Audio('./audio/sonido.mp3')

        let noel = document.querySelector(".imagen");


        d.innerHTML = `${t.diasFaltantes}`;
        h.innerHTML = `${t.horasFaltaltantes}`;
        m.innerHTML = `${t.minutosFaltantes}`;
        s.innerHTML = `${t.segundosFaltantes}`;
        
        
        if (t.tiempoFaltante < 1){
            clearInterval(tiempoActual);
            e.innerHTML = mensaje;
            inicio.classList.add("botones");
            pause.classList.add("botones");
            noel.classList.add("baile");
            
            d.innerHTML= `00`;
            h.innerHTML= `00`;
            m.innerHTML= `00`;
            s.innerHTML= `00`;

            inicio.addEventListener("click", () => {
                sonido.play();
            })
            
            pause.addEventListener("click", () => {
                sonido.pause();
            })
            
            
        }
        

    }, 1000)
};

cuentaRegresiva('Nov 21 2023 16:28:00  GMT-0500', 'cuentaRegresiva', '¡FELIZ NAVIDAD!');