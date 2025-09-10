const audio = document.getElementById('bg-audio');
const playPause = document.getElementById('playPause');
const volume = document.getElementById('volume');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// Raw filenames (exactly as in your folder)
const rawSongs = [
  "swore_to_lose.mp3",
  "DARKIE STILL CaN NOT RAP.mp3",
  "CAN'T STOP THA KAOS.mp3",
  "Tokyo.mp3",
  "oh shit! CRUS.mp3",
  "ltg SHADOWS OF EVIL.mp3"
];

// URL-encode every song so spaces and symbols work
const songs = rawSongs.map(s => encodeURI(s));

let currentSong = 0;

// Function to load and play song
function loadSong(index) {
  audio.src = songs[index];
  audio.load(); // ensures browser reloads the file
  audio.play();
  playPause.textContent = "Pause";
}

// Load the first song
loadSong(currentSong);

// Play/Pause
playPause.addEventListener('click', () => {
  if(audio.paused){
    audio.play();
    playPause.textContent = "Pause";
  } else {
    audio.pause();
    playPause.textContent = "Play";
  }
});

// Volume control
volume.addEventListener('input', () => {
  audio.volume = volume.value;
});

// Next song
next.addEventListener('click', () => {
  currentSong++;
  if(currentSong >= songs.length) currentSong = 0;
  loadSong(currentSong);
});

// Previous song
prev.addEventListener('click', () => {
  currentSong--;
  if(currentSong < 0) currentSong = songs.length - 1;
  loadSong(currentSong);
});

// Auto-next when song ends
audio.addEventListener('ended', () => {
  next.click();
});
