const tracks = [
    'music/musica1.mp3',
    'music/musica3.mp3',
    'music/musica4.mp3',
    'music/musica5.mp3'
];

let currentTrackIndex = 0;

function loadAudio(src) {
    const audio = document.getElementById('audio');
    audio.src = src;
    audio.play();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length; // Avanza al siguiente track, vuelve al inicio si es el último
    loadAudio(tracks[currentTrackIndex]);
}
