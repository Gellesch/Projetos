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