class AudioManager {
  
  constructor() {
    this.audioElement = document.getElementById('globalAudio');
    this.toggleButton = document.getElementById('globalMusicToggle');
    this.moonIndicator = document.querySelector('.moon-indicator');
    this.audioTracks = [
      'audio/day1.mp3',
      'audio/day2.mp3',
      'audio/day3.mp3'
    ];
    
    this.init();
  }

  init() {
    this.loadPersistedState();
    this.setupEventListeners();
    this.setRandomTrack();
  }

  setRandomTrack() {
    const randomIndex = Math.floor(Math.random() * this.audioTracks.length);
    this.audioElement.src = this.audioTracks[randomIndex];
    localStorage.setItem('currentTrack', this.audioTracks[randomIndex]);
    this.updateMoonIndicator(randomIndex);
  }

  loadPersistedState() {
    const savedTrack = localStorage.getItem('currentTrack');
    const isMuted = localStorage.getItem('isMuted') === 'true';
    
    if(savedTrack) {
      this.audioElement.src = savedTrack;
    }
    
    if(!isMuted) {
      this.play();
    }
  }

  setupEventListeners() {
    this.toggleButton.addEventListener('click', () => this.togglePlayback());
    
    // Reiniciar música al cambiar de página
    document.addEventListener('DOMContentLoaded', () => {
      if(!this.audioElement.paused) {
        this.audioElement.play();
      }
    });
  }

  togglePlayback() {
    if(this.audioElement.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  play() {
    this.audioElement.play()
      .then(() => {
        this.toggleButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        localStorage.setItem('isMuted', false);
      })
      .catch(error => {
        console.log('Reproducción requerida por el usuario:', error);
        this.toggleButton.style.display = 'block';
      });
  }

  pause() {
    this.audioElement.pause();
    this.toggleButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    localStorage.setItem('isMuted', true);
  }

  updateMoonIndicator(trackIndex) {
    const colors = ['#94a5b3', '#c44d58', '#d4af37'];
    this.moonIndicator.style.backgroundColor = colors[trackIndex];
  }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  window.audioManager = new AudioManager();
});






