
var tl = gsap.timeline({repeat: -1});
tl.to(".scroll-icon", {opacity: 0, opacity: 1, duration: 0.5});
tl.to(".scroll-icon", { y: 50, duration: 0.5});
tl.to(".scroll-icon", {opacity: 0, duration: 0.5});
tl.repeat();

let delayscroll;
let body = document.querySelector("body")

window.addEventListener("scroll", (delayscroll)=>{

    clearTimeout(delayscroll);
  
    body.classList.add("is-scrolling");
  
    delayscroll = setTimeout(function(){
  
      body.classList.remove("is-scrolling");
  
    }, 1000)
  
  });