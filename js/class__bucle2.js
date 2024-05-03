function calcular () {
    //imprimir # del 1 al mil.
    for(let numero = 1; numero <= 1000; numero++){
        //console.log(`${numero.toString().split("")}`);
        let digitosArray = numero.toString().split("");

        let acomulador = 0;
        for(let posicion = 0; posicion < digitosArray.length; posicion++) {
            acomulador += digitosArray[posicion] ** digitosArray.length;
        }

        if(acomulador == numero) {
            let resultado = numero;
            console.log(numero);
        }
    }
}