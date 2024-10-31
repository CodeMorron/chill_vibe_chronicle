let isPlaying = false;
let isCollapsed = false;
const audioPlayer = document.getElementById("audioPlayer");
const progressBar = document.getElementById("progressBar");

// Function to handle play/pause
function playPause() {
    const albumCover = document.getElementById("albumCover");
    const playButton = document.getElementById("playButton");

    if (!isPlaying) {
        audioPlayer.play();
        albumCover.classList.add("spin");
        playButton.src = "/_images/pause_button.png";
        requestAnimationFrame(updateProgressBar);
        updateProgressBar();
    } else {
        audioPlayer.pause();
        albumCover.classList.remove("spin");
        playButton.src = "/_images/play_button.png";
    }
    isPlaying = !isPlaying;
}

// Function to toggle the player
function togglePlayer() {
    const musicPlayer = document.getElementById("musicPlayer");
    const collapseIcon = document.getElementById("collapseIcon");

    if (isCollapsed) {
        musicPlayer.classList.remove("collapsed");
        collapseIcon.src = "/_images/collapse_icon.png"; // Icon for expanding
    } else {
        musicPlayer.classList.add("collapsed");
        collapseIcon.src = "/_images/expand_icon.png"; // Icon for collapsing
    }
    isCollapsed = !isCollapsed;
}

// Function to rewind the audio by 20 seconds
function rewind() {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 20); // Prevent negative time
    updateProgressBar(); // Update progress bar after rewind
}

// Function to fast forward the audio by 20 seconds
function fastForward() {
    audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 20); // Prevent exceeding duration
    updateProgressBar(); // Update progress bar after fast forward
}

// Function to update the progress bar
function updateProgressBar() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;

    if (isPlaying) {
        requestAnimationFrame(updateProgressBar);
    }
}
