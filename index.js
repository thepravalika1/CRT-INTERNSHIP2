window.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('play-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const backwardBtn = document.getElementById('backward-btn');
  const forwardBtn = document.getElementById('forward-btn');
  const audioPlayer = document.getElementById('audio-player');
  const songTitle = document.getElementById('song-title');

  playBtn.addEventListener('click', () => {
    audioPlayer.play();
  });

  pauseBtn.addEventListener('click', () => {
    audioPlayer.pause();
  });

  backwardBtn.addEventListener('click', () => {
    audioPlayer.currentTime -= 10; // Move back 10 seconds
  });

  forwardBtn.addEventListener('click', () => {
    audioPlayer.currentTime += 10; // Move forward 10 seconds
  });

  audioPlayer.addEventListener('play', () => {
    songTitle.textContent = 'Playing: Song Title';
  });

  audioPlayer.addEventListener('pause', () => {
    songTitle.textContent = 'Paused: Song Title';
  });
});
