document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);  
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
});