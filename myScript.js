// Funcionalidad del menú responsive
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
// Cerrar menú al hacer click en el overlay
overlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Cerrar menú al hacer click en los enlaces
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Cerrar menú si la ventana se redimensiona a desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});


function validarEmail (input){
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/; // Expresión regular para correos
    const error = document.getElementById("emailError");
    if (emailRegex.test(input.value)&&input.value.trim().length>0) {
        // Si el correo es válido
        error.style.display = "none"; // Oculta el mensaje de error
        input.style.border= " 4px solid  green" ; // Cambia el borde a verde
        return true
       
    } else {
       
        // Si el correo no es válido
        error.style.display = "block"; // Muestra el mensaje de error
        //input.style.borderColor = "red"; // Cambia el borde a rojo
        input.style.border="2px  solid  red" ;
        return false
    }
   


}

function validarTel(input){
    const telfRegex=/^\+?\d{1,3}?[-.\s]?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{4}$/
    const telfError = document.getElementById("telfError");
    if (telfRegex.test(input.value)&&input.value.trim().length>0) {
        // Si el telefono  es válido
        telfError.style.display = "none"; // Oculta el mensaje de error
        input.style.border= " 4px solid  green" ; // Cambia el borde a verde
        return true
    } else {
        // Si el telefono  no es válido
        telfError.style.display = "block"; // Muestra el mensaje de error
        //input.style.borderColor = "red"; // Cambia el borde a rojo
        input.style.border="2px  solid  red" ;
        return false
    }
}

function validarNombre(input){
    const nomRegex=/^[a-zA-ZÀ-ÿ\s]{4,}$/
    const nomError= document.getElementById("nomError")
    if (nomRegex.test(input.value)&&input.value.trim().length>0) {
        // Si el telefono  es válido
        nomError.style.display = "none"; // Oculta el mensaje de error
        input.style.border= " 4px solid  green" ; // Cambia el borde a verde
        return true
    } else {
        // Si el telefono  no es válido
        nomError.style.display = "block"; // Muestra el mensaje de error
        //input.style.borderColor = "red"; // Cambia el borde a rojo
        input.style.border="2px  solid  red" ;
        return false
    }
}
/*
function validarO(input){
    const opinionRegex = /^[a-zA-Z0-9À-ÿ\s,.'-]{10,500}$/;
    const opinionError = document.getElementById("opinionError");

    if (opinionRegex.test(input.value.trim())) {
        opinionError.style.display = "none"; // Si es válido
        input.style.border = "2px solid green"; // Borde verde
        return true
    } else {
        opinionError.style.display = "block"; // Si no es válido
        input.style.border = "2px solid red"; // Borde rojo
        return false
    }

}

function validarformulario(e){
  const validmail= validarEmail(document.getElementById("email"));
  const  validnombre=validarNombre(document.getElementById("Nombres"));
  const validTel=validarTel(document.getElementById("telefono"));
  const validarOpinion=validarOpinion(document.getElementById("opinion"));
  if(validnombre==true&&validmail==true &&validTel==true &&validarOpinion==true){
    alert("Mensaje enviado exitosamnete");
    this.reset()
  }
  else{
    e.preventDefault();
    alert("porfavor revise  si su informacion este correcta")
  }
}
*/

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
   
    // Prevenir el envío del formulario
    e.preventDefault();

    // Realizar las validaciones de todos los campos
    const validmail = validarEmail(document.getElementById("email"));
    const validnombre = validarNombre(document.getElementById("Nombres"));
    const validTel = validarTel(document.getElementById("telefono"));
   
    // Verificar si todos los campos son válidos
    if (validnombre && validmail && validTel ) {
        alert("Mensaje enviado exitosamente");
        this.reset(); // Resetea el formulario solo si todo es válido
        resetStyles();
    } else {
        alert("Por favor, revise si su información está correcta");
    }

});


function resetStyles() {
        const inputs = document.querySelectorAll(".form-group input, .form-group textarea");
        inputs.forEach(input => {
            input.style.border = "1px solid #ddd"; // Estilo inicial
        });
    }

const video = document.querySelector('.video-player');
const playPauseBtn = document.getElementById('playPause');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const timeDisplay = document.querySelector('.time');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.querySelector('.volume-slider');
const speedSelect = document.querySelector('.speed-select');
const subtitleSelect = document.querySelector('.subtitle-track');
const fullscreenBtn = document.getElementById('fullscreen');

// Ajustes de Reproductor
// Play/Pause
playPauseBtn.addEventListener('click', togglePlay);

function togglePlay() {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '⏸';
    } else {
        video.pause();
        playPauseBtn.textContent = '▶';
    }
}

// Actualizar barra de progreso
video.addEventListener('timeupdate', updateProgress);

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = percent + '%';
    timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
}

// Control de volumen
muteBtn.addEventListener('click', toggleMute);
volumeSlider.addEventListener('input', handleVolumeChange);

function toggleMute() {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? '🔈' : '🔊';
    volumeSlider.value = video.muted ? 0 : video.volume;
}

function handleVolumeChange() {
    video.volume = volumeSlider.value;
    video.muted = volumeSlider.value === '0';
    muteBtn.textContent = video.muted ? '🔈' : '🔊';
}

// Velocidad de reproducción
speedSelect.addEventListener('change', () => {
    video.playbackRate = parseFloat(speedSelect.value);
});

// Subtítulos
subtitleSelect.addEventListener('change', () => {
    const tracks = video.textTracks;
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].mode = 'disabled';
    }
    if (subtitleSelect.value) {
        const selectedTrack = Array.from(tracks).find(track => track.language === subtitleSelect.value);
        if (selectedTrack) {
            selectedTrack.mode = 'showing';
        }
    }
});

// Pantalla completa
fullscreenBtn.addEventListener('click', toggleFullScreen);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
        fullscreenBtn.textContent = '⛶';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        fullscreenBtn.textContent = '⛶';
    }
}

// Clic en barra de progreso
progress.addEventListener('click', scrub);

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Formatear tiempo
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Keyboard shortcuts
/*document.addEventListener('keydown', handleKeyboard);

function handleKeyboard(e) {
    switch(e.key.toLowerCase()) {
        case ' ':
        case 'k':
            e.preventDefault();
            togglePlay();
            break;
        case 'm':
            toggleMute();
            break;
        case 'f':
            toggleFullScreen();
            break;
        case 'arrowup':
            e.preventDefault();
            video.volume = Math.min(1, video.volume + 0.1);
            volumeSlider.value = video.volume;
            break;
        case 'arrowdown':
            e.preventDefault();
            video.volume = Math.max(0, video.volume - 0.1);
            volumeSlider.value = video.volume;
            break;
        case 'arrowleft':
            video.currentTime -= 5;
            break;
        case 'arrowright':
            video.currentTime += 5;
            break;
    }
}*/