document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader');
    const preloaderVideo = document.getElementById('preloader-video');
    const mainContent = document.querySelector('.main-content');

    preloaderVideo.addEventListener('ended', function () {
      preloader.style.display = 'none';
      mainContent.style.display = 'block';
    });

    setTimeout(function () {
      preloader.style.display = 'none';
      mainContent.style.display = 'block';
    }, 6000); 
  });