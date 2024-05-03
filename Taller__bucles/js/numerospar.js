
function sumarPares () {
     //numero = 251;
    // console.log(numero % 2 == 0);
    // comprobacionPar = numero % 2 == 0;
    // console.log(comprobacionPar);
    let acomuladorPar = 0;

    for(let numero = 1; numero <= 100; numero++) {
        if(numero % 2 == 0) {
            acomuladorPar += numero;
            console.log(numero);
        }
        //numero % 2 == 0 ? (acomuladorPar += numero) : "";
    }
    console.log(`resultado final es: ${acomuladorPar} `);
    // numero % 2 == 0 ? (acumuladorPar += numero): "";


}



