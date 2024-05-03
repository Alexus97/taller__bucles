/*function imprimirCuadrado () {
    //cuadrado = "*******\n********\n******** \n********";
    //console.log(cuadrado);

    /*for(let columnas = 1; columnas <=4; columnas++){
        for(let lineas = 1; lineas <= 8; lineas++){
            console.log("*")
        }
    }*/

    /*let AcomuladorAst = "";
    for(let i = 0; i < 4; i++) {
        //ciclo Padre

        for(let j=0; j < 8; j++) {
            //ciclo Hijo.
            AcomuladorAst += "*";
        }

        AcomuladorAst += "\n";
    }

    console.log(AcomuladorAst )
}*/


    /*let n = 5;
    let acomuladorAst = "";

    for(let i = 1; i <= n; i++); {
        //Ciclo padre.

        for(let j = 1; j <= n - i; j++) {
            acomuladorAst += "";

        }

            for(let k = 1; k <= 2 * i - 1; k++) {
                acomuladorAst += "*";

            }
            acomuladorAst += "\n";
    }
    console.log(acomuladorAst);*/

function triangulo () {
    let n = Number(document.getElementById("number").value);
    let acomuladorAst = "";

    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= n -i; j++) { // me imprime los espacios creando un decremento
            acomuladorAst += " ";
        }

        for(let k = 0; k <  2 * i - 1; k++) { //  <2 * i - 1 me calcula la altura del triangulo y  me imprime ast.
            acomuladorAst += "*";
        }
        acomuladorAst += "\n";//crea espacio en linea.
    }
    console.log(acomuladorAst);
}

    /*let n = ;
    let string = "";

    for(let i=0; i <=n; i++){
        for(let j=0; j<= n - i; j++) {
            string+=" ";
        }
        for (let k=0; k < 2 * i - 1 ; k++) {
            string+="*";
        }
        string +="\n";
    }

    console.log(string);


/*function triangulo(filas) {
    let n = Number(document.getElementById("number").value);
    let acumuladorAst = "";
    let espaciosPorFila = "";

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < filas - i - 1; j++) {
            espaciosPorFila += " ";
        }

        for (let k = 0; k <= 2 * i; k++) {
                acumuladorAst += "*";
                k++; // Incrementar k dentro del cuerpo del bucle
        }

        console.log(espaciosPorFila + acumuladorAst);
        acumuladorAst = ""; // Reiniciar acumuladorAst para la siguiente fila
        espaciosPorFila = ""; // Reiniciar espaciosPorFila para la siguiente fila
    }
} */
