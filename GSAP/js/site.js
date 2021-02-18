gsap.to("#headingText", { duration: 1, x: 100 });
gsap.from("#logo", { duration: 3, x: 300, opacity: 0, scale: 0.5, ease: "elastic", onComplete: tweenComplete });

function moveBoxes() {
    gsap.to("h2.title", { duration: 1, opacity: 0.3 });
    gsap.to(".move", { duration: 3, x: 350 });
    gsap.to("#green", { duration: 3, rotation: 360, scale: 0.5 });
    gsap.to("#grey", { duration: 3, rotation: 360, scale: 0.75 });
    gsap.to("#orange", { duration: 3, rotation: 360, scale: 1 });
}

function multi2D3D() {
    CSSPlugin.defaultTransformPerspective = 400;

    gsap.to("#green2D", { duration: 3, rotationX: 360 });
    gsap.to("#orange2D", { duration: 3, rotationY: 360 });
    gsap.to("#grey2D", { duration: 3, x: 100, y: 100, scale: 2, skewX: 45, rotation: 180 });
}

function staggers() {
    gsap.from(".staggersBox", {
        duration: 2,
        scale: 0.5,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: "elastic",
        force3D: true
    });

    document.querySelectorAll(".staggersBox").forEach(function (box) {
        box.addEventListener("click", function () {
            gsap.to(".staggersBox", {
                duration: 0.5,
                opacity: 0,
                y: -100,
                stagger: 0.1,
                ease: "back.in"
            });
        });
    });
}

function tweenComplete() {
    console.log("the tween is complete");
}

var tween = gsap.to(".userControls", {
    duration: 4,
    x: 750,
    rotation: 360,
    ease: "none",
    paused: true
});

// click handlers for controlling the tween instance...
document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();

var tl = gsap.timeline({ onUpdate: updateSlider }),
    circle = document.getElementById("circle");

tl.to(circle, { duration: 1, morphSVG: "#hippo" }, "+=1")
    .to(circle, { duration: 1, morphSVG: "#star" }, "+=1")
    .to(circle, { duration: 1, morphSVG: "#elephant" }, "+=1")
    .to(circle, { duration: 1, morphSVG: circle }, "+=1");

/* controls */
const slider = document.querySelector('#slider');

rangeSlider.create(slider, {
    min: 0,
    max: 1,
    step: .001,
    onSlide: function (value, percent, position) {
        tl.progress(percent).pause();
    },
    onSlideEnd: function (position, value) {
        tl.play();
    }
});

function updateSlider() {
    slider.rangeSlider.update({
        value: tl.progress()
    }, false);
}

tl.play();