// Initialize PixiJS for image slider
const slideShow = new PIXI.Application({
    backgroundAlpha: 0,
  });
  document.getElementById('pixi-con').appendChild(slideShow.view);
  
  const imagePaths = [
    './images/champions/1.jpeg','./images/champions/2.jpeg','./images/champions/3.jpeg','./images/champions/4.jpeg','./images/champions/5.jpeg',
    './images/champions/6.jpeg','./images/champions/7.jpeg','./images/champions/8.jpeg','./images/champions/9.jpeg','./images/champions/10.jpeg',
    './images/champions/11.jpeg','./images/champions/12.jpeg','./images/champions/13.jpeg','./images/champions/14.jpeg','./images/champions/15.jpeg',
    './images/champions/16.jpeg','./images/champions/17.jpeg','./images/champions/18.jpeg','./images/champions/19.jpeg','./images/champions/20.jpeg',
    './images/champions/21.jpeg','./images/champions/22.jpeg','./images/champions/23.jpeg','./images/champions/24.jpeg','./images/champions/25.jpeg',
    './images/champions/26.jpeg','./images/champions/27.jpeg','./images/champions/28.jpeg','./images/champions/29.jpeg','./images/champions/30.jpeg',
    './images/champions/31.jpeg','./images/champions/32.jpeg','./images/champions/33.jpeg','./images/champions/34.jpeg','./images/champions/35.jpeg',
    './images/champions/36.jpeg','./images/champions/37.jpeg','./images/champions/38.jpeg','./images/champions/39.jpeg','./images/champions/40.jpeg',
    './images/champions/41.jpeg','./images/champions/42.jpeg','./images/champions/43.jpeg','./images/champions/44.jpeg','./images/champions/45.jpeg',
    './images/champions/46.jpeg','./images/champions/47.jpeg','./images/champions/48.jpeg','./images/champions/49.jpeg','./images/champions/50.jpeg',
    './images/champions/51.jpeg','./images/champions/52.jpeg','./images/champions/53.jpeg','./images/champions/54.jpeg','./images/champions/55.jpeg',
    './images/champions/56.jpeg','./images/champions/57.jpeg','./images/champions/58.jpeg','./images/champions/59.jpeg','./images/champions/60.jpeg',
    './images/champions/61.jpeg','./images/champions/62.jpeg','./images/champions/63.jpeg','./images/champions/64.jpeg','./images/champions/65.jpeg',
    './images/champions/66.jpeg','./images/champions/67.jpeg','./images/champions/68.jpeg','./images/champions/69.jpeg','./images/champions/70.jpeg',
    './images/champions/71.jpeg','./images/champions/72.jpeg','./images/champions/73.jpeg','./images/champions/74.jpeg',
  ];
  
  const sprites = [];
  let slideInterval;
  
  function loadImages() {
    imagePaths.forEach((path, index) => {
      const image = new Image();
      image.src = path;
      image.onload = () => {
        const texture = PIXI.Texture.from(image);
        const sprite = new PIXI.Sprite(texture);
  
        const scaleFactor = Math.min(slideShow.screen.width / sprite.width, slideShow.screen.height / sprite.height);
        sprite.scale.set(scaleFactor);
        sprite.anchor.set(0.5);
        sprite.position.set(slideShow.screen.width / 2, slideShow.screen.height / 2);
  
        sprites.push(sprite);
  
        if (index === 0) {
          slideShow.stage.addChild(sprite);
        }
      };
    });
  
    const imageSlider = document.getElementById('image-slider');
    imageSlider.addEventListener('input', () => {
      clearInterval(slideInterval);
      const index = parseInt(imageSlider.value);
      slideShow.stage.removeChildren();
      slideShow.stage.addChild(sprites[index]);
    });
  
    slideInterval = setInterval(() => {
      let currentIndex = sprites.findIndex(sprite => slideShow.stage.children.includes(sprite));
      let nextIndex = (currentIndex + 1) % sprites.length;
  
      slideShow.stage.removeChildren();
      slideShow.stage.addChild(sprites[nextIndex]);
      imageSlider.value = nextIndex;
    }, 1000);
  }
  
  function resizeSlideShow() {
    const parentWidth = document.getElementById('pixi-con').offsetWidth;
    const parentHeight = document.getElementById('pixi-con').offsetHeight;
    slideShow.renderer.resize(parentWidth, parentHeight);
  
    sprites.forEach(sprite => {
      const scaleFactor = Math.min(slideShow.screen.width / sprite.texture.width, slideShow.screen.height / sprite.texture.height);
      sprite.scale.set(scaleFactor);
      sprite.position.set(slideShow.screen.width / 2, slideShow.screen.height / 2);
    });
  }
  
  window.addEventListener('resize', resizeSlideShow);
  resizeSlideShow();
  
  loadImages();