
// Crear una etiqueta <p> para mostrar el resultado
let resultado = document.createElement("p");
document.body.append(resultado);

function playerPc () {
    let numero = Math.random() * 100;
    const redondeo = Math.trunc(numero);

    // Limpiar el contenido anterior de la etiqueta <p>
    resultado.innerText = '';

    if (redondeo <= 33) {
        resultado.innerText = 'PIEDRA';
    } else if (redondeo >= 33 && redondeo <= 66) {
        resultado.innerText = 'PAPEL';
    } else if (redondeo > 66) {
        resultado.innerText = 'TIJERAS';
    }
}

// Crear y configurar los botones
let botonPiedra = document.createElement("button");
botonPiedra.innerText = 'PIEDRA';
document.body.append(botonPiedra);
botonPiedra.addEventListener("click", playerPc);
botonPiedra.addEventListener("click", () => {
     let texto = resultado.innerText  
     let hola = document.createElement('p')
    document.body.append(hola)     
         if(texto == 'PIEDRA'){
            hola.innerText = 'Empataste'
    }
    else if(texto == 'PAPEL'){
        hola.innerText = 'Perdiste'
    }
    else{
        hola.innerText = 'Ganaste'
    } 
})



let botonPapel = document.createElement("button");
botonPapel.innerText = 'PAPEL';
document.body.append(botonPapel);
botonPapel.addEventListener("click", playerPc);
botonPapel.addEventListener("click", () => {
    let texto = resultado.innerText  
    let hola = document.createElement('p')
   document.body.append(hola)     
        if(texto == 'PIEDRA'){
           hola.innerText = 'Ganaste'
   }
   else if(texto == 'PAPEL'){
       hola.innerText = 'Empataste'
   }
   else{
       hola.innerText = 'Perdiste'
   } 
})

let botonTijeras = document.createElement("button");
botonTijeras.innerText = 'TIJERAS';
document.body.append(botonTijeras);
botonTijeras.addEventListener("click", playerPc);
botonTijeras.addEventListener("click", () => {
    let texto = resultado.innerText  
    let hola = document.createElement('p')
   document.body.append(hola)     
        if(texto == 'PIEDRA'){
           hola.innerText = 'Perdiste'
   }
   else if(texto == 'PAPEL'){
       hola.innerText = 'Ganaste'
   }
   else{
       hola.innerText = 'Empataste'
   } 
})