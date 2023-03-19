const blue = document.querySelector("#blue")
const overlay1 = document.querySelector("#overlay1")
flag = 0;
blue.addEventListener("click", function(){
    if(flag === 0){
    overlay1.style.display = "initial";
    flag = 1
    }
    else{
        overlay1.style.display = "none";
        flag = 0
    }
})
const green = document.querySelector("#green")
const overlay2 = document.querySelector("#overlay2")
flag = 0;
green.addEventListener("click", function(){
    if(flag === 0){
    overlay2.style.display = "initial";
    flag = 1
    }
    else{
        overlay2.style.display = "none";
        flag = 0
    }
})
const red = document.querySelector("#red")
const overlay3 = document.querySelector("#overlay3")
flag = 0;
red.addEventListener("click", function(){
    if(flag === 0){
    overlay3.style.display = "initial";
    flag = 1
    }
    else{
        overlay3.style.display = "none";
        flag = 0
    }
})
const yellow = document.querySelector("#yellow")
const overlay4 = document.querySelector("#overlay4")
flag = 0;
yellow.addEventListener("click", function(){
    if(flag === 0){
    overlay4.style.display = "initial";
    flag = 1             
    }
    else{
        overlay4.style.display = "none";
        flag = 0
    }
})

gsap.from("#main1>#body>p",{
    y: -100,
    duration: 1,
    delay: 1,
    opacity: 0
})
gsap.from("#main1>#body>h1",{
    y: -100,
    duration: 1,
    delay: 1,
    opacity: 0
})
gsap.from("#main1>#body>button",{
    scale: 0,
    duration: 1,
    delay: 2,
    opacity: 0
})
gsap.from("#main2>h1",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#main2>h1",
        scroller : "body",
        markers: false,
        start: "top 40%"
    }
})
gsap.from("#main2>#flexi>#flexi1",{
    opacity: 0,
    scale: 0,
    duration: 1,
    delay: 0.1,
    scrollTrigger: {
        trigger: "#main2>h1",
        scroller : "body",
        markers: false,
        start: "top 40%"
    }
})
gsap.from("#main2>#flexi>#flexi2",{
    opacity: 0,
    scale: 0,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
        trigger: "#main2>h1",
        scroller : "body",
        markers: false,
        start: "top 40%"
    }
})
gsap.from("#main2>#flexi>#flexi3",{
    opacity: 0,
    scale: 0,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
        trigger: "#main2>h1",
        scroller : "body",
        markers: false,
        start: "top 40%"
    }
})
gsap.from("#main2>#flexi>#flexi4",{
    opacity: 0,
    scale: 0,
    duration: 1,
    delay: 0.4,
    scrollTrigger: {
        trigger: "#main2>h1",
        scroller : "body",
        markers: false,
        start: "top 40%"
    }
})