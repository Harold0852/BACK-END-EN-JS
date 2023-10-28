const deg = 6;

const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

setInterval(()=>{
    let tiempo = new Date();

    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    hora.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minuto.style.transform = `rotate(${(min)}deg)`;
    segundo.style.transform = `rotate(${(seg)}deg)`;
})

function calcularTimpo(){
    let tiempo = new Date();
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();
    let dn;

    if (hora >= 12) {
        dn = "PM";
        hora = hora - 12;
    } else {
        dn = "AM";
    }

    hora = hora < 10 ? "0" + hora : hora; 
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    let pantallaReloj = hora + ":" + minuto + ":" + segundos + dn;
    let relojDigital = document.querySelector(".digital")
    relojDigital.innerHTML = pantallaReloj;
}
setInterval(calcularTimpo, 1000)