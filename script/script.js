var tl = gsap.timeline({ repeat: -1 });
tl.to(".scroll-icon", { opacity: 0, opacity: 1, duration: 0.5 });
tl.to(".scroll-icon", { y: 50, duration: 0.5 });
tl.to(".scroll-icon", { opacity: 0, duration: 0.5 });
tl.repeat();

let delayscroll;
let body = document.querySelector("body")

window.addEventListener("scroll",   (delayscroll) => {

    clearTimeout(delayscroll);

    body.classList.add("is-scrolling");

    delayscroll  =  setTimeout(function() {

           body.classList.remove("is-scrolling");

          },  1000)

});


/*-------chapitre--1---*/

let chapterone = gsap.timeline({
    scrollTrigger: {
        start: "top top",
        toggleActions: "restart complete reverse reset",
        trigger: "#one",
        scrub: true,
        pin: true,
    }
});
chapterone.fromTo(".spriteone-bunny", {
    x: "-80vw"
}, {
    x: "0vw",
    duration: 4,
})

/*-------chapitre--2---*/

let chaptertwo = gsap.timeline({
    scrollTrigger: {
        start: "top top",
        end: "+=3000px",
        toggleActions: "restart complete reverse reset",
        trigger: "#two",
        pin: true,
    }
});

chaptertwo.fromTo(".pencil-one", {
        x: "160vw"
    }, {
        x: "-120vw",
        duration: 2,
        repeat: -1,
    })
    .fromTo(".paper-ball", {
        x: "90vw",
    }, {
        x: "-90vw",
        rotate: -360,
        repeat: -1,
        duration: 3,

    }, "<");


/*-------chapitre--3---*/

let chapterthree = gsap.timeline({
    scrollTrigger: {
        start: "top top",
        toggleActions: "restart complete reverse reset",
        trigger: "#three",
        scrub: true,
        pin: true,
    }
});

chapterthree.fromTo(".penholder", {
    x: "80vw"
}, {
    x: "0vh",
    duration: 2,
    ease: "none"
})


chapterthree.to(".penholder", { y: "10vh", rotate: 80, duration: 1 })

/*-------chapitre--4---*/

let chapterfourHAND = gsap.timeline();


let chapterfourBOOK = gsap.timeline({
    scrollTrigger: {
        start: "top top",
        end: "+=2000px",
        toggleActions: "restart complete reverse reset",
        trigger: "#four",
        scrub: true,
        pin: true,
    }
}).fromTo(".le-hand", {
    x: "-80vw"
}, {
    x: "0vw",
    duration: 8
}).fromTo(".book", {
    x: "80vw"
}, {
    x: "0vw",
    duration: 5
}, "<");


/*-------chapitre--5---*/

let chapterfiveBUNNY = gsap.timeline({
    scrollTrigger: {
        start: "top top",
        end: "+=1000px",
        toggleActions: "restart complete reverse reset",
        trigger: "#five",
        pin: true,
        scrub: true,
    }
});

chapterfiveBUNNY.fromTo(".spritefive-bunny", {
        x: "-800vh"
    }, {
        x: "-25vh",
        ease: "power1.out",
        duration: 2,
    })
    .to("#five", {
        backgroundPosition: "50% 100%",
        ease: "none",
    })



chapterfiveBUNNY.fromTo(".spritefive-bunny", {
    x: "-25vh",
    scale: 1
}, {
    x: "20vh",
    y: "-24vh",
    scale: 0.07,
    rotate: -15,
    delay: 0.75,
    duration: 2
}).fromTo(".paper-plane", {
    x: "0vh",
    y: "0vh",
    scale: 1
}, {
    x: "23vh",
    y: "-38vh",
    scale: 0.10,
    rotate: -15,
    duration: 2
}, "<")

/*-------chapitre--6---*/

let chaptersixPLANE = gsap.timeline({
    scrollTrigger: {
        start: "top top",
        end: "+=2000px",
        toggleActions: "restart complete reverse reset",
        trigger: "#six",
        scrub: true,
        pin: true,
    }
});

chaptersixPLANE.fromTo(".paper-plane-two", {
    x: "-100%",
    y: "400",
    scaleX: 1,
    scale: 1,
}, {
    x: "100%",
    y: "-300",
    scaleX: 1,
    scale: 1,
    duration: 5
}).fromTo(".spritesix-bunny", {
    x: "-800%",
    y: "600"
}, {
    x: "0%",
    y: "0",
    duration: 2
}, "<").fromTo(".paper-plane-two", {
    x: "100%",
    y: "-30vh",
    scaleX: -0.1,
    scale: 0.10,
}, {
    x: "0%",
    y: "-52vh",
    scaleX: -0.1,
    scale: 0.10,
    duration: 5
})