// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea, su tiempo de aparición y duración en segundos
var lyricsData = [
  { text: "Tú, mi reina papiada", time: 4, duration: 2.1 },
  { text: "Sé que esta semana ha sido complicada", time: 6.1, duration: 2.5 },
  { text: "No hay rockstar en cuentos de hadas", time: 8, duration: 2.5 },
  { text: "Pero, si estuviese ahí", time: 10, duration: 2 },
  { text: "No te faltará nada", time: 11.9, duration: 2 },
  { text: "Girasol en to'as las madrugadas", time: 12, duration: 4 },
  { text: "Lluvia dulce en tu ventana", time: 15, duration: 3 },
  { text: "Con tus ojos quiero toda mi manada", time: 16, duration: 4 },
  { text: "Si estuviese ahí", time: 19, duration: 2 },

  { text: "Tú, mi reina pepiada", time: 21, duration: 2 },
  { text: "Sé que esta semana ha sido complicada", time: 21.9, duration: 3 },
  { text: "No hay rockstars en cuentos de hadas", time: 24.8, duration: 2.5 },
  { text: "Pero si estuviese ahí", time: 25.8, duration: 3.3 },
  { text: "no te faltará nada", time: 28, duration: 3 },
  { text: "Girasole' to'as las madrugadas", time: 30, duration: 2.5 },
  { text: "Lluvia e' dulce en tu ventana", time: 32, duration: 3 },
  { text: "Con tus ojos quiero toda mi manada", time: 34, duration: 3 },
  { text: "Si estuviese ahí", time: 36, duration: 2 },

  { text: "'Toy ahorrando pa' comprarte el sol", time: 36.8, duration: 3 },
  { text: "Días grises cambian con tu voz", time: 38, duration: 4 },
  { text: "Veo las nubes color tornasol", time: 41, duration: 2.8 },
  { text: "Te acurruco dentro 'e un girasol", time: 43.2, duration: 2.6 },
];



// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + line.duration
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100);


//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 1000); // Espera 1 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);