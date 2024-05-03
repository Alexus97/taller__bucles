
/*function fibonacci () {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    if( num1 == 0 & num2 == 1) {
    } else {
        alert("Ingrese los numeros correcto de la serie.")
    }
    let acomulador = "";

    for( let i = 0; i < 2; i++) {
        acomulador = num1 + num2;
        num2 = num1;
        num2 = acomulador;

    }
    console.log(`la series es:${acomulador}`);
}*/

/*function fibonacci() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  let sequence = `${num1}, ${num2}`; // Initialize sequence with base cases

  for (let i = 0; i < num2; i++) { // Loop based on num2 for desired length
    const nextNumlet a = 0, b = 1, c = 0, i = 0
while(i < 9) {
    c = a+b;
    b = a;
    a = c;
    document.write(b + "<br/>")
    i++;
}ber = num1 + num2;
    sequence += `, ${nextNumber}`; // Add next number to the sequence
    num1 = num2;
    num2 = nextNumber;
  }

  console.log(`Fibonacci sequence: ${sequence}`); // Print the sequence
}*/


/*function fibonacci() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  // Validación de entrada (ambos números deben ser válidos y no cero)
  if (num1 == 0 & num2 == 1) {
  } else {
    alert("Ingrese los numeros correctos");
  }

  let acumulador = num1;  // Inicializar acumulador con el primer número
  let nextNumber = num2;   // Inicializar nextNumber con el segundo número

  for (let i = 1; i <= 20; i++) {
    const temp = acumulador;  // Almacenar el valor anterior de acumulador
    acumulador = nextNumber;
    nextNumber = temp + nextNumber; // Calcular el siguiente número de Fibonacci
  }

  // Mostrar el resultado en la página web (suponiendo que tiene un elemento con ID "result")
  document.getElementById("result").textContent = `El número de Fibonacci 20 es: ${acumulador}`;
}*/


/*let array = [ 0, 1 ];
for(let i = 0; i < 20; i++) {
    num = array[i] + array[i + 1];
    array.push(num)
}console.log(array);*/
  /*
  let array = [ 0, 1 ];
  for(let i = 0; i < 20; i++) {

    num = array[i] + array[i + 1];
    array.push(num)
  }


  let a = 0, b = 1, c = 0, i = 0
  while(i < 20) {
    c = a+b;
    b = a;
    a = c;
    document.write(b + "<br/>")
    i++;
  } */


  function fibo () {
    let a = 0;
    let b = 1;
    for(i = 0; i < 20; i++) {
      let temp = a;
      a = b;
      b = temp + b;
    }
  }