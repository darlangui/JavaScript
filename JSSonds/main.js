function Sons (element) {
    document.querySelector(element).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

let cont = 0;

while (cont < listaTeclas.length){
    const tecla = listaTeclas[cont];
    const instru = tecla.classList[1];
    
    const audio = `#som_${instru}`;
    console.log(tecla)

    tecla.onclick = function(){Sons(audio)}
    cont += 1;
}