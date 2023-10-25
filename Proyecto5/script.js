let esqueleto = "off";
let esqueletoStop = document.getElementById("quieto");
let botonSonido = new Audio('./mix/botonbailar.mp3')
let botonAudio = new Audio('./mix/tiaPaola.mp3')

function bailar(){
    if(esqueleto=="off"){
        esqueleto = "on";
        esqueletoStop.classList.add("on");
        console.log("on");
        esqueletoStop.addEventListener('click', ()=>{
            botonSonido.play();
        })
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.play();
        })
    }
    else{
        esqueleto = "off"
        esqueletoStop.classList.remove("on");
        console.log("off");
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.pause();
        })
    }
}