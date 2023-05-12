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

let chapterone = gsap.timeline();
chapterone.fromTo(".spriteone-bunny", {
    x: "-80vw"
}, {
    x: "0vw",
    duration: 4,
})

let chaptertwo = gsap.timeline();

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
        duration: 8,
        repeat: -1,
    });




let chapterthree = gsap.timeline({
    scrollTrigger: {
        markers: true,
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


let chapterfourHAND = gsap.timeline();

chapterfourHAND.fromTo(".le-hand", {
    x: "-80vw"
}, {
    x: "0vw",
    duration: 8
})

let chapterfourBOOK = gsap.timeline({
    scrollTrigger: {
        markers: true,
        start: "top top",
        toggleActions: "restart complete reverse reset",
        trigger: "#four",
        scrub: true,
        pin: true,
    }
});

chapterfourBOOK.fromTo(".book", {
    x: "80wv"
}, {
    x: "0vw",
    duration: 5
})

let chapterfiveBUNNY = gsap.timeline({
    scrollTrigger: {
        markers: true,
        start: "top top",
        toggleActions: "restart complete reverse reset",
        trigger: "#five",
        scrub: true,
        pin: true,
    }
});

chapterfiveBUNNY.fromTo(".spritefive-bunny", {
        x: "-800vh"
    }, {
        x: "-25vh",
        ease: "power1.out",
        duration: 3,
    })
    .to(".spritefive-bunny", {
        rotate: -10,
        duration: 0.25
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
})


/*
let chapterfivePLANE = gsap.timeline();

chapterfivePLANE.fromTo(".paper-plane", {
    x: "0vh",
    y: "0vh",
    scale: 1
}, {
    x: "23vh",
    y: "-38vh",
    scale: 0.10,
    rotate: -15,
    duration: 2
})*/

var delayyPLANE = chapterfivePLANE.delay()

chapterfivePLANE.delay(4)

let chaptersixPLANE = gsap.timeline();

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
})

chaptersixPLANE.fromTo(".paper-plane-two", {
    x: "100%",
    y: "-30vh",
    scaleX: -0.1,
    scale: 0.10,
}, {
    x: "0%",
    y: "-52vh",
    duration: 5
})


let chaptersixBUNNY = gsap.timeline();

chaptersixBUNNY.fromTo(".spritesix-bunny", {
    x: "-800%",
    y: "600"
}, {
    x: "0%",
    y: "0",
    duration: 2
})