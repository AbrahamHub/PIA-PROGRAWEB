// Obtén la referencia al elemento de pantalla
const resultElement = document.getElementById('result');

// Función para agregar caracteres al resultado
function appendToResult(value) {
  resultElement.value += value;
}

// Función para borrar el resultado
function clearResult() {
  resultElement.value = '';
}

// Función para calcular el resultado
function calculateResult() {
  try {
    const result = eval(resultElement.value); // Utiliza eval para evaluar la expresión matemática ingresada
    resultElement.value = result;
  } catch (error) {
    resultElement.value = 'Error';
  }
}