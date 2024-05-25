let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = `-${navbarHeight}px`; // Hide the navbar
    } else {
        // Scrolling up
        if (scrollTop > navbarHeight) {
            navbar.style.top = '0'; 
        } else {
            navbar.style.top = `-${navbarHeight}px`; 
        }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});