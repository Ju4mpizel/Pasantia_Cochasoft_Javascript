function mostrarConsola(num) {
  console.log(num);
}
mostrarConsola(2);

function calcular(num1, num2, colback) {
  let suma = num1 + num2;
  colback(suma);
}

calcular(1, 2, mostrarConsola);
//Con esto termina el avance
