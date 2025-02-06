// En tu archivo JS
const moonPhases = {
    1: {
      text: "Primer Día - 'Quedan 72 Horas'",
      music: "audio/day1.mp3",
      class: "day1"
    },
    2: {
      text: "Segundo Día - 'Quedan 48 Horas'",
      music: "audio/day2.mp3",
      class: "day2"
    },
    3: {
      text: "Tercer Día - 'Quedan 24 Horas'",
      music: "audio/day3.mp3",
      class: "day3"
    }
  };
  
  function setRandomMoonPhase() {
    const randomPhase = Math.floor(Math.random() * 3) + 1;
    const phase = moonPhases[randomPhase];
    const moonElement = document.querySelector('.moon-phase');
    const musicElement = document.getElementById('backgroundMusic');
    
    // Actualizar texto y clase
    moonElement.textContent = `Fase Lunar: ${phase.text}`;
    moonElement.className = `moon-phase ${phase.class}`;
    
    // Configurar música
    musicElement.src = phase.music;
    musicElement.loop = true;
  }
  
  // Control de música
  document.getElementById('musicToggle').addEventListener('click', function() {
    const music = document.getElementById('backgroundMusic');
    const icon = this.querySelector('i');
    
    if (music.paused) {
      music.play();
      icon.classList.remove('fa-volume-mute');
      icon.classList.add('fa-volume-up');
    } else {
      music.pause();
      icon.classList.remove('fa-volume-up');
      icon.classList.add('fa-volume-mute');
    }
  });
  
  // Inicializar al cargar
  document.addEventListener('DOMContentLoaded', () => {
    setRandomMoonPhase();
    
    // Solicitar interacción del usuario para audio
    document.getElementById('musicToggle').style.display = 'block';
  });