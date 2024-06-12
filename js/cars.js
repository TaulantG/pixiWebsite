// Get references to the video element and buttons
const video = document.getElementById('videoPlayer');
const video2 = document.getElementById('videoPlayer2');
const video3 = document.getElementById('videoPlayer3');
const video4 = document.getElementById('videoPlayer4');
const video5 = document.getElementById('videoPlayer5');
const video6 = document.getElementById('videoPlayer6');

const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseBtn2 = document.getElementById('playPauseBtn2');
const playPauseBtn3 = document.getElementById('playPauseBtn3');
const playPauseBtn4 = document.getElementById('playPauseBtn4');
const playPauseBtn5 = document.getElementById('playPauseBtn5');
const playPauseBtn6 = document.getElementById('playPauseBtn6');

const muteUnmuteBtn = document.getElementById('muteUnmuteBtn');
const muteUnmuteBtn2 = document.getElementById('muteUnmuteBtn2');

// Function to toggle play/pause
function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
}

function togglePlayPause2() {
    if (video2.paused) {
        video2.play();
        playPauseBtn2.textContent = 'Pause';
    } else {
        video2.pause();
        playPauseBtn2.textContent = 'Play';
    }
}

function togglePlayPause3() {
    if (video3.paused) {
        video3.play();
        playPauseBtn3.textContent = 'Pause';
    } else {
        video2.pause();
        playPauseBtn3.textContent = 'Play';
    }
}

function togglePlayPause4() {
    if (video4.paused) {
        video4.play();
        playPauseBtn4.textContent = 'Pause';
    } else {
        video4.pause();
        playPauseBtn4.textContent = 'Play';
    }
}

function togglePlayPause5() {
    if (video5.paused) {
        video5.play();
        playPauseBtn5.textContent = 'Pause';
    } else {
        video5.pause();
        playPauseBtn5.textContent = 'Play';
    }
}

function togglePlayPause6() {
    if (video6.paused) {
        video6.play();
        playPauseBtn6.textContent = 'Pause';
    } else {
        video6.pause();
        playPauseBtn6.textContent = 'Play';
    }
}

// Function to toggle mute/unmute
function toggleMuteUnmute() {
    if (video2.muted) {
        video2.muted = false;
        muteUnmuteBtn.textContent = 'Mute';
    } else {
        video2.muted = true;
        muteUnmuteBtn.textContent = 'Unmute';
    }
}

function toggleMuteUnmute2() {
    if (video6.muted) {
        video6.muted = false;
        muteUnmuteBtn2.textContent = 'Mute';
    } else {
        video6.muted = true;
        muteUnmuteBtn2.textContent = 'Unmute';
    }
}

// Add event listeners to the buttons
playPauseBtn.addEventListener('click', togglePlayPause);
playPauseBtn2.addEventListener('click', togglePlayPause2);
playPauseBtn3.addEventListener('click', togglePlayPause3);
playPauseBtn4.addEventListener('click', togglePlayPause4);
playPauseBtn5.addEventListener('click', togglePlayPause5);
playPauseBtn6.addEventListener('click', togglePlayPause6);
muteUnmuteBtn.addEventListener('click', toggleMuteUnmute);
muteUnmuteBtn2.addEventListener('click', toggleMuteUnmute2);
