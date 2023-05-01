
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

let chapterone = gsap.timeline();
chapterone.fromTo(".spriteone-bunny",{
    x:"-80vw"
},{
    x:"0vw", duration: 4,
})

let chaptertwo = gsap.timeline();
chaptertwo.fromTo(".pencil-one",{
    x:"80vw"
},{
    x:"-80vw", duration: 2, repeat: -1,
})
.fromTo(".paper-ball", {
    x:"80vw",
},{
    x:"-80vw", rotate: -360, duration: 8, repeat: -1,   
});




let chapterthree = gsap.timeline();

chapterthree.fromTo(".penholder",{ 
    x:"80vw"
},{
    x:"0vh", duration: 2, ease: "none"
})


chapterthree.to(".penholder",{ y:"10vh",rotate: 80, duration: 1})


let chapterfourHAND = gsap.timeline();

chapterfourHAND.fromTo(".le-hand", {
   x:"-80vw" 
},{
    x:"0vw", duration: 8
})

let chapterfourBOOK = gsap.timeline();

chapterfourBOOK.fromTo(".book", {
    x:"80wv"
},{
    x:"0vw", duration: 5
})

