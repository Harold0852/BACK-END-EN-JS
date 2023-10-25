function calcularTimpo(){
    
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // para hora militar sumar 12 y para quitar restar 12
    /*hora = hora -12;*/

    let pantallaReloj = hora + ":" + minuto + ":" + segundos;
    let relojDigital = document.querySelector(".reloj")
    relojDigital.innerHTML = pantallaReloj;
}

setInterval(calcularTimpo, 1000)