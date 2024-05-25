// Initialize PixiJS
let width = window.innerWidth;
let height = window.innerHeight;

const app = new PIXI.Application({
  width: width,
  height: height,
  backgroundAlpha: 0,
});
document.getElementById('pixi-container').appendChild(app.view);

// Create a video element
const videoElement = document.createElement('video');
videoElement.src = './videos/evolution.mp4';
videoElement.autoplay = false;
videoElement.controls = false;
videoElement.muted = true;

// Create a PIXI.VideoTexture from the video element
const videoTexture = PIXI.Texture.from(videoElement);

// Wait for video metadata to be loaded before creating the sprite
videoElement.addEventListener('loadedmetadata', () => {
  const videoSprite = new PIXI.Sprite(videoTexture);

  // Calculate scale to fit the video within PIXI application dimensions
  const scaleX = app.screen.width / videoElement.videoWidth;
  const scaleY = app.screen.height / videoElement.videoHeight;
  const scale = Math.min(scaleX, scaleY); // Use the smaller scale factor to ensure the video fits within the screen

  // Scale the video sprite to fit the application dimensions
  videoSprite.scale.set(scale);

  // Position the video sprite at the center of the application
  videoSprite.position.set(app.screen.width / 2, app.screen.height / 2);

  // Anchor the video sprite to its center
  videoSprite.anchor.set(0.5);

  // Add the video sprite to the stage
  app.stage.addChild(videoSprite);
});

// Error handling
videoElement.addEventListener('error', (err) => {
  console.error('Error loading video:', err);
});

// Get the play button
const playButton = document.getElementById('play-button');

// Track the state of the video (playing or paused)
let isPlaying = false;

// Toggle play/pause when the button is clicked
playButton.addEventListener('click', () => {
  if (isPlaying) {
    videoElement.pause();
  } else {
    videoElement.play().catch(error => {
      console.error('Failed to play video:', error);
    });
  }
  isPlaying = !isPlaying;
  updatePlayButtonImage();
});

// Get the mute button
const muteButton = document.getElementById('mute-button');

// Track the state of the video's audio (muted or unmuted)
let isMuted = false;

// Toggle mute/unmute when the button is clicked
muteButton.addEventListener('click', () => {
  if (isMuted) {
    videoElement.muted = false;
  } else {
    videoElement.muted = true;
  }
  isMuted = !isMuted;
  updateMuteButtonImage(); // Update the mute button image
});

// Function to update the play button image based on video state
function updatePlayButtonImage() {
  if (isPlaying) {
    playButton.style.backgroundImage = "url('./images/pause.png')"; // Replace 'pause-icon.png' with the path to your pause button image
  } else {
    playButton.style.backgroundImage = "url('./images/play.png')"; // Replace 'play-icon.png' with the path to your play button image
  }
}

// Function to update the mute button image based on audio state
function updateMuteButtonImage() {
  if (isMuted) {
    muteButton.style.backgroundImage = "url('./images/unmute.png')"; // Replace 'unmute-icon.png' with the path to your unmute button image
  } else {
    muteButton.style.backgroundImage = "url('./images/mute.png')"; // Replace 'mute-icon.png' with the path to your mute button image
  }
}

// Ensure the application resizes with the window
window.addEventListener('resize', () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
  const scaleX = app.screen.width / videoElement.videoWidth;
  const scaleY = app.screen.height / videoElement.videoHeight;
  const scale = Math.min(scaleX, scaleY);
  videoSprite.scale.set(scale);
  videoSprite.position.set(app.screen.width / 2, app.screen.height / 2);
});
