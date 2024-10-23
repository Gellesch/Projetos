window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingFill = document.querySelector('.loading-fill');
    
    // Inicia a animação da barra de carregamento
    loadingFill.style.width = '100%';
    
    // Define o tempo que corresponde à duração da animação da barra de progresso (5 segundos)
    setTimeout(() => {
      // Quando a barra de progresso atinge 100%, esconde a tela de loading
      loadingScreen.classList.add('hidden');
      document.body.classList.add('loaded'); // Mostra o conteúdo do site
    }, 5000); // Tempo de 5 segundos para corresponder à animação da barra
  });
  

const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = 0.3;
    audioPlayer.muted = false;
    audioPlayer.autoplay = true;
    audioPlayer.loop = true;
});

list.forEach((item) =>
item.addEventListener('click',activeLink));