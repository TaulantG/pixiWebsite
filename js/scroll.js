document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);  
  
  const races = document.querySelector(".champions");
  const gapAtEnd = 100;
  const totalScrollWidth = races.scrollWidth + gapAtEnd;
  const amountToScroll = totalScrollWidth - window.innerWidth; 
  gsap.to(races, {
    x: () => -amountToScroll,
    ease: "none",
    scrollTrigger: {
      trigger: ".championsWrapper",
      start: "top top",
      end: () => "+=" + amountToScroll,
      pin: true,
      scrub: 1,
      markers: false
    }
  });

/////////

    const contianer = document.querySelector(".container-video");
    let q = gsap.utils.selector(contianer);
    const panel = q(".panel");

    console.log("parent display:", window.getComputedStyle(contianer.parentNode).display);

    gsap.to(panel, {
    xPercent: -100 * (panel.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: contianer,
        pin: true,
        scrub: 1,
        snap: 1 / (panel.length - 1),
        start: "top top",
        end: "+=" + contianer.offsetWidth
    }
    });

});