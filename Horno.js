// script.js
const STANDARD_COOKING_TIME = 40; // Tiempo estándar en el horno

function calcularTiempoLasanha() {
  // Obtener datos del usuario con prompt
  const layers = parseInt(prompt('¿Cuántas capas de lasaña estás preparando?'), 10);
  const timeInOven = parseInt(prompt('¿Cuántos minutos lleva la lasaña en el horno?'), 10);

  // Validar entradas
  if (isNaN(layers) || layers < 0 || isNaN(timeInOven) || timeInOven < 0) {
    alert('Por favor, ingresa valores válidos y mayores o iguales a cero.');
    return;
  }

  // Cálculos
  const preparationTime = layers * 2; // Tiempo de preparación (2 minutos por capa)
  const remainingTime = Math.max(0, STANDARD_COOKING_TIME - timeInOven); // Tiempo restante en el horno
  const totalTime = preparationTime + timeInOven; // Tiempo total

  // Mostrar resultados en una alerta
  alert(`Resultados:\nTiempo restante en el horno: ${remainingTime} minutos\nTiempo total de preparación: ${preparationTime} minutos\nTiempo total de trabajo: ${totalTime} minutos`);
}

// Llamar a la función al cargar el script
calcularTiempoLasanha();