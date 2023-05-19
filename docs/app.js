function suma() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  if (isNaN(resultado)) {
    resultado = "Numeros No Determinados";
  }
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}
